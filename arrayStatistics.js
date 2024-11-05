/*You are given an array of . Your task is to implement a function called arrayStats that returns an object containing various statistics about the array.

The returned object should have the following properties:
sum: The sum of all  in the array.
average: The average of all  in the array (rounded to two decimal places).
min: The minimum value in the array.
max: The maximum value in the array.

Example:
arrayStats([1, 2, 3, 4, 5]); // should return { sum: 15, average: 3.00, min: 1, max: 5 }
*/
//Code requirements
/*
-code should have a function arrayStats
-function should return an object of this properties: sum, average, min, max.
*/
var arrayStats = function(numbers){
var numberObj = {
  sum: function(){
    var sum=0;
    for(var i = 0; i<numbers.length; i++){
       sum+= numbers[i];
    } 
    return sum;
    },
  average: function(){
  var average = 0;
  var total = this.sum();
  average= (this.sum()/numbers.length.toFixed(2));
  return average;
  },
   min: function(){
     var min=numbers[0];
     for(var i=0;i<numbers.length;i++){
     if(numbers[i]<min){
     min=numbers[i];
     }
     }
     return min;
     },
  max: function(){
    var max=numbers[0];
    for(var i=0;i<numbers.length;i++){
     if(numbers[i]>max){
     max=numbers[i];
    }
    }
    return max
  }
};
return {
  sum: numberObj.sum(),
  average: parseFloat(numberObj.average()),
  min: numberObj.min(),
  max: numberObj.max()
}

}
