<template>
  <div class="home">
    <TheInput @input="onInput($event)" />
    <TheList
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
    onInput(value) {
      this.inputValue = value;
      this.fetchPackageList(value);
    },
    dialogInfo(version) {
      this.inputValue;
      const data = {
        value: this.inputValue,
        version
      }
      this.fetchDetailPackageList(data);
    },
  },
  computed: {
    ...mapGetters(["getPackageList"]),
  },
};
</script>
