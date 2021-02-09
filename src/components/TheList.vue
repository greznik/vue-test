<template>
  <div>
    <div v-if="getPackageList.length">
      <TheDialog
        :getDetailPackageList="getDetailPackageList"
        :dialog="dialog"
        @close="close"
      />
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
import TheDialog from "@/components/TheDialog";
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
  components: {
    TheDialog,
  },
};
</script>

<style></style>
