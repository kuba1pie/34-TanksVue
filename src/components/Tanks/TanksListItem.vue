<template>
  <div className="Tank Item Row-3 Hover">
    <div>{{ tank.tank.TankID }}</div>
    <div>{{ tank.tank.TankCapacity }}</div>
    <div>{{ tank.tank.OrderName }}</div>
  </div>
</template>

<script>
export default {
  name: "TanksListItem",
  data: function () {
    return {};
  },
  props: ["tank"],
};
</script>
