<template>
  <div id="ClientsList">
    <h2>Clients List:</h2>
    <div id="ClientTable">
      <div id="ClientsHeader" className="Item Head Row-4">
        <div>Client Name</div>
        <div>Client City</div>
        <div>Order Name</div>
        <div>Order City</div>
      </div>
      <div v-if="clientsStatus === false">Loading</div>
      <ClientsListItem
        id="ClientsListItem"
        v-for="client in clients"
        :key="client.name"
        v-bind:item="{ client }"
      />
    </div>
  </div>
  <button v-on:click="greet">Catch'em!</button>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ClientsListItem from "@/components/Clients/ClientsListItem.vue";
export default {
  name: "ClientsList",
  components: {
    ClientsListItem,
  },
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["clients", "orders", "clientsStatus"]),
  },
  methods: {
    ...mapActions(["fetchPokemons"]),
    greet: async function () {
      await this.fetchPokemons({ req: "clients" });
      await this.fetchPokemons({ req: "orders" });
    },
  },
};
</script>
