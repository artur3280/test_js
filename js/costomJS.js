"use strict";

var arry=[];
while (true){
    var p= prompt('p=','');
    if(p===''|| p===null||isNaN(p))break;
    arry.push(+p);
}
document.write(arry+'<br>');
var sum=0;
for(var i=0;i<arry.length;i++){
    sum +=arry[i];
    console.log(sum);
}
document.write(sum+'<br>');


function find(arr,value){
    value= +prompt('search','1');

    for(var i=0;i<arr.length;i++){
          if(arr[i]===value)
           document.write(i);
    }
    document.write(-1);
}

function sort(array){
    function compar(a,b) {
        if (a == b) return 0;
        if (a > b)return 1;
        if (a < b) return -1;
    }
    return document.write(array.sort(compar));
}



function forech(arr){
    arr.forEach(function(arr){
        document.write(+arr);
    })
}


function filtered(arr){
    var fil=arr.filter(function(n){
        return n>3&&n<6;
    })
    document.write(fil);
}

function maparry(arr){
    var map=arr.map(function(n){
        return n.length;
    })
    document.write(map);
}


function reduc(arr){
    var sum=arr.reduce(function(a,curent){
        return a+=curent;
    },0);

}
/*for(var i=0;i<=arry.length;i++) {
    document.write(sum);reduc(arry);
}*/
////амыкания
function sumf(a){
    return function (b){
        return a+b;
    };
}

////строковый буфер
function makeBuffer(){
    var text='';
     function buffer (t){
        if(arguments.length==0){
            return text;
        }
        text+=t;
    };

    buffer.clear=function(){
        text='';
    }
    return buffer;
};

var buffer=makeBuffer();
buffer('a');
buffer('r');
buffer('t');
buffer.clear();


////сортировка///
var user=[{
        name:'Vasil',
        surname:"Petrov",
        age:'22'
    },
    {
        name:'her',
        surname:"rov",
        age:'12'
    },
    {
        name:'Rus',
        surname:"trov",
        age:'78'
    }]
function byField(field){
    return function (a,b){
        return a[field]>b[field]?1:-1;
    }

}

/*
user.sort(byField('name'));
user.forEach(function(user){
    document.write(user.name);
})*/


function filter(arr,func){
    var rezult=[];
    for(var i=0;i<=arr.length;i++){
       var val= arr[i];
        if(func(val)){
            rezult.push(val);
        }
    }
    return rezult;
};
function inBit(a,b){
    return function (x){
        return x>=a&&x<=b;
    }
}
function inArry(arry){
    return function(x){
        return arry.indexOf(x)!=-1;
    }
}
/*
document.write(filter(arry,function(a){return a%2==0;})+'<br>');
document.write(filter(arry,inBit(2,6))+'<br>');
document.write(filter(arry,inArry([1,5,6,4,3]))+'<br>');*/
///// задача на армию стрелков///
function makeArray(){
    var shooters=[];
    
}