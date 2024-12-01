class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div class="container footer" style="padding-top:3px;padding-bottom:3px;">
        © 2023-2024 <b>LG Productions</b> • Built with <a href="https://github.com/">GitHub</a> and <a href="https://brackets.io/">Brackets</a> • Hosted by <a href="https://neocities.org/">Neocities</a>
      </div>

      <sub style="position:relative;margin:auto;margin-top:15px;right:0;left:0;display:block;text-align:center;text-shadow:1px 1px 1.5px #000000;"><b>v2.1.1</b> • Hate these colors? Try a different theme:
        <select id="selectTheme">
          <option value="george">George (orange)</option>
          <option value="cory">Cory (green)</option>
          <option value="greg">Greg (turquoise)</option>
          <option value="sid">Sid (purple)</option>
        </select>
      </sub>
    </footer>
    `;
    // change ABOUT PAGE footer version when updating this
  }
}

customElements.define('footer-component', Footer);