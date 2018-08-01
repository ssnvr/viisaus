//tein tämän tiedoston koska en osaa hahmottaa kun kaikki on app.js


export function getMessages(callback) {
    fetch( "api/posts")
        .then(function (response) {
            if (!response.ok) {
                const errmsg = {
                    status: response.status,
                    statusText: response.statusText,
                    msg: "Listanhaku"
                };
                throw errmsg;
            }
            return response.json();
        })
        .then(function (list) {
            callback(list);
        });
}

export function addNewMessage(msg, callback){
    msg.user_id=1;
    fetch( "api/posts/",{
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(msg)
   })
   .then(function (response){
     callback(response.status);
   });
 }
 //Tässä samat käyttäjille
 export function getUsers(callback) {
    fetch( "api/users")
        .then(function (response) {
            if (!response.ok) {
                const errmsg = {
                    status: response.status,
                    statusText: response.statusText,
                    msg: "Käyttäjienhaku"
                };
                throw errmsg;
            }
            return response.json();
        })
        .then(function (user) {
            callback(user);
        });
}

export function addNewUser(msg, callback){
     fetch( "api/users/",{
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(msg)
   })
   .then(function (response){
     callback(response.status);
   });
 }
 export function getUser(name, password, callback) {
    fetch( "api/users/" + name + "/" + password)
        .then(function (response) {
          console.log(response)
            if (!response.ok) {
                const errmsg = {
                    status: response.status,
                    statusText: response.statusText,
                    msg: "Käyttäjienhaku"
                };
                throw errmsg;
            }
            return response.json();
        })
        .then(function (user) {
            callback(user);
        });
}
