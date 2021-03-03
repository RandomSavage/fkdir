// fetch('https://reqres.in/api/users', {
//   //options such as post request instead of git
// })

// console.log(fetch('https://reqres.in/api/users'));

// fetch('https://reqres.in/api/users')
// .then(res => console.log(res))

// because its a promise yo can use async await and .then
// fetch('https://reqres.in/api/users')
//   .then(res => res.json())
//   .then(data => console.log(data))

// you get back a 404 but fetch never fails so will not get an error so youll need to change like next version
  // fetch('https://reqres.in/api/users/23')
  // .then(res => res.json())
  // .then(data => console.log(data)) //404 

  // fetch('https://reqres.in/api/users')
  // .then(res => {
  //   // res.json()
  //   if (res.ok) {
  //     console.log("success") 
  //   } else {
  //     console.log("Not Successful")
  //   }
  // })
  // .then(data => console.log(data))
  // // .then(data => console.log('hello'))
  // .catch(error => console.log('ERROR')) 

  fetch('https://reqres.in/api/users')
  .then(res => res.json())
  // .then(data => console.log(data))
  .then(data => {
    let voice = data;
    console.log(voice)
  })
  // .then(data => console.log('hello'))
  .catch(error => console.log('ERROR')) 

 

// Using the post method to send data to the api
  // fetch('https://reqres.in/api/users', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type' : 'application/json'
  //   },
  //   body: JSON.stringify({
  //     name: 'User 1'
  //   })
  // })
  // .then(res => {
  //   return res.json()
  // })
  // .then(data => console.log(data))
  // .catch(error => console.log('ERROR'))


