<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Modelado en el desarrollo de <em>software</em>

    figure
      img(src='@/assets/curso/tema4/1.png', alt='', style="width: 1220px").m-auto

    p.mt-4 El modelado en el desarrollo de <em>software</em> es el proceso mediante el cual se <b>representa un sistema de forma abstracta</b>, utilizando diagramas y estructuras que permiten comprender su funcionamiento antes de su implementación. A través del modelado, es posible visualizar componentes, relaciones, flujos de información y comportamientos, facilitando la comunicación entre los actores del proyecto.

    .row.bg-04
      .col-12
        .p-5
          .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema4/2.png', alt='', style="width: 390px").m-auto
            .col-lg-6
              p A diferencia de la documentación textual, el modelado permite expresar conceptos complejos de manera simplificada, reduciendo ambigüedades y mejorando la interpretación del sistema. Este proceso no sustituye el desarrollo, sino que actúa como una herramienta que orienta su construcción.

              .row.justify-content-center.mt-4
                .col-lg-12
                  .row.align-items-center
                    .col-lg-12
                      .cajon.color1.p-4
                        p En entornos modernos, el modelado cumple un papel clave en la definición de arquitecturas, el diseño de sistemas y la validación de requisitos, permitiendo anticipar problemas antes de que se materialicen en el código.

              p.mt-2 El modelado permite representar el sistema desde diferentes perspectivas, facilitando su comprensión y análisis. Su propósito no es describir cada detalle técnico, sino ofrecer una visión estructurada que apoye la toma de decisiones.

          p.mt-4.text-center Los propósitos del modelado en <em>software</em> son:

    SlyderF.mt-4(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/3.svg', alt='').img100.m-auto
        p.text-center
          b Visualización
        p.text-center.mb-0 Permite comprender el sistema de manera global, facilitando la representación de sus componentes, procesos y relaciones para apoyar el análisis y la toma de decisiones.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/4.svg', alt='').img100.m-auto
        p.text-center
          b Comunicación
        p.text-center.mb-0 Facilita la interacción y el entendimiento entre los diferentes equipos involucrados, permitiendo compartir ideas, aclarar dudas y alinear criterios a lo largo del desarrollo del sistema.


      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/5.svg', alt='').img100.m-auto
        p.text-center
          b Validación
        p.text-center.mb-0 Permite verificar que los requisitos representen correctamente las necesidades del usuario y los objetivos del proyecto, asegurando que lo definido sea correcto antes de avanzar a etapas posteriores.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/6.svg', alt='').img100.m-auto
        p.text-center
          b Diseño
        p.text-center.mb-0 Contribuye a definir la estructura del sistema, sus componentes principales y las relaciones entre ellos, sirviendo como base para la implementación técnica del <em>software</em>.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/7.svg', alt='').img100.m-auto
        p.text-center
          b Documentación
        p.text-center.mb-0 Se encarga de registrar la arquitectura, los modelos y las decisiones clave del sistema, proporcionando un soporte de referencia para el mantenimiento y la evolución futura del <em>software</em>.
              

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color4.p-4
              .row.align-items-start.mt-4
                .col-lg-2.mb-lg-0.mb-4
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/tema4/8.svg', style='width: 180px').m-auto
                
                .col
                  p Estos propósitos permiten utilizar el modelado como un puente entre el análisis de requisitos y la implementación del sistema.

    p.mt-4.text-center El modelado puede aplicarse en diferentes niveles de abstracción, dependiendo del grado de detalle requerido en el proyecto:


    .tarjeta--container.row.mb-5.mt-4
      .col-md.tarjeta.bg-15.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema4/9.svg', alt='Texto que describa la imagen')
          
        h4.text-center Conceptual
        p Proporciona una visión amplia y abstracta del sistema, enfocándose en los conceptos clave, sus relaciones y el propósito general del <em>software</em>. Facilita el entendimiento inicial del problema y sirve como base para los modelos posteriores.

      .col-md.tarjeta.bg-7.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema4/10.svg', alt='Texto que describa la imagen')
          
        h4.text-center Lógico
        p Describe con mayor precisión la estructura y el comportamiento del sistema, especificando componentes, flujos de información y reglas de funcionamiento. Permite analizar cómo interactúan las partes del sistema sin depender aún de una tecnología específica.

      .col-md.tarjeta.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema4/11.svg', alt='Texto que describa la imagen')
          
        h4.text-center Físico
        p Representa la implementación concreta del sistema, detallando la arquitectura técnica, las plataformas, los recursos de hardware y <em>software</em>, así como la forma en que los componentes lógicos se despliegan en el entorno real.

    p.mt-4 El modelado se clasifica según #[b qué aspecto del sistema se quiere representar]. En la práctica, los modelos se combinan para cubrir visión, estructura, comportamiento, datos e interacción. Cada tipo responde a preguntas distintas del proyecto y utiliza artefactos específicos. Dentro de los tipos de modelado se encuentran:

    .row.justify-content-center
      .col-lg-12
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-base")
          .tarjeta.clr--pink02.p-4(titulo="Modelado estructural")
            .row.align-items-center
              .col-lg-6
                p El modelado estructural se enfoca en la #[b organización interna del sistema], definiendo cómo se agrupan los componentes, módulos y clases, así como las relaciones entre ellos. Este tipo de modelado permite establecer una visión clara de la arquitectura lógica del sistema, facilitando la identificación de dependencias, responsabilidades y límites entre las distintas partes.

                p Su aplicación es fundamental en la fase de diseño, ya que permite estructurar el sistema antes de su implementación, evitando acoplamientos innecesarios y mejorando la mantenibilidad. A través de este modelado se pueden identificar patrones de diseño, capas arquitectónicas y estructuras modulares que optimizan el desarrollo.

                p Entre los principales elementos que lo componen se encuentran las clases, interfaces, componentes y paquetes, los cuales se relacionan mediante asociaciones, dependencias o herencias. 
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema4/12.png', alt='', style="width: 100%").m-auto
    
          div(titulo="Modelado de comportamiento")
            .row.align-items-center
              .col-lg-6
                p El modelado de comportamiento describe la #[b dinámica del sistema], representando cómo este responde ante eventos, cómo se ejecutan los procesos y cómo evolucionan sus estados a lo largo del tiempo. Este tipo de modelado permite comprender la lógica interna del sistema y anticipar su funcionamiento en diferentes escenarios.

                p Se utiliza para representar flujos de trabajo, secuencias de interacción y cambios de estado, lo que facilita la identificación de condiciones, decisiones y posibles errores en la lógica del sistema. Su correcta aplicación permite validar el comportamiento esperado antes de la implementación, reduciendo riesgos en el desarrollo.

                p Este modelado es especialmente útil en sistemas donde existen múltiples procesos concurrentes o donde el comportamiento depende de condiciones específicas.
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema4/13.png', alt='', style="width: 100%").m-auto
    
          div(titulo="Modelado de datos")
            .row.align-items-center
              .col-lg-6
                p El modelado de datos se orienta a la #[b definición, organización y relación de la información] que el sistema maneja. Este tipo de modelado permite estructurar los datos de manera coherente, estableciendo entidades, atributos y relaciones que reflejan la lógica del negocio.

                p Su aplicación es clave en el diseño de bases de datos, ya que permite garantizar la integridad, consistencia y eficiencia en el almacenamiento de la información. A través de este modelado se definen reglas como claves primarias, relaciones entre entidades y restricciones que aseguran la calidad de los datos.

                p la integración entre sistemas, ya que establece una base común para el intercambio de información.
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema4/14.png', alt='', style="width: 100%").m-auto
    
          div(titulo="Modelado de interacción")
            .row.align-items-center
              .col-lg-6
                p El modelado de interacción representa la #[b forma en que los usuarios, sistemas y componentes se comunican entre sí], permitiendo visualizar cómo se ejecutan las funcionalidades desde la perspectiva del uso. 

                p Este tipo de modelado se enfoca en los flujos de interacción, mostrando la secuencia de acciones que ocurren durante la ejecución de un proceso.

                p Su principal aporte es facilitar la comprensión del sistema desde el punto de vista del usuario, lo que permite validar requisitos funcionales y asegurar que las funcionalidades definidas respondan a necesidades reales.

                p Este modelado es fundamental para el diseño de interfaces y la definición de casos de uso, ya que permite representar escenarios completos de interacción.
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema4/15.png', alt='', style="width: 100%").m-auto

          div(titulo="Modelado arquitectónico")
            .row.align-items-center
              .col-lg-6
                p El modelado arquitectónico define la #[b estructura global del sistema], estableciendo cómo se organizan los componentes a gran escala y cómo interactúan entre sí. Este tipo de modelado permite representar la distribución del sistema, incluyendo servicios, capas, módulos y tecnologías involucradas.

                p Su aplicación es esencial en sistemas complejos, donde es necesario garantizar escalabilidad, rendimiento y mantenibilidad. A través de este modelado se pueden definir arquitecturas como microservicios, sistemas en capas o arquitecturas distribuidas.

                p Además, permite identificar puntos críticos del sistema, como integraciones externas, flujos de datos y dependencias tecnológicas.
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema4/16.png', alt='', style="width: 100%").m-auto


          div(titulo="Modelado de procesos de negocio")
            .row.align-items-center
              .col-lg-6
                p El modelado de procesos de negocio se centra en la #[b representación de las actividades y flujos operativos de una organización], permitiendo entender cómo funcionan los procesos que el sistema soporta o automatiza. 

                p Este tipo de modelado permite identificar tareas, roles, decisiones y secuencias dentro de un proceso.

                p Su principal utilidad radica en alinear el desarrollo del <em>software</em> con las necesidades del negocio, asegurando que el sistema responda a procesos reales y no únicamente a funcionalidades técnicas.

                p Además, facilita la optimización de procesos, permitiendo detectar ineficiencias, redundancias o cuellos de botella antes de la implementación del sistema.
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema4/17.png', alt='', style="width: 100%").m-auto

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1. Lenguajes de modelado y técnicas de análisis


    p Los lenguajes de modelado y las técnicas de análisis constituyen herramientas fundamentales para representar, interpretar y validar sistemas de <em>software</em>, antes de su implementación. Mientras los lenguajes de modelado proporcionan una forma estandarizada de expresar estructuras y comportamientos, las técnicas de análisis permiten transformar los requisitos en representaciones comprensibles y verificables.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/18.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema4/19.svg', style='width: 100px').m-auto
          
          .col
            p En conjunto, estos elementos permiten construir una visión estructurada del sistema, facilitando la comunicación entre equipos y reduciendo errores durante el desarrollo. Su correcta aplicación no solo mejora la calidad del diseño, sino que también optimiza el proceso de toma de decisiones.

        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p Los lenguajes de modelado son sistemas formales que permiten representar diferentes aspectos de un sistema mediante símbolos, reglas y estructuras definidas. Su principal objetivo es estandarizar la forma en que se describe el sistema, asegurando que todos los involucrados comprendan la información de manera uniforme.

        p.mt-2 UML es el lenguaje de modelado más utilizado en el desarrollo de <em>software</em>, ya que permite representar tanto la estructura como el comportamiento del sistema. Se compone de diferentes tipos de diagramas que facilitan la visualización de distintos aspectos del sistema:


    SlyderF.mt-4(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/20.svg', alt='').img100.m-auto
        p.text-center
          b Clases
        p.text-center.mb-0 Representa la estructura estática del sistema, mostrando las clases, sus atributos, métodos y las relaciones entre ellas, lo que permite comprender la organización interna del <em>software</em>.
              
      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/21.svg', alt='').img100.m-auto
        p.text-center
          b Casos de uso
        p.text-center.mb-0 Describe la interacción entre los usuarios y el sistema, identificando las funcionalidades principales y los escenarios en los que el sistema responde a las acciones de los actores.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/22.svg', alt='').img100.m-auto
        p.text-center
          b Secuencia
        p.text-center.mb-0 Muestra el flujo de comunicación entre los distintos componentes del sistema a lo largo del tiempo, detallando el orden en que se intercambian mensajes para ejecutar una funcionalidad.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/23.svg', alt='').img100.m-auto
        p.text-center
          b Actividades
        p.text-center.mb-0 Ilustra los procesos y flujos de trabajo del sistema, incluyendo decisiones, paralelismos y secuencias de acciones, lo que facilita entender la lógica de los procesos.

      .tarjeta.bg-08.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema4/24.svg', alt='').img100.m-auto
        p.text-center
          b Estados
        p.text-center.mb-0 Representa los cambios de estado de un elemento del sistema en respuesta a eventos, permitiendo analizar su comportamiento dinámico a lo largo de su ciclo de vida.
 
       
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/25.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 UML permite modelar sistemas complejos mediante diagramas que representan relaciones, flujos y comportamientos, facilitando la comprensión del sistema antes de su implementación.
        <br> <br>
        p Por su parte, el modelo C4 es una técnica de modelado arquitectónico que permite representar el sistema en diferentes niveles de detalle. Su enfoque progresivo facilita la comprensión tanto para perfiles técnicos como no técnicos.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/26.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p Las técnicas de análisis permiten transformar los requisitos en modelos estructurados. Estas técnicas ayudan a interpretar la información y representarla de forma clara, permiten construir modelos coherentes que reflejan el comportamiento del sistema y su estructura.


        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color4.p-4
                  p Los lenguajes de modelado y las técnicas de análisis no se utilizan de forma independiente. Las técnicas permiten estructurar la información, mientras que los lenguajes permiten representarla.

        p.mt-2 Esta integración permite construir modelos que no solo sean visuales, sino también coherentes con los requisitos del sistema y por ello, hay que tener presente:


    .row.mt-4
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5(style="height: 170px !important;")
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Las técnicas organizan la información.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5(style="height: 170px !important;")
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Los lenguajes la representan.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5(style="height: 170px !important;")
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Ambos mejoran la calidad del diseño.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5(style="height: 170px !important;")
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Permiten validar el sistema antes de implementarlo.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              .row.align-items-start.mt-4
                .col-lg-2.mb-lg-0.mb-4
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/tema4/27.svg', style='width: 180px').m-auto
                
                .col
                  p Estos elementos se integran dentro de metodologías ágiles, permitiendo adaptar el nivel de detalle del modelado según el contexto del proyecto.




    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2. UML y modelo C4 para documentación de arquitectura


    p La documentación de arquitectura en <em>software</em> requiere representar el sistema desde diferentes niveles de abstracción, permitiendo comprender tanto su estructura interna como su relación con el entorno. En este contexto, #[b UML (Unified Modeling Language) y el modelo C4] se consolidan como enfoques complementarios que facilitan la representación del sistema de manera clara, estructurada y progresiva.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color4.p-4
              p UML proporciona un conjunto amplio de diagramas que permiten describir tanto la estructura como el comportamiento del sistema, mientras que el modelo C4 se enfoca en representar la arquitectura en niveles jerárquicos, facilitando su comprensión para diferentes tipos de usuarios.

        p.mt-4 La combinación de ambos enfoques permite construir una documentación completa, donde C4 ofrece una visión general del sistema y UML profundiza en los detalles técnicos.

        .titulo-tres.mt-5: h3 UML en la documentación de arquitectura

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/28.png', alt='', style="width: 490px").m-auto
      .col-lg-5
        p UML es un lenguaje de modelado estándar que permite representar múltiples dimensiones del sistema mediante diagramas especializados. Su principal ventaja radica en la capacidad de describir tanto aspectos estáticos como dinámicos del <em>software</em>.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p En el contexto arquitectónico, UML se utiliza para definir la estructura del sistema, identificar componentes y representar interacciones entre ellos. Esto permite construir modelos detallados que sirven como base para la implementación.


    .titulo-tres.mt-5: h3 Modelo C4 en la documentación de arquitectura


    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/29.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El modelo C4 es un enfoque de representación arquitectónica que organiza la información en cuatro niveles, permitiendo comprender el sistema de forma progresiva. Este modelo facilita la comunicación tanto con perfiles técnicos como no técnicos, ya que presenta la arquitectura desde lo general hasta lo específico.


    p.mt-4 A diferencia de UML, el modelo C4 no define símbolos estrictos, sino que se basa en una representación clara y simple que prioriza la comprensión del sistema. Los principios del modelo C4 son la abstracción progresiva, la audiencia dirigida, la consistencia entre niveles y el lenguaje simple.

    p A continuación, se detalla lo que representa cada nivel de modelo C4 y sus respectivas aplicaciones:


    .row.justify-content-center
      .col-lg-12
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-base")
          .tarjeta.clr--pink02.p-4(titulo="Nivel 1. Diagrama de contexto")
            .row.align-items-center
              .col-lg-6
                p Representa el sistema como una “caja negra” dentro de su entorno, mostrando #[b usuarios y sistemas externos] y cómo interactúan con él.
 
                p
                  b Uso:

                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Alineación con <em>stakeholders</em> no técnicos.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Definición de límites del sistema. 

                  li
                    i.lista-ul__vineta
                    p.mb-0 Identificación de integraciones externas. 


                p
                  b Elementos:

                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Sistema principal. 


                  li
                    i.lista-ul__vineta
                    p.mb-0 Actores (usuarios/roles).


                  li
                    i.lista-ul__vineta
                    p.mb-0 Sistemas externos.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Relaciones (flujos de información).



                p
                  b Buenas prácticas:

                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Nombrar actores por rol (ejemplo: cliente web, sistema de pagos).


                  li
                    i.lista-ul__vineta
                    p.mb-0 Indicar tipo de interacción (REST, eventos, archivos).


                  li
                    i.lista-ul__vineta
                    p.mb-0 Mantener 5–9 elementos visibles para claridad.

              .col-lg-6
                figure
                  img(src='@/assets/curso/tema4/30.png', alt='', style="width: 100%").m-auto
    
          div(titulo="Nivel 2. Diagrama de contenedores")
            .row.align-items-center
              .col-lg-6
                p Descompone el sistema en #[b contenedores ejecutables] (aplicaciones/servicios), mostrando #[b responsabilidades, tecnologías y comunicaciones].

 
                p
                  b Uso:

                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Definición de arquitectura (monolito, microservicios).

                  li
                    i.lista-ul__vineta
                    p.mb-0 Decisiones tecnológicas (<em>backend, frontend</em>, DB). 

                  li
                    i.lista-ul__vineta
                    p.mb-0 Diseño de integraciones internas.


                p
                  b Elementos:

                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Aplicaciones (<em>web</em>, API, <em>batch</em>).


                  li
                    i.lista-ul__vineta
                    p.mb-0 Bases de datos / colas / cachés.


                  li
                    i.lista-ul__vineta
                    p.mb-0 Protocolos de comunicación (HTTP, AMQP, gRPC).




                p
                  b Buenas prácticas:

                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Incluir tecnología clave por contenedor (p. ej., API – Node.js).


                  li
                    i.lista-ul__vineta
                    p.mb-0 Diferenciar almacenamiento (DB vs. caché vs. cola).


                  li
                    i.lista-ul__vineta
                    p.mb-0 Especificar direcciones de flujo (sincrónico/asíncrono).
              .col-lg-6
                figure
                  img(src='@/assets/curso/tema4/31.png', alt='', style="width: 100%").m-auto
    
          div(titulo="Nivel 3. Diagrama de componentes")
            .row.align-items-center
              .col-lg-6
                p Describe la #[b estructura interna de un contenedor], mostrando cómo se organiza la aplicación en módulos funcionales, sus responsabilidades y las dependencias entre ellos.

 
                p
                  b Uso:

                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Comprender la organización interna de una aplicación.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Analizar la separación de responsabilidades.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Detectar dependencias innecesarias o acoplamientos altos. 

                  li
                    i.lista-ul__vineta
                    p.mb-o Apoyar tareas de mantenimiento y evolución del sistema.


                p
                  b Elementos:

                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Unidades funcionales (controladores, servicios, módulos).


                  li
                    i.lista-ul__vineta
                    p.mb-0 Puntos de acceso a funcionalidades.



                  li
                    i.lista-ul__vineta
                    p.mb-0 Lógica de negocio.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Acceso y gestión de datos.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Relaciones entre componentes.

                p
                  b Buenas prácticas:

                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Nombrar componentes según su responsabilidad funcional.


                  li
                    i.lista-ul__vineta
                    p.mb-0 Mantener bajo acoplamiento y alta cohesión.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Representar solo componentes relevantes (evitar exceso de detalle).

                  li
                    i.lista-ul__vineta
                    p.mb-0 Alinear los componentes con patrones arquitectónicos utilizados (MVC, capas, hexagonal).

              .col-lg-6
                figure
                  img(src='@/assets/curso/tema4/32.png', alt='', style="width: 100%").m-auto
    
          div(titulo="Nivel 4. Diagrama de código")
            .row.align-items-center
              .col-lg-6
                p Representa el nivel más detallado del modelo C4, enfocándose en la #[b implementación técnica] del sistema. Describe cómo se materializan los componentes mediante clases, métodos y estructuras de código.

 
                p
                  b Uso:

                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Comprender la lógica interna del sistema.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Facilitar el mantenimiento y la incorporación de nuevos desarrolladores.


                  li
                    i.lista-ul__vineta
                    p.mb-0 Documentar algoritmos complejos o componentes críticos.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Apoyar revisiones técnicas y refactorización.



                p
                  b Elementos:

                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Estructuras principales del código.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Funcionalidades específicas.



                  li
                    i.lista-ul__vineta
                    p.mb-0 Datos asociados a las clases.


                  li
                    i.lista-ul__vineta
                    p.mb-0 Contratos de implementación.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Organización del código fuente.
                  
                p
                  b Buenas prácticas:

                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    p.mb-0 Documentar solo partes críticas o complejas.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Mantener coherencia con los componentes definidos en el nivel 3.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Evitar duplicar el código; usar el diagrama como apoyo conceptual.

                  li
                    i.lista-ul__vineta
                    p.mb-0 Actualizar la documentación cuando se realicen cambios significativos.

              .col-lg-6
                figure
                  img(src='@/assets/curso/tema4/33.png', alt='', style="width: 100%").m-auto



    p.mt-4.text-center El modelo C4 facilita la toma de decisiones en aspectos clave como:


    .row.mt-4
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5.h-100(style="min-height: 170px !important;")
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Distribución del sistema
          p.text-center Monolito vs. microservicios. 

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100(style="min-height: 170px !important;")
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Integración
          p.text-center APIs REST vs. eventos.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100(style="min-height: 170px !important;")
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Escalabilidad
          p.text-center Separación de contenedores. 

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5.h-100(style="min-height: 170px !important;")
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Mantenibilidad 
          p.text-center Modularidad por componentes.















</template>

<script>
export default {
  name: 'Tema4',
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
