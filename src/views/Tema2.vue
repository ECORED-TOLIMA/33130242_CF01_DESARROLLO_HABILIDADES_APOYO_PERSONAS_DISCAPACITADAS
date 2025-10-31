<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Conceptos y aspectos interdisciplinarios de la valoración de apoyos
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        p(data-aos="fade-left") La valoración de apoyos es un instrumento propuesto por la Ley 1996 de 2019 “Por medio de la cual se establece el régimen para el ejercicio de la capacidad legal de las personas con discapacidad mayores de edad" de Colombia y está contemplado en los artículos 9 y posteriores. Si bien es un requisito de posibilidad para poder acudir a una adjudicación judicial de apoyos, no es solamente un documento o un requisito normativo, es un estudio y un informe de capacidad del funcionamiento de una persona con discapacidad, donde se analiza cuáles son sus actividades de la vida diaria y cómo ella las desempeña. De igual forma, se analiza cómo es el contacto de la persona con discapacidad en un núcleo familiar o en un núcleo laboral o educativo. 
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-4.col-6.lg-mb-0(data-aos="zoom-in")
            figure
              img.img-fluid(src="@/assets/curso/temas/tema2/img2.svg" alt="Icono 1")
          .col-lg-9
            p(data-aos="fade-left") Según el artículo 11 de la Ley 1996, la valoración de apoyos puede ser realizada por entidades públicas o privadas, siempre que se ajusten a los lineamientos y protocolos establecidos por el ente rector de la Política Nacional de Discapacidad. Cualquier persona puede solicitar gratuitamente este servicio ante las entidades públicas que lo ofrezcan. En todo caso, deberán garantizar la prestación del servicio, como mínimo, la Defensoría del Pueblo, las personerías, así como las entidades territoriales a través de las gobernaciones y alcaldías en los distritos.
      .col-lg-3.col-md-6.lg-mb-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema2/img1.png" alt="Introducción al curso")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img.img-fluid(src="@/assets/curso/temas/tema2/img3.png" alt="Icono 1")
      .col-lg-9
        p.mb-0 Este documento debe contener detalladamente cómo la persona con discapacidad responde a cada una de las actividades de la vida diaria, como en la red de apoyos, que puede ser un familiar, un amigo o una persona de confianza. La persona encargada de realizar los apoyos está descrita en el Decreto 487 de 2022, cuyo propósito es “reglamentar la prestación del servicio de valoración de apoyos que realicen las entidades públicas y privadas en los términos de la Ley 1996 de 2019”, donde se habla de las personas funcionarias que deben y pueden realizar dicha valoración. 
    p.mb-4 Respecto a ello, se abre la siguiente pregunta: 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-BG07.tarjeta.p-4
          .row.justify-content-center.mb-2
            .col-lg-1
              figure
                img.img-fluid(src="@/assets/curso/temas/tema2/img4.svg" alt="Introducción al curso")
          .row.justify-content-center
            .col-lg-6
              h4.text-center ¿Cuál es la habilidad mayor que requiere una persona encargada de realizar apoyos?
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p Es tener conocimiento de la discapacidad, de cuáles son sus tipos, sus normativas, pero más allá de eso, el perfil debe de estar definido por ser una persona que reconoce a las demás, en su condición de seres humanos íntegros (as, es) y que, al igual que ella, sienten, piensan, deciden, sueñan y pueden ser no solo aportar a la sociedad, sino también necesarios.
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Aspectos interdisciplinarios de la valoración de apoyos
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La valoración de apoyos es un proceso complejo que requiere la articulación de saberes provenientes de diversas disciplinas, ya que las necesidades de las personas con discapacidad no se limitan a un solo ámbito de la vida. La interdisciplinariedad permite comprender de manera integral las dimensiones sociales, psicológicas, médicas, educativas y jurídicas que influyen en la autonomía y participación de cada persona. Este enfoque favorece la toma de decisiones fundamentadas, la construcción de entornos inclusivos y la garantía de derechos, al promover el diálogo entre profesionales y la consideración de la persona como sujeto activo en su propio proceso de valoración.
    
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0  Retos en la realización de la valoración de apoyos

    p.mb-4 Tanto en lo familiar como en lo social se presentan una serie de situaciones que pueden generar retos. Por ello, en este primer tema, se abordarán dichas situaciones, partiendo de las experiencias en atención a personas con discapacidad, desde el Programa de Atención a Personas con Discapacidad (PAPD) de la Universidad de Antioquia y del Ministerio de la Igualdad.

    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0  Diálogos alrededor del marco legal de la discapacidad
    p

    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0  Aspectos interdisciplinarios que deben tenerse en cuenta en la valoración de apoyos
    p
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0  Aplicación del enfoque de género en la valoración de apoyos
    p
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0  El papel de la interdisciplinariedad en la valoración de apoyos
    p
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0  
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
