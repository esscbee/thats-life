var DEAD_COLOR = 0x1f1f1f;
var ALIVE_COLOR = 0x00a000;
LIFE.ThreeDBoard = function(width, height, window, document) {
	this.BOARD_SIZE_X = width;
	this.BOARD_SIZE_Y = height;
	this.SIDE = .9 ;
	this.GAP = .1;
	this.objects = [];
	this.MUL = 2;

	this.scene = new THREE.Scene();
	this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

	this.renderer = new THREE.WebGLRenderer();
	this.window = window;
	this.renderer.setSize( window.innerWidth, window.innerHeight );
	var canvasElement = document.body.appendChild( this.renderer.domElement );

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
		var geometry = new THREE.PlaneBufferGeometry( (this.MUL * width) * (this.SIDE + this.GAP), (this.MUL * height) * (this.SIDE + this.GAP) );
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
		var material = new THREE.MeshPhongMaterial({ color: 0xff0000, specular: 0x00ff00, shininess: 30 });
		// material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
		this.globalCube = new THREE.Mesh( geometry, material );
		this.scene.add(this.globalCube);
	}
	this.raycaster = new THREE.Raycaster();
	this.mouse = new THREE.Vector2();

	var This = this;

	var rollOverGeo = new THREE.BoxGeometry( this.SIDE, this.SIDE, this.SIDE);
	var rollOverMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.5, transparent: true, visible: false } );
	this.rollOverMesh = new THREE.Mesh( rollOverGeo, rollOverMaterial );
	this.scene.add( this.rollOverMesh );

	if(true) {
		this.controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
		this.controls.damping = 0.2;
		this.controls.addEventListener( 'change', function() {
			This.render();
		} );
	}

	function position(event) {
		var position = {};
		This.mouse.set( ( event.offsetX / window.innerWidth ) * 2 - 1, - ( event.offsetY / window.innerHeight ) * 2 + 1 );

		This.raycaster.setFromCamera( This.mouse, This.camera );

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
	function setFromPos(pos, state) {
		var dx = This.SIDE + This.GAP;
		// console.log('mouseClick - dx: ' + dx);
		// console.dir(pos);
		var lifeX = Math.floor(pos.x / dx + This.BOARD_SIZE_X / 2);
		var lifeY = Math.floor(pos.y / dx + This.BOARD_SIZE_Y / 2);
		if(state != undefined || lastX != lifeX || lastY != lifeY) {
			lastX = lifeX;
			lastY = lifeY;
			if(This.tcb && This.isEditing()) {
				This.tcb.setCell(lifeX, lifeY);
			}

		}		
	}
   window.addEventListener('resize', function() {
	  var WIDTH = window.innerWidth,
    	  HEIGHT = window.innerHeight;
      	This.renderer.setSize(WIDTH, HEIGHT);
      	This.camera.aspect = WIDTH / HEIGHT;
      	This.camera.updateProjectionMatrix();
    });
 
	function mouseClick(event) {
		var pos = position(event);
		if(event.metaKey) {
			var v = new THREE.Vector3(pos.x, pos.y, 0);
			This.controls.constraint.target.copy( v );
			This.controls.update();
		} else {
			setFromPos(pos, true);			
		}

	}

	function mouseMove(event) {
		var pos = position(event);
		This.rollOverMesh.position.x = pos.x;
		This.rollOverMesh.position.y = pos.y;
		if(This.isEditing() && event.buttons != 0) {
			setFromPos(pos);
		}
	}

	function windowClose(event) {
		This.terminated = true;
		This.cubes = null;
		This.tcb.term();
	}
	canvasElement.onclick = mouseClick;
	canvasElement.onmousemove = mouseMove;
	window.onbeforeunload = windowClose;
}

LIFE.ThreeDBoard.prototype = Object.create(Object.prototype);
LIFE.ThreeDBoard.prototype.constructor = LIFE.ThreeDBoard;

LIFE.ThreeDBoard.prototype.render = function() {
	// console.log("render: ");
	// console.log("  scene: ");
	// this.globalCube.material.color.setHex(Math.random() * 0xffffff);
	// console.dir(this.scene);
	this.renderer.render(this.scene, this.camera);
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
LIFE.ThreeDBoard.prototype.setCell = function(i, j, state, doRender) {
	var col = this.cubes[i];
	if(col == undefined && (state == undefined || state == DEAD))
		return;

	if(col == undefined) {
		col = [];
		this.cubes[i] = col;
	}
	var val = col[j];
	var color = state == ALIVE ? 0xaaaaaa : 0x0200020;

	if(val == null) {
		var geometry = new THREE.CubeGeometry( this.SIDE, this.SIDE, this.SIDE);
		var material = new THREE.MeshPhongMaterial({ color: color, specular: 0xffffff, shininess: 100 });
		// material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
		var cube = new THREE.Mesh( geometry, material );
		cube.position.x = (i - (this.BOARD_SIZE_X / 2)) * (this.SIDE + this.GAP);
		cube.position.y = (j - (this.BOARD_SIZE_Y / 2)) * (this.SIDE + this.GAP);
		cube.lifeX = i;
		cube.lifeY = j;
		this.scene.add(cube);
		this.cubes[i][j] = cube;
		val = cube;
	} else {
		if(state == DEAD) {
			this.scene.remove(val);
			col[j] = null;
		} else {
			val.material.color.setHex(color);
		}
	}

	if(doRender == undefined || doRender == true)
		this.render();

}
LIFE.ThreeDBoard.prototype.animate = function() {
	var This = this;
	function animate() {
		if(This.terminated)
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
LIFE.ThreeDBoard.prototype.isNav = function(setting) {
	return this.controls.enabled;
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

