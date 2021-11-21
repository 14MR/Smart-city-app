<template>
  <v-app>
    <v-main>
<!--      <template>-->
<!--        <v-container class="grey lighten-5">-->
<!--          <v-row>-->
<!--            <v-col cols="12" sm="4">-->
<!--              <Weather/>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--          <v-row>-->
<!--            <v-col-->
<!--                v-for="n in 3"-->
<!--                :key="n"-->
<!--                cols="12"-->
<!--                sm="4"-->
<!--            >-->
<!--              <Card/>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--        </v-container>-->
<!--      </template>-->
    <Dashboard/>
    </v-main>
  </v-app>
</template>

<script>
// import Card from "@/components/Card";
// import Weather from "@/components/Weather";
import Dashboard from "@/components/Dashboard";

export default {
  name: 'App',

  components: {
    Dashboard,
    // Weather,
    // Card
  },

  data: () => ({
    //
  }),
};
</script>
