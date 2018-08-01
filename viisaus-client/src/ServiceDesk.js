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
     fetch( "api/posts/",{
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(msg)
   })
   .then(function (response){
     callback(response.status);
   });
 }