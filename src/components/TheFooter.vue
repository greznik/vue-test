<template>
  <v-footer padless color="primary">
    <v-col class="white--text flex text-center" cols="12">
      <v-btn
        v-for="(icon, ind) in icons"
        :key="ind"
        :href="icon.url"
        class="mx-4"
        dark
        icon
        target="_blank"
      >
        <v-icon size="18px">
          {{ icon.icon }}
        </v-icon>
      </v-btn>
      {{ date | date("datetime") }}
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      date: new Date(),
      interval: null,
      icons: [
        { icon: "mdi-github", url: "https://github.com/greznik" },
        { icon: "mdi-linkedin", url: "https://www.linkedin.com/in/vue/" },
        { icon: "mdi-steam", url: "https://steamcommunity.com/id/reznx/" },
        { icon: "mdi-instagram", url: "https://www.instagram.com/reznx/" },
      ],
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style></style>
