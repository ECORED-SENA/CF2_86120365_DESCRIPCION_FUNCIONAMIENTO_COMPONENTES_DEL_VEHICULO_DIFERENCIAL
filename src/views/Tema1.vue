<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Diferencial de deslizamiento limitado (LSD)

    p(data-aos="fade-up").mb-5 El diferencial es un mecanismo que permite que las ruedas exteriores de un vehículo giren más rápido que las interiores al tomar una curva, evitando así el derrape y el desgaste excesivo de los neumáticos. No obstante, este sistema presenta una debilidad cuando una de las ruedas motrices se encuentra sobre una superficie resbaladiza, como lodo o hierba mojada, ya que comienza a patinar mientras la rueda sobre superficie rugosa permanece inmóvil, lo que puede ocasionar que el vehículo se atasque.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1. 
          span Deslizamiento de la rueda en una superficie resbaladiza       
              
        figure
          img(src='@/assets/curso/tema1/1.png', alt='Chasis de un vehículo con las ruedas sobre una superficie resbaladiza, representada en azul, ilustrando el posible deslizamiento debido a la pérdida de tracción.', style="max-width: 820px;", data-aos="zoom-in")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-5
            .col-lg-auto
              figure
                img(src="@/assets/bullets/ola.svg", alt="alt", style="max-width: 90px;").mx-auto.mb-4.mb-lg-0

            .col-lg
              p(data-aos="fade-up").mb-0 Para solucionar este inconveniente, se desarrolló el diferencial de deslizamiento limitado (Limited Slip Differential - LSD), el cual permite que el diferencial funcione de manera convencional en condiciones normales de manejo y, al mismo tiempo, reduzca o bloquee su acción diferencial cuando el vehículo enfrenta condiciones adversas. Esto se logra al limitar el libre movimiento de la rueda que patina y transferir parte de la potencia a la rueda con mayor tracción.
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .bg-color-8.p-5
          .bg-color-white.p-4
            p.mb0 Existen dos tipos principales de diferenciales de deslizamiento limitado: uno que utiliza embragues y otro que emplea engranajes para bloquear o limitar el efecto diferencial.

            p(data-aos="fade-up").mb-0 El diferencial de deslizamiento limitado (LSD) es un mecanismo que permite que el diferencial funcione de manera convencional en condiciones normales de manejo y, al mismo tiempo, reduzca o bloquee su acción diferencial cuando el vehículo enfrenta condiciones adversas.
      .col-lg-6
        figure
          img(src="@/assets/curso/tema1/2.png", alt="alt", style="max-width: 100%;").mx-auto.mb-4.mb-lg-0
          
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
