// var obj={name:"piyush"};
// function sayhello(age){
//     return "Hello "+this.name+" "+ age;
// }

// console.log(sayhello.call(obj,24));


// var obj={name:"piyush"};
// function sayhello(age,ag){
//     return "Hello "+this.name+" "+ age +" "+ag;
// }

// console.log(sayhello.apply(obj,[24,25]));

// var obj={name:"piyush"};
// function sayhello(age,ag){
//     return "Hello "+" "+ age +" "+ag;
// }

// const hello=sayhello.bind();
// console.log(hello( 24,25));


// var obj={name:"piyush"};
// function sayhello(age,ag){
//     return "Hello "+" "+ age +" "+ag;
// }

// console.log(sayhello.call(obj, 24,25));
// console.log(sayhello.bind(obj, 24,25));


var obj = {
    name: "piyush" ,
    age:20,
    getAge:function(){
        return  this.age;
    }

};
var person2={age:24};
var ans=obj.getAge.call(person2)
console.log(ans);
