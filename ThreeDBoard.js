var DEAD_COLOR = 0x1f1f1f;
var ALIVE_COLOR = 0x00a000;
var This;

LIFE.ThreeDBoard = function(width, height, window, document) {
	this.BOARD_SIZE_X = width;
	this.BOARD_SIZE_Y = height;
	this.SIDE = .9 ;
	this.GAP = .1;
	this.objects = [];
	this.MUL = 2;
	this.DX = (this.SIDE + this.GAP);

	this.write = false;
	this.toggle = true;
	this.erase = false;

	this.generationColors = [ ];
	var idx = 0;
	var masks = [ 0x00ff00, 0x00ffff, 0xffff00, 0xff0000, 0xff00ff ];
	for(var m in masks) {
		var mask = masks[m];
		for(var ci = 0x66; ci < 0xff; ci += 0x6) {
			var c = 0;
			for(var shiftCount = 0; shiftCount < 4; shiftCount++) {
				c = c << 8;
				c += ci;
			}
			this.generationColors[idx++] = c & mask;
		}
	}

	for(var c in this.generationColors) {
		var color = this.generationColors[c];
		console.log('0x' + color.toString(16));
	}

	this.scene = new THREE.Scene();
	this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

	this.renderer = new THREE.WebGLRenderer();
	this.window = window;
	this.renderer.setSize( window.innerWidth, window.innerHeight );
	this.canvasElement = document.body.appendChild( this.renderer.domElement );

	this.canvasElement.onclick = mouseClick;
	this.canvasElement.onmousemove = mouseMove;



	// var cube = new THREE.Mesh( geometry, material );
	// scene.add( cube );
	// console.dir(cube);
	this.cubes = [];


	// this.camera.position.y = 1;
	this.camera.position.z = this.MUL * this.BOARD_SIZE_X * .15;
	var light;
	if(true) {
		var ambientLight = new THREE.AmbientLight( 0x606060 );
		this.scene.add( ambientLight );
	}

	if(true) {
		var geometry = new THREE.PlaneBufferGeometry( (10 * this.MUL * width) * (this.SIDE + this.GAP), (10 * this.MUL * height) * (this.SIDE + this.GAP) );
		geometry.rotateX( - Math.PI / 2 );

		var plane = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { visible: false, opacity: 0, transparent: true } ) );
		plane.rotation.x = Math.PI / 2;
		this.scene.add( plane );
		this.objects.push(plane);
	}
	if(false) {
			var size = 500, step = 50;

			var geometry = new THREE.Geometry();

			for ( var i = - size; i <= size; i += step ) {

				geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
				geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );

				geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
				geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );

			}

			var material = new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.2, transparent: true } );

			var line = new THREE.LineSegments( geometry, material );
			this.scene.add( line );

	} else {

			var geometry = new THREE.Geometry();

			var top = - (Math.floor(this.MUL * this.BOARD_SIZE_Y / 2) + .5) * (this.SIDE + this.GAP);
			for ( var i = 0; i <= (this.MUL * BOARD_SIZE_X) + 1; i ++ ) {
				var x = (i - Math.floor(this.MUL * this.BOARD_SIZE_X / 2) - .5) * (this.SIDE + this.GAP);
				geometry.vertices.push( new THREE.Vector3( x, top, 0 ) );
				geometry.vertices.push( new THREE.Vector3( x , -top, 0 ) );
			}
			var left = - (Math.floor(this.MUL * this.BOARD_SIZE_X / 2) + .5) * (this.SIDE + this.GAP);
			for ( var j = 0; j <= (this.MUL * BOARD_SIZE_Y) + 1; j ++ ) {
				var y = (j - Math.floor(this.MUL * this.BOARD_SIZE_Y / 2) - .5) * (this.SIDE + this.GAP);
				geometry.vertices.push( new THREE.Vector3( left, y, 0 ) );
				geometry.vertices.push( new THREE.Vector3( -left , y, 0 ) );
			}

			var material = new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.2, transparent: true } );

			var line = new THREE.LineSegments( geometry, material );
			this.scene.add( line );
		}

	if(true) {
		light = new THREE.DirectionalLight( 0xffffff );
		light.position.set( 0, 0, 5 ).normalize();
		this.scene.add(light);
	}

	if(false) {
		var geometry = new THREE.CubeGeometry( this.SIDE, this.SIDE, this.SIDE);
		var material = new THREE.MeshPhongMaterial({ color: 0xaaaa00, specular: 0x00ff00, shininess: 30 });
		// material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
		this.globalCube = new THREE.Mesh( geometry, material );
		this.scene.add(this.globalCube);
	}
	this.raycaster = new THREE.Raycaster();
	this.mouse = new THREE.Vector2();


	var rollOverGeo = new THREE.BoxGeometry( this.SIDE, this.SIDE, this.SIDE);
	var rollOverMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00, opacity: 0.7, transparent: true, visible: false } );
	this.rollOverMesh = new THREE.Mesh( rollOverGeo, rollOverMaterial );
	this.scene.add( this.rollOverMesh );

	This = this;
	if(true) {
		this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
		this.controls.damping = 0.2;
		this.controls.addEventListener( 'change', function() {
			if(This)
				This.render();
		} );
	}



   window.addEventListener('resize', function() {
	  var WIDTH = window.innerWidth,
    	  HEIGHT = window.innerHeight;
    	  if(This && This.renderer) {
      		This.renderer.setSize(WIDTH, HEIGHT);
	      	This.camera.aspect = WIDTH / HEIGHT;
	      	This.camera.updateProjectionMatrix();
	      }
    });
 

	window.onbeforeunload = windowClose;
}

