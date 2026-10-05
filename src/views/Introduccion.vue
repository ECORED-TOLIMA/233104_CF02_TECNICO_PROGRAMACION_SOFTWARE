<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/intro/1.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0
            figure(data-aos="fade-down")
              img(src='@/assets/curso/intro/2.svg', style='width: 100px').m-auto
          
          .col
            p En el desarrollo de <em>software</em>, la correcta definición y gestión de los requisitos constituye la base para garantizar que las soluciones construidas respondan de manera efectiva a las necesidades del usuario. La ausencia de una adecuada especificación puede generar inconsistencias, reprocesos y fallos que impactan directamente la calidad del producto final. Por ello, resulta fundamental contar con procesos estructurados que permitan capturar, analizar y gestionar los requisitos de forma clara, precisa y controlada.

        .row.justify-content-center
          .col-lg-12
            .row.align-items-center
              .col-lg-12
                .cajon.color1.p-3
                  p Es por ello, que este componente aborda estos aspectos desde una perspectiva integral, iniciando con la elaboración de especificaciones formales mediante el uso de plantillas ERS y estándares como el IEEE 830. A partir de esta base, se profundiza en el análisis de requisitos y en su gestión a lo largo del ciclo de vida del <em>software</em>, permitiendo mantener coherencia entre las necesidades del negocio y la solución desarrollada.


    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Adicionalmente, se incorporan técnicas de priorización y mecanismos de trazabilidad que facilitan el seguimiento de los requisitos, asegurando su cumplimiento durante todo el proceso de desarrollo. El modelado del sistema, mediante lenguajes como UML y el modelo C4, complementa esta visión al proporcionar representaciones visuales que mejoran la comprensión y comunicación entre los actores involucrados.


    p.mt-4 También se integran herramientas y técnicas para la captura y modelado de requisitos, incluyendo diagramas de casos de uso, historias de usuario y <em>storyboard</em>, fortaleciendo la capacidad de estructurar la información de manera efectiva. Finalmente, se abordan conceptos relacionados con el ciclo de vida del <em>software</em> y el control de versiones, elementos clave para garantizar la organización, el seguimiento y la evolución controlada de los proyectos.

</template>

<script>
export default {
  name: 'Introduccion',
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
