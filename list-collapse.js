if (!customElements.get('list-collapse')) {
  customElements.define('list-collapse', class ListCollapse extends HTMLElement {
    constructor() {
      super();
      this.lists = this.querySelectorAll('ol,ul');
    }
    connectedCallback() {
      this.lists.forEach(list => this.setupEvents(list));
    }
    setupEvents(list) {
      list.addEventListener('click', (e) => {
        // only work on LI targets, keeps A tags clickable
        if (e.target.tagName === 'LI') {
          e.preventDefault();
          e.target.toggleAttribute('data-collapse')
        }
      })
    }
  })
}