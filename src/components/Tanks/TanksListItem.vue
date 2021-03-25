<template>
  <div className="Tank Item Row-2 Hover">
    <div className="Row-2">
      <div>{{ tank.ClientName }}</div>
      <div>{{ tank.TankCapacity }}</div>
    </div>
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
