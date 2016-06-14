	var camera,scene,renderer,id;
	var mesh = new THREE.Mesh();
	init();
	
	
	//	场景
	function init(){
		//	render
		renderer = new THREE.WebGLRenderer({
			canvas:document.getElementById('dressShow')
		});
		renderer.setSize(710,500);
		renderer.setClearColor(0xffffff);
		
		//	scene
		scene = new THREE.Scene();
		
		//	camera
		camera = new THREE.OrthographicCamera(-750, 750, 500, -500, 5, 100000);
		camera.position.set(400,-450,400);
		camera.lookAt(new THREE.Vector3(100, -800, 100));
		scene.add(camera);
		
		//	light
		var ambientLight = new THREE.AmbientLight(0x999999);
		scene.add(ambientLight);
		var spotLight = new THREE.SpotLight(0xffffff, 0.6);
		spotLight.position.set(5000,5000,5000);
		scene.add(spotLight);

		id = setInterval(draw, 20);
		load();	
		
//		var controls = new THREE.OrbitControls( camera, dressShow );
//		controls.addEventListener( 'change', render );
//		controls.target.set( 0, 0, 0 );
//		controls.update();
	}
	
//	加载模型   model/dress4.obj
    function load(){
    	var loader = new THREE.OBJLoader();
		loader.load("model/dress4.obj", function (obj) {			
			obj.traverse(function(child) {
                if (child instanceof THREE.Mesh) {
                    child.material = new THREE.MeshLambertMaterial({ 
	                   side: THREE.DoubleSide 
	                });
                }
            });
            
            mesh = obj;
			scene.add(obj);
			render();
		});
    }
	function render(){
		renderer.render(scene,camera);
	}
	
	function draw() {
        render();     
        mesh.rotation.y += 0.01;
        if (mesh.rotation.y > Math.PI * 2) {
            mesh.rotation.y -= Math.PI * 2;
        }
    }
	
	function changeStyle(){
		
	}
