<template>
  <div id="TanksList">
    <h2>Tanks List:</h2>
    <TanksListItem
      id="TanksListItem"
      v-for="tank in tanks.data"
      :key="tank.name"
      v-bind:tank="{ tank }"
    />

    {{ tanks.data }}
  </div>
  <button v-on:click="greet">Catch'em!</button>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TanksListItem from "@/components/Tanks/TanksListItem.vue";

export default {
  name: "TanksList",
  components: {
    TanksListItem,
  },
  data: function () {
    return {
      clients2: [],
    };
  },
  computed: {
    ...mapState(["tanks", "tanksStatus"]),
  },
  methods: {
    ...mapActions(["fetchPokemons"]),
    greet: function () {
      this.fetchPokemons({ req: "tanks" });
    },
  },
};
</script>
