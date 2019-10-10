const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution herelet str='';
let answer='';

for(let a=0; a<expr.length;a+=10){
for (let i = a; i < (a+10); i++) {
   str+=expr[i];
  
     }
      
           switch (str) {
               case '0000001011':answer+='a'
               break;
               case '0011101010':answer+='b';
               break;
               case '0011101110':answer+='c';
               break;

               case '0000111010':answer+='d';
               break;
               case '0000000010':answer+='e';       
               break;
               case '0010101110':answer+='f';       
               break;
               case '0000111110':answer+='g';       
               break;
               case '0010101010':answer+='h';       
               break;
               case '0000001010':answer+='i';       
               break;
               case '0010111111':answer+='j';       
               break;  
               case '0000111011':answer+='k';       
               break;  
               case '0010111010':answer+='l';       
               break;
               case '0000001111':answer+='m';       
               break;  
               case '0000001110':answer+='n';
              break;
              case '0000111111':answer+='o';
              break;
              case '0010111110':answer+='p';
              break;
              case '0011111011':answer+='q';
              break;
              case '0000101110':answer+='r';
              break;
              case '0000101010':answer+='s';
              break;
              case '0000000011':answer+='t';
              break;
              case '0000101011':answer+='u';
              break;
              case '0010101011':answer+='v';
              break;
              case '0000101111':answer+='w';
              break;
              case '0011101011':answer+='x';
              break;

              case '0011101111':answer+= 'y';
              break;
              case '0011111010':answer+='z';
              break;
              case '**********':answer+=' ';
              break;
              case '1011111111':answer+='1';
              break;
              case '1010111111':answer+='2';
              break;
              case '1010101111':answer+='3';
              break;
              case '1010101011':answer+='4';
              break;
              case '1010101010':answer+='5';
              break;
              case '1110101010':answer+='6';
              break;
              case '1111101010':answer+='7';
              break;
              case '1111111010':answer+='8';
              break;
              case '1111111110':answer+='9';
              break; 
              case '1111111111':answer+='0';
              break;

           }
       str=''
       
           
 }        

return answer
}

module.exports = {
    decode
}
