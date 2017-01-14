function createAnother (original){
	//var clone = Object(original);
    var clone=original;
	clone.sayHi=function(){
		console.log("hi");
	};
	return clone;
}
var person={
	name:"Nicholas",
	friends:["shely","count","van"]
}
//通过createAnother();方法将sayHi方法继承给person，再将person继承给anotherperson，createAnother方法就是用于封装继承过程的函数
//这就将继承过程寄生在createAnthor函数中，称为寄生式继承
var anotherPerson = createAnother(person);
anotherPerson.sayHi();