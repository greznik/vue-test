<template>
  <div class="home">
    <TheInput @input="onInput($event)" />
    <TheList
      :getDetailPackageList="getDetailPackageList"
      :getPackageList="getPackageList"
      @dialog="dialogInfo($event)"
    />
    <v-alert :value="!!getError" color="orange" dense outlined type="warning">
      {{ getError }}
    </v-alert>
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
      const lowerValue = value.toLowerCase()
      this.inputValue = lowerValue;
      await this.fetchPackageList(lowerValue);
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
