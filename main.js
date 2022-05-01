let moon = document.querySelector('.moon');
let boat= document.querySelector('.boat');
let mont1= document.querySelector('.mont1');
let mont3= document.querySelector('.mont3');
let stars = document.querySelector('.stars')
let text =document.getElementsByTagName('h1')[1];
let body=document.querySelector('body');
let j=0;
window.addEventListener('scroll',function(){
    let x=window.scrollY;
    moon.style.top=x*0.9 +'px';
    boat.style.left=x*0.9 +'px';
    mont1.style.top= x*0.1 +'px';
    mont3.style.top= -x*0.05+'px';
    stars.style.right= x*0.3+ 'px';
    stars.style.bottom= x*0.5+ 'px';
    let y= x*0.05;
    if (y <=2){
    text.style.transform= 'scale('+y+')';}
    if (x >= 318 && j===0){
        body.style.background='linear-gradient(#0c0a5e,#6621a7)';
        j=1;
    } else if (x<318 && j===1){
        j=0;
        body.style.background='linear-gradient(#200016,#10001f)';
    }
    
})