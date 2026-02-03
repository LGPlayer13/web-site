// header
class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <a href="/index"><img id="logo" src="/images/decor/mainlogo.png"></a>
            </header>
        `;
    }
}

customElements.define('header-component', Header);

// footer
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <sup>
                    <span>&copy; LG Productions 2026 • v4.0.1</span>
                    <span><a href="/sitemap">site map</a></span>
                    <span><a href="https://neocities.org/" target="_blank">neocities</a></span>
                    <span><a href="https://discord.gg/v7NaVBTwnD" target="_blank">discord</a></span>
                </sup>
            </footer>

            <img class="bgimg" style="animation-delay:0.78s" src="/images/bgshapes/georgeshape.png">
            <img class="bgimg" style="animation-delay:1.43s" src="/images/bgshapes/coryshape.png">
            <img class="bgimg" style="animation-delay:3.29s" src="/images/bgshapes/sparkyshape.png">
            <img class="bgimg" style="animation-delay:4.51s" src="/images/bgshapes/sidshape.png">
            <img class="bgimg" style="animation-delay:5.34s" src="/images/bgshapes/popshape.png">
            <img class="bgimg" style="animation-delay:5.89s" src="/images/bgshapes/maxshape.png">
            <img class="bgimg" style="animation-delay:6.67s" src="/images/bgshapes/aubreyshape.png">
            <img class="bgimg" style="animation-delay:7.45s" src="/images/bgshapes/robertshape.png">
            <img class="bgimg" style="animation-delay:8.21s" src="/images/bgshapes/karloffshape.png">
        `;
        // change ABOUT page footer version when updating this
    }
}

customElements.define('footer-component', Footer);

let imgs = document.getElementsByClassName('bgimg');

// v stands for very bad and not good way of doing things
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