LIFE.ThreeDBoard.prototype = Object.create(Object.prototype);
LIFE.ThreeDBoard.prototype.constructor = LIFE.ThreeDBoard;
LIFE.ThreeDBoard.prototype.dispose = function() {
	This = undefined;
	var locRenderer = this.renderer;
	this.renderer = undefined;
	this.cubes = undefined;
	this.terminated = true;
	this.camera = undefined;
	this.controls = undefined;

	while(this.scene.children.length != 0) {
		var thisChild = this.scene.children[this.scene.children.length-1];
		this.scene.remove(thisChild);
		// if(thisChild instanceof THREE.Mesh) {
		// 	locRenderer.deallocateObject(thisChild);
		// }
	}
	locRenderer.dispose();
	this.scene = undefined;
	var parent = this.canvasElement.parentElement;
	parent.removeChild(this.canvasElement);
	var here = 10;
}
function position(event) {
	return generalPosition(event.offsetX, event.offsetY, This.mouse);
}
function deltaPosition(event) {
	var thisMouse = new THREE.Vector2();
	var x = event.offsetX + event.movementX;
	var y = event.offsetY + event.movementY;
	return generalPosition(x, y, thisMouse);
}
function generalPosition(ex, ey, mouse) {
	var position = {};
	if(!This)
		return;
	mouse.set( ( ex / window.innerWidth ) * 2 - 1, - ( ey / window.innerHeight ) * 2 + 1 );

	This.raycaster.setFromCamera( mouse, This.camera );

	var intersects = This.raycaster.intersectObjects( This.objects );

	if ( intersects.length > 0 ) {

		var dx = This.SIDE + This.GAP;
		var dx2 = dx / 2;
		var intersect = intersects[ 0 ];
		if(false) {
			This.rollOverMesh.position.copy( intersect.point ).add( intersect.face.normal );
			This.rollOverMesh.position.divideScalar( dx ).floor().multiplyScalar( dx ).addScalar( dx );
		} else {
			position.x = Math.floor((intersect.point.x + dx2) / dx) * dx;
			position.y = Math.floor((intersect.point.y + dx2) / dx) * dx;
		}
	}
	return position;
}
var lastX, lastY;
var lastTime = 0;
function setFromPos(pos, state) {
	var dx = This.SIDE + This.GAP;
	// console.log('mouseClick - dx: ' + dx);
	// console.dir(pos);
	var thisTime = new Date().getTime();
	var lifeX = Math.floor(pos.x / dx + This.BOARD_SIZE_X / 2);
	var lifeY = Math.floor(pos.y / dx + This.BOARD_SIZE_Y / 2);
	// console.log('setFromPos: (' + lifeX + ', ' + lifeY + ') :' + state);
	if(state != undefined || lastX != lifeX || lastY != lifeY || (thisTime - lastTime > 250)) {
		lastTime = thisTime;
		lastX = lifeX;
		lastY = lifeY;
		if(This.tcb && This.isEditing()) {
			This.tcb.setCell(lifeX, lifeY, state, false);
		}

	}		
}

