// store.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        isModalOpen: false,
        modalType: '', // Добавьте modalType в состояние
    },
    mutations: {
        openModal(state, payload) {
            console.log('Opening modal with type:', payload.modalType);
            state.isModalOpen = true;
            state.modalType = payload.modalType;
        },
        closeModal(state) {
            console.log('Closing modal');
            state.isModalOpen = false;
            state.modalType = '';
        },
    },
    actions: {
        openModal({ commit }, payload) {
            commit('openModal', payload);
        },
        closeModal({ commit }) {
            commit('closeModal');
        },
    },
    getters: {
        isModalOpen: (state) => state.isModalOpen,
        modalType: (state) => state.modalType,
    },
});
