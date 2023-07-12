//Almost always extends from HTMLElements for general components
class tempComp extends HTMLElement {
  //Declares the type for template, not needed in javascript
  static template: any;

  constructor() {
    //Always invoke an empty super first
    super();
    //Attaches a shadow to the DOMFragment
    this.attachShadow({ mode: "open" });
    //Attaches to the shadow root the innerHTML
    this.shadowRoot.append(tempComp.template.content.cloneNode(true));
  }

}

//Attaching through template so HTML is readily available for reuse on page 
tempComp.template = document.createElement("template");

//Use innerHTML to insert, add html within the backticks
tempComp.template.innerHTML = `
  <style>
  div {
      background: red;
  }
  </style>
  <div>
  Default Text
  </div>
  `;
//Lastly declare the web component with kebab case
customElements.define("temp-comp", tempComp);
