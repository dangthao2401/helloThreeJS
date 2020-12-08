var app=function() {
	 // initiallize scene, camera, objects and renderer
	var scene, camera, renderer, cube1, cube2;
    var init_app = function() {
        // 1. create the scene
		scene = new THREE.Scene();
		scene.background = new THREE.TextureLoader().load( "data/textures/background.jpeg" );
        // 2. create an locate the camera
		var  canvasWidth = 1280, canvasHeight  = 720;
		var fieldOfViewY = 60, aspectRatio = canvasWidth /canvasHeight, near=0.1, far= 100.0;
		camera = new THREE.PerspectiveCamera( fieldOfViewY, aspectRatio, near, far );
		camera.position.z = 5;
		
        // 3. create and locate the objects on the scene
        const geometry = new THREE.BoxGeometry();
		const material1 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
		const material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		const material3 = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
		cube1 = new THREE.Mesh( geometry, material1 );
		cube2 = new THREE.Mesh( geometry, material2 );
		cube3 = new THREE.Mesh( geometry, material3 );
		// add the cube to the scene
		scene.add( cube1 );
		scene.add( cube2 );
		scene.add( cube3 );
		cube2.position.x = -3;
		cube3.position.x = 3;
        // 4. create the renderer   
		renderer = new THREE.WebGLRenderer();
		renderer.setSize( canvasWidth, canvasHeight);
		document.body.appendChild( renderer.domElement );
    };
    // main animation loop - calls every 50-60 ms.
    var mainLoop = function() {
		
		requestAnimationFrame( mainLoop );
		cube1.rotation.x += 0.01;
		cube2.rotation.y += 0.01;
		cube3.rotation.z += 0.01;
		renderer.render( scene, camera );
    };
    init_app();
    mainLoop();
}

  