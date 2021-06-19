import elem from 'url:./test.html'
import script from 'url:./script.js'
import './nav.module.css'



const updateNav = (e, name, oldValue, newValue) => {

    //console.log(e)
    console.log(name)
    console.log(oldValue)

    document.title = newValue
}


const readReadHtml = async () => {

    const parser = new DOMParser();
    const utf8Decoder = new TextDecoder('utf-8');
    const response = await fetch(elem);
    const reader = response.body.getReader();
    let { value: chunk, done: readerDone } = await reader.read();
    chunk = chunk ? utf8Decoder.decode(chunk) : ''



    const htmlDoc = parser.parseFromString(chunk, "text/html");

    return htmlDoc;
}

const initElement = async (shadowRoot) => {

    let doc = await readReadHtml()
    let template = doc.getElementById('nav');





    // something.addEventListener('click', event => {
    //     console.log('I Am clicked')
    //   });



    let templateContent = template.content;



    // let something = templateContent.getElementById('test-button')
   
    // something.addEventListener('click', () => {
    //     console.log('I Am clicked')
    // });
    // console.log(something)
    shadowRoot.appendChild(templateContent.cloneNode(true));

    // shadowRoot.querySelector('#button').addEventListener('click', () => console.log('we can click'));

    //  const linkElem = document.createElement('script');
    
    //  linkElem.setAttribute('src', script);

    // // Attach the created element to the shadow dom
      //shadowRoot.appendChild(linkElem);
    let style = document.querySelector('link[rel="stylesheet"]');
    shadowRoot.appendChild(style.cloneNode(true))

}


class HeaderNav extends HTMLElement {

    static get observedAttributes() { return ['data-title']; }


    constructor() {
        // Always call super first in constructor
        super();
        this.attachShadow({ mode: 'open' });
        // this.close = this.close.bind(this);
        //lets try and async call


        //    console.log(cssStyle)







        // Create a shadow root
        // const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));
        // 
        // Create a shadow root
        //shadowRoot.append(style);
        // console.log(shadowRoot)
        // // write element functionality in here
        // const wrapper = document.createElement('div');
        // wrapper.setAttribute('class', 'nav');
        // document.title = this.getAttribute('data-title')

        // // Create some CSS to apply to the shadow dom
        // //   const style = document.createElement('style');
        // //   style.textContent = '.wrapper {' +
        // //   // CSS truncated for brevity

        // // attach the created elements to the shadow DOM
        // this.shadowRoot.append(wrapper);


    }


    connectedCallback() {
        console.log('nav head has been added');
        const { shadowRoot } = this;
        initElement(shadowRoot);
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
        updateNav(this, name, oldValue, newValue);


    }
}
customElements.define('nav-header', HeaderNav);



const slottedSpan = document.querySelector('title');

console.log(slottedSpan.assignedSlot);
console.log(slottedSpan.slot);


