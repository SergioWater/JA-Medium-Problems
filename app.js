function falsyOrTruthy(elem1,elem2){
return !elem1 ? elem1 : elem2
}
console.log(falsyOrTruthy(10,'Dog'))


function arrLength(array){
    return array[array.length-1]
}
console.log(arrLength([1,2,3,4,5]))


total = 0

function arrSum(arr){
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}
console.log(arrSum([12,9285,9]))

function progressiveSum(num){
    let sum = 0
    for(let i = 1; i <= num; i++){
        sum = sum + i
    }
    return sum
}
console.log(progressiveSum(3))

function calcTime(sec){
    let minutes = Math.floor(sec/60)
    let seconds = sec % 60
    if(minutes.toString().length === 1){
         minutes = '0' + minutes
    }
    return minutes + ':' + seconds
}
console.log(calcTime(70))

function getMax(num){
    let max = -1000000
    for(let i = 0; i < num.length; i++){
        if(num[i] > max)
        max = num[i]
    }
    return max
    
}
console.log(getMax([-100,-200,-300, 7]))

function reverseString(word){
    // let reversedString = ''
    // for(let i = 0; i < word.length; i++){
    //     reversedString = word[i] + reversedString
    // }
    // return reversedString
    return word.split('').reverse().join('')
}
console.log(reverseString('abasdcc'))

function 
