const name = "Krunal"
const repoCount =  5

//console.log(name + repoCount + " value");  (old method)

//new method for using string
console.log(`Hello My name is ${name} and My repoCount is ${repoCount}`);

const gameName = new String('dead-pool-7')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0, 6)
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);

const newStringOne = "      krunal     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "htpps://krunal.com/krunal%20mojidra"
console.log(url.replace('%20', '--'));

console.log(url.includes('sundar'));  //for search  into url

console.log(gameName.split('-'));
