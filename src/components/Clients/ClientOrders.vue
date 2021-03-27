<template>
  <div className="ClientOrders">
    <div className="Item Head Row-2">
      {{ orders.filter((order) => order.ClientID == id) }}
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { onBeforeMount, onMounted } from "vue";

export default {
  name: "ClientOrders",
  computed: {
    ...mapState(["orders"]),
  },
  props: ["id"],
  data: function (orders, id) {
    return {};
  },
  methods: {
    ret(orders, id) {
      let ddd = orders.filter((order) => order.ClientID == id);
    },
  },
  setup(id) {
    onBeforeMount(() => {
      console.log("Before Mount!");
    });
    onMounted(() => {});
  },
};
</script>
