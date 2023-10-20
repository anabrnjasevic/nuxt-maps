<template>
  <div class="relative">
<div class="bg-bg-prim  flex flex-col md:flex-row my-2 md:justify-between sticky">
  <div class="flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0">
    <ClientOnly><LazyLocationPicker/></ClientOnly>
    <ClientOnly><LazyTypePicker /></ClientOnly>
    <ClientOnly><LazyDatePicker/></ClientOnly>
  </div>
  <div class="flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0 pr-2 ">
     <PlacesBtn @click="scrollToTarget" class="self-center"/>
     <DirectionsBtn @click="scrollToTarget" class="self-center"/>
     <DownloadBtn @click="scrollToTarget" class="self-center"/>
     <NuxtLink to="/newpage" class="inline-block self-center rounded-full bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]">
      More</NuxtLink>

  </div>
  
   
</div >

<InputModal v-if="inputmodal" ref="inputmodal"/>
<LazyButtonsModal v-if="buttonmodal" ref="buttonmodal" class="z-10" />
<LazyPdfModal v-if="pdfmodal" ref="pdfmodal" class="z-10"/>


<InitialMap  class="absolute  md:top-10" ref="targetComponent"/>

<LazyBackToTop/>
<LazyBaseModal v-if="modal" ref="modal" class="z-10"/>
</div>
</template>

<script setup>
import "tw-elements/dist/css/tw-elements.min.css"
const modal = useModal('modal');
const inputmodal = useInputModal('inputmodal');
const buttonmodal = useButtonModal('buttonmodal');
const pdfmodal = usePdfModal('pdfmodal');

import {Modal,Ripple,initTE} from "tw-elements";

onMounted(()=>{
    initTE({ Modal, Ripple });
})
const targetComponent = ref(null);

const scrollToTarget = () => {
  if (targetComponent.value) {
    targetComponent.value.$el.scrollIntoView({ behavior: 'smooth' });
  }
};

</script>

<style lang="scss" scoped>

</style>