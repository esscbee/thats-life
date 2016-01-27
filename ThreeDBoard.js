var DEAD_COLOR = 0x1f1f1f;
var ALIVE_COLOR = 0x00a000;
LIFE.ThreeDBoard = function(width, height, window, document) {
	this.BOARD_SIZE_X = width;
	this.BOARD_SIZE_Y = height;
	this.SIDE = 5 / width ;
	this.GAP = this.SIDE / 10;

	this.scene = new THREE.Scene();
	this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

	this.renderer = new THREE.WebGLRenderer();
	this.renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( this.renderer.domElement );

	// var cube = new THREE.Mesh( geometry, material );
	// scene.add( cube );
	// console.dir(cube);
	this.cubes = [];

	this.camera.position.z = 5;
	var light;
	if(false) {
		light = new THREE.AmbientLight(0xbbbbbb);
		this.scene.add( light );
	}

	if(true) {
		light = new THREE.DirectionalLight( 0xffffff );
		light.position.set( 0, 1, 1 ).normalize();
		this.scene.add(light);
	}

	if(false) {
		var geometry = new THREE.CubeGeometry( this.SIDE, this.SIDE, this.SIDE);
		var material = new THREE.MeshPhongMaterial({ color: 0xff0000, specular: 0x00ff00, shininess: 30 });
		// material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
		this.globalCube = new THREE.Mesh( geometry, material );
		this.scene.add(this.globalCube);
	}


	var This = this;

	if(false) {
		var map = THREE.ImageUtils.loadTexture( "images/img.png", undefined, function() {
	        var material = new THREE.SpriteMaterial( { map: map, color: 0xffffff, fog: true } );
	        var sprite = new THREE.Sprite( material );
	        This.scene.add( sprite );
			This.renderer.render(This.scene, This.camera);
		});
	}

	if(true) {
		var controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
		controls.damping = 0.2;
		controls.addEventListener( 'change', function() {
			This.render();
		} );
	}
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
LIFE.ThreeDBoard.prototype.setCell = function(i, j, state, doRender) {
	var col = this.cubes[i];
	if(!col && (!state || state == DEAD))
		return;

	if(!col) {
		col = [];
		this.cubes[i] = col;
	}
	var val = col[j];
	var color = state == ALIVE ? 0x00a000 : 0x0200020;

	if(val == null) {
		var geometry = new THREE.CubeGeometry( this.SIDE, this.SIDE, this.SIDE);
		var material = new THREE.MeshPhongMaterial({ color: color, specular: 0x00ff00, shininess: 30 });
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

	if(!doRender || doRender == true)
		this.render();

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

