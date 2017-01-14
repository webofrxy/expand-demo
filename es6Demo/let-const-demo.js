// {
//     let a=1;
//     var b=2;
// }
// console.log(b);
// console.log(a); //i is not defiend
//for循环中的let用
// for(let i=0;i<5;i++){
//     console.log(i)
// }
//console.log(i); i is not defiend
// var a =[];
// for(var i=0;i<10;i++){
//     a[i]=function(){
//         console.log(i);
//     };
// }
// a[6]()
//不存在变量提升
// console.log(foo);
// var foo=2;
// console.log(bar);
// let bar = 1;
//暂时性死区
// var temp;
// console.log(temp);
// if(true){
//     let temp=1;
//     console.log(temp);
// }
//y is not defined
// function bar (x=y,y=2){
//     console.log([x,y]);
//     return [x,y]
// }
// bar();
// function bar (x=2,y=x){
//     console.log([x,y]);
//     return [x,y]
// }
// bar();//[2,2]
//块级作用域：函数内部和外部的let声明的变量互不影响,注意先打印10再打5
// function f1(){
//     let x=5;
//     if(true){
//         let x=10;
//         console.log(x);
//     }
//     console.log(x);
// }
// f1();
//var 定义的变量产生泄露
// function f1(){
//     var x=5;
//     if(true){
//         var x=10;
//         console.log(x);
//     }
//     console.log(x);
// }
// f1();
//允许在块级作用域中声明函数，但在外部不可以引用，等于let,必须加{}
// function f(){
//     console.log('I am outside');
// }
// (function(){
//     function f(){
//             console.log('I am inside');
//     }
//     if(false){
        
//     }
//     f();
// })()
//前面加do可以使块级作用域变为表达式，就是可以有返回值
// let x = do {
//     let t=f();
//     t*t+1;
// };


//const 声明一个只读的常量，一旦声明，常量的值就不可以改变,而且必须立即初始化，即赋值
// const PI = 3.1415;
// PI=3;
// const foo;//missing init
// if(true){
//     console.log(MAX)
//     const MAX = 5;
// }
// MAX
//let和const都不能重复声明,这三者的声明的名称也不能相同
// var message = 'hello';
// let age = 25;
// const message = 'goodbye';
// const age = 30;
//复合类型的变量，变量不指向数据，而是指向数据的地址，所以将一个对象声明为
//为常量时要小心
const foo = {};
foo.prop = 123;
foo.prop
foo = {}