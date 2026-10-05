<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Análisis y gestión de requisitos

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis y la gestión de requisitos comprenden un conjunto de actividades orientadas a interpretar, organizar, validar y controlar los requisitos del sistema a lo largo del proyecto. Mientras la especificación define qué necesita el sistema, estas fases se enfocan en comprender los requisitos con mayor profundidad, reducir ambigüedades y asegurar que se mantengan alineados con los objetivos del negocio. El análisis permite transformar información inicial, a menudo incompleta o ambigua, en requisitos claros y estructurados, mientras que la gestión controla su evolución mediante el registro, evaluación y aprobación de cambios.

    p.mt-4 En este contexto, la definición de requisitos se desarrolla como un proceso gradual compuesto por varias actividades interrelacionadas, cuyo propósito es convertir la información obtenida de los usuarios y demás interesados en requisitos comprensibles, consistentes y verificables. A continuación, se describen las principales etapas que conforman este proceso:

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/2.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        LineaTiempoD.color-primario.linea-bold
          .row(numero="A" titulo="Elicitación de requisitos")
            .col-md-12.mb-4.mb-md-0
              p En esta etapa se recopila información relevante mediante técnicas como entrevistas, observación y revisión de documentos, con el fin de comprender las necesidades y expectativas de los usuarios y demás interesados.
    
          .row(numero="B" titulo="Análisis de requisitos")
            .col-md-12.mb-4.mb-md-0
              p La información recopilada se organiza, depura y transforma en requisitos estructurados, identificando relaciones, prioridades y posibles inconsistencias.
    
          .row(numero="C" titulo="Validación de requisitos")
            .col-md-12.mb-4.mb-md-0
              p Se verifica que los requisitos definidos reflejen correctamente las necesidades del usuario y que sean comprensibles para todos los actores del proyecto.

          .row(numero="D" titulo="Refinamiento de requisitos")
            .col-md-12.mb-4.mb-md-0
              p Los requisitos se ajustan en su nivel de detalle, precisión y redacción, asegurando que sean claros, completos y verificables.
        
    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color4.p-4
              p Este proceso tiene como objetivo principal eliminar ambigüedades y garantizar la calidad de los requisitos. Un análisis adecuado impacta directamente en la calidad del <em>software</em>, ya que errores en estas etapas iniciales pueden propagarse a lo largo de todo el proyecto.


    p.mt-4 En coherencia con lo expuesto anteriormente, el refinamiento de los requisitos debe entenderse como un proceso progresivo que se desarrolla a lo largo de las distintas fases del proyecto. En este sentido, la siguiente imagen ilustra cómo los requisitos evolucionan desde la planificación y el desarrollo, hasta la verificación y validación del sistema, asegurando su alineación con las necesidades y objetivos definidos:


    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 3.
          span Refinamiento progresivo de requisitos 
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema2/3.svg',
            alt='Figura 3 que relaciona un esquema secuencial del refinamiento progresivo de los requisitos, mostrando su evolución a través de las fases de planificación, desarrollo, verificación del sistema y validación del sistema, orientadas a asegurar el cumplimiento de las especificaciones y la satisfacción de las necesidades del usuario.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema2/4.svg',
            alt=''
          )


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema2/5.svg', style='width: 100px').m-auto
          
          .col
            p Uno de los retos más importantes del análisis es la identificación de conflictos entre requisitos. Estos pueden surgir cuando diferentes <em>stakeholders</em> tienen expectativas distintas o cuando existen limitaciones técnicas. Detectar estos conflictos de manera temprana permite evitar problemas en etapas posteriores.


    .titulo-tres.mt-5: h3 Gestión de requisitos a lo largo del proyecto

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema2/6.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p La gestión de requisitos se enfoca en el control y seguimiento de los requisitos durante todo el ciclo de vida del <em>software</em>. A medida que el proyecto avanza, es común que los requisitos cambien debido a nuevas necesidades, ajustes del negocio o restricciones técnicas. La gestión permite manejar estos cambios de forma organizada.

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema2/7.svg', style='width: 100px').m-auto
          
          .col
            p A diferencia del análisis, que se centra en la comprensión inicial, la gestión se orienta a mantener la coherencia del sistema frente a modificaciones. Esto implica registrar cambios, evaluar su impacto y asegurar que todos los involucrados estén alineados con la versión actual de los requisitos.


    .titulo-tres.mt-5: h3 Integración entre análisis y gestión

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis y la gestión de requisitos deben entenderse como procesos complementarios. El análisis asegura que los requisitos estén bien definidos, mientras que la gestión garantiza que se mantengan consistentes a lo largo del tiempo.
        <br><br>
        p Cuando ambos procesos se aplican de manera adecuada, se logra una mayor estabilidad en el desarrollo y se reduce el riesgo de errores. Esta integración permite mantener el control del sistema incluso en entornos donde los cambios son frecuentes.

    .titulo-tres.mt-5: h3 Importancia en el desarrollo de <em>software</em>

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema2/9.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-4
                  p El éxito de un proyecto de <em>software</em> depende en gran medida de la calidad de sus requisitos. Una mala interpretación o un control deficiente puede generar errores que afectan el funcionamiento del sistema y aumentan los costos de desarrollo.

        p.mt-2 Por el contrario, un adecuado análisis y una gestión eficiente permiten construir sistemas alineados con las necesidades del usuario, mejorar la comunicación entre equipos y facilitar la validación del <em>software</em>. En entornos actuales, estos procesos se integran dentro de metodologías iterativas, donde los requisitos evolucionan de manera controlada. Este enfoque permite adaptarse a cambios sin perder coherencia, garantizando un desarrollo continuo y eficiente.


    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1. Análisis de requisitos y técnicas de análisis

    p El análisis de requisitos es el proceso mediante el cual se #[b interpretan, organizan y validan] las necesidades identificadas durante la elicitación, transformándolas en requisitos claros, coherentes y listos para su especificación. Esta fase es crítica porque actúa como filtro de calidad: detecta ambigüedades, conflictos y vacíos antes de que el sistema sea diseñado o implementado.


    .row.justify-content-center
      .col-lg-10
        .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema2/10.svg', style='width: 100px').m-auto
          
          .col
            p En términos prácticos, el análisis no consiste únicamente en “ordenar información”, sino en modelar el problema, comprender el dominio y establecer relaciones entre requisitos. Esto permite construir una visión consistente del sistema, donde cada elemento tiene un propósito definido y puede ser verificado posteriormente.


        p.mt-4 El siguiente esquema presenta el flujo del análisis de requisitos, desde la información inicial hasta la obtención de requisitos validados:

    .row.justify-content-center.mt-4
      .col-lg-10
        ImagenInfografica.color-acento-botones.d-none.d-md-block.m-auto
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/11.svg')

          .tarjeta.bg-7.p-3(x="21%" y="20%" numero="+")
            p Corresponden a las ideas, problemas u objetivos planteados por los usuarios o <em>stakeholders</em>, generalmente expresados de forma informal o poco estructurada.

          .tarjeta.bg-7.p-3(x="44%" y="20%" numero="+")
            p La información obtenida se examina, depura y organiza para identificar requisitos relevantes, resolver inconsistencias y reducir ambigüedades.

          .tarjeta.bg-7.p-3(x="68%" y="20%" numero="+")
            p Se verifica que los requisitos definidos sean correctos, completos y reflejen fielmente las necesidades de los usuarios y del negocio.

          .tarjeta.bg-7.p-3(x="32%" y="80%" numero="+")
            p Etapa en la que se recopila información mediante técnicas como entrevistas, observación o revisión de documentos, con el fin de comprender las necesidades reales.

          .tarjeta.bg-7.p-3(x="56%" y="80%" numero="+")
            p Los requisitos analizados se representan de forma estructurada mediante modelos, diagramas o descripciones formales que facilitan su comprensión.

          .tarjeta.bg-7.p-3(x="79%" y="80%" numero="+")
            p Resultado final del proceso, donde los requisitos quedan claramente documentados, son comprensibles, verificables y listos para su uso en el desarrollo del sistema.

        img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema2/12.svg',
            alt=''
          )
    
          
    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Durante este proceso, se evalúa si los requisitos son viables desde el punto de vista técnico y si están alineados con los objetivos del negocio. Esto permite evitar desarrollos innecesarios o soluciones que no aportan valor.

        p.mt-4 El análisis de requisitos tiene como finalidad transformar la información inicial en una base estructurada que permita su implementación. Para ello, se orienta a cumplir los siguientes objetivos:


    .row
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Estructuración de la información
          p.text-center Organizar los requisitos de manera lógica, agrupándolos según su funcionalidad o relación dentro del sistema.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Identificación de dependencias
          p.text-center Establecer relaciones entre requisitos, determinando cómo uno puede afectar o condicionar a otros.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Evaluación de viabilidad
          p.text-center Analizar si los requisitos pueden ser implementados considerando restricciones técnicas, económicas o de tiempo.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Delimitación del alcance
          p.text-center Definir con precisión qué se incluye dentro del sistema y qué queda fuera, evitando expansión descontrolada del proyecto.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/13.png', alt='', style="width: 490px").m-auto
      .col-lg-7
        p Por su parte, las técnicas de análisis (entrevistas, análisis documental, modelado, escenarios, prototipado) permiten transformar información inicial en requisitos estructurados mediante métodos que facilitan su comprensión y organización. Estas técnicas no sustituyen el criterio del analista, sino que lo apoyan para lograr mayor precisión.

        p El análisis de requisitos tiene un impacto directo en el éxito del <em>software</em>. Un error en esta fase puede generar problemas que se amplifican en etapas posteriores, aumentando costos y tiempos de desarrollo. Por el contrario, un análisis adecuado permite construir una base sólida para el diseño y la implementación, reduciendo la incertidumbre y mejorando la calidad del sistema.

        .row.justify-content-center.mt-4
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color4.p-4
                  p Este proceso también contribuye a la toma de decisiones, ya que permite identificar qué funcionalidades son realmente necesarias y cuáles pueden descartarse o posponerse.



    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2. Gestión del ciclo de vida de los requisitos


    p La gestión del ciclo de vida de los requisitos comprende el conjunto de actividades orientadas a <b>controlar, mantener y actualizar los requisitos</b> desde su definición inicial hasta su implementación y validación final. Este proceso permite asegurar que los requisitos se mantengan alineados con los objetivos del proyecto, incluso cuando cambian las condiciones del entorno o las necesidades del negocio.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A diferencia del análisis, que se enfoca en comprender los requisitos, la gestión se orienta a #[b garantizar su estabilidad, trazabilidad y evolución controlada]. Esto implica no solo registrar los requisitos, sino también administrar sus cambios, versiones y estado dentro del proyecto.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema2/15.svg', style='width: 100px').m-auto
          
          .col
            p En la práctica, los requisitos no son estáticos. Durante el desarrollo, pueden surgir nuevas necesidades, ajustes o restricciones, lo que hace necesario contar con un mecanismo que permita integrar estos cambios sin afectar la coherencia del sistema.

            p La siguiente imagen relaciona el proceso de este ciclo de vida:


    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 4. 
          span Ciclo de vida de los requisitos 
        figure
          img.d-none.d-md-block.m-auto(
            src='@/assets/curso/tema2/16.svg',
            alt='Figura 4 que contiene el ciclo de vida de los requisitos, mostrando de forma continua las actividades de dirección, análisis, aprobación, implementación, validación y mantenimiento que permiten gestionar los requisitos a lo largo del proyecto de <em>software</em>.'
          )
          img.d-block.d-md-none.m-auto(
            src='@/assets/curso/tema2/17.svg',
            alt=''
          )


    .row.bg-04
      .col-12
        .p-5
          .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema2/18.svg', alt='', style="width: 390px").m-auto
            .col-lg-8
              p Cada requisito atraviesa distintas etapas que permiten controlar su evolución a lo largo del proyecto. Estas etapas no siempre se desarrollan de forma estrictamente lineal, ya que pueden repetirse o ajustarse según la dinámica del desarrollo y las necesidades emergentes. En conjunto, conforman un flujo de control que garantiza que cada requisito sea analizado, aprobado y validado antes de su implementación, reduciendo así el riesgo de incorporar funcionalidades innecesarias, inconsistentes o fuera del alcance definido.

              .row.justify-content-center.mt-4
                .col-lg-12
                  .row.align-items-center
                    .col-lg-12
                      .cajon.color1.p-4
                        p Dentro de este ciclo, la gestión de cambios constituye uno de los elementos más relevantes, dado que los requisitos pueden modificarse por diversas razones, como nuevas necesidades del cliente, cambios en el entorno operativo o limitaciones técnicas identificadas durante el desarrollo. Para evitar desorden y pérdida de control en el proyecto, cada cambio propuesto debe ser evaluado previamente, considerando su impacto en el sistema, el cronograma y los recursos disponibles.


          p.mt-4 En este contexto, el control de versiones desempeña un papel fundamental, ya que permite mantener un historial detallado de las modificaciones realizadas sobre los requisitos. Este mecanismo facilita el seguimiento de los cambios y evita la pérdida de información, registrando de manera sistemática qué se modificó, cuándo se realizó el cambio y quién fue el responsable. De esta forma, se asegura la trazabilidad de los requisitos y se apoya el proceso de validación del sistema. Los siguientes son los elementos que hacen parte del control de versiones:


    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bg-15.p-5(style="border-top-left-radius: 0px !important; border-bottom-left-radius: 0px !important;")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/19.svg', alt='Texto que describa la imagen')
          
        h4.text-center Identificador de versión
        p.text-center Código o número asignado a cada versión del requisito, que permite diferenciar claramente los cambios realizados a lo largo del tiempo y facilita su seguimiento y referencia.
      .col-md.tarjeta.bg-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/20.svg', alt='Texto que describa la imagen')
          
        h4.text-center Fecha de modificación
        p.text-center Registro de la fecha en la que se efectuó el cambio, lo cual permite establecer una secuencia temporal de las modificaciones y apoyar la trazabilidad del requisito.
      .col-md.tarjeta.bg-15.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/21.svg', alt='Texto que describa la imagen')
          
        h4.text-center Autor del cambio
        p.text-center Persona o rol responsable de realizar o aprobar la modificación, lo que permite asignar responsabilidades y aclarar el origen de cada ajuste.

      .col-md.tarjeta.bg-4.p-5(style="border-top-right-radius: 0px !important; border-bottom-right-radius: 0px !important;")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/22.svg', alt='Texto que describa la imagen')
          
        h4.text-center Descripción del cambio
        p.text-center Detalle breve y preciso de las modificaciones realizadas, explicando qué se ajustó y el motivo del cambio, con el fin de mantener claridad y control sobre la evolución del requisito.



    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-5.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema2/24.png', alt='', style="width: 500px").m-auto
      .col-lg-7
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema2/23.svg', style='width: 100px').m-auto
          
          .col
            p Este tipo de control resulta especialmente crítico en proyectos complejos, donde múltiples cambios pueden producirse de manera simultánea. Sin una adecuada gestión de versiones, se pierde la trazabilidad de los requisitos, se dificulta su validación y aumenta el riesgo de inconsistencias durante la implementación.

        p.mt-2 En consecuencia, la gestión del ciclo de vida de los requisitos permite mantener el control del proyecto en escenarios caracterizados por la constante evolución de las necesidades. Una gestión adecuada contribuye a mantener la coherencia del sistema, reducir los riesgos asociados a los cambios, mejorar la planificación del desarrollo y facilitar la validación del <em>software</em>.

        .row.justify-content-center.mt-2
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color4.p-4
                  p Finalmente, en metodologías modernas, este proceso se integra dentro de enfoques iterativos, en los que los requisitos evolucionan de manera continua. Este enfoque posibilita adaptarse a los cambios sin perder control, asegurando que el sistema se mantenga alineado con las necesidades reales de los usuarios y los objetivos del negocio.









</template>

<script>
export default {
  name: 'Tema2',
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
