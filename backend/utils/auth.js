const users = [
    { id: 1, username: 'admin', password: 'adminPass', role: 'admin' },
    { id: 2, username: 'user1', password: 'userPass', role: 'enduser' }
  ];
  
  function validateUserCredentials(username, password) {
    return users.find(
      user => user.username === username && user.password === password
    );
  }
  
  module.exports = {
    validateUserCredentials,
    users
  };
  