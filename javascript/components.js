// header
class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <a href="/index.html"><img class="banner" src="/images/sprites/siteBanner.jpeg" alt="homepage"></a>
            </header>
        `;
    }
}

customElements.define('header-component', Header);
const version = "v5.0";

// footer
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <span>LG Productions • ${version}</span><span><a href="/sitemap.html">site map</a></span><span><a href="https://neocities.org/site/lgplayer13" target="_blank">neocities</a></span><span><a href="https://discord.gg/v7NaVBTwnD" target="_blank">discord</a></span>
            </footer>

            <img class="bgimg" style="animation-delay:0.78s" src="/images/backgrounds/shapes/georgeshape.png">
            <img class="bgimg" style="animation-delay:1.43s" src="/images/backgrounds/shapes/coryshape.png">
            <img class="bgimg" style="animation-delay:3.29s" src="/images/backgrounds/shapes/sparkyshape.png">
            <img class="bgimg" style="animation-delay:4.51s" src="/images/backgrounds/shapes/sidshape.png">
            <img class="bgimg" style="animation-delay:5.34s" src="/images/backgrounds/shapes/popshape.png">
            <img class="bgimg" style="animation-delay:5.89s" src="/images/backgrounds/shapes/maxshape.png">
            <img class="bgimg" style="animation-delay:6.67s" src="/images/backgrounds/shapes/aubreyshape.png">
            <img class="bgimg" style="animation-delay:7.45s" src="/images/backgrounds/shapes/robertshape.png">
            <img class="bgimg" style="animation-delay:8.21s" src="/images/backgrounds/shapes/karloffshape.png">
        `;
    }
}

customElements.define('footer-component', Footer);

if (document.title.includes("Home")) {
    document.querySelector("footer span").innerHTML = "&copy; LG Productions 2026 • " + version;
}

// auto-link art
const art = document.querySelectorAll(".art a");

if (art) {
    for (let i = 0; i < art.length; i++) {
        art[i].href = art[i].children[0].src;
    }
}

// background shapes
let imgs = document.getElementsByClassName('bgimg');

for (let v = 0; v < imgs.length; v++) {
    let thisImg = imgs[v];
    randomTop = getRandomNumber(5, 87);
    randomLeft = getRandomNumber(4, 93);
    
    thisImg.style.top = randomTop + "%";
    thisImg.style.left = randomLeft + "%";
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}