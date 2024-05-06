if (!customElements.get('s-header')) {
    customElements.define('s-header', class SHeader extends HTMLElement {
      constructor() {
        super();
      }
      
      connectedCallback() {
        this.openMobileMenu()
      }

      openMobileMenu() {
        this.querySelector('.mobile-menu__btn').addEventListener('click', () => {
            this.querySelector('.mobile-menu__btn').classList.toggle('mobile-menu__btn--active')
            this.querySelector('.mobile-sidebar').classList.toggle('mobile-sidebar--active')
        })
        
    }

    })
  }
