<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 
    .row.justify-content-center
      .col-lg-12.mb-5.tarjeta.bg-color-sintesis.p-4.p-lg-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama sobre el diferencial de deslizamiento limitado (LSD) y el diagnóstico de fallas. Explica su función, permitiendo la tracción en condiciones estándar y su clasificación en sistemas con embragues y con engranajes. Se detallan sus componentes, como engranajes helicoidales y Torsen, destacando su utilidad para mejorar la tracción y solucionar debilidades en superficies de baja adherencia. Además, presenta la estrategia de diagnóstico basada en un proceso lógico con cuatro fases: escuchar al cliente, investigar y recopilar información, realizar pruebas y finalmente informar al cliente con detalles sobre la falla, expectativas y resultados. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
