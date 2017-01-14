//具有一个参数的简单函数
var fn=x=>x*x;
console.log(fn(5));

var single=a=>a;
console.log(single('10'));
//没有参数的需要在箭头前面加上小括号
var log=()=>{
    console.log("no param");
}
console.log(log());
//多个参数要用到小括号，参数中间用逗号间隔
var add=(a,b)=>a+b;
add(3,8);
console.log(add(3,8));
//函数体多条语句需要用到大括号
var add=(a,b)=>{
    if(typeof a=='number'&&typeof b=='number'){
        return a+b;
    }else{
        return 0;
    }
}
console.log(add(12,7));
//返回对象时要用小括号包起来，因为大括号被解释为代码块了
var getHash=arr=>{
    return ({
        name:'jack',
        age:12
    })
}
console.log(getHash());
//直接作为事件handler
// document.addEventListener('click',ev=>{
//     console.log(ev);
// })
//作为数组排序回调
var arr=[1,8,9,3,2,0].sort((a,b)=>{
    if(a-b>0){
        return 1
    }else{
        return -1
    }
})
console.log(arr);