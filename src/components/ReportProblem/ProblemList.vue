<template>
  <div id="root">
    <h3>Problems reported in this area:</h3>
    <v-card
        class="mx-auto problem-card"
        max-width="344"
        outlined
        v-for="problem in problems"
        v-bind:key="problem.name"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            Issue
          </div>
          <v-list-item-title class="text-h5 mb-1">
            {{ problem.name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ problem.description }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-content
            tile

        ><img style="max-width: 100%; width: 40px" :src="problem.picture_url"></v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn
            outlined
            rounded
            text
        >
          Details
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>

</template>

<script>
export default {
  name: "ProblemList",
  props: {
    problems: Array
  }
}
</script>

<style scoped>
#root {
  padding: 20px 10px;
}
.problem-card{
  margin: 5px;
}
</style>
