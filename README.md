# thats-life
Game of Life - Javascript / jQuery / Three.js / WebGL

This is just a little experiment to learn a bit about webgl, javascript, bootstrap and three.js.  The default configuration causes chrome to hang on my machine after 50 or so iterations.  When I say hang, I mean the computer is frozen for 60 seconds.  Eventually, it has come back every time.

Javascript certainly has some interesting ways to leak and I believe that I've chased down my leaks.  I suspect that something is leaking webgl resources.  This leak does not appear in the chrome dev tools.

<a href="http://rawgit.com/esscbee/thats-life/master/life.html">Try it out</a>
