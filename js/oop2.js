/**
 * Created by QA on 16.12.2015.
 */
////json ////


///JSON.parse//
 var str='{"name":"artur","age":25,"brith":"1990-10-9"}';
var json = JSON.parse(str,function(key,value){
    if(key=='brith')return new Date(value);

    return value;
});


////серилизация///

var obj={
    name:'test name',
    last:'test last name',
    age:25

}
var ser_str=JSON.stringify(obj,["name","last"],1);
//console.log(ser_str);

var l={
    name:"name tet"
};
var age={
    age:23
}
l.age=age;
var j=JSON.stringify(l,["name","age"],2);
/*
console.log(j);
console.log(JSON.parse(j));*/

////timer
var m=[];
var i=0;
var t=setInterval(function(){
    m[i]=i++;
    if(m.length!==23){

    }else
    {
        clearInterval(t);
    }
    /*console.log(m) */
},100)
 /// eval
/*
var t=prompt("",'console.log()')
eval(t);*/

///try and catch
function readError(message,cause){
    this.message=message;
    this.cause=cause;
    this.name='readError';
    this.stack=cause.stack;
}

function readData(){
    var obj={"name":artur};
    try{
        JSON.parse(obj);
    }catch(e) {
        if(e.name="URIError"){
            throw new readError('URIError',e);
        }else if(e.name="SyntaxError"){
            throw new readError('SyntaxError',e);
        }else{
            throw e;
        }
    }
}

try{
    readData();
}catch (e){
    if(e.name='readError'){
        document.write(e.message+" "+ e.cause);
    }else {throw e;}
}









































