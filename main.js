console.log('Hello World!');

//api is a promise

const api_link =fetch('https://reqres.in/api./users');
 console.log(api_link);

fetch("https://reqres.in/api/users") 
  .then ((response)=> {
    console.log(response);
    return response.json();
})
  .then ((value) => {
    console.log (value);
   
  })

fetch ('https://reqres.in/api/users')
 .then (message => message.json())
 .then (result => console.log(result))
 .catch (error => console.log(error));


fetch('https://reqres.in/api/users')
.then (Solution => {
  if (Solution.ok === true){
    console.log ('Order successfully placed');
  }else {
    console.log ('Order Cannot placed please try again!  ');
  }
  return Solution.json();
})
.then (data => console.log ('data'))

fetch('https://reqres.in/api/users ', {
  methods : 'post',
  headers : {
   " content-type" : "application/json"
  },
  body : JSON.stringify({
    name : 'User 1'
  })
}).then (res => res.json())
 .then (data => console.log ('data'))
 .catch (error=> console.log ('Error'))