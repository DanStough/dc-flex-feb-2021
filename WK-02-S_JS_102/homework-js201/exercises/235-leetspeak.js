// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// HINT: What is the best data structure to represent the substitutions?
//
// Examples:
// leetspeak('Leet') --> "l337"
// leetspeak('ORANGE') --> "0r4n63"
function leetspeak(word){
    let convert = {A:'4',E:'3',G:'6',I:'1',O:'0',S:'5',T:'7'};
    let leet = '';
    let tempLow = word.toLowerCase();
    let tempUp = word.toUpperCase();
    for(let i = 0; i < word.length; i++){
        if(tempLow.charAt(i) == 'a' || tempUp.charAt(i) == 'A'){
            leet += convert.A;
        }
        else if(tempLow.charAt(i) == 'e' || tempUp.charAt(i) == 'E'){
            leet += convert.E;
        }
        else if(tempLow.charAt(i) == 'g' || tempUp.charAt(i) == 'G'){
            leet += convert.G;
        }
        else if(tempLow.charAt(i) == 'i' || tempUp.charAt(i) == 'I'){
            leet += convert.I;
        }
        else if(tempLow.charAt(i) == 'o' || tempUp.charAt(i) == 'O'){
            leet += convert.O;
        }
        else if(tempLow.charAt(i) == 's' || tempUp.charAt(i) == 'S'){
            leet += convert.S;
        }
        else if(tempLow.charAt(i) == 't' || tempUp.charAt(i) == 'T'){
            leet += convert.T;
        }
        else{
            leet += tempLow.charAt(i);
        }
    }
    return leet;
}