var getUser = (id, callback) => {
  var user = {
    id: 123,
    name: 'Scott'
  };

  setTimeout( () => {
    callback(user);
  }, 3000);
};

getUser(123, (user) => {
  console.log(user);
});
