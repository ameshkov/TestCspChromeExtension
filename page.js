/**
 * The function to be executed in the page context
 */
var inlineScript = function () {
  console.log('Hello, I am an inline script');

  // Clean up
  var currentScript = document.currentScript;
  if (currentScript) {
    currentScript.parentNode.removeChild(currentScript);
  }
};

// Load and execute the in-page parser script
var script = document.createElement('script');
script.innerHTML = '(' + inlineScript.toString() + ')();';
document.head.appendChild(script);