class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div class="box" style="padding-top:3px;padding-bottom:3px;background-color:#cd7f1d;border-radius:0px 0px 28px 28px;border-style:solid;">
        © 2023-2024 <b>LG Productions</b> • Built with <a href="https://pages.github.com/">GitHub</a> and <a href="https://brackets.io/">Brackets</a> • Hosted by <a href="https://neocities.org/">Neocities</a>
      </div>

      <sub style="color:white;position:relative;margin:auto;margin-top:12px;right:0;left:0;display:block;text-align:center;text-shadow:1px 1px 1px #000000;"><b>v2.0</b> • Hate the color orange? Too bad. No themes for you.</sub>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);