<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-4.pb-md-5

        p(data-aos="fade-down").mb-4 El diferencial de deslizamiento limitado (LSD) es un mecanismo diseñado para mejorar la tracción de los vehículos en superficies resbaladizas. A diferencia de los diferenciales convencionales, permite distribuir la potencia de manera más eficiente entre las ruedas, evitando que una de ellas patine sin control. Este sistema es fundamental en situaciones donde se requiere estabilidad y adherencia, como en terrenos mojados o irregulares.

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Existen distintos tipos de LSD, entre ellos los que funcionan con embragues y los que operan con engranajes. Los primeros utilizan discos de fricción para limitar el deslizamiento, mientras que los segundos, como los diferenciales helicoidales o <em>Torsen</em>, emplean un conjunto de engranajes para regular la distribución de torque. Estas tecnologías han sido ampliamente utilizadas en competencias automovilísticas y en vehículos todoterreno.

        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/intro/2.svg", alt="alt", style="max-width: 90px;").mx-auto.mb-4.mb-lg-0

          .col-lg
            p.mb-0 Además de conocer su funcionamiento, es esencial dominar las estrategias de diagnóstico de fallas. Un procedimiento adecuado incluye escuchar al cliente, inspeccionar visualmente el sistema, realizar pruebas específicas e informar sobre los hallazgos. Este enfoque permite identificar problemas a tiempo y garantizar el óptimo desempeño del diferencial, prolongando la vida útil del vehículo y mejorando su seguridad.
      
</template>

<script>
export default {
  name: 'Introduccion',
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
