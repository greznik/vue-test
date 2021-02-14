<template>
  <v-text-field
    label="Введите имя"
    data-test="TheInput"
    required
    @input="updateValue($event)"
  ></v-text-field>
</template>

<script>
export default {
  name: "TheInput",
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>
