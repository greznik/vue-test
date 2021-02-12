<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        Поиск пакетов
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
};
</script>
<style lang="scss">
@import "assets/style.scss";
</style>
