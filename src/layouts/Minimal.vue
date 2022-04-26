<template>
  <div>
  <v-loading></v-loading>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col col-md-6 col-xs-12">
        <!-- Content will be placed here -->
        <slot />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
/* ============
 * Minimal Layout
 * ============
 *
 * Used for the register and login pages.
 *
 * Layouts are used to store a lot of shared code.
 * This way the app stays clean.
 */
import VLoading from '@/components/Loading.vue';

export default {
  /**
   * The name of the layout.
   */
  name: 'MinimalLayout',
  components: {
    VLoading,
  },
};
</script>
