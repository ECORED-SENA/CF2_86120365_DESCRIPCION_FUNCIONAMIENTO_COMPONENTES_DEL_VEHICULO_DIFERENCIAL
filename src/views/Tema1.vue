<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Diferencial de deslizamiento limitado (LSD)

    p(data-aos="fade-up").mb-5 El diferencial es un mecanismo que permite que las ruedas exteriores de un vehículo giren más rápido que las interiores al tomar una curva, evitando así el derrape y el desgaste excesivo de los neumáticos. No obstante, este sistema presenta una debilidad cuando una de las ruedas motrices se encuentra sobre una superficie resbaladiza, como lodo o hierba mojada, ya que comienza a patinar mientras la rueda sobre superficie rugosa permanece inmóvil, lo que puede ocasionar que el vehículo se atasque.



    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 1. 
              span Deslizamiento de la rueda en una superficie resbaladiza       
                  
            figure
              img(src='@/assets/curso/tema1/1.png', alt='Chasis de un vehículo con las ruedas sobre una superficie resbaladiza, representada en azul, ilustrando el posible deslizamiento debido a la pérdida de tracción.', style="max-width: 820px;", data-aos="zoom-in")

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .row.justify-content-center.align-items-center
              .col-lg-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/bullets/ola.svg", alt="alt", style="max-width: 90px;").mx-auto.mb-4.mb-lg-0

              .col-lg
                p(data-aos="fade-up").mb-0 Para solucionar este inconveniente, se desarrolló el diferencial de deslizamiento limitado (<em>Limited Slip Differential</em> - LSD), el cual permite que el diferencial funcione de manera convencional en condiciones normales de manejo y, al mismo tiempo, reduzca o bloquee su acción diferencial cuando el vehículo enfrenta condiciones adversas. Esto se logra al limitar el libre movimiento de la rueda que patina y transferir parte de la potencia a la rueda con mayor tracción.
        
        .row.justify-content-center.align-items-center
          .col-lg-6
            .bg-color-8.p-5
              .bg-color-white.p-4
                p.mb-0 Existen dos tipos principales de diferenciales de deslizamiento limitado: uno que utiliza embragues y otro que emplea engranajes para bloquear o limitar el efecto diferencial.

          .col-lg-6
            figure
              img(src="@/assets/curso/tema1/2.png", alt="alt", style="max-width: 100%;").mx-auto.mt-4.mt-lg-0


    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1  Diferencial con embragues

    p(data-aos="fade-up").mb-5 Este tipo de diferencial cuenta con un sistema de embrague compuesto por múltiples discos ubicados a cada lado de los piñones cónicos planetarios.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 2. 
      span Partes del diferencial de deslizamiento limitado con embrague 
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/3.png', alt='Diagrama del diferencial de deslizamiento limitado, destacando discos dentados, satélites, planetarios y semiejes.', style="max-width: 820px;", data-aos="zoom-in")
        figcaption Nota. SENA (2019)

      .col-lg-7
        .bg-color-9.p-5
          p.mb-0 Los discos se instalan alternadamente en el mecanismo del diferencial. Los que poseen estriado interno engranan con los piñones planetarios, mientras que los de estriado externo se acoplan con el alojamiento del diferencial. En ausencia de presión, los discos pueden moverse de manera independiente; sin embargo, cuando se aplica presión, la fricción entre ellos los hace girar como una unidad, restringiendo el movimiento diferencial.



    .row.justify-content-center.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        .bg-color-9.p-5
          ul.lista-ul--color
            li.mb-0(data-aos="fade-up").mb-4
              i.fas.fa-check-circle
              |   Cuando no hay presión sobre los discos, estos pueden moverse de manera relativa entre sí.

            li.mb-0(data-aos="fade-up").mb-4
              i.fas.fa-check-circle
              |   Al aplicar presión, los discos se desplazan como un solo elemento debido a la fricción entre ellos, lo que permite restringir el movimiento del diferencial.

            li.mb-0(data-aos="fade-up")
              i.fas.fa-check-circle
              |   Si una rueda gira sin control debido al derrape en un terreno resbaladizo, la presión ejercida sobre los discos del embrague provoca su bloqueo o limitación. Esto reduce el efecto diferencial y facilita la transmisión de potencia a la rueda con mayor tracción.
      

      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3. 
          span Diferencial con deslizamiento limitado y sus discos de embrague 
          
        figure
          img(src='@/assets/curso/tema1/4.png', alt='Diagrama del diferencial de deslizamiento limitado con discos de embrague, destacando semiejes, corona y resortes.', style="max-width: 610px;", data-aos="zoom-in")
        figcaption.mt-3
          p.mb-0 Nota. Van Gelder (2018).


    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2  Diferencial con engranajes

    p(data-aos="fade-up").mb-4 El desarrollo de este tipo de diferencial responde a la necesidad de mejorar la estabilidad y tracción del vehículo. Su uso permitió ganar numerosas competencias de <em>rally</em> en los años 80. Entre los modelos más utilizados se encuentran el diferencial de deslizamiento limitado con engranajes helicoidales y el diferencial <em>torsen</em>.

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5

        .titulo-tres(data-aos="flip-up").mb-5
          h4 Diferencial LSD con engranaje helicoidales

        p(data-aos="fade-up").mb-5 Este mecanismo es sensible al torque, lo que mejora la tracción en superficies deslizantes mientras mantiene el efecto diferencial en condiciones normales de conducción. Se trata de un sistema automático de deslizamiento limitado.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 4. 
              span Diferencial LSD con engranajes helicoidales   
                  
            figure
              img(src='@/assets/curso/tema1/5.png', alt='Despiece de un diferencial LSD con engranajes helicoidales, mostrando su estructura interna y componentes principales.', style="max-width: 610px;", data-aos="zoom-in")

            figcaption
              p.mb-0 Nota. Jones & Christensen (2017)

    .titulo-tres(data-aos="flip-up").mb-4
      h4 Diferencial #[em Torsen]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .bg-color-8.p-5(data-aos="fade-right")
          .bg-color-white.p-4(data-aos="fade-left")
            p.mb-0 El diferencial <em>torsen</em> opera como un diferencial convencional en condiciones normales de manejo, pero actúa para mejorar la tracción cuando el vehículo se encuentra en una superficie resbaladiza o de baja adherencia. Generalmente, este sistema cuenta con tres pares de piñones helicoidales cuyos dientes engranan con los piñones sin fin de los planetarios. Cada piñón satélite dispone de un sector dentado en su parte externa para engranarse con su par en el lado opuesto, el cual, a su vez, está acoplado con el otro piñón planetario.
      .col-lg-6.mt-4.mt-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 5. 
          span Partes del diferencial #[em Torsen] 
        figure
          img(src="@/assets/curso/tema1/6.png", alt="alt", style="max-width: 100%;").mx-auto.mb-4.mb-lg-0
        figcaption.mt-3
          p.mb-0 Nota.  Aficionados a la mecánica (2014)

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-5
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 6. 
          span Funcionamiento de los engranajes
        figure
          img(src="@/assets/curso/tema1/7.png", alt="Esquema del funcionamiento de los engranajes helicoidales y planetarios en un diferencial.", style="max-width: 505px;").mx-auto.mb-4.mb-lg-0
        figcaption Nota. SENA (2019)
      .col-lg-7
        figure.mb-3.d-none.d-lg-block
          img(src="@/assets/bullets/ola.svg", alt="alt", style="max-width: 90px;")

        .bg-color-10.px-5.py-5(data-aos="fade-right")
          p.mb-0 El principio de funcionamiento de este mecanismo se basa en la interacción entre los engranajes sin fin (planetarios) y los helicoidales (satélites).


    .bg-full-width.bg-fondo-3
      .p-4.p-md-5
        .row.align-items-center.mb-4.mb-lg-5
          .col-lg-6
            figure.mb-3.d-none.d-lg-block
              img(src="@/assets/bullets/ola.svg", alt="alt", style="max-width: 90px; margin-left: auto;")

            .bg-color-10.px-5.py-5(data-aos="fade-right")
              p.mb-0 Cuando el engranaje sin fin (planetario) mueve el engranaje helicoidal (satélite), el diferencial <em>torsen</em> actúa de manera similar a un diferencial convencional.
          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-3.mt-4.mt-lg-0
              h5 Figura 7. 
              span El engranaje sin fin empuja el helicoidal
            figure
              img(src="@/assets/curso/tema1/8.png", alt="Figura del mecanismo de transmisión entre un engranaje sin fin y un engranaje helicoidal, mostrando cómo el movimiento del tornillo sin fin impulsa la rotación del engranaje.", style="max-width: 505px;").mx-auto.mb-4.mb-lg-0

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema1/9.svg", alt="alt", style="max-width: 90px;").mx-auto.mb-4.mb-lg-0

          .col-lg
            p(data-aos="fade-up").mb-0 Sin embargo, si una de las ruedas motrices pierde tracción y gira libremente, el engranaje helicoidal (satélite) intentará mover el engranaje sin fin (planetario). Dado que un engranaje helicoidal no puede impulsar un engranaje sin fin, el mecanismo se bloquea automáticamente y transfiere el movimiento a ambas ruedas. Esto permite redirigir el torque desde la rueda que pierde adherencia hacia la que tiene mayor tracción, resolviendo así el problema de los diferenciales convencionales.

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
