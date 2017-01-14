var arr=[1,3,2,9,4,6,5]
function quiktSort(arr){
    var left=[],right=[];
    if(arr.length<1){
        return arr;
    }
    var index=Math.floor(arr.length/2);
    var point=arr.splice(index,1);
    for(var i=0,len=arr.length;i<len;i++){
        if(arr[i]<point){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    //console.log(quiktSort(left).concat(point.quickSort(right)));
    return quiktSort(left).concat(point,quickSort(right));
}
console.log(1)
console.log(quiktSort(arr));
quiktSort(arr);
