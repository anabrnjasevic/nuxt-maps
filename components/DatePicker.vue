<template>
  <div
  class="relative shadow-[0_4px_9px_-4px_#54b4d3]"
  id="datepicker-disable-past"
  data-te-input-wrapper-init
  data-te-format="yyyy-mm-dd">
  <input
    v-model="date"
    type="text"
    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    placeholder="Select a date" />
  <label
    for="floatingInput"
    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >Select a date</label
  >
</div>
</template>

<script setup>
import { onMounted } from "vue";
import {
  Datepicker,
  Input,
  initTE,
} from "tw-elements";

onMounted(() => {
    initTE({ Datepicker, Input });
    const datepickerDisablePast = document.getElementById('datepicker-disable-past');
new Datepicker(datepickerDisablePast, {
  disablePast: true
});
  });

  const date = useDate('date');



</script>
