<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Especificación de requisitos de <em>software</em>

    figure
      img(src='@/assets/curso/tema1/1.png', alt='', style="width: 1220px").m-auto


    p.mt-4 La especificación de requisitos de <em>software</em> es el proceso mediante el cual se documentan de forma estructurada, precisa y verificable las necesidades que debe satisfacer un sistema. Este proceso constituye el punto de partida del desarrollo, ya que define el alcance funcional y no funcional del <em>software</em>, estableciendo una base sólida para su diseño, implementación y validación.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/2.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color4.p-4
                  p Una especificación adecuada permite traducir las necesidades del usuario en descripciones técnicas comprensibles para el equipo de desarrollo. Esta transformación implica interpretar correctamente los requerimientos del negocio, eliminando ambigüedades y asegurando que cada necesidad quede representada de forma clara dentro del documento.

        p.mt-2 La especificación no solo describe funcionalidades, sino que también define condiciones bajo las cuales el sistema debe operar. Esto incluye restricciones técnicas, reglas de negocio y atributos de calidad que influyen directamente en el comportamiento del sistema. De esta manera, se establece un marco completo que orienta el desarrollo y reduce la incertidumbre en la toma de decisiones.

        p Desde una perspectiva estructural, los requisitos se clasifican en dos grandes categorías:

    SlyderB.mb-5.mt-4.p-4(:datos="datosSlyder" style="background-color: #F2E4EF !important;")

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los requisitos funcionales representan las acciones o servicios que el sistema debe ofrecer, mientras que los no funcionales establecen criterios de calidad como rendimiento, seguridad o disponibilidad. Esta diferenciación permite abordar el desarrollo desde una visión integral, asegurando que el sistema cumpla tanto en funcionalidad como en desempeño.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema1/6.svg', alt='', style="width: 390px").m-auto
      .col-lg-8
        p Un aspecto crítico en la especificación es la #[b precisión semántica]; es decir, la capacidad de expresar los requisitos de manera inequívoca. Esto implica evitar términos subjetivos como “rápido” o “fácil”, sustituyéndolos por criterios medibles que permitan validar su cumplimiento. Por ejemplo, en lugar de indicar que un sistema debe ser “rápido”, se debe especificar un tiempo máximo de respuesta.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p La calidad de la especificación depende de características que garantizan su utilidad dentro del proceso de desarrollo. Estas características no se limitan a la redacción, sino que impactan directamente en la forma en que los requisitos pueden ser implementados y evaluados.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/7.png', alt='', style="width: 500px").m-auto
      .col-lg-5
        p Las características de calidad en la especificación son:

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Facilitar la comprensión.
    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Evitar contradicciones.
    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Cubrir el alcance total.
    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Permitir validación.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Relacionar origen y uso.

        p.mt-2 La trazabilidad, aunque se profundiza en temas posteriores, tiene un rol inicial en la especificación, ya que permite identificar el origen de cada requisito. Esto facilita su control en etapas futuras, especialmente cuando se presentan cambios o ajustes en el sistema.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color4.p-4
              p Otro elemento relevante es la gestión de ambigüedades. Una especificación deficiente puede generar interpretaciones diferentes entre los miembros del equipo, lo que conduce a errores en la implementación. Por ello, se recomienda utilizar estructuras estandarizadas, lenguaje controlado y validaciones constantes con los interesados.

        p.mt-4 Con base en lo anterior, se presenta el siguiente esquema que integra las principales etapas del proceso de ingeniería de requisitos, desde el estudio de viabilidad hasta la validación de requisitos:

        .row.justify-content-center
          .col-10
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Figura 1. 
              span Flujo de transformación de necesidades en requisitos de <em>software</em> 
            figure
              img.d-none.d-md-block.m-auto(
                src='@/assets/curso/tema1/8.svg',
                alt='Figura 1 que contiene un esquema que representa el proceso de ingeniería de requisitos, mostrando de manera secuencial el estudio de viabilidad, la identificación y análisis de requisitos, la elaboración de modelos del sistema, la especificación y documentación de los requisitos de usuario y del sistema, y su posterior validación.'
              )
              img.d-block.d-md-none.m-auto(
                src='@/assets/curso/tema1/9.svg',
                alt=''
              )


    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En entornos actuales, la especificación de requisitos se entiende como un proceso evolutivo. A medida que se avanza en el conocimiento del sistema, los requisitos pueden ajustarse, lo que exige una documentación flexible pero controlada. Este enfoque permite adaptarse a cambios sin perder la coherencia del proyecto.

    p.mt-4 Finalmente, la especificación de requisitos actúa como un punto de referencia transversal dentro del ciclo de vida del <em>software</em>. Su correcta elaboración impacta directamente en la calidad del producto final, ya que influye en el diseño, la implementación, las pruebas y la validación del sistema.


    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1. Plantillas ERS y estándar IEEE 830

    p La especificación de requisitos de <em>software</em> se apoya en documentos estructurados que permiten organizar la información de forma clara, consistente y verificable. En este contexto, las plantillas ERS y el estándar IEEE 830 cumplen un papel fundamental, ya que proporcionan lineamientos para documentar los requisitos de manera ordenada, facilitando su comprensión, análisis y validación por parte de los diferentes actores del proyecto.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/11.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .titulo-tres.mt-5: h3 Plantillas ERS (Especificación de Requisitos de <em>software</em>)

        .row.align-items-start
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema1/12.svg', style='width: 100px').m-auto
          
          .col
            p Las plantillas ERS ofrecen una guía práctica para estructurar la documentación de requisitos siguiendo un orden lógico y coherente. Estas plantillas organizan la información en secciones claramente definidas, lo que contribuye a reducir ambigüedades y a mejorar la trazabilidad de los requisitos a lo largo del ciclo de desarrollo.

        p El documento ERS suele organizarse en secciones que agrupan la información según su propósito, facilitando la lectura y el análisis del sistema a desarrollar. Una estructura típica incluye los siguientes componentes:


    .tarjeta--container.row.mb-5.mt-4
      .col-md.tarjeta.bg-15.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/13.svg', alt='Texto que describa la imagen')
          
        h4.text-center Introducción
        p Define el propósito del documento, el alcance del sistema a desarrollar y las principales definiciones, acrónimos y referencias necesarias para una correcta comprensión de los requisitos.
      .col-md.tarjeta.bg-7.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/14.svg', alt='Texto que describa la imagen')
          
        h4.text-center Descripción general
        p Presenta el contexto del sistema, su relación con el entorno operativo y una caracterización general de los usuarios y actores que interactúan con él.
      .col-md.tarjeta.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/15.svg', alt='Texto que describa la imagen')
          
        h4.text-center Requisitos específicos
        p Detalla las funcionalidades que el sistema debe proporcionar, así como las restricciones que condicionan su comportamiento y su implementación.

      .col-md.tarjeta.bg-12.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/16.svg', alt='Texto que describa la imagen')
          
        h4.text-center Interfaces externas
        p Describe las interacciones del sistema con otros sistemas, dispositivos o usuarios, especificando los tipos de interfaces y los mecanismos de comunicación involucrados.


    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema1/17.svg', style='width: 100px').m-auto
      
      .col
        p Las plantillas ERS no deben entenderse como documentos rígidos o estáticos, sino como herramientas adaptables al contexto del proyecto, al tipo de sistema y al nivel de detalle requerido. En entornos ágiles, por ejemplo, estas plantillas pueden simplificarse para evitar una sobrecarga documental, manteniendo únicamente los elementos esenciales.

    .titulo-tres.mt-5: h3 Estándar IEEE 830

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema1/18.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p El estándar IEEE 830 establece criterios reconocidos internacionalmente para la elaboración de documentos de especificación de requisitos de <em>software</em>. Su objetivo principal es asegurar que la documentación sea comprensible, completa y útil para todos los actores involucrados en el proyecto.

        p.mt-2 Este estándar no impone un formato único, sino que proporciona una base que garantiza la calidad de la especificación. Entre sus principales aportes se encuentra la definición de las características que debe cumplir una buena especificación de requisitos, tales como:

        .row.align-items-start.mt-4
          .col-lg-3.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema1/19.svg', style='width: 180px').m-auto
          
          .col
            ul.lista-ul--color
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Los requisitos deben ser verificables mediante pruebas.
        
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Deben ser consistentes entre sí.
        
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Deben estar correctamente estructurados.
        
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Deben evitar ambigüedades.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Aunque en la actualidad el estándar IEEE 830 ha sido complementado por normas más recientes, como IEEE 29148, su estructura sigue siendo ampliamente utilizada como referencia debido a su claridad y enfoque práctico. Esto permite su aplicación tanto en metodologías tradicionales como en enfoques ágiles, adaptándose a las necesidades específicas de cada proyecto.

    .row.justify-content-center.mt-4
      .col-lg-10
        p En síntesis, el uso de plantillas ERS y el estándar IEEE 830 permite establecer una base sólida para la documentación de requisitos, asegurando claridad, organización y control dentro del proceso de desarrollo. Su correcta aplicación impacta directamente en la calidad del <em>software</em>, al reducir errores de interpretación y facilitar la validación del sistema.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2. Informe de especificación de requisitos y sus componentes

    p El #[b informe de especificación de requisitos de <em>software</em>] es el documento formal que consolida y organiza toda la información relevante del sistema desde la perspectiva de lo que debe construirse. A diferencia del punto anterior (estructura estándar), aquí el enfoque está en el #[b documento como entregable real], utilizado  para validación, desarrollo y control del proyecto.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color4.p-4
              p Este informe actúa como un #[b contrato técnico] entre los stakeholders y el equipo de desarrollo, ya que define de manera precisa el alcance del sistema, sus funcionalidades y las condiciones bajo las cuales debe operar.

        p.mt-4 Los componentes del informe de especificación de requisitos son similares al de las plantillas ERS, como se puede apreciar a continuación:

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/21.svg', alt='').img100.m-auto
        p.text-center
          b Portada
        p.text-center.mb-0 Contiene la identificación del documento, incluyendo el nombre del proyecto, versión, fecha y responsables de su elaboración.
              
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/22.svg', alt='').img100.m-auto
        p.text-center
          b Introducción
        p.text-center.mb-0 Expone el propósito del documento, el alcance del sistema y el contexto general en el que se desarrolla el proyecto.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/23.svg', alt='').img100.m-auto
        p.text-center
          b Descripción general
        p.text-center.mb-0 Presenta una visión global del sistema, su funcionamiento básico y una caracterización de los usuarios y actores involucrados.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/24.svg', alt='').img100.m-auto
        p.text-center
          b Requisitos funcionales
        p.text-center.mb-0 Detalla las funcionalidades y servicios que el sistema debe proporcionar para satisfacer las necesidades de los usuarios.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/25.svg', alt='').img100.m-auto
        p.text-center
          b Requisitos no funcionales
        p.text-center.mb-0 Define las restricciones y los atributos de calidad que condicionan el comportamiento del sistema, como rendimiento, seguridad y usabilidad.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/26.svg', alt='').img100.m-auto
        p.text-center
          b Interfaces
        p.text-center.mb-0 Describe la interacción del sistema con otros sistemas externos, dispositivos o componentes, especificando los mecanismos de comunicación.
      
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/27.svg', alt='').img100.m-auto
        p.text-center
          b Anexos
        p.text-center.mb-0 Incluyen información complementaria, como diagramas, glosarios o referencias, que apoyan la comprensión del documento sin sobrecargar el contenido principal.

    .row.justify-content-center.mt-4
      .col-lg-10
        p.mt-4 Con base en lo anterior, la siguiente imagen presenta cómo este documento se integra a las distintas etapas del proyecto de <em>software</em> y apoya las actividades de análisis, validación y gestión a lo largo del ciclo de desarrollo:   


    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 2. 
          span Rol del informe ERS dentro del proyecto de <em>software</em> 
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema1/28.svg',
            alt='Figura 2 que detalla la integración del informe ERS a lo largo de las fases del proyecto de <em>software</em>, evidenciando las actividades de recopilación y obtención de información, análisis, documentación, verificación, validación y gestión de cambios durante el ciclo de desarrollo.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema1/29.svg',
            alt=''
          )

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Cada componente cumple un propósito específico dentro del documento, evitando que la información se mezcle o pierda claridad. Esta organización permite que cada actor consulte únicamente la sección que necesita.


    p.mt-4 Para finalizar el análisis del informe de especificación de requisitos, a continuación, se relacionan los aspectos clave que determinan su calidad, su uso a lo largo del proyecto y la manera en que debe mantenerse actualizado, destacando su enfoque práctico dentro del desarrollo de <em>software</em>:


    .row.justify-content-center
      .col-lg-12
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-base")
          .tarjeta.clr--pink02.p-4(titulo="Contenido del informe de especificación de requisitos")
            .row.align-items-center
              .col-lg-6
                p El valor del informe de especificación de requisitos no radica en su extensión, sino en la precisión y claridad de su contenido. Cada requisito debe estar formulado de tal manera que pueda ser comprendido, implementado y validado sin ambigüedades por todos los involucrados en el proyecto. Un requisito bien definido incluye, como mínimo, un identificador único que permita su trazabilidad, una descripción clara de la necesidad, las condiciones de entrada, el resultado esperado y las restricciones asociadas que delimitan su comportamiento.
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema1/30.png', alt='', style="width: 100%").m-auto
    
          div(titulo="Uso del informe en el desarrollo del <em>software</em>")
            .row.align-items-center
              .col-lg-6
                p El informe de especificación de requisitos no es un documento estático o pasivo, sino una herramienta activa que acompaña el desarrollo del sistema en diferentes etapas. Sirve como base para el diseño del sistema, orienta la construcción de casos de prueba, facilita la validación de los requisitos con el cliente y apoya la gestión de cambios a lo largo del ciclo de vida del proyecto.
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema1/31.png', alt='', style="width: 100%").m-auto
    
          div(titulo="Control y actualización del informe")
            .row.align-items-center
              .col-lg-6
                p Durante el ciclo de vida del <em>software</em>, los requisitos pueden evolucionar, por lo que el informe debe mantenerse actualizado de forma controlada. Esto implica establecer mecanismos de versionamiento del documento, llevar un registro de los cambios realizados y realizar validaciones continuas con los stakeholders, evitando inconsistencias y asegurando la coherencia de la información.
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema1/32.png', alt='', style="width: 100%").m-auto
    
          div(titulo="Enfoque práctico del informe")
            .row.align-items-center
              .col-lg-6
                p En la práctica, el nivel de detalle del informe depende del tipo y contexto del proyecto. Los sistemas críticos requieren una documentación más rigurosa y detallada, mientras que en entornos ágiles se utilizan versiones más ligeras que conservan únicamente los elementos esenciales. En este sentido, el equilibrio entre detalle y utilidad es fundamental, ya que un documento excesivamente extenso puede dificultar su uso, mientras que uno insuficiente puede generar vacíos de información relevantes.
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema1/33.png', alt='', style="width: 100%").m-auto
    

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Funcionales',
        texto:
          'Describen las acciones, servicios y funcionalidades específicas que el sistema debe realizar para satisfacer las necesidades de los usuarios y los objetivos del negocio, indicando qué hace el sistema en respuesta a determinadas entradas o situaciones.',
        imagen: require('@/assets/curso/tema1/3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'No funcionales',
        texto:
          'Definen las características de calidad y las restricciones bajo las cuales el sistema debe operar, estableciendo cómo debe comportarse, por ejemplo, en términos de rendimiento, seguridad, usabilidad, disponibilidad y confiabilidad.',
        imagen: require('@/assets/curso/tema1/4.png'),
      },
    ],
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
