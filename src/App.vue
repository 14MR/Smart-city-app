<template>
  <v-app>
    <v-main>
      <v-card
          class="mx-auto"
          max-width="500"
      >

        <v-toolbar
            color="indigo"
            dark
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Smart Schaffhausen</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
        <router-view/>
      </v-card>
    </v-main>
  </v-app>
</template>

<style lang="scss">

</style>
