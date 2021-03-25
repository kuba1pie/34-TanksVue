<template>
  <div id="Orders" className="Wrapper">
    <OrdersList />
  </div>
</template>

<script>
import OrdersList from "@/components/Orders/OrdersList.vue";

export default {
  name: "Orders",
  components: {
    OrdersList,
  },
};
</script>
