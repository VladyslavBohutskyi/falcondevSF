if (!customElements.get('s-header')) {
    customElements.define('s-header', class SHeader extends HTMLElement {
      constructor() {
        super();
      }
      
      connectedCallback() {
        console.log('ggg');
        this.openMobileMenu()
      }

      openMobileMenu() {
        console.log('func');
        this.querySelector('.mobile-menu__btn').addEventListener('click', () => {
            this.querySelector('.mobile-menu__btn').classList.toggle('mobile-menu__btn--active')
        }
        )
    }

    })
  }
