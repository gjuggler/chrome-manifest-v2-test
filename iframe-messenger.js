window.addEventListener('load', function() {
  // Test to ensure that we can eval()
  eval('window.parent.postMessage("Greetings from iframe.", "*");');

  // Listen and respond to messages.
  window.addEventListener('message', function(event) {
    event.source.postMessage('Holla back! (You said "' + event.data + '")', '*');
  });
},
false);