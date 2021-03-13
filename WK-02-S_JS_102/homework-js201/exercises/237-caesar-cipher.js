// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'
function cipher(str, shift){
    const legend = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let temp = str.split('');
    let enc = [];
    let key = [];
    for(let i =shift; i<legend.length; i++){
        key.push(legend[i]);
    }
    for(let i= 0; i< shift; i++){
        key.push(legend[i]);
    }
    // console.log(temp);
    for(let i = 0; i< temp.length; i++){
        for(let j =0; j<legend.length;j++){
            if(temp[i] === legend[j]){
                enc.push(key[j]);
            }
            if(temp[i] === null){
                enc.push(' ');
            }
        }
    }
    console.log(key);
    console.log(temp.join(''));
    console.log(enc.join(''));

}
cipher('hello world',2);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'
function decipher(str, shift){

}