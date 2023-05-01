let container=document.querySelector('.container');
let btn=document.querySelector('.start_btn');
let scoreContainer =document.querySelector('.score');
let timeContainer=document.querySelector('.time');
let bouton=document.getElementsByClassName('btn');
let attention=()=>alert("ok");
btn.addEventListener('click',()=>{
 container.innerHTML=`
 <div class="batton"></div>
 <div class="batton1"></div>
 <div class="batton2"></div>
 <div class="batton1"></div>
 <div class="batton2"></div>
 <div class="batton1"></div>
 <div class="batton"></div>
 <div class="batton1"></div>
 <div class="batton2"></div>
 <div class="batton1"></div>
 <div class="batton2"></div>
 <div class="batton1"></div>
 <div class="batton"></div>        
`
;
 let score=0; 
 let time1=Math.random()*30
 let time=Math.round(time1);
 time1>0;
 let interval=setInterval(function showTarget(){
    let target=document.createElement('img');
    target.id="target";
    target.src="fantome.jpg";
    container.appendChild(target);
    target.style.top=Math.random() * (500 - target.offsetHeight) + 'px';
    target.style.left=Math.random() * (500 - target.offsetWidth) + 'px';
    let obstacle=document.createElement('div');
    obstacle.id="obstacle";
    obstacle.innerHTML="!!!!!!"
    container.appendChild(obstacle);
    obstacle.style.top=Math.random() * (500 - obstacle.offsetHeight) + 'px';
    obstacle.style.left=Math.random() * (500 - obstacle.offsetWidth) + 'px';
    setTimeout(function(){
        target.remove();
        obstacle.remove();
    }, 2000)
    obstacle.onclick=function(){
        obstacle.style.display='none';
        alert('Vous avez touchez la boule!')
        clearInterval(interval);
        container.innerHTML=`le jeu est terminé!Cliquez sur restart pour recommencer`;
    }
    
    target.onclick=function(){
        score+=1;
        target.style.display='none';
    }
    time-=1;
    scoreContainer.innerHTML=`Score : ${score}`
    timeContainer.innerHTML=`Temps :${time}`
    if(time ==0){
        clearInterval(interval);
        container.innerHTML=`le jeu est terminé!Cliquez sur restart pour recommencer`;
        /*alert("Votre score est : "+score)*/
        if(score==0){alert("Vous n'arrive pas à tiré !")}
        else(alert("Votre score est : "+score))
    }
}, 1000);
})
 