/**
 * Created by QA on 29.12.2015.
 */
'use strict'
/*function CoffeMashine(power,capasity){
    var whater=0;
    var WATER_HEAT=4200;
    document.write(power+" volt<br>");
    var getBuiltIme= function (){
        return this.whater*WATER_HEAT*80/power;
    }.bind(this);
    function onReady(){
     document.write('Done');
    }

    this.setamostWater=function(a) {
        if(a<0){throw new Error('errore <=0');}
        if(a>capasity){throw new Error('errore <='+capasity);}
        whater=a;
    };
    this.getAmostWhater=function(){
        return whater;
    }
    this.run= function(){
        setTimeout(onReady,getBuiltIme());
    };
}
var CoffeMashine=new CoffeMashine(100000,500);
CoffeMashine.setamostWater(400)
console.log(CoffeMashine.getAmostWhater());*/
//CoffeMashine.run();

/*function proto(){
    var a={
       s:2,
        q:3
    };

    this.b={
        w:'test'
    }
    this.s=function(){
        b.__proto__=a;
        for(var key in b ){
           /!* if(!b.hasOwnProperty(key))continue;*!/ ///проверка и вывод только того свойства которое принадлежит объекту
            document.write(key+':'+b[key]+'<br>');
        }

    }


}
var p= new proto();
var obj={
    test:true
}
function read(name){
    this.name=name;
}

read.prototype=obj;
var t=new read('test');*/

/*
Function.prototype.defer=function(ms){
    setTimeout(this, ms);
}
var hi=function(){
    document.write('hi');
}

hi.defer(1000);*/
/*
Function.prototype.defer=function(ms){
    var f=this;
    return function (){
        var arg=arguments,
            context=this;
        setTimeout(function(){
            f.apply(context, arg);
        }, ms);

    }
}

var sum=function(a,b){
    document.write(a+b);
}
sum.defer(1000)(2,3)*/



//////////////////класы через прототипы //////////////
/*function Animal(name){
    this.name=name;
    this.speed=0;
    this.weight=0;
}
Animal.prototype.run=function(speed){
    this.speed+=speed;
    document.write('Speed '+this.name+'='+ this.speed);
 ///   console.dir('Speed '+this.name+'='+ this.speed);
}
Animal.prototype.stop=function(){
    this.speed=0;
    document.write('stop '+this.name+'='+ this.speed);
    ///console.dir('stop '+this.name+'='+ this.speed);
}
var animal= new Animal('Cat');*/
/*animal.run(24);
animal.run(24);
animal.stop();*/

var arr=new Array(3);
for(var i=0;i<=2;i++){
    /*if(arr[i]='undefined'){ условие, если елемент масива пустой то внего записываем значение
        arr[i]=i;
    }else {continue;}*/

  }
///document.write(arr);
///console.dir(arr);
///console.dir([1,2,3,4,5]);

function animal(name){
    this.name=name;
    this.speed=0;
}

animal.prototype.run=function(speed){
    this.speed=speed;
    document.write('name: '+ this.name+'speed: '+this.speed);
}
animal.prototype.stop=function(){
    this.speed=0;
    document.write('name: '+ this.name+' speed stop: '+this.speed);
}


function rabbit(name){
    /*this.name=name;
    this.speed=0;*/
    //унаследование класса
    animal.apply(this,arguments);
}

rabbit.prototype=Object.create(animal.prototype);
rabbit.prototype.constructor=rabbit;

rabbit.prototype.jump=function(){
    ///this.speed++;
    document.write('name: '+ this.name+' jump: '+this.speed+'<br>');
}

rabbit.prototype.run=function(speed){
    this.speed++;
    this.jump();
}

/*
var rabbit=new rabbit('Smok');
rabbit.run(5);
rabbit.stop();
*/



///примеси ///
 var MixHi={
     SouHi:function(){
         document.write(this._name + ' age:'+this._age+ " HI");
    },

     SoBay:function(){
         document.write(this._name + ' age:'+this._age+ " Bay");
     },
     Brith:function(){
         var date= new Date();
         document.(date.getFullYear()-this._age);
     }
 }
function user(name,age){
    this._name=name;
    this._age=age;
}
for(var key in MixHi){
    user.prototype[key]=MixHi[key];
    console.log(user.prototype[key]);
}
new user('pavel', '23').SouHi();
new user('pavel', '23').SoBay();
new user('pavel', '26').Brith();






















