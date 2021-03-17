// Stop gninnips my sdrow
function spinWords(string){
    let array = string.split(" ");
    let i=0, word;
    while(i<array.length){
        if(array[i].length >= 5){
            let chars  = array[i].split("");
            word = "";
            let j = chars.length-1;
            do{
                word = word+chars[j];
                j--;
            }while(j>=0);
            array[i]=word;
        }
        i++;
    }
    string = array.join(" ");
    return string;
}

// ES6
function spinWords(string){
    let array = string.split(" ");
    const arrayReverse = array.map((x) => {
        if(x.length >= 5){
            let chars  = x.split("");
            let word = "";
            let j = chars.length-1;
            do{
                word = word+chars[j];
                j--;
            }while(j>=0);
            x=word;
        }  
        string = array.join(" ");
        return string;        
    });      
}
spinWords("Hey fellow warriors" );
spinWords("This is a test");
spinWords("This is another test");




// Vowel Count
function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    let i = 0, v;
    while(i<str.length){
        v = vowels.find(vowel => vowel == str[i]);
        if(v != undefined) vowelsCount++;
        i++;
    }
    
    return vowelsCount;
}
getCount("aboidjyuht");

// Even or odd
function even_or_odd(number) {
  if(number%2===0) return "Even";
  else return "Odd";
}

// Get the middle caractere
function getMiddle(s){
    if(s.length%2===0) return s[s.length/2-1]+s[s.length/2]; 
    else return s[parseInt(s.length/2)];
}
getMiddle("imiss");

// Opposite number ******************************************************************
function opposite(number) {
    let string = number.toString();
    let array = string.split("");
    let pt = array.find(char => char === ".");
    let s = "-"+string; 

    if(pt === undefined) return  parseInt(s);
    else if(pt === ".") return parseFloat(s);
    
}


function opposite(number) {
    let s = "-"+number; 
    return  parseFloat(s);
}
opposite(12525220.3325);
/************************************************************************************* */

// Mumbling
function accum(s) {
	let i = 1;
    let outPut = s[0].toUpperCase();
    while(i<s.length){
        outPut = outPut + "-" + s[i].toUpperCase();
        for (let j = 0; j < i; j++) {
            outPut = outPut + s[i].toLowerCase();            
        }
        i++;
    }
    return outPut;
}
accum("RqaEzty");

// You are a square !
var isSquare = function(n){
    
    if(Number.isInteger(Math.sqrt(n))) return true;
    else return false; 
}
isSquare(25);

// Disemvowel Trolls
function disemvowel(str) {
    var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    var array = str.split("");
    let i = 0;
    while(i<array.length){
        v = vowels.find(vowel => vowel == array[i]);
        if(v != undefined) array[i] = "";
        i++;
    }
    str = array.join("");   
    return str;
}
disemvowel( "This website is for losers LOL!" );

// Highest and Lowest ************************************************************
function highAndLow(numbers){
    let min = 1000000, max = -1000000, i = 0;
    let array = numbers.split(" ");
    while(i<array.length){
        //if(array[i]<min) min = array[i];
        if(array[i]>max){
            max = array[i];
            console.log(max);
        }
        i++;
    }
    return  `${max} ${min}`;    
}
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");

// Exes and Ohs
function XO(str) {
    let array = str.split("");
    let i=0, x=0, o=0;
    while(i<array.length){
        if(array[i] === "x" || array[i] === "X") x++;
        if(array[i] === "o" || array[i] === "O") o++;
        i++;
    }
    if(x === o) return true;
    else return false;
}
XO("xooxx") ;

// Square every digit
function squareDigits(num){
    let string = num.toString();
    let array = string.split("");
    const res = array.map(num =>  Math.pow(num,2)); 
    return parseInt(res.join(""));   
}
squareDigits(9119);

// Shortest word
function findShort(s){
    let array = s.split(" ");
    let min=100, i=0;
    while(i<array.length){

    }
}
findShort("bitcoin take over the world maybe who knows perhaps");

