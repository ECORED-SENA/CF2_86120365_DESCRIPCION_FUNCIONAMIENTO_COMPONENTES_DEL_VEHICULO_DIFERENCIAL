<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Diagnóstico inicial de fallas

    p(data-aos="fade-up").mb-5 Existen estrategias para hacer del diagnóstico un proceso más preciso. En la práctica, un proceso lógico y sistemático, por lo general brinda muy buenos resultados.


    .titulo-tres(data-aos="flip-up").mb-5
      h4 Escuchar al cliente

    p(data-aos="fade-up").mb-5 Escuchar atentamente al cliente sobre los inconvenientes que presenta el vehículo. Es recomendable preguntarle:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure
          img(src="@/assets/curso/tema2/1.png", alt="alt", style="max-width: 100%;").mx-auto.mb-4.mb-lg-0
      .col-lg-6
        .bg-color-11.p-3.mb-3
          p.mb-0 ¿Qué circunstancias ocurre o no ocurre el problema?
        .bg-color-12.p-3.mb-3
          p.mb-0 ¿Qué sonidos inusuales se escuchan?
        .bg-color-11.p-3.mb-3
          p.mb-0 ¿Qué olores extraños o fugas de fluidos se han presentado?
        .bg-color-12.p-3.mb-3
          p.mb-0 ¿Qué trabajos, mantenimiento o cambios se han realizado recientemente?
        .bg-color-11.p-3.mb-3
          p.mb-0 ¿Qué otros sistemas han operado inapropiadamente?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .bg-color-13.p-4
          p.mb-0 También es útil realizar un pequeño recorrido en el cual el cliente conduzca, para obtener mayor información en las condiciones reales en las que se presenta el problema o sus síntomas. Así, el cliente manifestará las irregularidades que ha detectado en el vehículo.

      .col-lg-3
        figure
          img(src="@/assets/curso/tema2/2.png", alt="alt", style="max-width: 100%;").mx-auto.mb-4.mb-lg-0

      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/3.svg", alt="alt", style="max-width: 90px;").mr-auto.mb-3
        .bg-color-13.p-4
          p.mb-0 Luego, efectuar una inspección visual en busca de causas evidentes: revisar fugas, niveles de fluidos y condiciones anormales en los componentes y sistemas relacionados con las preocupaciones del cliente.


    p(data-aos="fade-up").mb-5 A continuación, se presentan los pasos para realizar un diagnóstico inicial de fallas.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema2',
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
