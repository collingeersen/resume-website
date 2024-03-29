//Almost always extends from HTMLElements for general components
class testBtn extends HTMLElement {
    //Declares the type for template, not needed in javascript
    static template: any;
  
    constructor() {
      //Always invoke an empty super first
      super();
      //Attaches a shadow to the DOMFragment
      this.attachShadow({ mode: "open" });
      //Attaches to the shadow root the innerHTML
      this.shadowRoot.append(testBtn.template.content.cloneNode(true));
    }
  
  }
  
  //Attaching through template so HTML is readily available for reuse on page 
  testBtn.template = document.createElement("template");
  
  //Use innerHTML to insert, add html within the backticks
  testBtn.template.innerHTML = `
    <style>
    :root {
        --dark-color: #5469D7;
        --light-color: #83F1F8;
    }

    svg {
        cursor: pointer;
    }

    #darkGroup {
        fill: var(--dark-color);
    }
    #lightGroup {
        fill: var(--light-color);
    }

    #dark1,
    #dark2,
    #light1 {
        transition: all 1000ms ease;
    }

    #dark2 {
        transform: translateX(-100%);
    }

    svg:hover #light1 {
        transform: translateX(15%);
    }
    svg:hover #dark1 {
        transform: translateX(40%);
        opacity: 0;
    }
    svg:hover #dark2 {
        transform: translateX(0%);
    }
    button{
        background: transparent;
        overflow: hidden;
        width: 90px;
        height: 100px;
    }
    </style>
    <button>
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="triangles">
        <g id="lightGroup">
            <path id="light1" 
                d="M48 50L15 69.0526L15 30.9474L48 50Z" 
                fill-opacity="0.7" 
            />
        </g>
        <g id="darkGroup">
            <path id="dark2" 
                d="M48 50L15 69.0526L15 30.9474L48 50Z" 
                fill-opacity="0.8" 
            />
            <path id="dark1" 
                d="M64.0001 50L31.0001 69.0526L31.0001 30.9474L64.0001 50Z" 
                fill-opacity="0.8" 
            />
        </g>
    </g>
    </svg>
    </button>
    `;
  //Lastly declare the web component with kebab case
  customElements.define("test-btn", testBtn);
  