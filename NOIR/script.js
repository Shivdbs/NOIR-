// ===============================
// NOIR Studio JavaScript
// ===============================

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior:'smooth'

            });

        }

    });

});

// ===============================
// Reveal Animation
// ===============================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{threshold:.15});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// ===============================
// Navbar Background
// ===============================

window.addEventListener("scroll",()=>{

    const nav=document.querySelector(".navbar");

    if(window.scrollY>80){

        nav.style.background="#f4f1ea";

        nav.style.boxShadow="0 10px 30px rgba(0,0,0,.06)";

    }

    else{

        nav.style.background="transparent";

        nav.style.boxShadow="none";

    }

});

// ===============================
// Marquee Pause
// ===============================

const marquee=document.querySelector(".track");

if(marquee){

    marquee.addEventListener("mouseenter",()=>{

        marquee.style.animationPlayState="paused";

    });

    marquee.addEventListener("mouseleave",()=>{

        marquee.style.animationPlayState="running";

    });

}

// ===============================
// Button Hover Effect
// ===============================

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0px)";

    });

});

// ===============================
// Image Fade
// ===============================

document.querySelectorAll(".project-image img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.filter="grayscale(0%)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.filter="grayscale(100%)";

    });

});

// ===============================
// Scroll Progress Bar
// ===============================

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.left="0";

progress.style.top="0";

progress.style.height="3px";

progress.style.background="#111";

progress.style.width="0%";

progress.style.zIndex="99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const scrollTop=document.documentElement.scrollTop;

    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const percent=(scrollTop/height)*100;

    progress.style.width=percent+"%";

});

// ===============================
// Cursor Effect
// ===============================

const cursor=document.createElement("div");

cursor.className="cursor";

document.body.appendChild(cursor);

window.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

});

// ===============================
// Loading Animation
// ===============================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

// ===============================
// Add Animation Classes
// ===============================

const style=document.createElement("style");

style.innerHTML=`

body{

opacity:0;

transition:1s;

}

.hidden{

opacity:0;

transform:translateY(80px);

transition:1s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

.cursor{

position:fixed;

width:18px;

height:18px;

border:1px solid #111;

border-radius:50%;

pointer-events:none;

transform:translate(-50%,-50%);

transition:left .08s linear,top .08s linear;

z-index:999999;

mix-blend-mode:difference;

}

`;

document.head.appendChild(style);