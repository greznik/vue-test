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
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>
