// Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out.
// import dns module
const dns = require('dns');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Domain Name: ", url => {
  readline.close();
  dns.lookup(url, (error, address, family) => {
    if(error) {
      console.log(error.message);
      return;
    }
    console.log("IP Address: ", address);
  });
});