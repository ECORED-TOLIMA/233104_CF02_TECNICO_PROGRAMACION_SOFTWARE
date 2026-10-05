<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo se centra en la ingeniería de requisitos y el modelado como ejes fundamentales del desarrollo de software, abordando de manera progresiva la especificación, el análisis, la gestión y la priorización de los requisitos. Inicia con el estudio de las plantillas de especificación de requisitos de software (ERS) y los estándares asociados, así como la estructura y componentes del informe de requisitos; posteriormente, profundiza en las técnicas de análisis, la gestión del ciclo de vida de los requisitos y los mecanismos de priorización y trazabilidad que garantizan su coherencia y alineación con los objetivos del proyecto.

    p De forma complementaria, el componente integra el modelado como herramienta clave para la comprensión y documentación del sistema, mediante el uso de lenguajes y técnicas de modelado, UML y el modelo C4 para la representación de la arquitectura. Finalmente, se abordan las herramientas para la captura y el modelado de requisitos —como casos de uso, historias de usuario y storyboards— junto con los conceptos de ciclo de vida del software y control de versiones, fortaleciendo la gestión de cambios, la colaboración en equipo y la calidad del producto a lo largo del desarrollo.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que articula la ingeniería de requisitos y el modelado en el desarrollo de software, iniciando con la especificación, el análisis y la gestión de requisitos, y continuando con su priorización y trazabilidad para asegurar su alineación con los objetivos del proyecto. Asimismo, integra el uso de lenguajes y herramientas de modelado, junto con el control de versiones, como elementos clave para la documentación, la gestión de cambios y la calidad del software.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
