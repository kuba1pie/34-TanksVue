<template>
  <div id="OrdersList">
    <h2>Orders List:</h2>
    <div id="OrderTable">
      <div id="OrdersHeader" className="Item Head Row-4">
        <div>Order Name</div>
        <div>Order City</div>
        <div>Order Name</div>
        <div>Order City</div>
      </div>
      <div v-if="ordersStatus === false">Loading</div>
      <OrdersListItem
        id="OrdersListItem"
        v-for="order in orders.data"
        :key="order.name"
        v-bind:order="{ order }"
      />
    </div>
  </div>
  <button v-on:click="greet">Catch'em!</button>
</template>

<script>
import { mapState, mapActions } from "vuex";
import OrdersListItem from "@/components/Orders/OrdersListItem.vue";
export default {
  name: "OrdersList",
  components: {
    OrdersListItem,
  },
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["orders", "ordersStatus"]),
  },
  methods: {
    ...mapActions(["fetchPokemons"]),
    greet: function () {
      this.fetchPokemons({ req: "orders" });
    },
  },
};
</script>
