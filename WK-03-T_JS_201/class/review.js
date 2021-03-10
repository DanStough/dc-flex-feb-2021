let user = [
  {
    firstName: "Heggy",
    lastName: "C",
    email: "heggy@gmail.com",
    daysOld: 1000,
  }, 
  {
    firstName: "Robby",
    lastName: "X",
    email: "robby@gmail.com",
  },
  {
    firstName: "Avery",
    lastName: "X",
    email: "avery@gmail.com"
  }
];

for(let i = 0; i < user.length; i++ ) {
  console.log(user[i].firstName + " " + user[i].lastName);
}