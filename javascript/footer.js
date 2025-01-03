class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
      <sub style="color:#d4ccff;position:relative;margin:auto;margin-top:20px;margin-bottom:1px;right:0;left:0;display:block;text-align:center;font-size:16px;text-shadow:1px 1px 1.5px #000000;">
        © 2023-2024 LG Productions • <u>v2.1.2</u>
      </sub>

      <sub style="color:#d4ccff;position:relative;margin:auto;right:0;left:0;display:block;text-align:center;text-shadow:1px 1px 1.5px #000000;">Hate these colors? Try a different theme:
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