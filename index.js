//create user input string
const userInput=prompt (`Enter numbers seperate with commas`,`20,50,89,3,21,44`);

//convert to array
const stringArray=userInput.split(`,`);

//create empty array that will be filled with number data later
const numberArray=[];

//loop that takes each item in the stringarray out, turns to numbers and push to the empty numberarray
for( let index=0; index < stringArray.length; index = index+1){
  numberArray.push(Number(stringArray[index]));
}

const getLength=(array)=>{
  console.log(`the length of your array is ${array.length}`)
}

//sum function
let sum=0
const getSum=(array)=>{
  for( let index=0; index < array.length; index = index+1){
    sum = sum + array[index]
  }
  console.log(`the sum of your array is ${sum}`)
}

//mean function
const getMean=(array)=>{
  const mean=sum/array.length
  console.log(`the mean of your array is ${mean}`)
}

//min function
const getMin=(array)=>{
  let min=array[0]
  for( let index=1; index < array.length; index=index+1){
    if(array[index]<min)
      min=array[index]
  }
  console.log(`the minimum value of your array is ${min}`)
}

//max function
const getMax=(array)=>{
  let max=array[0]
  for(index=1; index < array.length; index=index+1){
    if(array[index]>max)
      max=array[index]
  }
  console.log(`the maximum value of your array is ${max}`)
}

//range function
const getRange=(array)=>{
  let max=array[0]
  let min=array[0]
  for(index=1; index < array.length; index=index+1){
    if( array[index] < min){
         min=array[index]
    } else if( array[index] > max){
      max=array[index]
    }
  }
  const arrayRange=(max-min)
  console.log(`the range of your array is ${arrayRange}`)
}

//even function
const getEven=(array)=>{
  const evenNumber=[]
  for( let index=0; index<array.length; index=index+1){
    if(array[index]%2 === 0){
    evenNumber.push(array[index])
   }
  }
  console.log(`your array contains the following even numbers ${evenNumber}`)
}

//odd function
const getOdd=(array)=>{
  const oddNumber=[]
  for(index=0; index<array.length; index=index+1){
    if(array[index]%2 !== 0){
      oddNumber.push(array[index])
    }
  }
  console.log(`your array contains the following odd numbers ${oddNumber}`)
}

//invoke
console.log(`your numbers are ${numberArray}`)
getLength(numberArray)
getSum(numberArray)
getMean(numberArray)
getMin(numberArray)
getMax(numberArray)
getRange(numberArray)
getEven(numberArray)
getOdd(numberArray)



