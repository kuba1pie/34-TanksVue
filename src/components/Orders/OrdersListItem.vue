<template>
  <div className="Order Item Row-2 Hover">
    <div className="Row-2">
      <div>{{ order.order.name }}</div>
      <div>{{ order.order.city }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrdersListItem",
  components: {},
  data: function () {
    return {};
  },
  props: ["order"],
};
</script>
