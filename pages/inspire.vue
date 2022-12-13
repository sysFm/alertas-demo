<template>
 <div>
   {{alertas}}
 </div>
</template>

<script>
import { mapMutations, mapState ,mapGetters} from "vuex";

export default {

  computed: {
    ...mapState('alertas', ['alertas']),
    ...mapGetters('alertas', ['alertasActuales']),
    actualizarAlertas() {
      return this.alertasActuales
    }
  },
};
</script>
