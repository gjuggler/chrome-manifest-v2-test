window.onload = function() {
  // Create a listener to capture messages from the iframe.
  window.addEventListener('message', function(event) {
    console.log('Received message: ' + event.data);
  });

  // Create an iframe element with the correct extension URL.
  var iframe = document.createElement('iframe');
  iframe.sandbox = 'allow-scripts';
  iframe.id = 'myframe';
  var js_url = window.chrome.extension.getURL('iframe-messenger.js');
  iframe.src = 'data:text/html,<script src="' + js_url + '"></script>';
  document.getElementsByTagName('head')[0].appendChild(iframe);

  // Wait till the iframe is loaded, then send it a message.
  var iframe = document.getElementById('myframe');
  iframe.addEventListener('load', function() {
    iframe.contentWindow.postMessage('Holla!', '*');
  });
}