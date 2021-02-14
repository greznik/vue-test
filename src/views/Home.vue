<template>
  <div class="home">
    <TheInput @input="onInput($event)" />
    <TheList
      :getDetailPackageList="getDetailPackageList"
      :getPackageList="getPackageList"
      @dialog="onDialog($event)"
    />
    <v-alert :value="!!getError" color="orange" dense outlined type="warning" dismissible>
      {{ getError }}
    </v-alert>
  </div>
</template>

<script>
import TheInput from "@/components/TheInput.vue";
import TheList from "@/components/TheList.vue";
import { mapActions, mapGetters } from "vuex";
import { FETCH_PACKAGE_LIST, FETCH_DETAIL_PACKAGE_LIST } from "@/store/types";

export default {
  name: "Home",
  data() {
    return {
      inputValue: "",
    };
  },

  methods: {
    ...mapActions({
      FETCH_PACKAGE_LIST,
      FETCH_DETAIL_PACKAGE_LIST,
    }),

    async onInput(value) {
      const lowerValue = value.toLowerCase();
      this.inputValue = lowerValue;

      await this.FETCH_PACKAGE_LIST(lowerValue);
    },

    async onDialog(version) {
      const data = {
        value: this.inputValue,
        version,
      };

      await this.FETCH_DETAIL_PACKAGE_LIST(data);
    },
  },

  computed: {
    ...mapGetters(["getDetailPackageList", "getPackageList", "getError"]),
  },

  components: {
    TheInput,
    TheList,
  },
};
</script>
