
function add(a,b){
  return a+b;
}

function substract(a,b){
  return a-b;
}

function divided(a,b){
  if(b===0){
    throw new Error("Divided by zero is not allowed");
  }
  return a/b;
}

module.exports={
  add,
  substract,
  divided,
};