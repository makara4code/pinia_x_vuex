<template>
  <div class="container">
    <div class="store">
      <h1>Vuex Store</h1>
      <h2>Count: {{ store.state.count }}</h2>
      <h2>Double count: {{ store.getters.getDoubleCount }}</h2>
      <h2>Todos: {{ store.state.todos }}</h2>
      <button type="button" @click="minus">-</button>
      <button type="button" @click="add">+</button>
      <button type="button" @click="fetchTodos">Get Todos</button>
    </div>

    <div class="store">
      <h1>Pinia Store</h1>
      <h2>Count: {{ piniaCounter.count }}</h2>
      <h2>Double count: {{ piniaCounter.getDoubleCount }}</h2>
      <button type="button" @click="piniaCounter.decrement">-</button>
      <button type="button" @click="piniaCounter.increment">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { useCounterStore } from "./piniaStores/piniaCounterStore";

const store = useStore();
const piniaCounter = useCounterStore();

const minus = () => {
  store.dispatch("decreaseCount");
  // store.commit("decrement");
};

const add = () => {
  store.dispatch("increaseCount");
};

const fetchTodos = async () => {
  await store.dispatch("fetchTodos");
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.store {
  border: 1px solid white;
  padding: 20px;
  border-radius: 10px;
  min-width: 500px;
  button {
    margin: 0 10px;
    min-width: 100px;
    font-size: 20px;
  }
}
</style>
