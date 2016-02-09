# thats-life
Game of Life - Javascript / jQuery / Three.js / WebGL

This is just a little experiment to learn a bit about webgl, javascript, bootstrap and three.js.

There seem to be some issues with leaks in WebGL in chrome.  Using the default configuration (100 cells in a horizontal line) with WebGL causes chrome to hang on my machine after 300 or so generations.  When I say hang, I mean the computer is frozen for 60 seconds.  Eventually, it has come back every time.

Using the canvas renderer produces a more stable, albeit slower result.

Javascript certainly has some interesting ways to leak and I believe that I've chased down my leaks.  I suspect that something is leaking webgl resources.  This leak does not appear in the chrome dev tools.  Also, the WebGL version seems to work better in safari.

<a href="http://rawgit.com/esscbee/thats-life/master/life.html">Try it out</a>
