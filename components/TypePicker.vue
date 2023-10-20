<template>
<div class="mb-3 shadow-[0_4px_9px_-4px_#54b4d3]">
<select id="type" v-model="type" data-te-select-init >
  <option value="museum" >Museum</option>
  <option value="book_store">Book Store</option>
  <option value="art_gallery">Art Gallery</option>
  <option value="library">Library</option>
</select>
<label data-te-select-label-ref>Type of place</label>
</div>

</template>

<script setup>
 import { onMounted } from "vue";
 import {  Select, initTE } from "tw-elements";

  onMounted(() => {
    initTE({  Select });
  });

  const type = useType('type')
  
</script>

