<template>
  <div>
   desde componenta {{ alertasVer }}
  </div>
</template>

<script>
export default {
  props: {
    alerta: { type: Object, default: () => {} },
    idalerta: { type: Number, default: 0 },
  },
  data: () => ({
    alertasVer: [],
  }),
 
  watch: {
    idalerta(val) {
       console.log("cambio", val);
      this.alertasVer = this.alerta;
      setTimeout(() => {
        this.alertasVer = {};
      }, 10000);
    },
  },
};
</script>
