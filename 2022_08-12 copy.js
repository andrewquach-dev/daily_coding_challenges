//https://www.codewars.com/kata/58638bd2210be9a9690001f7/train/javascript

Array.prototype.size = function() {
  return this.reduce((a,e)=>a+=1,0);
};