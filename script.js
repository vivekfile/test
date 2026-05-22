console.log("Hello, World!");
let lis = document.querySelectorAll(".lii");

lis.forEach(li => {
    li.addEventListener("mouseover",function clik () {
        li.style.color = "red";
    });
});


let z = document.querySelector(".attributeselection");
z.setAttribute("title", "Hover due to js");

let inp = document.querySelector(".inputf");

inp.addEventListener("input", function(d){
    if(d.data !== null){
        console.log(d.data);
    }
    
    
});

let selectt = document.querySelector(".selection");
selectt.addEventListener("change",function(det){
    console.log(det.target.value);
    
});

let inputfile = document.querySelector("#inputbtn");
let anothinp = document.querySelector(".inputtb");

anothinp.addEventListener("click",function(){
    inputfile.click();
})

inputfile.addEventListener("change",function(filenames){
console.log(filenames);
});

