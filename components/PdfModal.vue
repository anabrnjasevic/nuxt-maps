<template>
    <div class="fixed right-0 top-15 z-[1055]">  
      <div data-te-animation-init
        data-te-animation-start="onLoad"
        data-te-animation-reset="true"
        data-te-animation="[slide-in-left_1s_ease-in-out]"
        class="max-w-md ">
    
       <div @click.stop
         class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
         <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Save for later
         </h5>
         <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Should you wish to save places for later viewing you can DOWNOAD PDF (it gets only places for now, not directions).
         </p>
         <button
        type="button"
        class="inline-block rounded bg-info px-6 mx-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light"
        @click="closePdfModal">
        got it!
         </button>
      </div>
     </div>
    </div>
    
</template>
    
    <script setup>
     import {
      Animate,
      initTE,
    } from "tw-elements";
    
    onMounted(()=>{
      initTE({ Animate });
    })

    
    const closePdfModal=()=>{
      usePdfModal().value=!usePdfModal().value
    }
    </script>
    
    