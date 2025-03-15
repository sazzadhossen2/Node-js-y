//module.export -> export
//required -> import

const firstModule= require("./first-module");

console.log(firstModule.add(2,5));

try{
  console.log("trying to divided by zero");
  let result = firstModule.divided(7,10);
  console.log(result,"result");
}catch(error){
console.log("catch an error",error.message);
};



// //module wrapper
// (
//   function(exports,require,module,__filename,__dirname){
// //your module code goes here
//   }
// )