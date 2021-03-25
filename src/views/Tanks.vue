<template>
  <div id="Tanks" className="Wrapper"><TanksList /></div>
</template>

<script>
import TanksList from "@/components/Tanks/TanksList.vue";

export default {
  name: "Tanks",
  components: {
    TanksList,
  },
};
</script>
