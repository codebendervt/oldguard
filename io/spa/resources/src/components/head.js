const updateHeader = (e, name, oldValue, newValue) => {

    console.log(e)
    console.log(name)
    console.log(oldValue)

    document.title = newValue
}



class HeadTitle extends HTMLElement {

    static get observedAttributes() { return ['text', 'data-text']; }


    constructor() {
        // Always call super first in constructor
        super();

        // write element functionality in here


        // Create a shadow root
        this.attachShadow({ mode: 'open' }); // sets and returns 'this.shadowRoot'
        document.title = this.getAttribute('data-text')

        // Create some CSS to apply to the shadow dom
        //   const style = document.createElement('style');
        //   style.textContent = '.wrapper {' +
        //   // CSS truncated for brevity

        // attach the created elements to the shadow DOM
        //this.shadowRoot.append(wrapper);


    }


    connectedCallback() {
        console.log('head has been added');
        // updateStyle(this);
    }

    disconnectedCallback() {
        console.log('Custom square element removed from page.');
    }

    adoptedCallback() {
        console.log('Custom square element moved to new page.');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Custom square element attributes changed.');
        updateHeader(this, name, oldValue, newValue);


    }
}
customElements.define('head-title', HeadTitle);



