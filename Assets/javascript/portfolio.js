window.onload = function(){

    const canvas = document.getElementById("background-effect");
    const ctx = canvas.getContext("2d");

    //setting up background height and width
    const width = innerWidth;
    const height =innerHeight;
    canvas.width = width;
    canvas.height= height;

    //generating the particles dropping down
    const  maxParticles= 100;
    let particles = [];


    //looping through the particls
    for (let i = 0; i < maxParticles; i++){
        particles.push({
            x:Math.random()*width,
            y:Math.random()*height,
            radius:Math.random()*5+2,
            desnsity:Math.random() +1,

        });
    };
    function drawParticles()
    {
        ctx.clearRect(0,0,width,height);
        ctx.globalAlpha= 0.6;
        ctx.fillStyle = "white";
        ctx.beginPath();
        for(let i = 0; i < maxParticles; i++){
            let particleMovement = particles[i];
            ctx.moveTo(particleMovement.x, particleMovement.y);
            
            ctx.arc(particleMovement.x,particleMovement.y,particleMovement.radius,0,Math.PI*2,true);
               
        };
        ctx.fill();
        moveParticles();
        
    };
    
    let sway = 0;

    function moveParticles(){
        sway += 0.03;
        for (let i = 0; i < maxParticles; i++){
            let particleMovement =  particles[i];
            particleMovement.y += Math.pow(particleMovement.desnsity, 2) +1;
            particleMovement.x += Math.sin(sway) *2;

            if (particleMovement.y > height){
                particles[i] = {x:Math.random()*width, y:0, radius: particleMovement.radius, desnsity: particleMovement.desnsity};
            };
        };
    };

setInterval(drawParticles, 50);



  
  



// $(".dropdown-trigger").dropdown();
$(document).ready(function(){
    $('.sidenav').sidenav();
  });


};
