//同步执行，会有阻塞程序的情况发生，
// var i = 0;
// while(true){
//     i++
// }
var c=0;
function print(){
    console.log(c);
}
//延迟一秒执行
function plus(callback){
    setTimeout(function(){
        c+=1
        callback();
    },1000)
    
}
plus(print);
// print();