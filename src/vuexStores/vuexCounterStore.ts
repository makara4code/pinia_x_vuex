import { createStore } from "vuex";

interface State {
  count: number;
  todos: any;
}

const counterStore = createStore({
  state() {
    return {
      count: 0,
    };
  },

  getters: {
    getDoubleCount(state: State) {
      return state.count * 2;
    },
  },

  mutations: {
    increment(state: State) {
      state.count++;
    },

    decrement(state: State) {
      state.count--;
    },

    setTodos(state: State, todos: any) {
      state.todos = todos;
    },
  },

  actions: {
    increaseCount(context: { commit: (arg0: string) => void }) {
      context.commit("increment");
    },

    decreaseCount(context: { commit: (arg0: string) => void }) {
      context.commit("decrement");
    },

    async fetchTodos(context: { commit: (arg0: string, arg1: any) => void }) {
      await fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => {
          context.commit("setTodos", json);
        });
    },
  },
});

export default counterStore;
