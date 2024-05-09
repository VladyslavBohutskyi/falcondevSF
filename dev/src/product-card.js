if (!customElements.get('product-card')) {
    customElements.define('product-card', class ProductCard extends HTMLElement {
        constructor() {
            super()
        }
        connectedCallback(){

        }

    })
}