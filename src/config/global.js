export default {
  global: {
    Name:
      'Especificación, modelado y gestión de requisitos de <em>software</em>',
    Description:
      'Este componente aborda la ingeniería de requisitos y el diseño arquitectónico bajo estándares internacionales. Se profundiza en la especificación mediante IEEE 830, técnicas de priorización, trazabilidad y modelado avanzado con UML y C4. Finalmente, integra herramientas de captura, metodologías del ciclo de vida y control de versiones para asegurar soluciones de <em>software</em> robustas y escalables.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Especificación de requisitos de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Plantillas ERS y estándar IEEE 830',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Informe de especificación de requisitos y sus componentes',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis y gestión de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Análisis de requisitos y técnicas de análisis',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Gestión del ciclo de vida de los requisitos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Priorización y trazabilidad de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Técnicas de priorización de requisitos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Trazabilidad y matriz de trazabilidad de requisitos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Modelado en el desarrollo de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Lenguajes de modelado y técnicas de análisis',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'UML y modelo C4 para documentación de arquitectura',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas para la captura y modelado de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Diagramas de casos de uso, historias de usuario y storyboard',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Herramientas de modelado',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          '6.	Ciclo de vida y control en el desarrollo de <em>software</em> ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Control de versiones y herramientas asociadas',
            hash: 't_6_1',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA2_228145_DU.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de requisitos',
      significado:
        'proceso mediante el cual se examinan, organizan y refinan los requisitos para asegurar su claridad, coherencia y viabilidad antes de su implementación.',
    },
    {
      termino: 'Control de versiones',
      significado:
        'sistema que permite gestionar los cambios en el código fuente, mantener un historial de modificaciones y facilitar el trabajo colaborativo mediante herramientas como Git.',
    },
    {
      termino: 'ERS (Especificación de Requisitos de <em>software</em>)',
      significado:
        'documento formal que describe de manera estructurada todos los requisitos del sistema, siguiendo estándares como el IEEE 830, permitiendo su comprensión, validación y desarrollo.',
    },
    {
      termino: 'Gestión de requisitos',
      significado:
        'conjunto de actividades orientadas a controlar, actualizar y mantener los requisitos a lo largo del ciclo de vida del <em>software</em>, garantizando su trazabilidad y consistencia.',
    },
    {
      termino: 'Historia de usuario',
      significado:
        'descripción breve y sencilla de una funcionalidad desde la perspectiva del usuario, utilizada en metodologías ágiles para definir necesidades del sistema.',
    },
    {
      termino: 'Modelo C4',
      significado:
        'enfoque de documentación arquitectónica que organiza la representación del sistema en niveles (contexto, contenedores, componentes y código), facilitando su comprensión progresiva.',
    },
    {
      termino: 'Priorización de requisitos',
      significado:
        'proceso de clasificación de los requisitos según su importancia, impacto y valor para el sistema, con el fin de definir el orden de implementación.',
    },
    {
      termino: 'Requisito de <em>software</em>',
      significado:
        'condición o capacidad que debe cumplir un sistema para satisfacer una necesidad del usuario o del negocio. Constituye la base para el análisis, diseño y desarrollo del <em>software</em>.',
    },
    {
      termino: 'Trazabilidad de requisitos',
      significado:
        'capacidad de relacionar cada requisito con otros elementos del proyecto, como diseño, desarrollo y pruebas, permitiendo su seguimiento y control.',
    },
    {
      termino: 'UML (Unified Modeling Language)',
      significado:
        'lenguaje de modelado estandarizado que permite representar la estructura y el comportamiento de un sistema mediante diagramas como clases, casos de uso y secuencia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Booch, G., Rumbaugh, J. & Jacobson, I. (2005). <em>El lenguaje unificado de modelado. Guía del usuario</em> (2.ª ed.). Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Brown, S. (2018). <em>Software Architecture for Developers</em>. Leanpub.',
      link: '',
    },
    {
      referencia:
        'Cockburn, A. (2001). <em>Writing Effective Use Cases</em>. Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'IEEE. (1998). <em>IEEE Std 830-1998: Recommended Practice for Software Requirements Specifications</em>. IEEE.',
      link: '',
    },
    {
      referencia:
        'International Institute of Business Analysis. (2015). <em>BABOK Guide</em> (3rd ed.).',
      link: '',
    },
    {
      referencia:
        'Pressman, R. S. & Maxim, B. (2019). <em>Ingeniería del software: un enfoque práctico</em> (9.ª ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Sommerville, I. (2016). <em>Ingeniería del software</em> (10.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Wiegers, K. & Beatty, J. (2013). <em>Software Requirements</em> (3rd ed.). Microsoft Press.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
