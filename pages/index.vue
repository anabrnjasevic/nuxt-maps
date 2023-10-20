<template>
<div class="h-screen w-screen bg-bg-prim">
  <video class="shadow-xl" autoplay loop muted>
        <source
          src="/Travel.mp4"
          type="video/mp4" />
      </video>
     <button class="w-full pt-5 md:fixed md:bottom-0 text-4xl drop-shadow-xl text-cyan-800 "><NuxtLink to="/basicsearch">Check this out!!!</NuxtLink></button>
</div>
</template>

<script setup>
import "tw-elements/dist/css/tw-elements.min.css";
</script>

<style scoped>

</style>