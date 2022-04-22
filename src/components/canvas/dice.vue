<template>
  
    <div class="container absolute inset-0 w-full h-full z-30">
      <Renderer ref="renderer" resize orbit-ctrl alpha antialias>
                <Camera :position="{ z: 10 }" />
                <Scene>
                <AmbientLight :intensity="0.5" />
      <PointLight :position="{ y: 50, z: 0 }" />
      <PointLight color="#ff6000" :intensity="0.75" :position="{ y: -50, z: 0 }" />
      <Sphere ref="mesh" :radius="2.5" :width-segments="200" :height-segments="200" >
        <StandardMaterial :props="{ displacementScale: 0.2 }">
          <Texture src="/assets/textures/Wood_Tiles_002_basecolor.jpg" />
          <Texture src="/assets/textures/Wood_Tiles_002_height.png" name="displacementMap" />
          <Texture src="/assets/textures/Wood_Tiles_002_normal.jpg" name="normalMap" />
          <Texture src="/assets/textures/Wood_Tiles_002_roughness.jpg" name="roughnessMap" />
          <Texture src="/assets/textures/Wood_Tiles_002_ambientOcclusion.jpg" name="aoMap" />
        </StandardMaterial>
      </Sphere>
                </Scene>
            </Renderer>
    </div>
 
 
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'


import { Sphere  , Camera, StandardMaterial  , PointLight, Renderer, Scene } from 'troisjs';

export default {
  components: { 
      Sphere , Camera, StandardMaterial  , PointLight, Renderer, Scene,
      Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot
    },
    setup() {
        const showDice = ref(true)

        return { showDice }
    }
};
</script>
