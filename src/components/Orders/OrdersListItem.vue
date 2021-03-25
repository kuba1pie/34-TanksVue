<template>
  <div className="Client Item Row-2 Hover">
    <div className="Row-2">
      <div>{{ client.client.name }}</div>
      <div>{{ client.client.city }}</div>
    </div>
    <ClientOrders />
  </div>
</template>

<script>
import ClientOrders from "@/components/Clients/ClientOrders.vue";

export default {
  name: "ClientsListItem",
  components: {
    ClientOrders,
  },
  data: function () {
    return {};
  },
  props: ["client"],
};
</script>
