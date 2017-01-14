 var array=[1,2,3,4,5,5,5,3,6,2]
// function unique1(array){
   
//     var n=[];
//     for(var i=0;i<array.length;i++){
//         if(n.indexOf(array[i]==-1)){
//             n.push(array[i]);
//             console.log(i);
           
//         }
//          return n;
//     }
// }
// console.log(unique1(array));
// if(!Array.prototype.indexOf){
//     var result = -1,a_item = null;
//     if(this.length == 0){
//         return result;
//     }
//     for(var i=0,len=this.length;i<len;i++){
//         if(a_item===item){
//             result=i;
//             break;
//         }
//     }
//     return result;
// }
// Array.prototype.unique1 = function(array){
//     var n = [];
//     for(var i=0;i<this.length;i++){
//         if(n.indexOf(this[i])==-1){
//             n.push(this[i]);
//         }

//     }
//     console.log(n);
//     return n;
// }
// array.unique1()
//js原生数组的排序方法，按照ASCII表的字母顺序排序
// var arr=new Array(6);
// arr[0]='10';
// arr[1]='12';
// arr[2]='3';
// arr[3]='5';
// arr[4]='8';
// arr[5]='1';
// console.log(arr);
// console.log(arr.sort());
//下面的方法没有run出结果
// Array.prototype.unique2=function(){
//     var r = [];
//     var n ={};
//     for(var i=0;i<this.length;i++){
//         if(!n[this[i]]){
//             n[this[i]]=true;
//             r.push(this[i]);
//         }
//     }
//     return r;
// }
// console.log(1)
// array.unique2();
//下面没有run出来
// Array.prototype.unique3=function(){
//     var n = [this[0]];
//     for(var i=1;i<this.length;i++){
//         if(this.indexOf(this[i])==i){
//             n.push(this[i])
//         }
//     }
//     return n;
// }
// array.unique3();
//没有run出来
// Array.prototype.unique4=function(){
//     this.sort();
//     var re=[this[0]];
//     for(var i=1;i<this.length;i++){
//         if(this[i]!==re[re.length-1]){
//             re.push(this[i]);
//         }
//     }
//     return re;
// }
// array.unique4();
//下面没有run出来
// Array.prototype.unique5=function(){
//     var self=this;
//     var _a=this.concat().sort();
//     _a.sort(function(a,b){
//         if(a==b){
//             var n=self.indexOf(a);
//             self.splice(n,1);
//         }
//     })
//     return self;
// }
// array.unique5();
Array.prototype.unique6=function(){
    return this.reduce(function(p,c){
        if(p.indexOf(c)<0){
            p.push(c);
        }
        return p;
    },[]);
}
array.unique6();