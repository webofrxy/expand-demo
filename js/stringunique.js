// function mystr(){
//     var str="aajjddcddfeftrutw";
//     var newstr=str.split("");
//     var arr=newstr.sort();
//     console.log(arr)
//     for(var i=0;i<arr.length;i++){
//         var num=0;
//         if(arr[i]==arr[i+1]){
//             continue;
//         }
//         for(var j=0;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 num++
//             }
//         };
//         console.log(arr[i]+"有"+num+"次");
//        // return num
//     }
//    // return arr
// }
// mystr();
// console.log(mystr())
// function mystr4(){
//     var str="aakkjjeeehekljiji";
//     var newstr="";
//     var count;
//     for(var i=0;i<str.length;i++){
//         count=1;
//         for(var j=i+1;j<str.length;j++){
//             if(str.charAt(i)!=str.charAt(j)){
//                 break;

//             }else{
//                 count++
//             }
//         }
//         newstr+=str.charAt(i)+count;
//         i=j
//     }
//     console.log(newstr)
//     return newstr
// }
// mystr4();
//冒泡排序

var elements=[3,9,2,8,1,4];
	for(var i=0;i<elements.length-1;i++){
		for(var j=0;j<elements.length-i-1;j++){
			if(elements[j]>elements[j+1]){
				var swap=elements[j];
				elements[j]=elements[j+1];
				elements[j+1]=swap;
			}	
		}
	}
console.log(swap)