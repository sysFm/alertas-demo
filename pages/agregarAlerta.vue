<template>
  <div>
    <button @click="() => agregar()">Agregar alerta</button>
    <div
      :alerta="alerta"
      :id="alerta.id"
      v-for="(alerta, idx) in alertasActuales"
      :key="idx"
    >
      <alertas :alerta="alerta" :idalerta="Math.random() * 1000" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";
import alertas from "~/components/alertas.vue";

export default {
  components: { alertas },

  computed: {
    ...mapState("alertas", ["alertas"]),
    ...mapGetters("alertas", ["alertasActuales"]),
  },
  methods: {
    ...mapMutations("alertas", ["agregarAlertas"]),
    agregar() {
      this.agregarAlertas({ alerta: 2 });
    },
  },
};
</script>

<style>
</style>