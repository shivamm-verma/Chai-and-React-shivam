function customRender(reactElement, container) {
  /*
  // method1
  const domElem = document.createElement(reactElement.type);
  domElem.innerHTML = reactElement.children;
  domElem.setAttribute("href", reactElement.prop.href);
  domElem.setAttribute("target", reactElement.prop.target);

    container.appendChild(domElem); 
    */

  // method2
  const domElem = document.createElement(reactElement.type);
  domElem.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElem.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElem);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },

  children: "Click to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
