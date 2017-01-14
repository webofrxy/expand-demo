//数组的结构赋值：按照一定的模式，从数组和对象中提取值，对变量进行赋值，称为结构赋值
/**
 * 这种方式称为模式匹配:只要等号两边模式相同就，左边的变量就会
 * 被赋予对应的值
 *  */
// var [a,b,c] = [1,2,3];
// console.log(a+b+c);
// let [foo,[[bar],baz]] = [1,[[2],3]];
// console.log(foo+bar+baz)
//复习：es5中的数组长度问题
// var misc = [1.1,true,'a',]
// console.log(misc[3])
//数组直接量：可以是对象直接量和数组直接量，下面这个数组长度为2
// var misc = [[1,{x:1,y:2}],[2,{x:3,y:4}]]
// console.log(misc.length)
//数组元素必须以逗号结尾，否则为undefined
// var misc = [,1,1   ]
// console.log(misc[2]);
// var misc = [[1,{x:1,y:2}],[2,{x:3,y:4}],[5,[6,[7,[8,{z:9,m:10}]]]]];
// var value=misc[2][1][1][1][1]
// console.log(misc[2][1][1][1][1].z);
// var arr = [
//     {a:1,b:2,c:3},
//     {a:4,b:5,c:6},
//     {a:7,b:8,c:9}
// ];
// var arr1=[];
// console.log(arr[1].a)
// for(var i=0;i<arr.length;i++){
//     arr1.push(arr[i].a)
// }
// console.log(arr1)
// arr1=[];
// arr.forEach(function(arr){ arr1.push(arr.a);});
// alert(arr1);
//1,结构赋值允许指定默认值，等号右侧的值不等于undefined的时，才可以结构给左侧的值，null默认为object，所以可以
// let [x = 1,y = x] = [];
// console.log(y)
// let [x = 1,y = x] = [2]
// console.log(y);//x,y都是2
// let [x=1,y=2] = [1,2]
// console.log(x,y)
//2.对象的结构
var {foo,bar} = {foo:"aaa",bar:"bbb"}
console.log(foo+bar);