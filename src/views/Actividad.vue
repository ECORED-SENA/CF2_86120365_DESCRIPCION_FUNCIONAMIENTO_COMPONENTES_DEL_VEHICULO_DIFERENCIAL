<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Diferencial de deslizamiento limitado y diagnóstico de fallas',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Evaluar el conocimiento sobre el funcionamiento del diferencial de deslizamiento limitado (LSD), sus tipos, características y el proceso de diagnóstico de fallas.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la función principal del diferencial de deslizamiento limitado (LSD)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permitir que las ruedas giren a la misma velocidad sin importar el terreno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Distribuir el torque de manera eficiente entre las ruedas motrices.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la velocidad del vehículo en curvas cerradas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facilitar el frenado en superficies resbaladizas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es la principal desventaja de un diferencial convencional en superficies resbaladizas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permite mayor desgaste en las llantas traseras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hace que una rueda patine mientras la otra no recibe tracción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No permite que las ruedas giren a diferentes velocidades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumenta el consumo de combustible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál de los siguientes NO es un tipo de diferencial de deslizamiento limitado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Con embragues.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Con engranajes helicoidales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Con cadena de transmisión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tipo torsen.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cómo funciona un diferencial LSD con embragues?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usa una bomba hidráulica para distribuir la tracción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Emplea discos de fricción que limitan el deslizamiento de las ruedas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Depende exclusivamente de la presión de los neumáticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utiliza engranajes helicoidales para bloquear el diferencial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué caracteriza al diferencial LSD tipo torsen?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Funciona únicamente en vehículos de tracción delantera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Usa un sistema de aire comprimido para mejorar la tracción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Transfiere el torque de la rueda con menor adherencia a la de mayor tracción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo es útil en terrenos pavimentados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es el primer paso en el diagnóstico de fallas del diferencial LSD?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escuchar al cliente y recopilar información sobre los síntomas del vehículo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cambiar el aceite del diferencial para descartar problemas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desarmar completamente el diferencial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicar pruebas de torque de inmediato.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué tipo de engranajes se utilizan en los diferenciales LSD helicoidales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Engranajes planetarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Engranajes con dientes inclinados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Engranajes rectos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Engranajes cónicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué acción toma el técnico después de realizar las pruebas de diagnóstico?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desconectar el diferencial para probar su resistencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Informar al cliente sobre el resultado del diagnóstico y las reparaciones necesarias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ajustar el diferencial sin consultar con el propietario del vehículo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicar lubricante para mejorar la tracción del diferencial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es la principal ventaja del diferencial LSD en comparación con un diferencial abierto?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora la tracción en terrenos resbaladizos y en curvas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reduce la velocidad máxima del vehículo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumenta el consumo de combustible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Permite que las ruedas giren siempre a la misma velocidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué sucede cuando un engranaje helicoidal intenta mover un engranaje sin fin en un diferencial torsen?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se reduce la fricción entre los engranajes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La potencia del motor disminuye automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El engranaje sin fin gira más rápido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El sistema se bloquea y transfiere el torque a la rueda con mayor adherencia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'En un diferencial LSD con embragues, los discos de fricción permiten limitar el movimiento del diferencial.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'Un diferencial LSD torsen no puede transferir torque entre las ruedas.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'El diagnóstico de fallas en el diferencial LSD incluye inspección visual, pruebas y recopilación de información del cliente.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: 'Los engranajes helicoidales en un diferencial LSD funcionan mejor en terrenos secos y con buena tracción.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'Uno de los pasos en el diagnóstico de fallas es consultar los manuales del fabricante para conocer los parámetros de funcionamiento estándar.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
