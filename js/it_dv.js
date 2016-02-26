/**
 * Created by QA on 26.01.2016.
 */
'use strict'
/// array///
function set_poiint(){
    var x=promt('x=','');
    var y=promt('y=','');
}
function Point(){
    /// метод
    this.set=function(){
        var x=prompt('x=','');
        var y=prompt('y=','');
        this.x=x;
        this.y=y;
    }
    if(this.x>0&&this.y>0) {
        this.z = Math.pow(this.x, this.y);
    }else(
                this.set
    );
}

var point= new Point();
point.set();
document.write(point.z);

