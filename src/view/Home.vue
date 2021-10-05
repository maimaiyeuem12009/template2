<script setup>
import {onMounted} from "vue";
import Sketch from "../use/Sketch.js";

onMounted(() => {
  const sketch = new Sketch({domElement: document.getElementById('canvas')})
})

</script>

<template>
  <div id="canvas">
  </div>
</template>

<style scoped lang="scss">
#canvas {
  width: 100vw;
  height: 100vh;

  h1{
    font-size: 5.8em;
  }
}

</style>