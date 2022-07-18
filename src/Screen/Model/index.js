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

            let animation_lib = [
                {"name":"bye",							"url":"/assets/motions/bye.vmd"},
                {"name":"call",							"url":"/assets/motions/call.vmd"},
                {"name":"flash",						"url":"/assets/motions/flash.vmd"},
                {"name":"greeting",						"url":"/assets/motions/greeting.vmd"},
                {"name":"guide_happy",					"url":"/assets/motions/guide_happy.vmd"},
                {"name":"guide_normal",					"url":"/assets/motions/guide_normal.vmd"},
                {"name":"guide_sad",					"url":"/assets/motions/guide_sad.vmd"},
                {"name":"guts",							"url":"/assets/motions/guts.vmd"},
                {"name":"hand_shake",					"url":"/assets/motions/hand_shake.vmd"},
                {"name":"idle_boredom",					"url":"/assets/motions/idle_boredom.vmd"},
                {"name":"idle_sleep",					"url":"/assets/motions/idle_sleep.vmd"},
                {"name":"idle_think",					"url":"/assets/motions/idle_think.vmd"},
                {"name":"idle_touch_clothes",			"url":"/assets/motions/idle_touch_clothes.vmd"},
                {"name":"idle_yawn",					"url":"/assets/motions/idle_yawn.vmd"},
                {"name":"imagine_forward_normal",		"url":"/assets/motions/imagine_forward_normal.vmd"},
                {"name":"imagine_forward_small",		"url":"/assets/motions/imagine_forward_small.vmd"},
                {"name":"imagine_left_normal",			"url":"/assets/motions/imagine_left_normal.vmd"},
                {"name":"imagine_left_small",			"url":"/assets/motions/imagine_left_small.vmd"},
                {"name":"imagine_right_normal",			"url":"/assets/motions/imagine_right_normal.vmd"},
                {"name":"laugh",						"url":"/assets/motions/laugh.vmd"},
                {"name":"look_down",					"url":"/assets/motions/look_down.vmd"},
                {"name":"point_center_bottom",			"url":"/assets/motions/point_center_bottom.vmd"},
                {"name":"point_center_center",			"url":"/assets/motions/point_center_center.vmd"},
                {"name":"point_center_top",				"url":"/assets/motions/point_center_top.vmd"},
                {"name":"point_left_bottom",			"url":"/assets/motions/point_left_bottom.vmd"},
                {"name":"point_left_center",			"url":"/assets/motions/point_left_center.vmd"},
                {"name":"point_left_top",				"url":"/assets/motions/point_left_top.vmd"},
                {"name":"point_right_bottom",			"url":"/assets/motions/point_right_bottom.vmd"},
                {"name":"point_right_center",			"url":"/assets/motions/point_right_center.vmd"},
                {"name":"point_right_top",				"url":"/assets/motions/point_right_top.vmd"},
                {"name":"self_introduction",			"url":"/assets/motions/self_introduction.vmd"},
                {"name":"surprise_normal",				"url":"/assets/motions/surprise_normal.vmd"},
                {"name":"surprise_small",				"url":"/assets/motions/surprise_small.vmd"}
            ]
            let animation_idle_name = ["idle_boredom", "idle_sleep", "idle_think", "idle_touch_clothes", "idle_yawn"]

            const clock = new THREE.Clock();

            Ammo().then((Ammo) => Ammo);
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
                camera.position.z = 40;
                camera.position.y = 10;

                // scene

                scene = new THREE.Scene();
                scene.background = new THREE.Color(0xffffff);

                const gridHelper = new THREE.PolarGridHelper(30, 10);
                gridHelper.position.y = -10;
                scene.add(gridHelper);

                const ambient = new THREE.AmbientLight(0x666666);
                scene.add(ambient);

                const directionalLight = new THREE.DirectionalLight(
                    0xffffff,
                    0.5
                );
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

                const modelFile = "/models/Ei/model.pmx";
                const vmdFiles = ["/motions/bye.vmd"];

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

    return <div id="sceneCanvas"></div>;
}
