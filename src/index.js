module.exports = function reverse (n) {
  
    let rever = 0;
    
    if (n < 0) {
        n = Math.abs(n);
    }
    

    while(n > 0) {
      rever = rever * 10 + n % 10;
      n = Math.floor(n / 10);
    }
     return rever;
  


}

