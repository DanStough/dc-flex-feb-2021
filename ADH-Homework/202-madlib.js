// Write a function 'madlib', which is given a name and a subject.
// It should return a new string: (name)'s favorite subject in school is (subject).
// Example: madlib('Anushka', 'art') should return "Anushka's favorite subject in school is art."
function madlib(name, subject) {
    return `${name}'s favorite subject in school is ${subject}!`;
}
console.log(madlib("Latasha", "lunch"))