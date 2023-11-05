// var inp;
// function add(){
// var btt = document.createElement('button')
// var txt = document.createTextNode('add')
// btt.appendChild(txt)
// inp =   document.createElement('input')

// inp.appendChild(btt)


// document.querySelector("#section").appendChild(inp)
// document.querySelector("#section").appendChild(btt)
// btt.onclick=function (){
//     var p = document.createElement('p')
//     var uyy = inp.value
//     var trt = document.createTextNode(uyy)
//     p.appendChild(trt)
//     document.querySelector("body").appendChild(p)

//         inp.style.display = 'none'
//         btt.style.display = 'none'
// }







// }
var ipp;
var edit;
var p;
var see;
let seie;
function add(){
     see= document.createElement('input')
    document.querySelector('#pop').appendChild(see)
     var btn = document.createElement('button')
     var btncontent =document.createTextNode('add')
     btn.appendChild(btncontent)
    document.querySelector("#pop").appendChild(btn)
    // document.getElementById('ppop').style.display="none"

     btn.onclick= function (){
         p = document.createElement('p')
        var yy = see.value
        var tnt = document.createTextNode(yy)
         var dii = document.createElement('div')
        p.appendChild(tnt)
        dii.appendChild(p)
        document.querySelector('#ppop').appendChild(dii)
        dii.style.backgroundColor= 'green'
        // dii.style.width= '50vh'
        dii.style.margin='auto'
        // btn.style.display="none"
        // see.style.display='none'
        document.getElementById('ppop').style.display="block"


        var btt= document.createElement('button')
        var bttcontent =document.createTextNode('Delete')
        btt.appendChild(bttcontent)
        dii.appendChild(btt)


        btt.onclick= function(){
            dii.style.textDecoration = 'line-through'
        }

       edit =document.createElement('button')
       var editcontent=document.createTextNode('edit')
       edit.appendChild(editcontent)
       dii.appendChild(edit)
       edit.style.marginLeft="40%"

      edit.onclick=function(){
        // ipp.setattribute('contenteditedtable', 'true')
        ipp = document.createElement("input")
        var uiu = document.createElement('button')
        var txt = document.createTextNode('add')
        uiu.appendChild(txt)
        uiu.appendChild(ipp)
        // ipp.style.Target='disabled'
        see.style.display="none"
        btn.style.display="none"
        
        
        // document.querySelector('#pop').appendChild(ipp)
        document.querySelector('#pop').appendChild(uiu)
        // console.log(12345666)
        uiu.onclick= function(){
            p.innerHTML = p.innerHTML + ipp.value
        }
        btt.onclick= function(){
            dii.style.textDecoration = 'line-through'
        }

        }
       


    
    }

}

 function pp(){

    var search = document.getElementById('inp').value.toLowercase();

 }

 console.log(Math)
//  console.log(Math.pow) 
console.log(Math.pow(4,2))
console.log(Math.ceil(6.1)) 
console.log(Math.floor(4.1))
console.log(Math.sqrt(25))
console.log(Math.sign(30))
console.log(Math.trunc(6.9))
console.log(Math.PI)
console.log(Math.PI/180)
console.log(Math.sin(90 * Math.PI/180))
console.log(Math.tan(90 * Math.PI/180))
console.log(Math.cos(45* Math.PI/180))
console.log(Math.random()*100)
console.log(Math.round(4.4))
console.log(Math.log10(10))
console.log(Math.log2(10))




