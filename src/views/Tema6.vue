<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Ciclo de vida y control en el desarrollo de <em>software</em>

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/1.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p El ciclo de vida del desarrollo de <em>software</em> representa el conjunto de fases mediante las cuales un sistema es concebido, construido, validado y mantenido. Más allá de una secuencia de etapas, el ciclo de vida constituye un marco que permite #[b organizar el trabajo, establecer controles y garantizar la calidad del producto final].

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p El control dentro del ciclo de vida implica la aplicación de mecanismos que permiten #[b supervisar el avance, gestionar riesgos, validar resultados y asegurar el cumplimiento de los objetivos del proyecto]. Este control no se limita a una fase específica, sino que se integra de manera transversal en todo el proceso de desarrollo.

        .titulo-tres.mt-5: h3 Fases del ciclo de vida del <em>software</em>

        p.mt-2 El ciclo de vida se estructura en fases que permiten dividir el desarrollo en etapas controladas. Cada una tiene objetivos específicos y genera resultados que sirven de base para la siguiente, los cuales se describen a continuación:


    .row.bg-010.p-4
      .col-12
        .p-5 
          .tarjeta.tarjeta--gris.p-4
            PasosB.color-acento-contenido
              .row.align-items-center(titulo="")
              
                .col-md-5
                  figure
                    img(src='@/assets/curso/tema6/2.png')
                
                .col-md-5.mb-4.mb-md-0
                  p 
                    b A. Planificación

                  p Esta fase define la base del proyecto, estableciendo objetivos, alcance, restricciones y recursos. Aquí se determina la viabilidad técnica y económica del sistema. Incluye:

                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 Estimación de tiempos y costos.

                    li
                      i.lista-ul__vineta
                      p.mb-0 Identificación de riesgos iniciales. 

                    li
                      i.lista-ul__vineta
                      p.mb-0 Definición del equipo de trabajo. 

                    li
                      i.lista-ul__vineta
                      p.mb-0 Selección del modelo de desarrollo.

                  p Una planificación deficiente genera impactos en todas las fases posteriores.

              .row(titulo="")
              
                .col-md-5
                  figure
                    img(src='@/assets/curso/tema6/3.png')
                
                .col-md-5.mb-4.mb-md-0
                  p 
                    b B. Análisis

                  p En esta fase se identifican, documentan y validan los requisitos del sistema. Se busca comprender completamente el problema antes de diseñar la solución. Incluye:

                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 Elicitación de requisitos.

                    li
                      i.lista-ul__vineta
                      p.mb-0 Análisis de necesidades del usuario. 

                    li
                      i.lista-ul__vineta
                      p.mb-0 Validación con <em>stakeholders</em>. 

                    li
                      i.lista-ul__vineta
                      p.mb-0 Definición de criterios de aceptación. 

                  p El resultado principal es la base funcional del sistema.

              .row(titulo="")
              
                .col-md-5
                  figure
                    img(src='@/assets/curso/tema6/4.png')
                
                .col-md-5.mb-4.mb-md-0
                  p 
                    b C. Diseño

                  p El diseño transforma los requisitos en una solución técnica estructurada. Aquí se define la arquitectura, los componentes y la organización del sistema. Incluye:

                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 Diseño arquitectónico.

                    li
                      i.lista-ul__vineta
                      p.mb-0 Modelado de datos. 

                    li
                      i.lista-ul__vineta
                      p.mb-0 Definición de interfaces. 

                    li
                      i.lista-ul__vineta
                      p.mb-0 Selección de tecnologías. 

                  p Un diseño sólido reduce errores en desarrollo.

              .row(titulo="")
              
                .col-md-5
                  figure
                    img(src='@/assets/curso/tema6/5.png')
                
                .col-md-5.mb-4.mb-md-0
                  p 
                    b D. Desarrollo

                  p En esta fase se implementa el sistema, transformando los modelos en código funcional. Incluye:

                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 Programación de funcionalidades.

                    li
                      i.lista-ul__vineta
                      p.mb-0 Integración de componentes.

                    li
                      i.lista-ul__vineta
                      p.mb-0 Aplicación de estándares de codificación. 

                    li
                      i.lista-ul__vineta
                      p.mb-0 Documentación técnica. 

                  p La calidad del código impacta directamente en la mantenibilidad del sistema.

              .row(titulo="")
              
                .col-md-5
                  figure
                    img(src='@/assets/curso/tema6/6.png')
                
                .col-md-5.mb-4.mb-md-0
                  p 
                    b E. Pruebas

                  p Se valida que el sistema cumpla con los requisitos definidos, detectando errores antes de su liberación. Incluye:

                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 Pruebas funcionales

                    li
                      i.lista-ul__vineta
                      p.mb-0 Pruebas de integración. 

                    li
                      i.lista-ul__vineta
                      p.mb-0 Pruebas de rendimiento. 

                    li
                      i.lista-ul__vineta
                      p.mb-0 Validación con usuarios. 

                  p Esta fase asegura la calidad del producto.

              .row(titulo="")
              
                .col-md-5
                  figure
                    img(src='@/assets/curso/tema6/7.png')
                
                .col-md-5.mb-4.mb-md-0
                  p 
                    b F. Despliegue

                  p Consiste en la puesta en producción del sistema, asegurando su funcionamiento en el entorno real. Incluye:

                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 Configuración de entornos. 

                    li
                      i.lista-ul__vineta
                      p.mb-0 Instalación del sistema. 

                    li
                      i.lista-ul__vineta
                      p.mb-0 Migración de datos. 

                    li
                      i.lista-ul__vineta
                      p.mb-0 Capacitación de usuarios. 

                  p Un despliegue mal ejecutado puede afectar la adopción del sistema.

              .row(titulo="")
              
                .col-md-5
                  figure
                    img(src='@/assets/curso/tema6/8.png')
                
                .col-md-5.mb-4.mb-md-0
                  p 
                    b G. Mantenimiento

                  p Es la fase más prolongada del ciclo de vida, donde se corrigen errores y se implementan mejoras. Incluye:

                  ul.lista-ul--color
                    li
                      i.lista-ul__vineta
                      p.mb-0 Corrección de fallos. 

                    li
                      i.lista-ul__vineta
                      p.mb-0 Actualización de funcionalidades. 

                    li
                      i.lista-ul__vineta
                      p.mb-0 Optimización del sistema. 

                    li
                      i.lista-ul__vineta
                      p.mb-0 Soporte técnico.

                  p El mantenimiento asegura la continuidad operativa.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              .row.align-items-start.mt-4
                .col-lg-2.mb-lg-0.mb-4
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/tema6/9.svg', style='width: 180px').m-auto
                
                .col
                  p Cada una de estas fases permite reducir la complejidad del desarrollo, facilitando la organización del trabajo y la identificación de errores en etapas tempranas.



    .titulo-tres.mt-5: h3 Modelos de ciclo de vida


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/10.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        p El ciclo de vida puede implementarse mediante diferentes modelos, los cuales determinan la forma en que se ejecutan las fases.

        p La selección del modelo depende del tipo de proyecto, la complejidad del sistema y la necesidad de adaptación a cambios, teniendo en cuenta lo siguiente:

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Modelos secuenciales → mayor control inicial.

    
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Modelos iterativos → mayor flexibilidad.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Modelos ágiles → adaptación continua.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Modelos híbridos → equilibrio entre control y cambio.


    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-tres.mt-5: h3 Control del proceso de desarrollo

        p.mt-4 El control del proceso de desarrollo es el conjunto de prácticas, mecanismos y métricas que permiten #[b monitorear, evaluar y ajustar el avance del proyecto de <em>software</em>], asegurando que se cumplan los objetivos definidos en términos de alcance, tiempo, costo y calidad.

        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema6/11.svg', style='width: 100px').m-auto
          
          .col
            p Este control no se limita a supervisar tareas, sino que implica establecer un sistema continuo de #[b medición, análisis y toma de decisiones], que permita detectar desviaciones y aplicar acciones correctivas de manera oportuna.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema6/12.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        p teEn entornos modernos, el control se implementa como un proceso iterativo que acompaña cada fase del ciclo de vida, integrándose con metodologías ágiles, DevOps y gestión de proyectos.

        p El control efectivo del desarrollo se basa en varios componentes que trabajan de forma integrada:

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Planificación base: define objetivos, tiempos y recursos.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Seguimiento: monitorea el avance real.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Medición: cuantifica el desempeño.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Evaluación: analiza resultados.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Corrección: ajusta desviaciones.


    .row.bg-04
      .col-12
        .p-5
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema6/13.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Estos componentes permiten establecer un ciclo de control continuo, donde cada etapa alimenta la siguiente.
              <br> <br>
              p El control del desarrollo requiere indicadores que permitan medir el desempeño del proyecto de manera objetiva. Estas métricas permiten identificar problemas antes de que se conviertan en riesgos críticos.

          .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.order-2
              figure
                img(src='@/assets/curso/tema6/14.png', alt='', style="width: 390px").m-auto
            .col-lg-6
              p En metodologías ágiles, el control del proceso se realiza de manera continua mediante prácticas específicas de la siguiente manera:

              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Sprint planning: definición de tareas.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Daily meeting: seguimiento diario.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Sprint review: validación de entregas.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Retrospective: mejora del proceso.

              .row.align-items-center.justify-content-center
                .col-lg-12
                  .row.justify-content-center.mt-4
                    .col-lg-12(data-aos="fade-down")
                      .row.d-flex.align-items-center.bg-4(data-aos="fade-right")
                        .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                          figure.m-0.p-0.w-100.h-100.d-flex
                            img(src='@/assets/curso/tema6/15.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                        .col-lg
                          p Estos mecanismos permiten mantener un control constante del proyecto sin necesidad de procesos rígidos.



    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Control de versiones y herramientas asociadas

    p El control de versiones es el conjunto de prácticas y herramientas que permiten #[b gestionar los cambios en el código fuente y otros artefactos del proyecto], manteniendo un historial completo de modificaciones, facilitando la colaboración entre desarrolladores y asegurando la integridad del sistema a lo largo del tiempo.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-start
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema6/16.svg', style='width: 100px').m-auto
          
          .col
            p En proyectos de <em>software</em>, múltiples personas trabajan simultáneamente sobre los mismos archivos. Sin un sistema de control de versiones, esto generaría conflictos, pérdida de información y dificultad para rastrear cambios. Por ello, herramientas como Git se han convertido en un estándar, permitiendo trabajar de forma distribuida y controlada.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color4.p-4
              p El control de versiones no solo registra cambios, sino que permite #[b retroceder versiones, comparar modificaciones, gestionar ramas de desarrollo y coordinar equipos], convirtiéndose en un componente esencial del ciclo de vida del <em>software</em>.

    p.mt-4.text-center A continuación, se describen los principales conceptos del control de versiones, fundamentales para el trabajo colaborativo en proyectos de <em>software</em>:

    .row.justify-content-center 
      .col-lg-6
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Repositorio")
            .col-md-12.mb-4.mb-md-0
              p Es el espacio central donde se almacena el proyecto junto con todo su historial de versiones. Contiene los archivos, las configuraciones y los registros de cambios, y puede ser local o remoto para facilitar el trabajo colaborativo.
    
          .row(numero="2" titulo="<em>Commit</em>")
            .col-md-12.mb-4.mb-md-0
              p Representa una confirmación de cambios realizada por un desarrollador. Cada commit guarda una “fotografía” del estado del proyecto en un momento específico, incluyendo un mensaje descriptivo que explica qué se modificó y por qué.
    
          .row(numero="3" titulo="Historial")
            .col-md-12.mb-4.mb-md-0
              p Es el registro cronológico de todos los commits realizados en el repositorio. Permite revisar la evolución del proyecto, identificar cuándo se hicieron cambios específicos y, si es necesario, regresar a versiones anteriores.

          .row(numero="4" titulo="Branch")
            .col-md-12.mb-4.mb-md-0
              p Es una línea de desarrollo independiente que se crea a partir del proyecto principal. Las ramas permiten trabajar en nuevas funcionalidades, correcciones o experimentos sin afectar directamente la versión estable del sistema.

          .row(numero="5" titulo="Merge")
            .col-md-12.mb-4.mb-md-0
              p Es el proceso mediante el cual los cambios realizados en una rama se integran nuevamente en otra, generalmente en la rama principal. El merge permite unificar el trabajo de distintos desarrolladores y consolidar avances en una sola versión del proyecto.

    
      .col-lg-6.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema6/17.png', alt='', style="width: 100%").m-auto


    .titulo-tres.mt-5: h3 Modelo de trabajo con Git

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/18.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p El modelo de trabajo con Git se basa en un sistema distribuido que permite a cada desarrollador trabajar de manera independiente sobre una copia completa del repositorio, facilitando la gestión de cambios y la colaboración en equipo.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color4.p-4
                  p A diferencia de otros sistemas centralizados, Git permite realizar modificaciones de forma local y luego sincronizarlas con el repositorio remoto, lo que mejora la eficiencia del desarrollo y reduce la dependencia de una conexión constante.

        p.mt-2 El flujo de trabajo en Git sigue una secuencia lógica que permite gestionar los cambios de manera controlada:


    SlyderF.mt-4(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/19.svg', alt='').img100.m-auto
        p.text-center
          b A. Clonar el repositorio
        p.text-center.mb-0 Permite obtener una copia completa del proyecto en el entorno local, incluyendo su historial de versiones.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/20.svg', alt='').img100.m-auto
        p.text-center
          b B. Preparar cambios (<em>add</em>)
        p.text-center.mb-0 Se seleccionan los archivos modificados que serán incluidos en el siguiente registro de cambios.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/21.svg', alt='').img100.m-auto
        p.text-center
          b C. Registrar cambios (<em>commit</em>)
        p.text-center.mb-0 Se guardan los cambios en el historial local, acompañados de un mensaje que describe la modificación realizada.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/22.svg', alt='').img100.m-auto
        p.text-center
          b D. Sincronizar cambios (<em>push</em>)
        p.text-center.mb-0 Los cambios locales se envían al repositorio remoto, permitiendo que otros desarrolladores accedan a ellos.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/23.svg', alt='').img100.m-auto
        p.text-center
          b E. Actualizar repositorio (<em>pull</em>)
        p.text-center.mb-0 Se integran los cambios realizados por otros miembros del equipo, manteniendo el repositorio actualizado.
                       

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/24.svg', alt='', style="width: 390px").m-auto
      .col-lg-6
        p Las siguientes son acciones destacadas de Git:    

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Permite trabajar sin conexión y sincronizar posteriormente.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Cada cambio queda registrado en el historial.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Se puede regresar a versiones anteriores en cualquier momento.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Facilita el trabajo colaborativo sin sobrescribir cambios.


    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-tres.mt-5: h3 Estrategias de ramificación

        p.mt-4 Las estrategias de ramificación permiten organizar el desarrollo del <em>software</em> mediante la creación de diferentes líneas de trabajo dentro del repositorio. Esto evita que los cambios en desarrollo afecten la versión estable del sistema.

        p El uso de ramas permite trabajar en funcionalidades, correcciones o versiones específicas de manera independiente, facilitando la gestión del proyecto. Dentro de estas estrategias hacen parte los siguientes procesos:

        .row.justify-content-center 
          .col-lg-7
            LineaTiempoD.color-primario.linea-bold
              .row(numero="1" titulo="Rama principal (<em>main</em>)")
                .col-md-12.mb-4.mb-md-0
                  p Contiene la versión estable del sistema. Solo se integran cambios que han sido validados.
                  
        
              .row(numero="2" titulo="Rama de desarrollo (<em>develop</em>)")
                .col-md-12.mb-4.mb-md-0
                  p Se utiliza como base para integrar nuevas funcionalidades antes de pasar a producción.
                  
        
              .row(numero="3" titulo="Ramas de funcionalidad (<em>feature</em>)")
                .col-md-12.mb-4.mb-md-0
                  p Se crean para desarrollar nuevas características sin afectar otras partes del sistema.

              .row(numero="4" titulo="Ramas de corrección (<em>bugfix</em>)")
                .col-md-12.mb-4.mb-md-0
                  p Se utilizan para solucionar errores detectados en el sistema.


              .row(numero="5" titulo="Ramas de versión (<em>release</em>)")
                .col-md-12.mb-4.mb-md-0
                  p Permiten preparar una versión del sistema antes de su despliegue.
                  
        
          .col-lg-5.d-none.d-lg-block
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema6/25.png', alt='', style="width: 100%").m-auto


    .row.bg-04
      .col-12
        .p-5
          .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema6/26.png', alt='', style="width: 390px").m-auto
            .col-lg-8
              p Permiten preparar una versión del sistema antes del despliegue.
              p Igualmente, tienen las siguientes acciones destacadas:

              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Las ramas permiten trabajar en paralelo. 

          
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Reducen el riesgo de errores en producción. 

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Facilitan la organización del desarrollo. 

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Permiten integrar cambios de forma controlada.
                  
              .titulo-tres.mt-3: h3 Gestión de conflictos en control de versiones

              p.mt-2 Los conflictos en control de versiones ocurren cuando dos o más desarrolladores realizan cambios sobre la misma parte del código y el sistema no puede decidir automáticamente cuál versión debe conservarse.
              p La gestión de conflictos es una actividad clave dentro del control de versiones, ya que permite mantener la coherencia del código y evitar errores en la integración. Se destacan los siguientes tipos:


    .tarjeta--container.row.mb-5.mt-4
      .col-md.tarjeta.bg-15.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema6/27.svg', alt='Texto que describa la imagen')
          
        h4.text-center Conflicto de contenido
        p Se presenta cuando dos o más desarrolladores realizan cambios distintos sobre la misma línea o bloque de código, generando incompatibilidades que el sistema de control de versiones no puede resolver automáticamente.

      .col-md.tarjeta.bg-7.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema6/28.svg', alt='Texto que describa la imagen')
          
        h4.text-center Conflicto de estructura
        p Ocurre cuando se eliminan, renombran o reorganizan archivos o carpetas de forma simultánea, lo que afecta la estructura del proyecto y dificulta la correcta integración de los cambios.

      .col-md.tarjeta.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema6/29.svg', alt='Texto que describa la imagen')
          
        h4.text-center Conflicto de integración
        p Se produce al combinar ramas de desarrollo con modificaciones divergentes, cuando las diferencias entre ellas impiden una fusión automática y requieren intervención manual para su resolución.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema6/31.png', alt='', style="width: 390px").m-auto
      .col-lg-6
        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-4
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-15(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema6/30.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p Al igual que las anteriores herramientas, esta también posee unas acciones destacadas:

        ul.lista-ul--color.mt-4
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Identifica de forma clara las diferencias entre versiones.
   
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Resuelve manualmente conflictos cuando no es posible la fusión automática.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Evita la pérdida de cambios realizados por distintos desarrolladores.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Mantiene la coherencia e integridad del código.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Facilita la integración correcta de las ramas de desarrollo.

        p.mt-2 Para finalizar, a continuación, se presenta un video explicativo que, a través de un caso práctico, ejemplifica el uso del control de versiones y las herramientas asociadas, mostrando cómo se gestionan los cambios, la colaboración en equipo y la integración del trabajo a lo largo del desarrollo de <em>software</em>:

    .row.justify-content-center.align-items-center.mt-4           
          .col-lg-12
            figure(data-aos="fade-down")
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/NCFRxkYaoFs?si=PBLidDCpmgaH8np6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)















</template>

<script>
export default {
  name: 'Tema6',
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
