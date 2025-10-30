<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente aborda el concepto de discapacidad a través de los distintos modelos que han surgido desde la antigüedad hasta la actualidad, incluyendo el modelo de prescindencia, el modelo médico, el enfoque de derechos y el modelo de diversidad funcional. Esta evolución ha permitido reconocer a las personas con discapacidad como sujetos de una vida digna, fundamentada en la autonomía, la independencia, la libertad y la capacidad de decisión. En este contexto, la valoración de apoyos —establecida por la Ley 1996 de 2019— debe realizarse desde un enfoque interdisciplinario, en el que cada disciplina aporta elementos esenciales para construir una valoración integral, enriqueciendo el proceso y permitiendo enfrentar los retos que surgen en distintos ámbitos.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis del componente formativo Discapacidad y valoración de apoyos: introducción y conceptualización aborda la evolución del concepto de discapacidad desde los modelos de prescindencia y médico, hasta los enfoques de derechos y capacidades, destacando sus alcances y limitaciones. Presenta los tipos de discapacidad reconocidos en Colombia y su relación con los procesos de inclusión. Asimismo, profundiza en los aspectos interdisciplinarios de la valoración de apoyos, los retos asociados a su implementación y los diálogos en torno al marco legal vigente. Finalmente, resalta la importancia del enfoque de género y del trabajo interdisciplinario para garantizar valoraciones integrales, justas y centradas en la persona.")
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
