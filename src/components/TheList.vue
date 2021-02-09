<template>
  <div>
    <div v-if="getPackageList.length">
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline"
              >About
              {{ getDetailPackageList && getDetailPackageList.default }}</span
            >
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              По запросу нет дополнительной инфы, кроме названия пакетов,
              поэтому представим, что у нас тут пришли данные о пакете:)
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" @click="close">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-data-table
        :headers="headers"
        :items="getPackageList"
        class="elevation-1"
      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr
              v-for="(item, key) in items"
              :key="key"
              @click="open(item.version)"
            >
              <td>{{ item.version }}</td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </div>
    <p class="text-center" v-else>Введите значение</p>
  </div>
</template>

<script>
export default {
  props: {
    getPackageList: {
      type: Array,
      default: () => [],
    },
    getDetailPackageList: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "Version",
          align: "left",
          sortable: false,
          value: "version",
        },
      ],
    };
  },
  methods: {
    open(item) {
      this.$emit("dialog", item);
      // immitate loading
      setTimeout(() => (this.dialog = true), 1000);
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>

<style></style>
