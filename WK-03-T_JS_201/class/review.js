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
// Objects in Arrays

let arr1 = [9, 2, 3, 4];  // Best

let arr2 = [8, "Hello", true, [], {} ]; // Meh

let user = [
    {
        firstName: "Heggy",
        lastName: "C",
        email: "heggy@gmail.com",
        daysOld: 1000
    },
    {
        firstName: "Robby",
        lastName: "X",              // This is missing days old - BAD!
        email: "robby@gmail.com",
    },
    {
        firstName: "Avery",
        lastName: "X",              // This is missing days old - BAD!
        email: "avery@gmail.com",
    }
];

for(let i = 0; i < user.length; i++ ) {
    console.log("You are " + user[i].daysOld/365 + "years old");
    // Fake send an email to my users
    console.log("Hey buy some stuff " + user[i].firstName + " " + user[i].lastName + ".");
}

user.push({
        firstName: "Teila",
        lastName: "G",              // This is missing days old - BAD!
        email: "Teila@gmail.com"
})

console.log(user);
