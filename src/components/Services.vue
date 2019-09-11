<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-tabs
          background-color="transparent"
          centered
          class="mb-4"
          show-arrows
        >
          <v-tab
            v-for="(category, i) in projectCategories"
            :key="i"
            @click="select(category)"
          >
            <span v-text="category.text" />
          </v-tab>
        </v-tabs>

        <v-responsive min-height="700">
          <v-container>
            <transition-group
              tag="v-row"
              name="fade-transition"
            >
              <v-col
                v-for="project in computedProjects"
                :key="project.img"
                cols="12"
                class="gallery-card"
                md="6"
                lg="4"
              >
                <v-hover>
                  <template v-slot="{ hover }">
                    <v-card
                      :img="`/static/${project.img}`"
                      class="white--text overflow-hidden"
                      dark
                      height="300"
                      hover
                      @click.stop="setProject(project)"
                    >
                      <v-fade-transition>
                        <v-overlay
                          v-if="hover"
                          absolute
                        >
                          <v-icon large>
                            mdi-magnify
                          </v-icon>
                        </v-overlay>
                      </v-fade-transition>
                      <v-slide-y-reverse-transition>
                        <v-footer
                          v-if="hover"
                          absolute
                          class="justify-center"
                          height="75"
                        >
                          <div class="heading">
                            {{ project.name }}
                          </div>
                        </v-footer>
                      </v-slide-y-reverse-transition>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </transition-group>
          </v-container>
        </v-responsive>
      </v-col>
      <v-dialog
        v-model="dialog"
      >
        <v-card>
          <v-img
            class="white--text"
            max-height="400"
            :src="`/static/${overlayProject.img}`"
          >
            <v-overlay
              absolute
              opacity=".8"
            >
              <v-card-title class="align-end fill-height">
                {{ overlayProject.name }}
              </v-card-title>
            </v-overlay>
          </v-img>
          <v-card-text>
            <span class="text--white">
              <span>Technology Buzzwords</span><br>
              <span>Short summary of project</span>
            </span>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="black"
            >
              Github
            </v-btn>
            <v-btn
              text
              color="black"
            >
              Visit Site
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<script>
  import { projects, projectCategories } from '@/data/projectData.js'
  import Vue from 'vue';

  export default Vue.extend({
    data: () => ({
      overlayProject: false,
      dialog: false,
      category: null,
      projectCategories,
      projects
    }),

    computed: {
      computedProjects () {
        return !this.category
          ? this.projects
          : this.projects.filter(p => p.categories.includes(this.category))
      }
    },

    methods: {
      select (category) {
        this.category = category.filter
      },
      setProject (project) {
        this.overlayProject = project
        this.dialog = true
      }
    }
  })
</script>

<style scoped>
  .gallery-card {
    transform-origin: center center 0;
    transition: .3s cubic-bezier(.25,.8,.50,1);
  }

  .fade-transition-leave,
  .fade-transition-leave-active,
  .fade-transition-leave-to {
    display: none;
  }
</style>
