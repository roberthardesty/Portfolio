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
            v-for="(category, i) in categories"
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
                      @click="overlay = project.img"
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

        <v-fade-transition mode="out-in">
          <v-overlay
            v-if="overlay"
            fixed
            opacity=".9"
          >
            <v-btn
              color="transparent"
              depressed
              fab
              fixed
              large
              right
              top
              @click="overlay = false"
            >
              <v-icon large>
                mdi-close
              </v-icon>
            </v-btn>

            <v-img
              :src="`/static/${overlay}`"
              width="800"
              max-width="90vw"
            />
          </v-overlay>
        </v-fade-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      category: null,
      categories: [
        {
          'text': 'All Projects',
          'filter': null
        },
        {
          'text': 'Rasberry Pi',
          'filter': 1
        },
        {
          'text': 'Vue.js',
          'filter': 2
        },
        {
          'text': 'WPF',
          'filter': 3
        },
        {
          'text': 'Azure',
          'filter': 5
        },
        {
          'text': 'Computer Vision',
          'filter': 4
        }
      ],
      overlay: false,
      projects: [
        {
          'name': 'Audio POCs',
          'img': 'audio-waveform.png',
          'categories': [1, 3]
        },
        {
          'name': 'Raspberry Pi .NET Core Daemon Automatic Updater Using Azure Storage',
          'img': 'raspberry-pi.png',
          'categories': [1, 5]
        },
        {
          'name': 'Bird Feeder Population Analysis',
          'img': 'bird-feeder.jpg',
          'categories': [1, 4]
        },
        {
          'name': 'LBPH Facial Recognition Website',
          'img': 'open-cv.png',
          'categories': [1, 2, 4, 5]
        },
        {
          'name': 'Home Automations',
          'img': 'project4.png',
          'categories': []
        },
        {
          'name': 'Custom Github Release Note Generator',
          'img': 'github-logo.png',
          'categories': []
        }
      ]
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
      }
    }
  }
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
