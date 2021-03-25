<template>
  <div id="Clients" className="Wrapper">
    <ClientsList />
  </div>
</template>

<script>
import ClientsList from "@/components/Clients/ClientsList.vue";

export default {
  name: "Clients",
  components: {
    ClientsList,
  },
};
</script>
