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

  // fetch using async and await to get a local img
 
  catchPik()
    .then(response => {
      console.log('Success!');
    })
    .catch(error => {
      console.log('error!');
      console.error(error);
    })
 
  async function catchPik() {
    const response = await fetch('draw.svg');
    const blob = await response.blob();
    document.getElementById('pik').src= URL.createObjectURL(blob)


  }


  //without async and await
  // console.log('about to fetch a pik');
  // fetch('pik.svg')
  //   .then(response => {
  //     console.log(response);
  //     return response.blob();
  //   })
  //   .then(blob => {
  //     document.getElementById('pik').src= URL.createObjectURL(blob);
  //   })
  //   .catch(error => {
  //     console.log('error');
  //     console.error(error);
  //   })

  let speak = document.querySelector('#speak');

  fetchText()
  .then(response => {
    console.log('Success!');
  })
  .catch(error => {
    console.log('error!');
    console.error(error);
  })

  async function fetchText() {
    let response = await fetch('voiceBox.txt');
    let data = await response.text();
    speak.innerHTML = data;
    console.log(data);
  }


