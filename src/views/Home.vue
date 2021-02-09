<template>
  <div class="home">
    <v-alert :value="!!getError" dense border="left" type="warning">
      {{ getError }}
    </v-alert>
    <TheInput @input="onInput($event)" />
    <TheList
      :getDetailPackageList="getDetailPackageList"
      :getPackageList="getPackageList"
      :page="page"
      @dialog="dialogInfo($event)"
    />
  </div>
</template>

<script>
import TheInput from "@/components/TheInput.vue";
import TheList from "@/components/TheList.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      inputValue: "",
      page: 1,
    };
  },
  components: {
    TheInput,
    TheList,
  },
  methods: {
    ...mapActions({
      fetchPackageList: "fetchPackageList",
      fetchDetailPackageList: "fetchDetailPackageList",
    }),
    async onInput(value) {
      this.inputValue = value;
      await this.fetchPackageList(value);
    },
    async dialogInfo(version) {
      const data = {
        value: this.inputValue,
        version,
      };
      await this.fetchDetailPackageList(data);
    },
  },
  computed: {
    ...mapGetters(["getDetailPackageList", "getPackageList", "getError"]),
  },
};
</script>
