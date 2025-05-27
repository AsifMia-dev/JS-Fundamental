function generateRandom(min,max){

   let value = Math.round(Math.random()*max);
   if(value < min){
    value += min;

   }
   return value;


}
for(let i = 0 ; i < 5; i++){

    console.log(generateRandom(5,10));
}