//  REFACTOR THE CODE TO USE TWO ARROW FUNCTIONS , TURN IT INTO A ONE-LINER








// function double(arr){
//     return arr.map(function (val){
//         return val * 2 ;
//     });
// }


const double = (arr) => arr.map((val)=> val * 2 );

//      double([1,2,3])
//      (3) [2, 4, 6]









//  REPLACE ALL THE FUNCTIONS WITH ARROW FUNCTIONS









// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//         return num ** 2 ;
//     });
//     var evens = squares.filter(function(square){
//         return square % 2 === 0 ;
//     });
//     return evens ;
// }




const numbers = [1,2,3,4,5,6,7,8,9,10];

const squareAndFindEvens = (numbers) => {
    let squares = numbers.map((num)=>{
        return num ** 2 ;
    })
    let evens = squares.filter((square)=>{
        return square % 2 === 0 ;
    })
    return evens ;
}


//      squareAndFindEvens(numbers)
//      (5) [4, 16, 36, 64, 100]

