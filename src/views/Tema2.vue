<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Diagnóstico inicial de fallas

    .bg-full-width.bg-fondo-6
      .px-4.px-md-5
        p(data-aos="fade-down") Existen estrategias para hacer del diagnóstico un proceso más preciso. En la práctica, un proceso lógico y sistemático, por lo general brinda muy buenos resultados.

        Separador
        #t_2_1
        .titulo-segundo.color-acento-contenido(data-aos="fade-left")
          h2 2.1 Escuchar al cliente

        p(data-aos="fade-right").mb-4 Escuchar atentamente al cliente sobre los inconvenientes que presenta el vehículo. Es recomendable preguntarle:

        .row.justify-content-center.align-items-start.mb-5
          .col-lg-6(data-aos="fade-right")
            figure
              img(src="@/assets/curso/tema2/1.png", alt="alt", style="max-width: 100%;").mx-auto.mb-4.mb-lg-0
          .col-lg-6(data-aos="fade-left")
            .bg-color-11.px-3.py-2.mb-3
              p.mb-0 ¿En qué circunstancias ocurre o no ocurre el problema?
            .bg-color-12.px-3.py-2.mb-3
              p.mb-0 ¿Qué sonidos inusuales se escuchan?
            .bg-color-11.px-3.py-2.mb-3
              p.mb-0 ¿Qué olores extraños o fugas de fluidos se han presentado?
            .bg-color-12.px-3.py-2.mb-3
              p.mb-0 ¿Qué trabajos, mantenimiento o cambios se han realizado recientemente?
            .bg-color-11.px-3.py-2.mb-3
              p.mb-0 ¿Qué otros sistemas han operado inapropiadamente?

        .row.justify-content-center.align-items-end.mb-5
          .col-lg-1.d-none.d-lg-block.d-xl-none
            
          .col-xxl-4.col-xl-4.col-lg-8.mb-lg-4.mb-xl-0(data-aos="fade-right")
            .bg-color-13.p-4.pb-xxl-5
              p.mb-0 También es útil realizar un pequeño recorrido en el cual el cliente conduzca, para obtener mayor información en las condiciones reales en las que se presenta el problema o sus síntomas. Así, el cliente manifestará las irregularidades que ha detectado en el vehículo.

          .col-lg-1.d-none.d-lg-block.d-xl-none

          .col-xxl-3.col-xl-4.col-lg-4(data-aos="fade-down")
            figure.mt-4.mt-lg-0
              img(src="@/assets/curso/tema2/2b.png", alt="alt", style="max-width: 295px;").mx-auto.mb-4.mb-lg-0

          .col-xxl-5.col-xl-4.col-lg-4(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema2/3.svg", alt="alt", style="max-width: 80px;").mr-auto.mb-2
            .bg-color-13.px-4.py-2
              p.mb-0 Luego, efectuar una inspección visual en busca de causas evidentes: revisar fugas, niveles de fluidos y condiciones anormales en los componentes y sistemas relacionados con las preocupaciones del cliente.


    p(data-aos="fade-up").mb-4 El diagnóstico de fallas es un proceso estructurado que permite identificar y solucionar problemas en un vehículo de manera eficiente. Para lograrlo, es fundamental seguir una metodología que garantice la precisión en cada paso.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0h2SrPv-T40?si=sSqpwHGxdjiTLAlu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
