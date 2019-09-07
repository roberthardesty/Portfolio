<template>
  <v-footer
    color="grey lighten-3 px-6 py-3"
    height="auto"
    min-height="64"
  >
    <v-row :justify="$vuetify.breakpoint.mdAndUp ? 'space-between' : 'center'">
      <a href="#">
        rmhardesty@yahoo.com
      </a>

      <v-col
        class="hidden-md-and-up"
        cols="12"
      />

      <div>
        <a href="#">LinkedIn</a>
        &nbsp;
        <a href="https://github.com/roberthardesty">Github</a>
      </div>
    </v-row>
  </v-footer>
</template>

<style lang="sass" scoped>
  .v-footer a
    text-decoration: none
</style>
