/**
 * Created by QA on 08.12.2015.
 */
'use strict'
/*объекты this*/
var user={
    name:'test name',
    age:'23',
    f:function(){
        showText(this.age,this.name);
    }
}
function showText(){
    for(var i=0;i<arguments.length;i++){
        document.write(arguments[i]);
    }

}

//user.f();
var calc={
    sum:function() {
        return document.write(this.a+this.b);
    },
    pow:function(){
        var p=1;
        var pow=Math.pow(this.a,this.b);
        return document.write(pow+'<br>');
    },
    sqrt:function(){
        this.a=+prompt('a=','');
        var sqr=Math.sqrt(this.a);
        return document.write(sqr+'<br>');
    }
    ,
    read:function(){
        this.a=+prompt('a=','');
        this.b=+prompt('b=','');
           }
};

/*
calc.read();
calc.pow();
calc.sum();
calc.sqrt();*/


/*конструктор*/
function Calcs(a,b){   //////название конструктора всегда с большой буквы
    this.a=+a;
    this.b=+b;
    this.add=function(){
        return this.a+this.b;
    };
    this.pow=function(){
      return Math.pow(this.a,this.b);
    };
    this.read=function(){
        document.write(this.add()+'<br>'+this.pow());
    };

}

/*var calcs= new calcs(2,6,3);
calcs.add();
calcs.read();*/

///задача аккамулятор///

function Accam(start){
    this.start=start;
    this.read=function(){
        return document.write(start+=start);
    };
}
/*
var acam=new Accam(2);
acam.read();
acam.read();
acam.read();
acam.read();*/


/*
дескрипторы , гетеры и сеттеры*/

var user ={
    name:'test name',
    last:"test last name"
}

Object.defineProperty(user,"test",{
    get:function(){
        return this.name+' '+this.last;
    },
    set:function(value){
        var split=value.split(' ');
        this.name=split[0];
        this.last=split[1];
    }
})
/*
user.test=prompt('1=','');
document.write(user.test+'<br>');
document.write(user.name+'<br>');
document.write(user.last)+'<br>';*/


Object.defineProperties(user,{
    age:{
        get:function(){
            var tooDay=new Date().getFullYear();
            return tooDay-this.brith.getFullYear();
        }
    },
    brith:{
        enumerable:true,
        value:function(data){
            return data;
        }
    }
})
/*for(var key in user){
    user[key]=prompt(key,'');
    document.write(key+':'+user[key]+'<br>');
}*/


/*фабричные методы*/

function Article (){
    this.date=new Date();
    Article.count++;
    Article.last=this.date;
}
Article.count=0;
Article.stat=function(){
   return document.write(this.count+'  '+this.last);

}
/*
new Article();
Article.stat();
new Article();
new Article();
new Article();
Article.stat();*/

function sum_array(){
    return [].reduce.call(arguments,function(a,b){
        return a+b;
    });
}

/*
document.write(sum_array(23,3,2,4,4,3,2,32,3,2,32,43,43,4,3,43,3));*/

function mul(a,b){
    var mul=1;
    var i=0;
    for(i;i<=b;i++){
        mul*=a;
    }
     return mul
}

/*
document.write(mul(2,4));*/

function work(a,b){
    document.write( a+b);
}

function logi(f,log){
     function wrap (){
        log.push(a)
         return f.call(this,a);
    }
    return wrap;
}

var log=[];
work=logi(work,log);
work(21);
work(1);

for(var i=0;i<=log.length;i++){
    document.write('log'+log[i]);
}

/*функция для проверки типа + для массивов, обьектов */
function getTypeObj(obj){
    return {}.toString.call(obj).slice(8,-1);
}

var arr=[1,2,3]
var srin='dsf';

document.write(getTypeObj(arr));
document.write(getTypeObj(srin));
document.write(Array.isArray());  /// проверка на масив