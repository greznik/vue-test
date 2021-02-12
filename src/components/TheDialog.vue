<template>
  <v-dialog v-model="internalValue" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline"
          >О пакете
          {{ getDetailPackageList && getDetailPackageList.default }}</span
        >
      </v-card-title>

      <v-card-text>
        <v-container grid-list-md>
          По запросу нет дополнительной инфы, кроме названия пакетов, поэтому
          представим, что у нас тут пришли данные о пакете:)
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" @click="onClose">Закрыть</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    getDetailPackageList: {
      type: Object,
      default: () => {},
    },
    dialog: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  computed: {
    internalValue: {
      get() {
        return this.dialog;
      },
      set(value) {
        this.$emit("close", value);
      },
    },
  },
  methods: {
    onClose() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
