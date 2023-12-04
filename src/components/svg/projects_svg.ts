//Almost always extends from HTMLElements for general components
class projectsComp extends HTMLElement {
    //Declares the type for template, not needed in javascript
    static template: any;
  
    constructor() {
      //Always invoke an empty super first
      super();
      //Attaches a shadow to the DOMFragment
      this.attachShadow({ mode: "open" });
      //Attaches to the shadow root the innerHTML
      this.shadowRoot.append(projectsComp.template.content.cloneNode(true));
    }
  
  }
  
  //Attaching through template so HTML is readily available for reuse on page 
  projectsComp.template = document.createElement("template");
  
  //Use innerHTML to insert, add html within the backticks
  projectsComp.template.innerHTML = `
    <style>
    svg {
      width: 150px;
      height: 150px;
      filter: grayscale(0);
    }
    #webpage,
    #code,
    #abstract{
        animation-name: projects_animation;
        animation-iteration-count: infinite;
        translate: 100px;
    }
    
    @keyframes projects_animation {
        from {
            translate: 100px;
        }
        50%{
            translate: 0;
        }
        to {
            translate: -100px;
        }
    }
    
    #webpage{
        animation-duration: 5s;
        animation-delay: 1s;
        
    }
    
    #code{
        animation-duration: 5s;
        animation-delay: 3s;
    }
    
    #abstract{
        animation-duration: 5s;
        animation-delay: 4s;
    }
    @media (min-width: 900px) {
      svg {
        width: 20dvh;
        height: 20dvh;
      }
    }
    
    </style>
    <svg width="60" height="90" viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="projects" clip-path="url(#clip0_44_828)">
    <g id="abstract">
      <rect id="background" x=".5" y=".5" width="59" height="89" rx="2.5" fill="#212622" stroke="#000"/>
      <g id="output">
        <path d="M10 69h39v15a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V69Z" fill="#000"/>
        <path d="M10 67a1 1 0 0 1 1-1h37a1 1 0 0 1 1 1v2H10v-2Z" fill="#646464"/>
        <path d="M13 75h12v1H13v-1Z" fill="#D9D9D9"/>
        <path d="M26 75h3v1h-3v-1Z" fill="#D9D9D9"/>
        <path d="M13 79h3v1h-3v-1Z" fill="#D9D9D9"/>
        <path d="M44 67h2v1h-2v-1Z" fill="#D9D9D9"/>
        <path d="M47 67h1v1h-1v-1Z" fill="#D9D9D9"/>
        <path d="M13 72h12v1H13v-1Z" fill="#D9D9D9"/>
      </g>
      <path id="OUTPUT" d="M32.89 81.55c0 .3-.06.58-.18.8a1.25 1.25 0 0 1-1.16.69 1.27 1.27 0 0 1-1.16-.69c-.12-.22-.18-.5-.18-.8 0-.32.06-.59.18-.8a1.26 1.26 0 0 1 1.16-.7 1.24 1.24 0 0 1 1.16.69c.12.22.18.5.18.8Zm-.53 0c0-.23-.04-.41-.1-.56a.77.77 0 0 0-.3-.35.75.75 0 0 0-.41-.12c-.16 0-.3.04-.42.12a.78.78 0 0 0-.28.35c-.07.15-.1.33-.1.56 0 .22.03.4.1.56a.73.73 0 0 0 .7.46c.16 0 .3-.04.42-.12.12-.08.21-.2.28-.34.07-.16.1-.34.1-.56Zm2.86-1.46h.53V82a1 1 0 0 1-.56.92 1.4 1.4 0 0 1-.63.13c-.23 0-.44-.04-.62-.13a1 1 0 0 1-.4-.37c-.1-.16-.16-.34-.16-.55v-1.9h.53v1.86c0 .12.03.23.08.32.06.1.13.17.23.22.1.06.21.08.34.08.14 0 .25-.02.35-.08a.5.5 0 0 0 .23-.22c.05-.1.08-.2.08-.32V80.1Zm.97.44v-.44h2.32v.44h-.9V83h-.52v-2.47h-.9ZM38.96 83v-2.9h1.09c.22 0 .41.03.56.12.15.08.27.2.35.34.08.14.12.3.12.5 0 .18-.04.35-.12.5a.84.84 0 0 1-.35.33 1.1 1.1 0 0 1-.57.13h-.72v-.44h.65c.13 0 .24-.02.32-.06a.4.4 0 0 0 .19-.2.6.6 0 0 0 .06-.27.6.6 0 0 0-.06-.27.42.42 0 0 0-.19-.18.68.68 0 0 0-.32-.07h-.48V83h-.53Zm4.4-2.9h.53V82c0 .2-.05.38-.14.54a1 1 0 0 1-.42.37c-.17.09-.38.13-.62.13-.23 0-.44-.04-.62-.13a1 1 0 0 1-.41-.37 1 1 0 0 1-.15-.55v-1.9h.53v1.86c0 .12.03.23.08.32.05.1.13.17.23.22.1.06.21.08.34.08a.65.65 0 0 0 .58-.3c.05-.1.08-.2.08-.32v-1.86Zm.98.43v-.44h2.32v.44h-.9V83h-.52v-2.47h-.9Z" fill="#fff"/>
      <rect id="black-box" x="18" y="33" width="24" height="24" rx="5" fill="#000"/>
      <path id="BLACK BOX" d="M24.29 44v-2.9h1.11c.21 0 .39.02.52.09a.7.7 0 0 1 .32.27c.07.11.1.24.1.39 0 .11-.02.21-.06.3a.57.57 0 0 1-.19.2.77.77 0 0 1-.25.11v.03c.1 0 .2.04.3.1.09.05.17.14.23.24.06.1.09.23.09.38s-.04.28-.11.4a.74.74 0 0 1-.33.29c-.15.07-.33.1-.56.1H24.3Zm.52-.44h.57c.2 0 .33-.04.41-.11a.36.36 0 0 0 .13-.28.44.44 0 0 0-.24-.4.6.6 0 0 0-.29-.06h-.58v.85Zm0-1.23h.53a.6.6 0 0 0 .24-.05.38.38 0 0 0 .24-.36.38.38 0 0 0-.12-.29c-.08-.07-.2-.1-.35-.1h-.54v.8Zm2.1 1.67v-2.9h.53v2.46h1.28V44h-1.8Zm2.75 0h-.56l1.03-2.9h.65L31.8 44h-.56l-.78-2.31h-.02L29.66 44Zm.02-1.14h1.54v.42h-1.54v-.42Zm4.86-.79H34a.66.66 0 0 0-.24-.4.64.64 0 0 0-.2-.1.81.81 0 0 0-.67.07.78.78 0 0 0-.3.35c-.06.15-.1.34-.1.56 0 .22.04.4.1.56a.77.77 0 0 0 .7.46c.1 0 .18-.01.26-.04a.67.67 0 0 0 .2-.1.63.63 0 0 0 .24-.4h.54a1.14 1.14 0 0 1-.76.93c-.14.05-.3.08-.47.08a1.24 1.24 0 0 1-1.16-.69c-.12-.22-.18-.5-.18-.8 0-.32.06-.59.18-.8a1.25 1.25 0 0 1 1.16-.7 1.33 1.33 0 0 1 .82.27c.11.09.2.2.27.32.07.13.12.27.14.43Zm.48 1.93v-2.9h.53v1.33h.03l1.14-1.34h.64l-1.12 1.3L37.37 44h-.63l-.87-1.25-.32.38V44h-.53ZM24.3 49v-2.9h1.11c.21 0 .39.02.52.09a.7.7 0 0 1 .32.27c.07.11.1.24.1.39 0 .11-.02.21-.06.3a.57.57 0 0 1-.19.2.77.77 0 0 1-.25.11v.03c.1 0 .2.04.3.1.09.05.17.14.23.24.06.1.09.23.09.38s-.04.28-.11.4a.74.74 0 0 1-.33.29c-.15.07-.33.1-.56.1H24.3Zm.52-.44h.57c.2 0 .33-.04.41-.11a.36.36 0 0 0 .13-.28.44.44 0 0 0-.24-.4.6.6 0 0 0-.29-.06h-.58v.85Zm0-1.23h.53a.6.6 0 0 0 .24-.05.38.38 0 0 0 .24-.36.38.38 0 0 0-.12-.29c-.08-.07-.2-.1-.35-.1h-.54v.8Zm4.7.22c0 .3-.05.58-.17.8a1.25 1.25 0 0 1-1.16.69 1.27 1.27 0 0 1-1.16-.69c-.12-.22-.18-.5-.18-.8 0-.32.06-.59.18-.8a1.26 1.26 0 0 1 1.16-.7 1.24 1.24 0 0 1 1.16.69c.12.22.18.5.18.8Zm-.52 0c0-.23-.04-.41-.1-.56a.77.77 0 0 0-.3-.35.75.75 0 0 0-.41-.12c-.16 0-.3.04-.42.12a.78.78 0 0 0-.29.35c-.06.15-.1.33-.1.56 0 .22.04.4.1.56a.76.76 0 0 0 .7.46c.17 0 .3-.04.43-.12.12-.08.21-.2.28-.34.07-.16.1-.34.1-.56Zm1.36-1.46.64 1.07.65-1.07h.6l-.9 1.46.91 1.45h-.61L31 47.94 30.34 49h-.6l.91-1.45-.9-1.46h.6Z" fill="#fff"/>
      <g id="input">
        <path d="M10 7h39v15a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V7Z" fill="#000"/>
        <path d="M10 5a1 1 0 0 1 1-1h37a1 1 0 0 1 1 1v2H10V5Z" fill="#646464"/>
        <path d="M13 10h12v1H13v-1Z" fill="#D9D9D9"/>
        <path d="M26 10h3v1h-3v-1Z" fill="#D9D9D9"/>
        <path d="M44 5h2v1h-2V5Z" fill="#D9D9D9"/>
        <path d="M47 5h1v1h-1V5Z" fill="#D9D9D9"/>
      </g>
      <path id="INPUT" d="M35.81 18.1V21h-.52v-2.9h.52Zm2.97 0V21h-.47l-1.37-1.98h-.03V21h-.53v-2.9h.48l1.37 1.97h.02V18.1h.53Zm.57 2.9v-2.9h1.09c.22 0 .41.03.56.12.16.08.27.2.35.34.08.14.12.3.12.5 0 .18-.04.35-.12.5a.84.84 0 0 1-.35.33 1.1 1.1 0 0 1-.57.13h-.72v-.44h.65c.13 0 .24-.02.32-.06a.4.4 0 0 0 .19-.2.6.6 0 0 0 .06-.27.6.6 0 0 0-.06-.27.42.42 0 0 0-.19-.18.68.68 0 0 0-.32-.07h-.48V21h-.53Zm4.4-2.9h.53V20a1 1 0 0 1-.14.54 1 1 0 0 1-.42.37c-.17.09-.38.13-.62.13-.23 0-.44-.04-.62-.13a1 1 0 0 1-.41-.37 1 1 0 0 1-.15-.55v-1.9h.53v1.86c0 .12.03.23.08.32.05.1.13.17.23.22.1.06.21.08.34.08a.65.65 0 0 0 .58-.3c.05-.1.08-.2.08-.32v-1.86Zm.98.43v-.44h2.32v.44h-.9V21h-.52v-2.47h-.9Z" fill="#fff"/>
      <path id="Arrow 4" d="m30 33 2.89-5H27.1l2.9 5Zm-.5-9v4.5h1V24h-1Z" fill="#000"/>
      <path id="Arrow 5" d="m30 66 2.89-5H27.1l2.9 5Zm-.5-9v4.5h1V57h-1Z" fill="#000"/>
    </g>
    <g id="code">
      <rect id="window" x=".5" y=".5" width="59" height="89" rx="1.5" fill="#181818" stroke="#000"/>
      <rect id="background_2" x="3" y="3" width="54" height="84" rx="2" fill="#1F1F1F"/>
      <g id="tool-bar" fill="#D9D9D9">
        <path id="Rectangle 152" d="M6 1h7v1H6z"/>
        <path id="Rectangle 153" d="M15 1h7v1h-7z"/>
        <path id="Rectangle 154" d="M24 1h7v1h-7z"/>
        <path id="Rectangle 155" d="M51 1h3v1h-3z"/>
        <path id="Rectangle 156" d="M46 1h3v1h-3z"/>
      </g>
      <g id="scroll-bar">
        <path id="Rectangle 150" fill="#656262" d="M57 5h1v82h-1z"/>
        <path id="Rectangle 151" fill="#000" d="M57 12h1v5h-1z"/>
      </g>
      <rect id="Rectangle 146" x="44" y="5" width="10" height="12" rx="2" fill="#000"/>
      <g id="cmd">
        <path id="Rectangle 147" d="M30 75c0-1.1.9-2 2-2h23a2 2 0 0 1 2 2v12H30V75Z" fill="#463F3F"/>
        <rect id="Rectangle 149" x="31" y="74" width="25" height="12" rx="2" fill="#000"/>
        <path id="Rectangle 148" fill="#A2A2A2" d="M33 81h1v3h-1z"/>
      </g>
      <g id="code-lines">
        <path id="Rectangle 135" fill="#9A9A9A" d="M18 57h9v1h-9z"/>
        <path id="Rectangle 136" fill="#B45959" d="M18 59h6v1h-6z"/>
        <path id="Rectangle 139" fill="#B45959" d="M18 65h6v1h-6z"/>
        <path id="Rectangle 137" fill="#9A9A9A" d="M18 61h8v1h-8z"/>
        <path id="Rectangle 123" fill="#49903D" d="M15 32h10v1H15z"/>
        <path id="Rectangle 124" fill="#9A9A9A" d="M15 36h10v1H15z"/>
        <path id="Rectangle 127" fill="#9A9A9A" d="M15 40h10v1H15z"/>
        <path id="Rectangle 126" fill="#9A9A9A" d="M18 38h6v1h-6z"/>
        <path id="Rectangle 128" fill="#9A9A9A" d="M18 42h6v1h-6z"/>
        <path id="Rectangle 129" fill="#9A9A9A" d="M18 44h6v1h-6z"/>
        <path id="Rectangle 125" fill="#9A9A9A" d="M18 34h7v1h-7z"/>
        <path id="Rectangle 130" fill="#61578A" d="M12 47h25v1H12z"/>
        <path id="Rectangle 131" fill="#9A9A9A" d="M12 49h25v1H12z"/>
        <path id="Rectangle 132" fill="#9A9A9A" d="M12 51h25v1H12z"/>
        <path id="Rectangle 133" fill="#9A9A9A" d="M12 53h11v1H12z"/>
        <path id="Rectangle 134" fill="#9A9A9A" d="M15 55h11v1H15z"/>
        <path id="Rectangle 138" fill="#9A9A9A" d="M15 63h11v1H15z"/>
        <path id="Rectangle 111" fill="#49903D" d="M12 5h10v1H12z"/>
        <path id="Rectangle 112" fill="#49913D" d="M12 7h9v1h-9z"/>
        <path id="Rectangle 113" fill="#49903D" d="M12 9h6v1h-6z"/>
        <path id="Rectangle 114" fill="#49903D" d="M12 11h10v1H12z"/>
        <path id="Rectangle 115" fill="#61578A" d="M12 15h25v1H12z"/>
        <path id="Rectangle 116" fill="#9A9A9A" d="M15 17h12v1H15z"/>
        <path id="Rectangle 117" fill="#9A9A9A" d="M18 19h8v1h-8z"/>
        <path id="Rectangle 118" fill="#9A9A9A" d="M18 21h10v1H18z"/>
        <path id="Rectangle 119" fill="#B45959" d="M21 23h6v1h-6z"/>
        <path id="Rectangle 120" fill="#9A9A9A" d="M15 25h8v1h-8z"/>
        <path id="Rectangle 121" fill="#9A9A9A" d="M18 27h4v1h-4z"/>
        <path id="Rectangle 122" fill="#61578A" d="M12 30h20v1H12z"/>
      </g>
    </g>
    <g id="webpage">
      <path id="window_2" fill="#181D1F" stroke="#000" d="M.5.5h59v89H.5z"/>
      <path id="background_3" d="M5 5h50v69a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5Z" fill="#0C1020"/>
      <g id="box-bg" fill="#2B3463">
        <rect id="Rectangle 72" x="10" y="10" width="40" height="28" rx="3"/>
        <rect id="Rectangle 74" x="10" y="40" width="40" height="5" rx="2.5"/>
        <rect id="Rectangle 75" x="10" y="69" width="18" height="5" rx="2"/>
        <rect id="Rectangle 77" x="10" y="47" width="18" height="20" rx="3"/>
        <rect id="Rectangle 78" x="32" y="47" width="18" height="27" rx="3"/>
        <path id="Rectangle 76" d="M7 80h46v4H7z"/>
      </g>
      <g id="content-padding" fill="#212436">
        <rect id="Rectangle 70" x="5" y="78" width="50" height="8" rx="3"/>
        <path id="Rectangle 79" d="M15 15h30v10H15z"/>
        <path id="Rectangle 88" d="M15 32h30v4H15z"/>
        <path id="Rectangle 90" d="M17 27h8v3h-8z"/>
        <path id="Rectangle 87" d="M27 25h18v5H27z"/>
        <path id="Rectangle 81" d="M36 50h10v8H36z"/>
        <path id="Rectangle 83" d="M36 62h10v8H36z"/>
        <path id="Rectangle 82" d="M14 51h10v12H14z"/>
      </g>
      <g id="nav-bar">
        <path id="Rectangle 71" fill="#20274A" stroke="#000" d="M.5.5h59v5H.5z"/>
        <rect id="Rectangle 92" x="10" y="2" width="3" height="2" rx="1" fill="#D9D9D9"/>
        <rect id="Rectangle 93" x="16" y="2" width="3" height="2" rx="1" fill="#D9D9D9"/>
        <rect id="Rectangle 94" x="47" y="2" width="3" height="2" rx="1" fill="#D9D9D9"/>
      </g>
      <g id="content" fill="#80C24A">
        <rect id="Rectangle 84" x="17" y="16" width="26" height="3" rx="1"/>
        <rect id="Rectangle 85" x="17" y="21" width="10" height="2" rx="1"/>
        <rect id="Rectangle 91" x="18" y="28" width="6" height="1" rx=".5"/>
        <rect id="Rectangle 97" x="8" y="81" width="10" height="2" rx="1"/>
        <rect id="Rectangle 98" x="25" y="81" width="10" height="2" rx="1"/>
        <rect id="Rectangle 99" x="42" y="81" width="10" height="2" rx="1"/>
        <rect id="Rectangle 100" x="37" y="63" width="8" height="2" rx="1"/>
        <rect id="Rectangle 102" x="37" y="55" width="8" height="2" rx="1"/>
        <rect id="Rectangle 103" x="37" y="51" width="8" height="2" rx="1"/>
        <rect id="Rectangle 104" x="15" y="52" width="8" height="2" rx="1"/>
        <rect id="Rectangle 105" x="15" y="56" width="4" height="2" rx="1"/>
        <rect id="Rectangle 106" x="15" y="60" width="4" height="2" rx="1"/>
        <rect id="Rectangle 107" x="20" y="56" width="3" height="6" rx="1"/>
        <rect id="Rectangle 101" x="37" y="67" width="8" height="2" rx="1"/>
        <path id="Rectangle 95" d="M17 12h4v1h-4z"/>
        <path id="Rectangle 96" d="M24 12h4v1h-4z"/>
        <rect id="Rectangle 89" x="17" y="33" width="26" height="2" rx="1"/>
        <rect id="Rectangle 86" x="29" y="20" width="14" height="9" rx="3"/>
      </g>
      <g id="scroll-bar_2">
        <path id="Rectangle 108" fill="#656262" d="M59 0h1v90h-1z"/>
        <path id="Rectangle 109" fill="#000" d="M59 11h1v5h-1z"/>
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="clip0_44_828">
      <path fill="#fff" d="M0 0h60v90H0z"/>
    </clipPath>
  </defs>
</svg>    
    `;
  //Lastly declare the web component with kebab case
  customElements.define("projects-comp", projectsComp);
  
  export{ };
