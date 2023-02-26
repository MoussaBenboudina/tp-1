


var sliderImage = Array.from(document.querySelectorAll(".slider-container img"))

var x=1;
var numberImage = document.getElementById("number");
var images =Array.from(document.querySelectorAll(".slider-controls .indicators img"))
var chek = document.getElementById('chek')
console.log(chek.checked);
cliick();


images.forEach(img =>{
    img.addEventListener("click", (e) => {
     x = e.target.getAttribute('data-index')
     console.log("target",x);
     console.log('click')
     cliick();
 });})

        chek.onclick = setInterval(()=>{
            if(chek.checked === true){
              
                if(x==6){
                 x=0;
                   }else{
                    x++
                    cliick();
                   }
               
              
        if(chek.checked === false)
        {
            
        }
     
    }} , 5000)
    




console.log(x)



function cliick(){
images.forEach((li) =>
li.classList.remove("active"))
sliderImage.forEach((img) =>
img.classList.remove("active"))
sliderImage[x-1].classList.add("active");
console.log("click",x)
images[x-1].classList.add("active");
numberImage.innerHTML =`Image ${x} of ${sliderImage.length}`

 };
