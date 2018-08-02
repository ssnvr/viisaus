//tein tämän tiedoston koska en osaa hahmottaa kun kaikki on app.js


export function getMessages(callback) {
  fetch( "api/posts/")
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
export function getMessagesWithEmoijtag(emoijtag ,callback) {
  let emoijonary =  [
    { emoij: "🦄", name: "unicorn" },
    { emoij: "🤣", name: "rofl" },
    { emoij: "🍻", name: "beer" },
    { emoij: "😎", name: "cool" },
    { emoij: "💩", name: "poop" },
    { emoij: "🤯", name: "mindblown" },
    { emoij: "🙌", name: "praise" },
    { emoij: "😍", name: "hearteyes" },
  ]

  let obj = emoijonary.find(o => o.emoij === emoijtag)
console.log(obj);
  fetch( "api/posts/" + obj.name)
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
export function putVote(post, callback){
  fetch( "api/posts/" + post.Id,{
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(post)
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
