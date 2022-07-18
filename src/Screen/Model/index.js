import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OutlineEffect } from "three/examples/jsm/effects/OutlineEffect.js";
import { MMDLoader } from "three/examples/jsm/loaders/MMDLoader.js";
import { MMDAnimationHelper } from "three/examples/jsm/animation/MMDAnimationHelper.js";
import { default as Ammo } from "ammo.js/builds/ammo.js";

import { useEffect } from "react";

export default function Model() {
    useEffect(() => {
        async function load() {
            let mesh, camera, scene, renderer, effect;
            let helper, ikHelper, physicsHelper;

            const clock = new THREE.Clock();

            Ammo().then(Ammo => Ammo);
            init();
            animate();

            function init() {
                const container = document.getElementById("sceneCanvas");

                camera = new THREE.PerspectiveCamera(
                    45,
                    window.innerWidth / window.innerHeight,
                    1,
                    2000
                );
                camera.position.z = 30;

                // scene

                scene = new THREE.Scene();
                scene.background = new THREE.Color(0xffffff);

                const gridHelper = new THREE.PolarGridHelper(30, 10);
                gridHelper.position.y = -10;
                scene.add(gridHelper);

                const ambient = new THREE.AmbientLight(0x666666);
                scene.add(ambient);

                const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
                directionalLight.position.set(-1, 1, 1).normalize();
                scene.add(directionalLight);

                //

                renderer = new THREE.WebGLRenderer({ antialias: true });
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(window.innerWidth, window.innerHeight);
                if (!container.childNodes.length) {
                    container.appendChild(renderer.domElement);
                }

                effect = new OutlineEffect(renderer);

                // model

                function onProgress(xhr) {
                    if (xhr.lengthComputable) {
                        const percentComplete = (xhr.loaded / xhr.total) * 100;
                        console.log(
                            Math.round(percentComplete, 2) + "% downloaded"
                        );
                    }
                }

                const modelFile = "/Ei/model.pmx";
                const vmdFiles = ["/Motion/bye.vmd"];

                helper = new MMDAnimationHelper({
                    afterglow: 2.0,
                });

                const loader = new MMDLoader();

                loader.loadWithAnimation(
                    modelFile,
                    vmdFiles,
                    function (mmd) {
                        mesh = mmd.mesh;
                        mesh.position.y = -10;
                        scene.add(mesh);

                        helper.add(mesh, {
                            animation: mmd.animation,
                            physics: true,
                        });

                        ikHelper = helper.objects
                            .get(mesh)
                            .ikSolver.createHelper();
                        ikHelper.visible = false;
                        scene.add(ikHelper);

                        physicsHelper = helper.objects
                            .get(mesh)
                            .physics.createHelper();
                        physicsHelper.visible = false;
                        scene.add(physicsHelper);
                    },
                    onProgress,
                    null
                );

                const controls = new OrbitControls(camera, renderer.domElement);
                controls.minDistance = 10;
                controls.maxDistance = 100;

                window.addEventListener("resize", onWindowResize);
            }

            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                effect.setSize(window.innerWidth, window.innerHeight);
            }

            //

            function animate() {
                requestAnimationFrame(animate);
                render();
            }

            function render() {
                helper.update(clock.getDelta());
                effect.render(scene, camera);
            }
        }

        load();
    }, []);

    return (
        <>
            <div>
                <div id="sceneCanvas"></div>
            </div>
        </>
    );
}
