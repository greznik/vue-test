<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        Search npm package version
      </div>
    </v-app-bar>

    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import "assets/style.scss";
</style>
