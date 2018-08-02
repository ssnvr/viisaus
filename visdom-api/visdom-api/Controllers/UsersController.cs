using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Web.Http;
using System.Web.Http.Description;
using visdom_api.Models;

namespace visdom_api.Controllers
{
    public class UsersController : ApiController
    {
        public static byte[] Hash(string value, byte[] salt)
        {
            return Hash(Encoding.UTF8.GetBytes(value), salt);
        }

        public static byte[] Hash(byte[] value, byte[] salt)
        {
            byte[] saltedValue = value.Concat(salt).ToArray();

            return new SHA256Managed().ComputeHash(saltedValue);
        }

        private visdomdbEntities db = new visdomdbEntities();

        // GET: api/Users
        public IQueryable<User> GetUsers()
        {
            return db.Users;
        }

        //// GET: api/Users/5
        //[ResponseType(typeof(User))]
        //public IHttpActionResult GetUser(int id)
        //{
        //    User user = db.Users.Find(id);
        //    if (user == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(user);
        //}

        // GET: api/Users/:name/:password
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUser(string name, string password)
        {
            User user = db.Users.Where(u => u.Name == name).FirstOrDefault();
            if (user != null)
            {
                byte[] passwordHash = Hash(password, Convert.FromBase64String(user.PasswordSalt));
                var pol = Encoding.UTF8.GetBytes(user.Password);
                bool correct = Convert.FromBase64String(user.Password).SequenceEqual(passwordHash);
                if (correct)
                {
                    return Ok(user);
                }
            }

            return NotFound();
        }

        // PUT: api/Users/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser(int id, User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.Id)
            {
                return BadRequest();
            }

            db.Entry(user).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Users
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(User user)
        {
            var q = from h in db.Users
                    where h.Name == user.Name
                    select h;

            if (q == null)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                byte[] salt = new byte[16];

                user.Password = Convert.ToBase64String(Hash(user.Password, salt));
                user.PasswordSalt = Convert.ToBase64String(salt);

                db.Users.Add(user);
                db.SaveChanges();

                return CreatedAtRoute("DefaultApi", new { id = user.Id }, user);
            }
            else return Unauthorized();
        }

        // DELETE: api/Users/5
        [ResponseType(typeof(User))]
        public IHttpActionResult DeleteUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            db.Users.Remove(user);
            db.SaveChanges();

            return Ok(user);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int id)
        {
            return db.Users.Count(e => e.Id == id) > 0;
        }
    }
}