function mouseClick(event) {
	var pos = position(event);
	if(event.metaKey) {
		// var v = new THREE.Vector3(pos.x, pos.y, 0);
		// This.controls.constraint.target.copy( v );
		// This.controls.update();
	} else {
		var newState;
		if(event.shiftKey) {
			newState = true;
		}
		if(event.ctrlKey) {
			newState = false;
			// console.log('control key mouse move: ' + newState);
		}
		setFromPos(pos, newState);			
	}

}

function mouseMove(event) {
	if(!This)
		return;

	var pos = position(event);
	var mx = event.movementX;
	var my = event.movementY;
	if(!This.isEditing()) {
		if(event.buttons == 0) {
			// console.log('move: (' + event.movementX + ', ' + event.movementY + ')');
			This.camera.position.x -= mx / 8;
			This.camera.position.y += my / 8;
		}
		return;
	}
	This.rollOverMesh.position.x = pos.x;
	This.rollOverMesh.position.y = pos.y;
	if(This.isEditing() && event.buttons != 0) {
		var newState;
		if(event.shiftKey) {
			newState = true;
		}
		if(event.ctrlKey) {
			newState = false;
			// console.log('control key mouse move: ' + newState);
		}
		if(true) { // /mx < -1 || mx > 1 || my < -1 || my > 1) {
			// console.log('skipping: (' + mx + ', ' + my + ')');
			// console.log('  position: (' + pos.x + ', ' + pos.y + ')');
			var fromPos = deltaPosition(event);
			mx = fromPos.x - pos.x;
			my = fromPos.y - pos.y;
			var amx = Math.abs(mx);
			var amy = Math.abs(my);
			var count = amx > amy ? amx : amy;
			var ourx = pos.x;
			var oury = pos.y;
			var dmx = mx / count;
			var dmy = my / count;

			for(var cc = 0; cc < count; cc++) {
				var ourPos = { x: Math.ceil(ourx), y: Math.ceil(oury) }
				setFromPos(ourPos, newState);
				ourx -= dmx;
				oury -= dmy;
			}

		} else
			setFromPos(pos, newState);
	}
}

function windowClose(event) {
	if(This)
		This.dispose();
}

LIFE.ThreeDBoard.prototype.render = function() {
	// console.log("render: ");
	// console.log("  scene: ");
	// this.globalCube.material.color.setHex(Math.random() * 0xffffff);
	// console.dir(this.scene);
	if(this.renderer) {
		this.renderer.render(this.scene, this.camera);
	}
}

//
// toggle call back for UI
//
LIFE.ThreeDBoard.prototype.addToggleCallback = function(tcb) {
	this.tcb = tcb;
}
LIFE.ThreeDBoard.prototype.isEditing = function() {
	if(this.controls) {
		return !this.controls.enabled;
	}
	return true;
}
LIFE.ThreeDBoard.prototype.setCell = function(i, j, state, generation, doRender) {
	// console.log('ThreeDBoard.setCell: (' + i + ', ' + j + ') state: ' + state + ' doRender: ' + doRender );
	var col = this.cubes[i];
	if(col == undefined && (state == undefined || state == DEAD))
		return;

	if(col == undefined) {
		col = [];
		this.cubes[i] = col;
	}
	var val = col[j];
	var colorSize = this.generationColors.length;
	var color = this.generationColors[ generation % colorSize ];

	if(val == null) {
		if(state == ALIVE) {
			var geometry = new THREE.CubeGeometry( this.SIDE, this.SIDE, this.SIDE);
			var material = new THREE.MeshPhongMaterial({ color: color
											// , specular: 0xffffff
											// , shininess: 100 
										});
			// material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
			var cube = new THREE.Mesh( geometry, material );
			cube.position.x = (i - (this.BOARD_SIZE_X / 2)) * (this.SIDE + this.GAP);
			cube.position.y = (j - (this.BOARD_SIZE_Y / 2)) * (this.SIDE + this.GAP);
			cube.lifeX = i;
			cube.lifeY = j;
			this.scene.add(cube);
			this.cubes[i][j] = cube;
			val = cube;
		}
	} else {
		if(state == DEAD) {
			val.visible = false;
		} else {
			val.visible = true;
			val.material.color.setHex(color);
		}
	}

	if(doRender == undefined || doRender == true)
		this.render();

}
LIFE.ThreeDBoard.prototype.animate = function() {
	function animate() {
		if(!This || This.terminated)
			return;
		requestAnimationFrame( animate );
		this.render();
	}
	animate();
}

