import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add(state) {
            state.count++;
        },
        sub(state) {
            state.count--;
        },
        addN(state, step) {
            state.count += step;
        },
        subN(state, step) {
            state.count -= step;
        }
    },
    actions: {
        addAsync(context) {
            setTimeout(() => {
                context.commit('add');
            }, 1000);
        },
        addnAsync(context, step) {
            setTimeout(() => {
                context.commit('addN', step);
            }, 1000);
        },
        subnAsync(context, step) {
            setTimeout(() => {
                context.commit('subN', step);
            }, 1000);
        }
    },
    getters: {
        show(state) {
            return state.count;
        }
    },
    modules: {}
});