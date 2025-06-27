// map diya kicui pari nai 

// reduce diya kicu akta korci
var arr=[1,2,3,4,5,6,7,8]
function myReduce(arr,cb,acc){
    for (var i =0; i<arr.length; i++){
        acc=cb(acc,arr[i])
    }
    return acc
}


var sum= confirm.log (myReduce(arr,function(prev,cur){

},0))
 