<template >
  <div >
    <div class="relative " 
    data-te-input-wrapper-init
    >
  <input
    v-model="location"
    type="text"
    class="peer shadow-[0_4px_9px_-4px_#54b4d3] block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    id="exampleFormControlInputCounter"
    placeholder="Enter location"
    data-te-input-showcounter="false"
    maxlength="20" />
  <label
    for="exampleFormControlInputCounter"
    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >Location
  </label>
  <div
    class="absolute w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"
    data-te-input-helper-ref></div>
</div>
</div>
   
</template>

<script setup>
  import { onMounted } from "vue";
  const { Input, initTE} = await import("tw-elements")



  onMounted(() => {
    initTE({ Input });
  });
const location = useLocation('location');

</script>

