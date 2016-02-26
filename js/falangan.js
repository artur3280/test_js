/**
 * Created by QA on 25.01.2016.
 */
'use strict'
function test_obj(){
        this.test=function(key,obj){
            this.key=key;
            this.obj=obj;

                if (this.key in this.obj) {
                    document.write('true')
                } else(
                    document.write('false')
                )


        },

        this.instace_of= function(key,obj){
            this.key=key;
            this.obj=obj;

            if (this.key instanceof this.obj) {
                document.write('true')
            } else(
                document.write('false')
            )

        }
}

var rout={
    y:1
}
rout.x=5;
/*
var test=new test_obj();
test.test("x", rout);
test.instace_of(test1,test_obj);
*/

function timer(){
    var time=new Date();
    this.second=function(){
        var sec=time.getSeconds();
        document.write(sec);
        
    }
}

/*
var timer=new timer();
timer.second();
*/