/*
	pass setting, else it toggles.  returns new state
*/
LIFE.ThreeDBoard.prototype.navEditToggle = function(setting) {
	var newState = !this.controls.enabled;
	if(setting != undefined)
		newState = setting;
	this.controls.enabled = newState;
	this.rollOverMesh.material.visible = !newState;
	this.renderer.domElement.style.cursor = newState ? 'move' : 'none';
	return newState;
}
LIFE.ThreeDBoard.prototype.setControls = function(turnOn) {
	this.controls.enabled = turnOn;
	this.rollOverMesh.material.visible = !turnOn;
	this.renderer.domElement.style.cursor = turnOn ? 'move' : 'none';
}
LIFE.ThreeDBoard.prototype.setWrite = function(turnOn) {
	if(!turnOn) {
		var here = 20;
	}
	this.setControls(!turnOn);
	if(turnOn) {
		this.rollOverMesh.material.color.setHex(0x00ff00);
	}
}
LIFE.ThreeDBoard.prototype.setErase = function(turnOn) {
	this.setControls(!turnOn);
	if(turnOn) {
		this.rollOverMesh.material.color.setHex(0xff0000);
	}
}
LIFE.ThreeDBoard.prototype.processKeyEvent = function(event, turnOn) {
	var color = 0xffff00;
	if(event) {
		// console.log(event.type + ': ' + event.keyCode);
		switch(event.keyCode) {
			case 17:
				this.erase = turnOn;
				break;
			case 16:
				this.write = turnOn;
				break;
			case 18:
				if(turnOn) {
					this.write = false;
					this.erase = false;
					this.setControls(true);
					color = 0;
				} else
					this.setControls(false);
				break;
			case 9:
				event.preventDefault();
				if(turnOn)
					this.tcb.generate(true);
				break;
			case 32:
				event.preventDefault();
				if(turnOn)
					this.tcb.play(this.window);
				break;
			// case 93:
			// 	event.preventDefault();
			// 	if(false) {
			// 		if(turnOn)
			// 			this.tcb.play(this.window);
			// 	} else {
			// 		if(true) {
			// 			this.sliding = turnOn;
			// 			if(turnOn)
			// 				color = 0;
			// 		}
			// 	}
			// 	break;
		}
	} else {
		this.setControls(false);
	}
	if(!turnOn) {
		var here = 'hello';
	}
	if(this.erase)
		color = 0xff0000;
	if(this.write)
		color = 0x00ff00;
	if(color != 0) {
		this.rollOverMesh.material.visible = true;
		this.rollOverMesh.material.color.setHex(color);
	} else {
		this.rollOverMesh.material.visible = false;
	}

}

LIFE.ThreeDBoard.prototype.isNav = function(setting) {
	return this.controls && this.controls.enabled;
}
// LIFE.ThreeDBoard.prototype.render = function () {
// 		// requestAnimationFrame( render );
// 		// for(var i = 0; i < cubes.length; i++) {
// 		// 	for(var j = 0; j < BOARD_SIZE; j++) {
// 		// 		var cube = cubes[i][j];
// 		// 		cube.rotation.x += 0.1;
// 		// 		cube.rotation.y += 0.1;
// 		// 		// cube.material.color.setHex(Math.random() * 0xffffff);
// 		// 	}
// 		// }

// 		renderer.render(scene, camera);
// 	};

LIFE.ThreeDBoard.prototype.ready = function() {
	this.processKeyEvent();
}
LIFE.ThreeDBoard.prototype.compressBoard = function() {
	for(var i in this.cubes) {
		var col = this.cubes[i];
		var anyLive = false;
		for(var j in col) {
			var thisCube = col[j];
			if(!thisCube.visible) {
				this.scene.remove(thisCube);
				delete col[j];
			} else {
				anyLive = true;
			}
		}
		if(!anyLive)
			delete this.cubes[i];
	}
}
