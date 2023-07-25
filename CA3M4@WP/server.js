
const newUser = {
  name: 'Shiyak Mohamed',
  email: 'shiyakmohamed@gmail.com',
  password: 'password123'
};

// Send a POST request to the server
fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newUser)
})
  .then(response => response.json())
  .then(data => {
    console.log('New user created:', data);
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });