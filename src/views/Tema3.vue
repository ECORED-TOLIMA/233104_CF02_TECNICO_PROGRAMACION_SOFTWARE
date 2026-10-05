<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Priorización y trazabilidad de requisitos

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/1.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p La priorización y trazabilidad de requisitos son procesos complementarios que permiten #[b organizar el valor de los requisitos y asegurar su seguimiento] a lo largo del desarrollo del <em>software</em>. Mientras la priorización define qué debe implementarse primero según su importancia, la trazabilidad permite relacionar cada requisito con su origen, implementación y validación.

        p.mt-2 En proyectos reales, no todos los requisitos pueden desarrollarse al mismo tiempo debido a limitaciones de tiempo, recursos o complejidad técnica. Por esta razón, la priorización se convierte en una actividad clave para tomar decisiones estratégicas, garantizando que las funcionalidades más relevantes se desarrollen primero. Por otro lado, la trazabilidad asegura que cada requisito pueda ser rastreado durante todo su ciclo de vida, permitiendo verificar su cumplimiento y facilitar la gestión de cambios.

        p A continuación, un poco más detalle de cada una:

    .titulo-tres.mt-5: h3 Priorización 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Consiste en clasificar los requisitos según criterios que permiten determinar su importancia dentro del sistema. Este proceso no se basa únicamente en la funcionalidad, sino también en factores como el impacto en el negocio, el riesgo asociado y la dependencia entre requisitos.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/3.svg', alt='', style="width: 490px").m-auto
      .col-lg-5
        p Los criterios de priorización de requisitos son:

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Valor de negocio: aporte al objetivo del sistema.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Urgencia: necesidad de implementación inmediata.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Riesgo: nivel de impacto si falla.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Dependencias: relación con otros requisitos.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Complejidad: dificultad de desarrollo.

        .row.justify-content-center.mt-2
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Estos criterios permiten tomar decisiones más informadas, evitando desarrollar funcionalidades de bajo impacto antes que aquellas que aportan mayor valor.
      

    .row.justify-content-center.mt-4
      .col-lg-10
        p Igualmente, existen diferentes técnicas que permiten aplicar la priorización de manera estructurada. Estas técnicas ayudan a tomar decisiones objetivas, evitando depender únicamente del criterio individual y las más utilizadas o conocidas son:


    .row.justify-content-center.mt-4
      .col-lg-8
        .row.justify-content-center 
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").color-primario
            //-1ra pestaña
            .row(titulo="MoSCoW")
              p Técnica de priorización que clasifica los requisitos según su nivel de importancia para el proyecto, separándolos en imprescindibles, importantes, deseables y prescindibles. Este enfoque ayuda a enfocar los esfuerzos del equipo en aquello que aporta mayor valor y es crítico para el funcionamiento del sistema.
    
            //-2da pestaña  
            .row(titulo="Valor vs. esfuerzo")
              p Método que evalúa cada requisito comparando el beneficio que aporta al negocio con el esfuerzo, costo o complejidad que implica su implementación. Permite identificar rápidamente aquellas funcionalidades que ofrecen alto valor con bajo esfuerzo, optimizando la planificación del desarrollo.
            
            //-3ra pestaña
            .row(titulo="Puntuación")
              p Técnica que asigna valores numéricos a los requisitos con base en criterios previamente definidos, como impacto en el usuario, alineación con los objetivos del negocio o urgencia. La suma o comparación de estas puntuaciones facilita una priorización más objetiva y transparente.
    
            //-4ra pestaña
            .row(titulo="Priorización por riesgo")
              p Enfoque que prioriza los requisitos considerando los riesgos asociados a su implementación o ausencia, especialmente aquellos que podrían generar mayores impactos negativos en el sistema o el negocio. Este método permite abordar tempranamente los aspectos más críticos y reducir la probabilidad de fallos futuros.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema3/4.png', alt='', style="width: 390px").m-auto


    .titulo-tres.mt-5: h3 Trazabilidad 

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/5.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema3/6.svg', style='width: 100px').m-auto
          
          .col
            p Permite establecer relaciones entre los requisitos y otros elementos del proyecto, como diseño, desarrollo y pruebas. Este proceso facilita el seguimiento de cada requisito y asegura que todos sean implementados correctamente.

        .row.justify-content-center.mt-2
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color4.p-4
                  p A través de la trazabilidad, es posible identificar el origen de un requisito, su estado actual y su impacto en el sistema. Además, no solo permite verificar el cumplimiento de los requisitos, sino también analizar el impacto de los cambios. Cuando un requisito se modifica, es posible identificar qué otros elementos del sistema se ven afectados.


        p.mt-2 Al respecto, se tiene que los tipos de trazabilidad de requisitos utilizados son:

    .tarjeta--container.row.mb-5.mt-4
      .col-md.tarjeta.bg-15.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/7.svg', alt='Texto que describa la imagen')
          
        h4.text-center Trazabilidad hacia adelante
        p Permite establecer la relación entre cada requisito y los elementos que lo implementan, como diseño, código, pruebas o componentes del sistema. Facilita verificar que todos los requisitos han sido correctamente desarrollados y validados a lo largo del proyecto.

      .col-md.tarjeta.bg-7.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/8.svg', alt='Texto que describa la imagen')
          
        h4.text-center Trazabilidad hacia atrás
        p Vincula cada requisito con su origen, ya sea una necesidad del usuario, un objetivo del negocio o una normativa específica. Esta relación ayuda a justificar la existencia de cada requisito y a evaluar el impacto de posibles cambios en las etapas iniciales.

      .col-md.tarjeta.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/9.svg', alt='Texto que describa la imagen')
          
        h4.text-center Trazabilidad interna
        p Describe las relaciones y dependencias entre los propios requisitos, permitiendo identificar cómo un requisito afecta o se relaciona con otros. Esta trazabilidad es clave para mantener la coherencia del sistema y evitar inconsistencias durante el análisis y la gestión de cambios.


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La trazabilidad no solo permite verificar el cumplimiento de los requisitos, sino también analizar el impacto de los cambios. Cuando un requisito se modifica, es posible identificar qué otros elementos del sistema se ven afectados.
        <br> <br>
        p La priorización y la trazabilidad se complementan dentro del proceso de gestión de requisitos. La priorización define qué se implementa primero, mientras que la trazabilidad permite verificar que cada requisito haya sido correctamente desarrollado.


    .row.justify-content-center.mt-4
      .col-lg-10
        p Cuando ambos procesos se integran, se logra un mayor control del proyecto, ya que se puede planificar el desarrollo y validar su cumplimiento de forma estructurada. Por ello, hay que tener presente:


    .row
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5(style="height: 170px !important;")
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b La priorización organiza el desarrollo.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5(style="height: 170px !important;")
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b La trazabilidad permite el seguimiento.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5(style="height: 170px !important;")
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Ambas mejoran la calidad del sistema.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5(style="height: 170px !important;")
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Reducen riesgos en el proyecto.


    p.mt-4 La correcta aplicación de estos procesos permite mejorar la eficiencia del desarrollo, garantizar el cumplimiento de los requisitos y facilitar la toma de decisiones. En entornos dinámicos, donde los cambios son frecuentes, la priorización y la trazabilidad se convierten en herramientas clave para mantener el control del proyecto.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1. Técnicas de priorización de requisitos

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-6.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema3/11.png', alt='', style="width: 590px").m-auto
      .col-lg-6
        p Las técnicas de priorización de requisitos permiten establecer un orden de implementación basado en criterios objetivos, facilitando la toma de decisiones dentro del proyecto. A diferencia de una clasificación general, estas técnicas proporcionan métodos estructurados que permiten comparar requisitos considerando su valor, impacto y viabilidad.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color4.p-4
                  p En entornos reales, la priorización no se realiza una única vez, sino que es un proceso continuo. A medida que cambian las condiciones del proyecto, los requisitos deben reevaluarse para garantizar que el desarrollo se mantenga alineado con las necesidades del negocio.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/12.svg', alt='', style="width: 390px").m-auto
      .col-lg-6
        p Los factores evaluados en la priorización son:

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Impacto funcional: qué tanto aporta al sistema.

    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Frecuencia de uso: nivel de utilización.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Dependencia técnica: relación con otros requisitos.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Esfuerzo de desarrollo: recursos necesarios.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Riesgo asociado: consecuencias de fallo.

        p.mt-2 Estos factores permiten identificar qué requisitos deben abordarse primero, evitando decisiones basadas únicamente en percepción o preferencia.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p La técnica basada en riesgo prioriza los requisitos considerando #[b la probabilidad de fallo y el impacto que dicho fallo tendría sobre el sistema, el negocio o el usuario final]. A diferencia de otras técnicas centradas en valor o esfuerzo, este enfoque se orienta a #[b minimizar consecuencias negativas], especialmente en sistemas críticos.


        p.mt-4 En este contexto, el riesgo no se define únicamente como la posibilidad de error, sino como una combinación entre: probabilidad de ocurrencia del fallo e impacto del fallo en el sistema o negocio.

        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema3/13.svg', style='width: 100px').m-auto
          
          .col
            p En la práctica, este análisis permite identificar qué requisitos deben ser abordados con mayor prioridad, no por su valor funcional, sino por el riesgo que representan si fallan. El nivel de riesgo de un requisito no depende de un solo elemento, sino de múltiples factores que deben evaluarse de manera conjunta como son:


    SlyderF.mt-4(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/14.svg', alt='').img100.m-auto
        p.text-center
          b Complejidad técnica
        p.text-center.mb-0 Requisitos con lógica compleja o integración con múltiples sistemas presentan mayor probabilidad de fallo.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/15.svg', alt='').img100.m-auto
        p.text-center
          b Frecuencia de uso
        p.text-center.mb-0 Funcionalidades utilizadas constantemente tienen mayor impacto en caso de error.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/16.svg', alt='').img100.m-auto
        p.text-center
          b Dependencias
        p.text-center.mb-0 Requisitos que afectan a otros incrementan el riesgo sistémico.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/17.svg', alt='').img100.m-auto
        p.text-center
          b Criticidad del negocio
        p.text-center.mb-0 Procesos clave (pagos, autenticación, seguridad) tienen impacto alto.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/18.svg', alt='').img100.m-auto
        p.text-center
          b Historial de fallos
        p.text-center.mb-0 Componentes con errores previos presentan mayor probabilidad de fallo.
              

    p.mt-4.text-center La aplicación de esta técnica sigue un flujo estructurado que permite evaluar y priorizar los requisitos de manera objetiva:  


    .row.justify-content-center 
      .col-lg-4.d-none.d-lg-block.order-1
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema3/19.png', alt='', style="width: 100%").m-auto
      .col-lg-8
        LineaTiempoD.color-primario.linea-bold
          .row(numero="A" titulo="Identificación de requisitos")
            .col-md-12.mb-4.mb-md-0
              p Consiste en listar y describir los requisitos del sistema que serán analizados, asegurando que todos estén claramente definidos antes de iniciar su evaluación.

          .row(numero="B" titulo="Evaluación de probabilidad")
            .col-md-12.mb-4.mb-md-0
              p En esta etapa se estima la probabilidad de que cada requisito presente riesgos, considerando factores como complejidad, incertidumbre o dependencia de terceros.
    
          .row(numero="C" titulo="Evaluación de impacto")
            .col-md-12.mb-4.mb-md-0
              p Analiza las consecuencias que tendría un problema asociado a cada requisito, evaluando su efecto sobre el alcance, el costo, el tiempo o la calidad del sistema.

          .row(numero="D" titulo="Cálculo del riesgo")
            .col-md-12.mb-4.mb-md-0
              p Se obtiene combinando la probabilidad y el impacto, lo que permite asignar un nivel de riesgo a cada requisito de forma comparable y objetiva.

          .row(numero="E" titulo="Priorización")
            .col-md-12.mb-4.mb-md-0
              p Finalmente, los requisitos se ordenan según su nivel de riesgo, enfocando los esfuerzos del proyecto en aquellos que requieren mayor atención y control.
      

    .row.justify-content-center.mt-4
      .col-lg-10
        p La técnica basada en riesgo tiene una relación directa con el proceso de pruebas, ya que los requisitos con mayor riesgo deben ser <b>probados con mayor intensidad y profundidad</b>, así:


    .row.bg-04
      .col-12
        .p-5
          .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
            .col-lg-6.d-none.d-lg-block.order-2
              figure
                img(src='@/assets/curso/tema3/20.png', alt='', style="width: 590px").m-auto
            .col-lg-4
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Requisitos críticos → mayor cobertura de pruebas.

          
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Requisitos complejos → pruebas detalladas.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Requisitos sensibles → validación continua.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Requisitos de bajo riesgo → pruebas básicas.

              p.mt-2 Esta técnica es especialmente relevante en:

              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Sistemas financieros (transacciones, pagos).

          
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Sistemas de salud (información crítica).

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Sistemas de seguridad (autenticación, acceso).

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Plataformas con alta concurrencia.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/21.png', alt='', style="width: 290px").m-auto
      .col-lg-8
        p A pesar de sus ventajas, esta técnica presenta algunos retos:

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Requiere experiencia para evaluar correctamente el riesgo.

    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Puede ser subjetiva si no se utilizan criterios definidos.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Depende de información previa o conocimiento del sistema.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color4.p-4
                  p La priorización basada en riesgo no busca maximizar valor, sino minimizar impacto negativo. Su correcta aplicación permite enfocar el desarrollo en los puntos más críticos del sistema, asegurando mayor estabilidad y reduciendo fallos en producción.


    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2. Trazabilidad y matriz de trazabilidad de requisitos

    p La trazabilidad de requisitos es la capacidad de #[b rastrear y relacionar cada requisito] con los distintos elementos del proyecto, desde su origen hasta su implementación y validación. Este proceso permite mantener visibilidad completa del sistema, asegurando que todos los requisitos definidos sean considerados durante el desarrollo y que cualquier cambio pueda evaluarse de manera controlada.


    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En proyectos de <em>software</em>, donde los requisitos evolucionan constantemente, la trazabilidad se convierte en un mecanismo clave para #[b garantizar coherencia, control y cumplimiento]. Sin ella, resulta difícil determinar si un requisito fue implementado correctamente o si un cambio afecta otras partes del sistema.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p El enfoque funcional de la trazabilidad se centra en #[b cómo cada requisito se relaciona con los elementos que permiten su materialización dentro del sistema], asegurando que exista una conexión clara entre lo que se define, lo que se diseña, lo que se desarrolla y lo que se valida.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/23.svg', alt='', style="width: 290px").m-auto
      .col-lg-7
        p A diferencia de una trazabilidad meramente documental, este enfoque tiene un carácter operativo, ya que permite responder preguntas clave durante el desarrollo como son:

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 ¿Qué parte del sistema implementa este requisito? 

    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 ¿Qué componentes se ven afectados si el requisito cambia? 

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 ¿Cómo se valida que el requisito fue cumplido?

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color4.p-4
                  p En este sentido, la trazabilidad funcional actúa como un mecanismo de control que vincula los requisitos con su ejecución real dentro del proyecto.


    p.mt-4.text-center El enfoque funcional de la trazabilidad puede aplicarse en distintos niveles del sistema, dependiendo del grado de detalle requerido:[


    .row.justify-content-center
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/24.svg' alt='AvatarTop').m-auto
          .tarjeta.bg-4.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Nivel alto (funcional)]
                    p.text-center Relación entre requisitos y funcionalidades generales del sistema.
    
    
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/25.svg' alt='AvatarTop').m-auto
          .tarjeta.bg-4.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Nivel medio (arquitectónico)]
                    p.text-center Vínculo con componentes o módulos.
    
    
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/26.svg' alt='AvatarTop').m-auto
          .tarjeta.bg-4.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Nivel bajo (técnico)]
                    p.text-center Relación directa con código y pruebas.
    

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/27.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        p Esta segmentación permite adaptar la trazabilidad al tipo de proyecto, evitando sobrecarga de información en sistemas simples o falta de control en sistemas complejos.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p La matriz de trazabilidad es una herramienta que permite visualizar de manera estructurada las relaciones entre requisitos y otros elementos del sistema. Se utiliza principalmente para verificar que todos los requisitos han sido considerados durante el desarrollo.

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema3/28.svg', style='width: 85px').m-auto
          
          .col
            p A diferencia de una lista simple, la matriz permite analizar múltiples relaciones de forma simultánea, facilitando la identificación de vacíos o inconsistencias. Además, tiene la siguiente estructura:

    .row.justify-content-center.mt-4
      .col-lg-10

        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 1. 
          span Estructura de una matriz de trazabilidad

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #FFEBBE")
              tr
                th ID Requisito
                th Fuente
                th Diseño
                th Desarrollo
                th Prueba
                th Estado

            tbody
              tr(style="background-color: #F3F9FF")
                td.text-start 
                  b R1
                td.text-start Usuario
                td.text-start ✓
                td.text-start ✓
                td.text-start ✓
                td.text-start Validado

              tr
                td.text-start 
                  b R2
                td.text-start Negocio
                td.text-start ✓
                td.text-start ✓
                td.text-start X
                td.text-start En proceso

              tr(style="background-color: #F3F9FF")
                td.text-start
                  b R3
                td.text-start Cliente
                td.text-start ✓
                td.text-start X
                td.text-start X
                td.text-start Pendiente

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/29.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        p Esta estructura permite identificar rápidamente qué requisitos han sido implementados, cuáles están en proceso y cuáles requieren atención.

        p La matriz de trazabilidad se utiliza como herramienta de control durante todo el proyecto. Su actualización constante permite mantener coherencia entre los requisitos y su implementación. Además, facilita la comunicación entre equipos, ya que permite visualizar el estado del proyecto de forma clara y estructurada.

        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color4.p-4
                  p Cuando un requisito cambia, la trazabilidad permite identificar todos los elementos afectados. Esto evita realizar cambios aislados que puedan generar inconsistencias en el sistema.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema3/30.svg', style='width: 100px').m-auto
          
          .col
            p La trazabilidad permite mantener control sobre el sistema, asegurando que todos los requisitos sean considerados y validados. Su aplicación mejora la calidad del <em>software</em> y facilita la gestión del proyecto.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p En entornos complejos, donde existen múltiples dependencias, la trazabilidad se convierte en una herramienta esencial para evitar errores y garantizar la coherencia del sistema.






</template>

<script>
export default {
  name: 'Tema3',
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
