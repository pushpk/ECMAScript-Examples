// Text Literals

let word1 = 'Hello';
let word2 = "World";

 const fullname = `${word1} ${word2}`;

 console.log(fullname);

 //Destructuring Array

 let [a,b,c,d,e,f] = ['A','B','C','D','F'];

 console.log(a);

 //spread operator

 let aa = ['A','B','C','D','F'];
 let bb = [...aa]

 bb.push('GH');

 console.log(bb);