<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Herramientas para la captura y modelado de requisitos

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/1.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        p Las herramientas para la captura y modelado de requisitos apoyan de forma integral el proceso de identificación, organización, representación y validación de la información del sistema. Su uso permite estructurar el trabajo del analista, mejorar la comunicación entre los equipos involucrados y reducir errores derivados de ambigüedades o falta de información.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color4.p-4
                  p De manera general, estas herramientas pueden agruparse según la función que cumplen dentro del proceso de ingeniería de requisitos. Cada grupo responde a una necesidad específica, desde la recolección inicial de información hasta su documentación y gestión a lo largo del proyecto.


        p.mt-2 Los siguientes son los tipos de herramientas utilizados en el desarrollo de <em>software</em>:


    .titulo-tres.mt-5: h3 Herramientas de captura de requisitos

    p.mt-4 Se utilizan principalmente en las etapas iniciales del proceso y permiten recolectar información directamente de usuarios, <em>stakeholders</em> y fuentes documentales, asegurando que las necesidades del sistema queden registradas de forma clara y completa. Hacen parte las siguientes:


    .row.justify-content-center 
      .col-lg-8
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Formularios digitales")
            .col-md-12.mb-4.mb-md-0
              p facilitan la recolección estructurada de información mediante preguntas definidas previamente.
    
          .row(numero="2" titulo="Entrevistas asistidas")
            .col-md-12.mb-4.mb-md-0
              p Permiten capturar información directa a través de conversaciones guiadas con los interesados.
    
          .row(numero="3" titulo="Encuestas")
            .col-md-12.mb-4.mb-md-0
              p Apoyan el análisis de necesidades cuando se requiere recopilar información de un grupo amplio de usuarios.

          .row(numero="3" titulo="Notas colaborativas")
            .col-md-12.mb-4.mb-md-0
              p Permiten registrar y compartir información en tiempo real entre los participantes del proceso.
    
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema5/2.png', alt='', style="width: 100%").m-auto


    .titulo-tres.mt-5: h3 Herramientas de modelado de requisitos

    p.mt-4 Estas herramientas permiten transformar la información capturada en representaciones visuales del sistema, facilitando su comprensión, análisis y validación por parte de equipos técnicos y no técnicos. Se encuentran dentro de ellas:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bg-15.p-5(style="border-top-left-radius: 0px !important; border-bottom-left-radius: 0px !important;")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema5/3.svg', alt='Texto que describa la imagen')
          
        h4.text-center Draw.io / Diagrams.net
        p.text-center Utilizada para la elaboración de diagramas generales de procesos, flujos y estructuras.
      .col-md.tarjeta.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema5/4.svg', alt='Texto que describa la imagen')
          
        h4.text-center StarUML
        p.text-center Orientada al modelado UML, permite representar casos de uso, clases, secuencias y otros diagramas formales.

      .col-md.tarjeta.bg-15.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema5/5.svg', alt='Texto que describa la imagen')
          
        h4.text-center Lucidchart
        p.text-center Facilita la creación de diagramas de forma colaborativa y en línea.

      .col-md.tarjeta.bg-4.p-5(style="border-top-right-radius: 0px !important; border-bottom-right-radius: 0px !important;")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema5/6.svg', alt='Texto que describa la imagen')
          
        h4.text-center Visual Paradigm
        p.text-center Ofrece funcionalidades avanzadas para el modelado de sistemas y arquitecturas complejas.


    .titulo-tres.mt-5: h3 Herramientas de gestión de requisitos

    p.mt-4 Apoyan la organización, el seguimiento y el control de los requisitos durante todo el ciclo de vida del proyecto, asegurando trazabilidad, control de cambios y alineación con los objetivos del desarrollo. Se destacan:


    .row.mt-4
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Jira
          p.text-center Permite gestionar requisitos como elementos de trabajo, integrándolos con tareas y actividades del proyecto.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Trello
          p.text-center Ofrece una organización visual de requisitos mediante tableros y tarjetas.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Azure DevOps
          p.text-center Integra la gestión de requisitos con el control del desarrollo y las pruebas.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Notion
          p.text-center Facilita la documentación estructurada y la organización de la información del proyecto.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/7.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        .titulo-tres.mt-5: h3 Herramientas de colaboración
        p.mt-2 Estas herramientas fortalecen la comunicación y el trabajo conjunto entre los diferentes actores del proyecto, promoviendo la validación continua de los requisitos y la toma de decisiones compartida. Incluyen:

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Plataformas de trabajo colaborativo en línea.

    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Sistemas de comunicación y seguimiento de actividades.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Espacios compartidos para revisión y comentarios sobre los requisitos.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema5/8.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        .titulo-tres.mt-5: h3 Herramientas de documentación
        p.mt-2 Permiten el registro formal y estructurado de los requisitos, modelos y decisiones tomadas, sirviendo como referencia durante el desarrollo, la validación y el mantenimiento del sistema. Hacen parte:

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Documentos estructurados de especificación de requisitos.
    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Repositorios compartidos de información.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Herramientas de control de versiones para documentos.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1. Diagramas de casos de uso, historias de usuario y <em>storyboard</em>

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las técnicas de representación funcional permiten describir cómo interactúan los usuarios con el sistema y cómo se ejecutan las funcionalidades desde una perspectiva práctica. Entre las más utilizadas se encuentran los #[b diagramas de casos de uso], las #[b historias de usuario] y los #[b #[i storyboards]], los cuales permiten visualizar el sistema desde diferentes niveles de detalle.


    p.mt-4 Estas herramientas no solo facilitan la comprensión de los requisitos, sino que también permiten validar las funcionalidades con los usuarios antes de su implementación. Su uso conjunto permite construir una visión completa del sistema, combinando estructura, narrativa y experiencia de usuario.


    .titulo-tres.mt-5: h3 Diagramas de casos de uso

    p.mt-4 Los diagramas de casos de uso permiten representar la #[b interacción entre los actores y el sistema], identificando las funcionalidades principales. Este tipo de modelado se enfoca en describir qué hace el sistema, sin entrar en detalles técnicos.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color4.p-4
              p A través de estos diagramas, se pueden identificar los diferentes roles que interactúan con el sistema y las acciones que pueden realizar. Esto facilita la comprensión del alcance del sistema y permite validar los requisitos funcionales.

        p.text-center.mt-4  Los elementos que hacen parte de los casos de uso son:

    SlyderF.mt-4(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/10.svg', alt='').img100.m-auto
        p.text-center
          b Actor
        p.text-center.mb-0 Representa a un usuario, rol o sistema externo que interactúa con el sistema, iniciando o participando en la ejecución de una funcionalidad.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/11.svg', alt='').img100.m-auto
        p.text-center
          b Caso de uso
        p.text-center.mb-0 Describe una funcionalidad específica que el sistema ofrece para satisfacer una necesidad del actor, mostrando el comportamiento del sistema desde la perspectiva del usuario.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/12.svg', alt='').img100.m-auto
        p.text-center
          b Relación
        p.text-center.mb-0 Indica la interacción o vínculo existente entre los distintos elementos del diagrama, como la comunicación entre actores y casos de uso o las dependencias entre funcionalidades.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/13.svg', alt='').img100.m-auto
        p.text-center
          b Sistema
        p.text-center.mb-0 Define el límite del alcance del sistema, delimitando qué funcionalidades forman parte de él y diferenciándolo de los actores y sistemas externos.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/14.svg', alt='').img100.m-auto
        p.text-center
          b Extensión
        p.text-center.mb-0 Representa variaciones o comportamientos alternativos de un caso de uso principal, que se ejecutan bajo determinadas condiciones sin alterar el flujo básico.
                       
 
    p.mt-4.text-center A continuación, se ejemplifica la representación de los casos de uso:    


    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 5. 
          span Diagrama de casos de uso 
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema5/15.svg',
            alt='Figura 5 que contiene un diagrama representativo de los casos de uso donde se muestra un actor interactuando con un sistema delimitado, dentro del cual se identifican varios casos de uso que representan las principales funcionalidades ofrecidas por el sistema.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema5/16.svg',
            alt=''
          )

    .titulo-tres.mt-5: h3 Historias de usuario

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema5/17.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        p Las historias de usuario son una técnica utilizada principalmente en metodologías ágiles para describir funcionalidades desde la perspectiva del usuario. Estas se redactan en lenguaje natural, facilitando su comprensión y validación.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p A diferencia de los casos de uso, las historias de usuario no utilizan diagramas, sino que se enfocan en describir necesidades de forma sencilla y directa.

        p.mt-2 La estructura de una historia de usuario contiene los siguientes aspectos:


    .row.justify-content-center.mt-4
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema5/18.png', alt='', style="width: 480px").m-auto
      .col-lg-8
        .row.justify-content-center 
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg-base").color-primario
            //-1ra pestaña
            .row(titulo="Usuario")
              p Identifica a la persona, rol o perfil que interactúa con el sistema y hace uso de la funcionalidad. Este elemento considera las características, responsabilidades y contexto del usuario, permitiendo que los requisitos se definan de forma alineada con sus necesidades reales y su forma de trabajo.
    
            //-2da pestaña  
            .row(titulo="Necesidad")
              p Describe de manera explícita la acción, objetivo o problema que el usuario desea resolver mediante el sistema. La necesidad expresa qué quiere lograr el usuario y constituye el punto de partida para la definición de la funcionalidad requerida.
            
            //-3ra pestaña
            .row(titulo="Beneficio")
              p Explica el valor que el usuario obtiene al satisfacer la necesidad, detallando cómo la funcionalidad contribuye a mejorar la eficiencia, reducir errores, optimizar procesos o apoyar la toma de decisiones dentro de su contexto.
    
            //-4ra pestaña
            .row(titulo="Criterios")
              p Corresponden a un conjunto de condiciones claras, específicas y verificables que deben cumplirse para considerar que la funcionalidad ha sido correctamente implementada. Estos criterios permiten validar el comportamiento del sistema y asegurar que cumple con las expectativas y requerimientos del usuario.


    p.mt-4.text-center Su representación se puede entender de la siguiente manera:


    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 6. 
          span Estructura de una historia de usuario 
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema5/19.svg',
            alt='Figura 6 que contiene la estructura de una historia de usuario, mostrando de forma organizada los elementos que la componen: el usuario que solicita la funcionalidad, la necesidad que desea satisfacer, el beneficio esperado y los criterios de aceptación que permiten validar su correcto cumplimiento.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema5/20.svg',
            alt=''
          )


    .titulo-tres.mt-5: h3 <em>Storyboard</em>

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema5/21.svg', style='width:100px').m-auto
      
      .col
        p El storyboard es una técnica visual que permite representar la <b>experiencia del usuario a través de secuencias gráficas</b>, mostrando cómo interactúa con el sistema paso a paso. Esta herramienta se utiliza principalmente en el diseño de interfaces y en la validación de flujos de interacción.


    .row.justify-content-center.mt-4
      .col-lg-12
        .row.align-items-center
          .col-lg-12
            .cajon.color4.p-4
              p A diferencia de los casos de uso y las historias de usuario, el storyboard se enfoca en la experiencia visual, permitiendo identificar problemas de usabilidad antes de la implementación.

    p.mt-4.text-center Los elementos del storyboard se representan de la siguiente manera:


    .row.justify-content-center.mt-4
      .col-lg-10
        ImagenInfografica.color-acento-botones.d-none.d-md-block.m-auto
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema5/22.svg')

          .tarjeta.bg-7.p-3(x="12%" y="76%" numero="+")
            p Representa una acción o situación concreta dentro de un contexto de uso definido, describiendo el entorno y el momento en que ocurre la interacción.

          .tarjeta.bg-7.p-3(x="32%" y="76%" numero="+")
            p Actor principal que interactúa con el sistema, caracterizado por un rol, necesidades específicas y un objetivo a alcanzar.

          .tarjeta.bg-7.p-3(x="50%" y="76%" numero="+")
            p Conjunto de acciones realizadas por el usuario sobre la interfaz, como seleccionar, ingresar o confirmar información.

          .tarjeta.bg-7.p-3(x="68%" y="76%" numero="+")
            p Secuencia lógica y ordenada de eventos e interacciones que muestran cómo evoluciona el proceso dentro del sistema.

          .tarjeta.bg-7.p-3(x="87%" y="76%" numero="+")
            p Respuesta generada por el sistema tras la interacción, que puede incluir cambios de estado, retroalimentación visual o confirmaciones para el usuario.

        img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema5/23.svg',
            alt=''
          )



    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El uso de estas técnicas permite mejorar la calidad de los requisitos, facilitar la comunicación entre equipos y garantizar que el sistema responda a las necesidades del usuario.
        <br> <br>
        p En entornos ágiles, estas herramientas se utilizan de forma iterativa, permitiendo validar y ajustar funcionalidades de manera continua.


    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2. Herramientas de modelado


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema5/25.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p Las herramientas de modelado permiten #[b construir, mantener y comunicar modelos del sistema] (UML, BPMN, C4, ER, <em>wireframes</em>) de forma estandarizada y colaborativa. Más allá de “dibujar diagramas”, estas plataformas integran funciones de #[b versionamiento, validación, colaboración y exportación], facilitando que los modelos evolucionen junto con el proyecto.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color4.p-4
                  p En la práctica, la elección de la herramienta impacta directamente en la #[b calidad de la documentación], la velocidad de diseño y la #[b consistencia entre equipos]. Por ello, no se trata solo de la capacidad de diagramación, sino de su integración con el flujo de trabajo (repositorios, CI/CD, gestión de requisitos) y su soporte a estándares.



        .titulo-tres.mt-4: h3 Capacidades clave de las herramientas de modelado

        p.mt-2 Las herramientas modernas incorporan un conjunto de capacidades que permiten trabajar los modelos como artefactos vivos del proyecto, encontrando las siguientes:

    SlyderF.mt-4(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/26.svg', alt='').img100.m-auto
        p.text-center
          b Soporte de notación
        p.text-center.mb-0 Permite trabajar con distintos lenguajes y estándares de modelado como UML, BPMN, ER, C4 y <em>wireframes</em>, facilitando la representación adecuada según el tipo de sistema o nivel de abstracción requerido.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/27.svg', alt='').img100.m-auto
        p.text-center
          b Edición colaborativa
        p.text-center.mb-0 Habilita el trabajo simultáneo en tiempo real entre varios usuarios, lo que mejora la comunicación del equipo y reduce inconsistencias durante la construcción de modelos.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/28.svg', alt='').img100.m-auto
        p.text-center
          b Control de versiones
        p.text-center.mb-0 Registra el historial de cambios realizados en los modelos, permitiendo comparar versiones, revertir modificaciones y mantener trazabilidad sobre la evolución del diseño.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/29.svg', alt='').img100.m-auto
        p.text-center
          b Validación de modelos
        p.text-center.mb-0 Aplica reglas automáticas para verificar la coherencia, integridad y consistencia de los diagramas, ayudando a detectar errores antes de avanzar a etapas posteriores.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/30.svg', alt='').img100.m-auto
        p.text-center
          b Exportación
        p.text-center.mb-0 Ofrece opciones para generar los modelos en distintos formatos como PDF, PNG, SVG o incluso código, facilitando su documentación, distribución o integración con otros procesos.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema5/31.svg', alt='').img100.m-auto
        p.text-center
          b Integración
        p.text-center.mb-0 Permite conectar la herramienta con repositorios de código y plataformas DevOps, asegurando alineación entre los modelos, el desarrollo y la gestión del proyecto.

    
    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/32.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p Las herramientas se integran en un flujo que conecta requisitos, diseño y validación, asegurando que los modelos se mantengan actualizados, aplicando las siguientes acciones en los requisitos definidos:

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Selección de herramienta.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Construcción del modelo.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Revisión colaborativa.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Ajustes y versión final.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Los modelos deben tratarse como artefactos gestionados, lo que implica control, actualización y validación continua.


















</template>

<script>
export default {
  name: 'Tema5',
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
