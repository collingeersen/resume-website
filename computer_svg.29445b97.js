(function () {

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  var parcelRequire = $parcel$global["parcelRequirec8c2"];
var parcelRegister = parcelRequire.register;
parcelRegister("c0O6E", function(module, exports) {
//Almost always extends from HTMLElements for general components
class $297957e2fc8307e6$var$computerComponent extends HTMLElement {
    constructor(){
        //Always invoke an empty super first
        super();
        //Attaches a shadow to the DOMFragment
        this.attachShadow({
            mode: "open"
        });
        //Attaches to the shadow root the innerHTML
        this.shadowRoot.append($297957e2fc8307e6$var$computerComponent.template.content.cloneNode(true));
    }
}
//Attaching through template so HTML is readily available for reuse on page 
$297957e2fc8307e6$var$computerComponent.template = document.createElement("template");
//Use innerHTML to insert, add html within the backticks
$297957e2fc8307e6$var$computerComponent.template.innerHTML = `
  <style>
  svg {
    width: 20dvh;
    height: 20dvh;
  }
  #screenglow{
    //scale: 1;
    //translate: 0;
    animation-name: screenglow-animation;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    animation-direction: alternate;
    opacity: 1;

  }
  @keyframes screenglow-animation {
    from{
        scale: 1;
        translate: 0;
        opacity: 1;
    }
    to {
        scale: 1.1;
        translate: -5px -5px;
        opacity: 0.8;
    }
  }
  #prompt{
      animation-name: prompt-animation;
      animation-iteration-count: infinite;
      animation-duration: 1s;
      animation-direction: alternate;
      opacity: 1;
  }
  @keyframes prompt-animation {
    from{
      opacity: 0;
    }
    50%{
      opacity: 1;
    }
    to {
      opacity: 1;
    }
}
  </style>
  
  <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="computer">
    <g id="computer_2" stroke="#000" stroke-width=".8">
      <path id="frame-round" d="M16 3.4h78c3.1 0 5.6 2.5 5.6 5.6v83.6H10.4V9c0-3.1 2.5-5.6 5.6-5.6Z" fill="#9E9888"/>
      <rect id="base" x="5.4" y="93.4" width="99.2" height="9.2" rx="1.6" fill="#202020"/>
      <path id="screen" d="M23.78 18.78c.67-.67 2.04-1.3 4.01-1.86a52.72 52.72 0 0 1 7.3-1.4A159.7 159.7 0 0 1 55 14.4c7.11 0 14.22.37 19.92 1.12 2.85.38 5.33.84 7.29 1.4 1.97.56 3.34 1.2 4 1.86.68.67 1.31 2.04 1.87 4.01a52.7 52.7 0 0 1 1.4 7.3A159.7 159.7 0 0 1 90.6 50c0 7.11-.37 14.22-1.12 19.92a52.7 52.7 0 0 1-1.4 7.29c-.56 1.97-1.2 3.34-1.86 4-.67.68-2.04 1.31-4.01 1.87a52.72 52.72 0 0 1-7.3 1.4A159.7 159.7 0 0 1 55 85.6c-7.11 0-14.22-.37-19.92-1.12a52.72 52.72 0 0 1-7.29-1.4c-1.97-.56-3.34-1.2-4-1.86-.68-.67-1.31-2.04-1.87-4.01a52.72 52.72 0 0 1-1.4-7.3A160.4 160.4 0 0 1 19.4 50c0-7.11.37-14.22 1.12-19.92.38-2.85.84-5.33 1.4-7.29.56-1.97 1.2-3.34 1.86-4Z" fill="#000"/>
      <path id="decal-1" fill="#D9D9D9" d="M13.4 87.4h11.2v2.2H13.4z"/>
      <path id="decal-2" fill="#D9D9D9" d="M84.4 87.4h6.2v2.2h-6.2z"/>
      <path id="decal-3" fill="#D9D9D9" d="M94.4 87.4h2.2v2.2h-2.2z"/>
    </g>
    <g id="keyboard" stroke="#000" stroke-width=".8">
      <rect id="board" x=".4" y="99.4" width="109.2" height="7.2" rx="1.6" fill="#9E9888"/>
      <g id="keys" fill="#D9D9D9">
        <path id="Rectangle 40" d="M8.4 98.4h2.2v2.2H8.4z"/>
        <path id="Rectangle 41" d="M13.4 98.4h2.2v2.2h-2.2z"/>
        <path id="Rectangle 42" d="M18.4 98.4h2.2v2.2h-2.2z"/>
        <path id="Rectangle 47" d="M23.4 98.4h2.2v2.2h-2.2z"/>
        <path id="Rectangle 48" d="M28.4 98.4h2.2v2.2h-2.2z"/>
        <path id="Rectangle 49" d="M33.4 98.4h2.2v2.2h-2.2z"/>
        <path id="Rectangle 50" d="M38.4 98.4h2.2v2.2h-2.2z"/>
        <path id="Rectangle 51" d="M43.4 98.4h2.2v2.2h-2.2z"/>
        <path id="Rectangle 52" d="M48.4 98.4h2.2v2.2h-2.2z"/>
        <path id="Rectangle 53" d="M53.4 98.4h2.2v2.2h-2.2z"/>
        <path id="Rectangle 54" d="M58.4 98.4h2.2v2.2h-2.2z"/>
        <path id="Rectangle 55" d="M63.4 98.4h2.2v2.2h-2.2z"/>
        <path id="Rectangle 56" d="M68.4 98.4h2.2v2.2h-2.2z"/>
        <path id="Rectangle 57" d="M73.4 98.4h2.2v2.2h-2.2z"/>
        <path id="Rectangle 58" d="M78.4 98.4h2.2v2.2h-2.2z"/>
        <path id="Rectangle 59" d="M83.4 98.4h2.2v2.2h-2.2z"/>
        <path id="Rectangle 60" d="M88.4 98.4h2.2v2.2h-2.2z"/>
        <path id="Rectangle 63" d="M93.4 98.4h8.2v2.2h-8.2z"/>
      </g>
    </g>
    <g id="code">
      <g id="line-9" fill="#00BB34">
        <path id="line-9-2" d="M54 70h3v3h-3z"/>
        <path id="line-9-1" d="M31 70h20v3H31z"/>
      </g>
      <g id="line-8">
        <path id="line-8-1" fill="#00BB34" d="M31 64h40v3H31z"/>
      </g>
      <g id="line-7" fill="#00BB34">
        <path id="line-7-3" d="M67 58h3v3h-3z"/>
        <path id="line-7-2" d="M44 58h20v3H44z"/>
        <path id="line-7-1" d="M31 58h10v3H31z"/>
      </g>
      <g id="line-6" fill="#00BB34">
        <path id="line-6-2" d="M50 52h10v3H50z"/>
        <path id="line-6-1" d="M31 52h16v3H31z"/>
      </g>
      <g id="line-5" fill="#00BB34">
        <path id="line-5-3" d="M50 46h3v3h-3z"/>
        <path id="line-5-2" d="M44 46h3v3h-3z"/>
        <path id="line-5-1" d="M31 46h10v3H31z"/>
      </g>
      <g id="line-4">
        <path id="line-4-1" fill="#00BB34" d="M31 40h30v3H31z"/>
      </g>
      <g id="line-3" fill="#00BB34">
        <path id="line-3-2" d="M37 34h20v3H37z"/>
        <path id="line-3-1" d="M31 34h3v3h-3z"/>
      </g>
      <g id="line-2">
        <path id="line-2-1" fill="#00BB34" d="M31 28h40v3H31z"/>
      </g>
      <g id="line-1" fill="#00BB34">
        <path id="line-1-2" d="M68 22h3v3h-3z"/>
        <path id="line-1-1" d="M31 22h34v3H31z"/>
      </g>
      <path id="prompt" fill="#00BB34" d="M31 76h1v3h-1z"/>
    </g>
    <g id="screenglow" filter="url(#filter0_f_3_73)">
      <path d="M94.4 52.1C94.4 75.92 103 90 55.09 90 6.62 90 15.78 75.91 15.78 52.1c0-23.8-9.7-43.1 39.3-43.1C103.02 9 94.4 28.3 94.4 52.1Z" fill="#00BB34" fill-opacity=".2"/>
    </g>
  </g>
  <defs>
    <filter id="filter0_f_3_73" x="11" y="5" width="88" height="89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_3_73"/>
    </filter>
  </defs>
</svg>
  
  `;
//Lastly declare the web component with kebab case
customElements.define("computer-comp", $297957e2fc8307e6$var$computerComponent);

});

})();
//# sourceMappingURL=computer_svg.29445b97.js.map
