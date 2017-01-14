var globalVariable = 'this is global variable';
function globalfunction(){
    var localVariable = 'this is a variable'
    console.log(globalVariable);
    console.log(localVariable);
    function localFunction(){
        var innerlocalvariable = 'this is a inner local variable'
        console.log(innerlocalvariable);
        console.log(globalVariable);
        console.log(localVariable);
    }
    localFunction();
}
globalfunction();