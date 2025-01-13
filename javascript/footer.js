class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
      <sub class="footer" style="margin-top:20px;">
        &copy; 2023-2025 LG Productions • <u>v2.1.2</u>
      </sub>

      <sub class="footer">Hate these colors? Try a different theme:
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