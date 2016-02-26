/**
 * Created by QA on 04.02.2016.
 */
'use strict'
var get_Dom = function (param) {
    this.param = param;
    this.childNodes = function () {
        var i = 0;
        var max = document.body.childNodes.length;
        for (i; i <= max; i++) {
            document.write(document.body.childNodes[i] + '<br>');
        }
    };
    this.children_Nodes = function () {
        var i = 0;
        var max = document.body.children.length;
        for (i; i <= max; i++) {
            document.write(document.body.children[i] + '<br>');
        }
    };
    this.array_childNodes = function () {
        var elem = document.body.childNodes;
        elem = Array.prototype.slice.call(elem);

        elem.forEach(function (elem) {
            document.write(elem.tagName + '<br>');
        });
    };
    this.get_data = function (class_name) {
        this.class_name = class_name;
        ///   console.log(this.class_name);
        var arr_data = [];
        var table = document.getElementsByClassName(this.class_name);
        for (var i = 0; i < table.length; i++) {
            var ln_td = table[i];
            arr_data.push(ln_td.innerHTML);
        }
        console.log(arr_data);
    };

    this.style_table = function (tag, color, step) {
        this.tag = tag;
        this.color = color;
        this.step = +step;
        var element = document.getElementsByClassName(this.tag)
        for (var i = 0; i < element.length; i += this.step) {
            element[i].style.background = this.color;
        }
    };

    this.create_object = function (type, name, name_sub, s) {
        this.type = type;
        this.name = name;
        this.name_sub = name_sub;
        this.s = s;


        var new_object = document. createElement(this.type);
        new_object.setAttribute('width', '50%');
        new_object.setAttribute('border', '1');
        var row;
        var cell;
        for (var j = 0; j <= this.s; j++) {
            row = new_object.insertRow(j);
            row.setAttribute('class', this.name);
            for (var i = 0; i <= this.s; i++) {
                cell = row.insertCell(i);
                cell.setAttribute("class", this.name_sub);

                cell.innerHTML = i;
            }
        }
        document.body.appendChild(new_object);

    };

    this.qwary_selector=function(type){
        this.type=type;
        var elem=document.querySelectorAll(this.type);
        for(var key=0;key<elem. length; key++){
            if(!(elem[key].innerHTML%2)){
            console.log(elem[key].innerHTML)
                console.log(elem[key].innerHTML)
            }
        }

    };

    this.data_set = function () {
        var lableLn=document.createElement("lable");
            lableLn.setAttribute('id', 'lable');
            lableLn.setAttribute("border", "1");
            lableLn.setAttribute("width", "10");
            document.body.appendChild(lableLn);
            
            var emailOb=document.getElementById('email');
            var numberOb=document.getElementById('number');
            
        var sub = document.getElementById('sub').onclick = function () {
            numberOb.value!=="" || emailOb.value!=="" ?
            emailOb.style.border =numberOb.style.border = '1px solid black':
            emailOb.style.border =numberOb.style.border = '1px solid red';
            lableLn.innerHTML= emailOb.value+numberOb.value;

        }
    };
    
    
    
    
     this. create_object_global=function (type/*type object*/, sun/*class/id*/, indetification/*name*/, position/*element position*/) {
            this. type=type;
            this. sun=sun;
            this. ind=indetification;

            
                var obj=document.createElement(this. type);
                this. sun==="class"?obj.setAttribute('class', this. ind):obj.setAttribute('id', this. ind);
                document.body.appendChild(оbj);
                
           
            
        };

}