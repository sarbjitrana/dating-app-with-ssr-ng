import { Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-mountain-scene',
  templateUrl: './mountain-scene.component.html',
  styleUrls: ['./mountain-scene.component.css']
})
export class MountainSceneComponent {
  @ViewChild('mountainScene', { static: true })
  private mountainSceneRef!: ElementRef<HTMLDivElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;

  constructor() { }

  ngOnInit() {
    // Create a new scene
    this.scene = new THREE.Scene();

    // Create a new camera
    const aspectRatio = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    this.camera.position.set(0, 0, 5);

    // Create a new renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.mountainSceneRef.nativeElement.appendChild(this.renderer.domElement);

    // Add a resize listener to update the renderer size when the window is resized
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    });

// Create a mountain mesh
const mountainGeometry = new THREE.PlaneGeometry(20, 20, 128, 128);
const mountainMaterial = new THREE.MeshPhongMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide
});
const mountainMesh = new THREE.Mesh(mountainGeometry, mountainMaterial);
mountainMesh.rotation.x = -Math.PI / 2;

// Add the mountain mesh to the scene
this.scene.add(mountainMesh);

// Add a directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1);
this.scene.add(directionalLight);

this.animate();

  }

  private animate() {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }

}
