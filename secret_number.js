'use strict';

module.exports =  function secretNumberGenerator() {

  var num = 0;

  var setRandNum = function() {

     if(num === 0){
        num = Math.floor(Math.random()*1000001);
        return num;
     }
     else {
         return num;
     }


  };

  return setRandNum;


};
