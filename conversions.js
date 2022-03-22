exports.romanToDec = function(num) {
    
    var romanDecimalMap = {
      M: 1000, 
      D: 500, 
      C: 100, 
      L: 50, 
      X: 10, 
      V: 5, 
      I: 1};
    
    var result = 0
    var prev_value = 0
    for (var i = 0; i < num.length; i++) {
        var value = romanDecimalMap[num[i]]
        result += value
        if (value > prev_value){
            result -= 2 * prev_value
        }
        prev_value = value
    }
    return result


  //   var i = num.length - 1;
  //   var result = romanDecimalMap[num[i]];

  //   while (i > 0) {
  //     var curr = romanDecimalMap[num[i]];
  //     var prev = romanDecimalMap[num[i - 1]];

  //     if (prev >= curr) {
  //       result += prev;
  //     } else {
  //       result -= prev;
  //     }

  //     i--;
  //   }

  // return result;
};


 exports.decToRoman = function(num) {

  var fullRomanDecimalMap = {
    M: 1000, 
    CM: 900, 
    D: 500, 
    CD: 400, 
    C: 100, 
    XC: 90, 
    L: 50, 
    XL: 40, 
    X: 10, 
    IX: 9, 
    V: 5, 
    IV: 4, 
    I: 1};
    

  var result = '';
    
    for(var key in fullRomanDecimalMap) {
        while(num >= fullRomanDecimalMap[key]){
            result += key;
            num -= fullRomanDecimalMap[key];
        }
    }
    
    return result;
};