// background images (the shapes that fade in and out)
var imgs = document.getElementsByClassName('bgimg');
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// v stands for I'M IN TREMENDOUS PAIN I'M IN TREMENDOUS PAIN HELP ME HELP ME HELP ME
for ( var v=0; v < imgs.length; v++ ) {
 	
    var thisImg = imgs[v];
    
    randomTop = getRandomNumber(0, winHeight * 0.9);
    randomLeft = getRandomNumber(0, winWidth * 0.9);
    
    thisImg.style.top = randomTop +"px";
    thisImg.style.left = randomLeft +"px";
    
}

function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}

// header
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
      <a href="/index"><img src="/images/decor/mainlogo.png" title="this graphic is the peak of my scratch career, can we get 3 likes guys" style="margin-top:10px;width:310px;height:38px;object-fit:contain;"></a>
    </header>
  
    <ul class="navbar">
      <li><a style="--color:rgba(181,181,181,0.9);" href="/games">Games</a></li>
      <li><a style="--color:rgba(239,91,59,0.9);" href="/about">About</a></li>
      <li><a style="--color:rgba(211,176,124,0.9);" href="/blog">Blog</a></li>
    </ul>
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
      <sup style="display:flex;justify-content:center;">
        <span>&copy; 2025 LG Productions • v3.0.5</span>
        <span><a href="https://neocities.org/" target="_blank">neocities</a></span>
        <span><a href="/sitemap">site map</a></span>
        <span><a href="https://discord.gg/v7NaVBTwnD" target="_blank">discord</a></span>
      </sup>
    </footer>
    `;
    // change ABOUT page footer version when updating this
  }
}

customElements.define('footer-component', Footer);