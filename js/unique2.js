var arr=[1,2,2,45,89,99,99,2,1];
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<=arr.length;j++){
        if(arr[i]==arr[j]){
            arr.splice(i,1);
        }
    }
}
console.log(arr);