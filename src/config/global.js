export default {
  global: {
    Name: 'Diferencial de deslizamiento limitado y diagnóstico de fallas',
    Description:
      'El diferencial es un componente clave en la transmisión del vehículo, el componente formativo aborda el diferencial de deslizamiento limitado (LSD), explicando su funcionamiento con embragues y engranajes, incluyendo los tipos helicoidales y <em>Torsen</em>. Además, presenta un proceso de diagnóstico de fallas, que incluye escuchar al cliente, investigar, realizar pruebas e informar resultados. Se enfatiza en mejorar la tracción y estabilidad vehicular en superficies resbaladizas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Diferencial de deslizamiento limitado (LSD)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Diferencial con embragues',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Diferencial con engranajes',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diagnóstico inicial de fallas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Escuchar al cliente',
            hash: 't_2_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/86120365_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Diferencial de deslizamiento limitado (LSD)',
      referencia:
        'Mentalidad De Ingeniería. (2022). LIMITADO DESLIZAR DIFERENCIAL. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gy9vFged0FQ',
    },
    {
      tema: 'Diferencial con embragues',
      referencia: 'UGEARS. (s.f.). Maqueta mecánica diferencial.',
      tipo: 'Documento',
      link:
        'https://ugearsmodels.com/image/pocket_study_guide/Differential-Pocket-Study-Guide-Ugears-STEM-lab-es.pdf?srslid=AfmBOopHyXAxhrpO2pZ83HEKROLq54_AdQKmlOO4GjCqgsNBQZtzGQK9',
    },
    {
      tema: 'Diferencial con engranajes',
      referencia:
        'La Catarina - UDLAP. Aplicación de engranes cónicos en el sistema de potencia.',
      tipo: 'Documento',
      link:
        'https://catarina.udlap.mx/u_dl_a/tales/documentos/lim/ramirez_i_m/capitulo5.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Bloqueo del diferencial',
      significado:
        'mecanismo que impide que una rueda gire libremente, mejorando la tracción en terrenos difíciles.',
    },
    {
      termino: 'Diferencial de deslizamiento limitado (LSD)',
      significado:
        'mecanismo que distribuye el torque entre las ruedas motrices para mejorar la tracción en superficies resbaladizas.',
    },
    {
      termino: 'Diferencial <em>Torsen</em>',
      significado:
        'sistema que usa engranajes sin fin y helicoidales para transferir torque a la rueda con mayor tracción.',
    },
    {
      termino: 'Embrague',
      significado:
        'conjunto de discos que permiten limitar el deslizamiento de las ruedas en diferenciales LSD.',
    },
    {
      termino: 'Engranajes helicoidales',
      significado:
        'tipo de engranaje con dientes inclinados que mejora la eficiencia y suavidad en la transmisión del movimiento.',
    },
    {
      termino: 'Fricción',
      significado:
        'resistencia al movimiento entre dos superficies en contacto, clave en los diferenciales LSD con embragues.',
    },
    {
      termino: 'Prueba de diagnóstico',
      significado:
        'procedimiento para identificar fallas en el diferencial mediante inspecciones y pruebas mecánicas.',
    },
    {
      termino: 'Superficie resbaladiza',
      significado:
        'terreno con baja adherencia, como lodo o nieve, donde las ruedas pueden perder tracción.',
    },
    {
      termino: 'Torque',
      significado:
        'fuerza de giro aplicada a un eje, fundamental en la transmisión de potencia en los vehículos.',
    },
    {
      termino: 'Transmisión de potencia',
      significado:
        'proceso mediante el cual el motor transfiere energía a las ruedas a través del diferencial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aficionados a la mecánica. (2014). <em>Diferencial autoblocante.</em>',
      link: '',
    },
    {
      referencia:
        'Jones, D. & VanGelder, K. (2018). <em>Automotive electricity and electronics.</em> Burlington: Jones & Bartlett Learning.',
      link: '',
    },
    {
      referencia:
        'Jones, J. & Christensen, K. (2017). <em>Traction aid: your guide to lockers, limited slip differential, and spools.</em>',
      link: '',
    },
    {
      referencia:
        'VanGelder, K. (2018). <em>Fundamentals of automotive technology. Principles and practice.</em> Jones & Bartlett Learning.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Edwin Abello Rubiano',
          cargo: 'Experto temático',
          centro:
            'Centro de Gestión de Mercados Logística y Tecnologías de la Información - Regional Distrito Capital.',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
