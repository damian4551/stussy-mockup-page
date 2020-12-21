//custom height
window.onload = () => {
    let vh = window.innerHeight * 0.1;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}

//cursor
const mouseCursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");

const cursorMove = (e) => {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
};

const cursorHover = () => {
    mouseCursor.classList.add("active");
};

const cursorUnhover = () => {
    mouseCursor.classList.remove("active");
};

links.forEach(link => {
    link.addEventListener("mouseover", cursorHover);
    link.addEventListener("mouseout", cursorUnhover);
})

window.addEventListener("mousemove", cursorMove);

//distortion effect
const distortionHover = () => {
    hover1 = new hoverEffect({
        parent: document.querySelector(".card-image-1"),
        intensity: 0.2,
        image1: "collabs/c1.jpg",
        image2: "collabs/c2.jpg",
        displacementImage: "./displacement.png"
    });
    
    hover2 = new hoverEffect({
        parent: document.querySelector(".card-image-2"),
        intensity: 0.2,
        image1: "collabs/c3.jpg",
        image2: "collabs/c4.jpg",
        displacementImage: "./displacement.png"
    });
    
    hover3 = new hoverEffect({
        parent: document.querySelector(".card-image-3"),
        intensity: 0.2,
        image1: "collabs/c5.jpg",
        image2: "collabs/c8.jpg",
        displacementImage: "./displacement.png"
    });
}

if(window.screen.width >= "1200") {
    distortionHover();
}

//loading animation
const hideLoadingBg = () => {
    const loadingBg = document.querySelector(".loading-bg");
    const outerWrapper = document.querySelector(".outer-wrapper");
    loadingBg.style.opacity = "0";
    outerWrapper.style.overflow = "scroll";
}

window.onload = () => {
    hideLoadingBg();
    setTimeout(function(){
    }, 1000);
}