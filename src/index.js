module.exports = function getZerosCount(number, base) {
    var y =1000000000000000000;
    for(var i=2;i<=base;i++){
      if(base%i==0){
        var c1 = 0;
        while(base%i==0){
          c1++;
          base=Math.floor(base/i);
        }
        var c2 = 0;
        var t = number;
        while(t/i>0){
          c2+=Math.floor(t/i);
          t=Math.floor(t/i);
        }
        y = Math.min(y, Math.floor(c2/c1));
      }
    }
    console.log(y);
    return y;
}
