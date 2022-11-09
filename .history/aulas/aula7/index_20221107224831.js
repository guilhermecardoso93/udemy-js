//try catch
try {
  console.log(Oi);
} catch (e) {
  console.log(e);
}

function soma(x,y){
  try {
    if(typeof x !== 'number'|| typeof y !== 'number'){
      throw new Error('não são numero')
    } 
  } catch (e) {
    return console.log('não são numeros')
  }
}