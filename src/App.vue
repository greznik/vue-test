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
    <TheFooter />
  </v-app>
</template>

<script>
import Home from "./views/Home";
import TheFooter from "./components/TheFooter";

export default {
  name: "App",

  components: {
    Home,
    TheFooter,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import "assets/style.scss";
</style>
