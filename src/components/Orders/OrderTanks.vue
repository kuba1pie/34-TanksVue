<template>
  <div className="ClientOrders">
    <div className="Item Head Row-2">
      <div>Order Name</div>
      <div>Order City</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ClientOrder",
  data: function () {
    return {};
  },
  props: ["orders"],
};
</script>
