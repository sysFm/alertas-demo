export const state = () => ({
    alertas: [{},{}]
});


export const mutations = {
    agregarAlertas(state, payload) {
        state.alertas.push(payload);
    }
};

export const getters = {
    alertasActuales(state) {
        return state.alertas;
    }
}

