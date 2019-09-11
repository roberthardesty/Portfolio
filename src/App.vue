<template>
  <v-app>
    <core-toolbar />

    <v-fade-transition mode="out-in">
      <main v-bind="attrs">
        <core-jumbotron />

        <router-view />
      </main>
    </v-fade-transition>

    <core-footer />
  </v-app>
</template>


<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',
  components: {
      CoreFooter: () => import('@/components/core/Footer.vue'),
      CoreJumbotron: () => import('@/components/core/Jumbotron.vue'),
      CoreToolbar: () => import('@/components/core/Toolbar.vue')
    },

    computed: {
      attrs () {
        return {
          key: this.$route.path,
          style: {
            minHeight: 'calc(100vh - ' + this.$vuetify.application.top + 'px'
          }
        }
      }
    }
});
</script>

<style lang="sass">
  section
    padding-top: 64px
    padding-bottom: 64px

    @media screen and (max-width: 640px)
      padding-top: 16px
      padding-bottom: 16px

  // Remove once fixed
  // https://github.com/vuetifyjs/vuetify/issues/8327
  .theme--dark.v-list-item
    color: #FFFFFF
</style>