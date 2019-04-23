function  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
let a=getRandomArbitrary(4000,5000);
module.exports=getRandomArbitrary;