import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    orders: [],
    clients: [],
    tanks: [],
    ordersStatus: false,
    clientsStatus: false,
    tanksStatus: false,
    nickname: "",
    catchedPokemons: [],
  },
  mutations: {
    CLIENTS_LIST(state, payload) {
      state.clients = payload;
    },
    TANKS_LIST(state, payload) {
      state.tanks = payload;
    },
    CLIENTS_STATUS(state, payload) {
      state.clientsStatus = payload;
    },
    TANKS_STATUS(state, payload) {
      state.tanksStatus = payload;
    },
    ORDERS_STATUS(state, payload) {
      state.ordersStatus = payload;
    },
    ORDERS_LIST(state, payload) {
      state.orders = payload;
    },
  },
  actions: {
    async fetchPokemons(context, payload) {
      return axios
        .get("https://tanksvueapi.azurewebsites.net/" + payload.req)
        .then((response) => {
          if (payload.req == "clients") {
            context.commit("CLIENTS_LIST", response);
            context.commit("CLIENTS_STATUS", true);
          } else if (payload.req == "tanks") {
            context.commit("TANKS_LIST", response);
            context.commit("TANKS_STATUS", true);
          } else if (payload.req == "orders") {
            context.commit("ORDERS_LIST", response);
            context.commit("ORDERS_STATUS", true);
          }
        });
    },
  },
});
