// variable
// let
// can be reassigned
let name = "Bali";
name ="Siddhant ";

// constants
// cannot be reassigned
// make code more stricter
const name2 = "Bhati";
const age=21 ;
// age=22; //TypeError: Assignment to constant variable.

// console.log() //print method
// it has default newline/linebreak
console.log(age); //21
console.log("age") //age

// var
// older way to define variables
// function scoped 
// please don't use it
// forget it
var name3 = "Bhaskar";

var isStudent=true;
console.log(isStudent); //true

// keyword = reserved words in lang to do somestuff
// deprecated = used here to support already existing code, but is not advised to use 

// js is line-to-line interpreated lang
// it will run till crash occour ,then stop
// but it will execute till crash error come

// comment
// ; means statement end

// DataTypes
let no=42; //number
let str="String";// String
let boo=true;// boolean
let arr3=[1,2,3];//array
console.log(arr3[3]); //undefined

// Operators
let sum = 1+5; //arithmatic
let isEqual= (1===10); //comparison operator
let isTrue = (true&&false) //logical operator

// == ,!= , Loose equality , typecasting , return true even type is different
console.log('5'==5, null==undefined, false==0); //true true true
// === ,!== , Strict equality , compare both value and type without any type conversion , return true only both value and type are EXACT
console.log('5'===5, null===undefined, false===0, 5===5); //false false false true

// Function, workers/helpers, that can be use any number of times
// only executed when called :)
function greet0(name) {console.log("Hi, ",name,"!!")}
let name4 = "Bali"
greet0(name4); //Hi,  Bali !!

function sum1(n1,n2){return n1+n2;}
console.log(sum1(1,5)); //6

function isEven ( n1){
    // If Else
    if (n1%2===0){return true;} // % mod operator,gives remainder
    if (n1%2!==0){return false;}
}

console.log(isEven(10),isEven(11)); //true false

// for loop 
for (var i =0; i<5; i++){
    console.log(i);
}

// while loop
var i1=5;
while(i1--){
    console.log(i1)
}


// complex data types
// objects, key value pairs {stingKey:valueAnyDatatype}
let user = {userName:"Rijusmit",userAge:20};
console.log("Hi "+user["userName"]+" Brother,you have age:"+user.userAge); // user["userName"] = user.userName, you can use any

function greet(user)// accepting not primitive but complex datatype
{
    console.log("Hi "+user.userName+" Brother,you have age:"+user.userAge);
}

let user1 = {userName:"Bhati",userAge:21};
greet(user1);

// Array, help to grp data together
let arr= [1,2,3];
const lenArr= arr.length;
console.log(arr,lenArr); //[ 1, 2, 3 ] 3

// Array of Objects, more complex :)
const user2= [{userName:"Bhaskar",userAge:20},{userName:"Kintsugi",userAge:21}];
let user3 = user2[0].userName;
let user3all = user2[0];
console.log(user3,user3all); //Bhaskar { userName: 'Bhaskar', userAge: 20 }

let arr2= ["Bali",21,{userName:"Bhaskar",userAge:20}];
let let1 = arr2[2];
let let2 =  {userName:"Bhaskar",userAge:20} ;
console.log(let1,let2); // { userName: 'Bhaskar', userAge: 20 } { userName: 'Bhaskar', userAge: 20 } // litrally same thing


// Object of Objects
let user4 = {userName:"Bhaskar",userAge:20,userAddress:{city:"Delhi", country: "India", pin:110091}};
const city= user4.userAddress.city;
const city2= user4["userAddress"]["city"];
console.log(city,city2); // Delhi Delhi //Same :)

// create a function that takes an arr of a obj as input and return the users who age>18 and are male
const users1 =[
    // {userName:"Bhaskar",userAge:20,userGender:"Male"},
    {userName:"DoggoBhai",userAge:2,userGender:"Male"},
    {userName:"IIITDBilli",userAge:5,userGender:"Female"},
];

function maleAdultChecker(users1){
    return users1.filter( // return array
        users1=>
        users1.userAge>=18 && users1.userGender==="Male"); //[ { userName: 'Bhaskar', userAge: 20, userGender: 'Male' } ]
}
function maleAdultChecker2(users1){
    for (let i=0; i<users1.length; i++){ //return object
        if (
            users1[i]["userAge"] >= 18
            &&
            users1[i]["userGender"] === "Male"
        )
            return users1[i]; //{ userName: 'Bhaskar', userAge: 20, userGender: 'Male' }
    } 
    return 0;
}

console.log(maleAdultChecker(users1),maleAdultChecker2(users1)); // [ { userName: 'Bhaskar', userAge: 20, userGender: 'Male' } ] { userName: 'Bhaskar', userAge: 20, userGender: 'Male' } //NOTsame
// [] 0 // in case no Bhaskar entry 


