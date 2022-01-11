var database = { users: []};

for (var i = 1; i<= 300; i++) {
  database.users.push({
    id: i,
    firstname: users[i].user.firstname(),
    lastname: users[i].user.lastname(),
    email: user[i].internet.email(),
    budget: users[i].datatype.number(),
    phone: users[i].phone.phoneNumber(),
  });
}

console.log(JSON.stringify(database));