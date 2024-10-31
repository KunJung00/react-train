// import thistIsDefault, { anotherText, myText } from "./utils";
//===================================================================================== export import
// //thisIsDefault เป็นค่าเริ่มต้นที่ตั้งไว้จาก class อื่น โดย type data จะเป็น default

// console.log('Hello jung');
// console.log(myText);
// console.log(anotherText);
// console.log(thistIsDefault);
//====================================================================================== data type
// let tx1: string = 'hello';
// // บังคับ string
// let tx2 = 'hello';
// //
// let tx3: any = 'hello';
// // คือ type อะไรก็ได้

// console.log(typeof (tx1));
// console.log(typeof (tx2));
// console.log(typeof (tx3));

// // tx1 = 10; // มันบังคับ string
// // tx2 = 10;// type เริ่มต้นเป็น string
// tx3 = 10;// type เป็นอะไรก็ได้ไม่ว่าค่าก่อนหน้าจะเป็นอะไร

// console.log(tx1);
// console.log(tx2);
// console.log(tx3);
// console.log(typeof (tx1));
// console.log(typeof (tx2));
// console.log(typeof (tx3));
// //-----------------underfined Null
// let u = undefined;//ควรใส่ค่าแต่ไม่มีค่า
// console.log(u);
// u = true;
// console.log(u);
// console.log(typeof u);

// let n = null;//มีค่าเป็น null คือไม่มีค่า
// console.log(n);
// n = true;
// console.log(n);
// console.log(typeof n);
//========================================================operations
// const s: string = "This is some text ";
// const n: number = 1;
// console.log(s + n);

// const s = "This is some text ";
// const n = 1;
// const m = 2;
// console.log(s + n + m);
// console.log(s + (n + m));
//========================================================= Function and Parameter
//------------------function
// function sayHello() {
//     console.log('Hello!');
// }

// sayHello();

//------------------Parameter
// function sayHello(name : string, age :any){
//     console.log("hello! "+ name + " "+ age);

// }
// sayHello("jung",21)
// sayHello("jung", "21")

//------------------default parameter value
// function sayHello(name : string , age : any, address = 'CS'){
//     console.log("hello "+ name+' '+age+' '+address);

// }
// sayHello("jung",22);
// sayHello('jung','21','Computer science')

//------------------optional parameter
// function sayHello(name: string, age: any, address?: string) { // เลือก address ว่ามีค่าหรือไม่มีก็ได้
//     console.log('Hello! ' + name + ' ' + age + ' ' + address);
// }

// sayHello("Aj.M", 20);
// sayHello("Aj.M", "20", 'Computer Science MSU');

//----------------- Return value (auto return type) ไม่ต้องกำหนด data type
// function sayHello(name: string, age: any, address?: string) {
//     return 'Hello! ' + name + ' ' + age + ' ' + address;
// }
// //บังคับ return type
// function syHello(): number {
//     return 4
// }

// let text = sayHello("Aj.M", 20);
// console.log(text);

// console.log(sayHello("Aj.M", "20", "Computer Science MSU"));

//-----------------String interpolation การแทรกตัวแปร
// function sayHello(name: string, age: any, address?: string) {
//     return `Hello! ${name} ${age} ${address}`;
// }
// console.log(sayHello("Aj.M", "20", "Computer Science MSU"));

//----------------function in flution
// function sayHello(name: string, age: any, address?: string) {
//     function show() {
//         console.log(text);
//     }
//     let text = `Hello! ${name} ${age} ${address}`;
//     show();
// }

// sayHello("Aj.M", "20", "Computer Science MSU");

//================================================================ Arrow functions "=>"
// let func = () => {     // () => {} คือ function
//     console.log('This is an anonymous function');
// };

// func();

// let func = () => console.log('This is one line anonymous function');// function in line 

// func();
//---------------------------------function variable
// let doSomething = () => {
//     let dateTime = new Date();
//     console.log(dateTime + ' Fuction doSomething is executed...');
// }

// setTimeout(doSomething, 2000);//sleep in java
// setTimeout(doSomething, 3000);
// setTimeout(() => {
//     let dateTime = new Date();
//     console.log(dateTime + " Fuction doSomething is executed...");
// }, 4000);

//-------------------------------function export and import
// import anyName from "./utils";

// let text = anyName("jung");
// console.log(text);

