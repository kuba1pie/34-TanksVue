<template>
  <div className="Client Item Row-2 Hover">
    <div className="Row-2">
      <div>{{ item.client.name }}</div>
      <div>{{ item.client.city }}</div>
    </div>
    <ClientOrders v-bind:id="item.client.ClientID" />
  </div>
</template>

<script>
import ClientOrders from "@/components/Clients/ClientOrders.vue";
import { onBeforeMount, onMounted } from "vue";
import { mapState } from "vuex";

import axios from "axios";

export default {
  name: "ClientsListItem",
  components: {
    ClientOrders,
  },
  state: {
    datas: [],
  },
  computed: {
    ...mapState(["orders"]),
  },
  data: function () {
    return {};
  },
  props: ["item"],
  setup(client) {
    onBeforeMount(() => {
      console.log("Before Mount!");
    });
    onMounted(() => {});
  },
};
function filter(arr, criteria) {
  return arr.filter(function (obj) {
    return Object.keys(criteria).every(function (c) {
      return obj[c] == criteria[c];
    });
  });
}
</script>
