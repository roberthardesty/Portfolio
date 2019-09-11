<template>
  <section>
    <services />
  </section>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    components: {
      Services: () => import('@/components/Services.vue')
    }
  });
</script>
