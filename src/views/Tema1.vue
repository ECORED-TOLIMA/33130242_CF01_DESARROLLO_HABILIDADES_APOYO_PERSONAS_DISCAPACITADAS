<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1  Concepción de la discapacidad desde diferentes modelos
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se inicia con la primera temática, en la cual se evidencia que la discapacidad no ha sido abordada de la misma manera a lo largo del tiempo. En cada época ha existido una concepción diferente: inicialmente, se adoptó un modelo que excluía a las personas con discapacidad; posteriormente, se pasó por un enfoque médico centrado en la condición clínica; y finalmente, se ha llegado a un modelo que reconoce a las personas con discapacidad como sujetos de derechos, capaces de tomar decisiones de manera libre y autónoma. Este último enfoque, en algunos casos, requiere procesos de apoyo que respondan a las particularidades de cada persona.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 La discapacidad vista desde los modelos de prescindencia y médico
    p.mb-4 A continuación, se describen todos los procesos que hacen parte de estos dos modelos:

    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Modelo prescindencia
    
    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Figura 1.
      i Representación del modelo de prescindencia

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.tarjeta--BG12.tarjeta.p-4
        .row.justify-content-center.align-items-center
          .col-lg-10.movil(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img2_1.svg', alt='En la imagen se observa una ilustración de estilo caricaturesco ambientada en un escenario al aire libre. A la derecha, hay una persona sentada en una silla de ruedas vestida con una camiseta blanca y zapatillas azules, aparentemente en una situación de vulnerabilidad. A la izquierda, un personaje vestido como un soldado romano, con armadura, túnica amarilla y una capa roja, se encuentra empujando la silla de ruedas hacia un precipicio. Este personaje lleva un casco típico romano con una cresta roja en la parte superior. El fondo presenta un paisaje con tonos amarillos y marrones que representan rocas y tierra, sugiriendo un terreno árido. Sobre el soldado romano aparece un globo de diálogo con el texto: "Para que no sufras mucho, mejor te despeñamos", lo cual añade un tono satírico y oscuro a la imagen. La escena parece ser una crítica o representación humorística de una situación trágica, y el ambiente general transmite una mezcla entre ironía y dramatismo. La ilustración no incluye elementos de naturaleza como árboles o agua, enfocándose totalmente en los personajes.')
          .col-lg-10.desktop(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='En la imagen se observa una ilustración de estilo caricaturesco ambientada en un escenario al aire libre. A la derecha, hay una persona sentada en una silla de ruedas vestida con una camiseta blanca y zapatillas azules, aparentemente en una situación de vulnerabilidad. A la izquierda, un personaje vestido como un soldado romano, con armadura, túnica amarilla y una capa roja, se encuentra empujando la silla de ruedas hacia un precipicio. Este personaje lleva un casco típico romano con una cresta roja en la parte superior. El fondo presenta un paisaje con tonos amarillos y marrones que representan rocas y tierra, sugiriendo un terreno árido. Sobre el soldado romano aparece un globo de diálogo con el texto: "Para que no sufras mucho, mejor te despeñamos", lo cual añade un tono satírico y oscuro a la imagen. La escena parece ser una crítica o representación humorística de una situación trágica, y el ambiente general transmite una mezcla entre ironía y dramatismo. La ilustración no incluye elementos de naturaleza como árboles o agua, enfocándose totalmente en los personajes.')
    
    .row.justify-content-center.align-items-center
      .col-lg-9.mb-4.mb-lg-0
        p(data-aos="fade-left") Este modelo está guiado por las concepciones de la eugenesia en la antigua Grecia y Roma, donde la discapacidad era percibida desde una perspectiva social y religiosa como un castigo divino o una posesión demoníaca. Esta visión dio origen a dos prácticas predominantes: por un lado, la marginación, que se manifestaba en la pobreza, la exclusión y el aislamiento de las personas con discapacidad en las afueras de las ciudades; y por otro lado, la muerte, aplicada especialmente a niños, niñas y niñes que no cumplían con los patrones esperados por la sociedad.
        .bloque-texto-c.color-secundario.p-4
          p.mb-0(data-aos="fade-left") En la #[b antigüedad], las personas con discapacidad fueron tratadas de maneras distintas, según la cultura a la que pertenecían; por ejemplo, en Grecia ante la aparición de una pérdida funcional o comportamiento distinto de la forma de procesar la información de una persona, se optaba por la muerte. Este comportamiento de eliminar a los niños que no cumplían con las características físicas y mentales, que en Grecia consideraban como comunes a su cultura, es denominado #[b Modelo de prescindencia]. Este modelo, no se agota en la idea de las meras características físicas o mentales, se le atribuye también ideas religiosas, ya que se consideraban las diferencias físicas y mentales como un castigo. Aristóteles le daba una conexión a las deficiencias físicas con respecto a los procedimientos de la mente:
      .col-lg-3.col-6.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img3.png', alt='Imagen decorativa')
    .tarjeta--BG02.p-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .bloque-texto-c.color-primario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.text-bold.mb-0.ms-2 En la antigua Grecia también se aplicaron tratamientos de base “científica” para personas con discapacidad adquirida. Durante las reformas de Pericles (499- 429 AC) se crearon centros asistenciales. Aristóteles, estudió la sordera adquirida y la tartamudez, a la que consideraba una enfermedad causada porque la lengua era incapaz de seguir la velocidad a la que fluían las ideas.
              br
              .d-flex.justify-content-end.align-items-center
                span - (Valencia, 2014. p,7).
                i.fas.fa-quote-right.ms-2
      .row.justify-content-center.mb-4
        .col-lg-3.mb-4(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img4.svg', alt='Imagen decorativa')
        .col-lg-9
          p.mb-0(data-aos="fade-left") La anterior cita, llama la atención en el sentido que, si bien, en la antigüedad se miraba las personas con discapacidad como distintas, no siempre se optaba por la muerte y se comenzaba a mirar la discapacidad como una enfermedad que podía ser tratada. En la actualidad, no se podría asegurar que el modelo de prescindencia ha sido abandonado, se conoce que hay países del mundo, donde se ejecuta a personas con discapacidades cognitivas o intelectuales, que si bien, han cometido delitos, no se les podría aplicar una pena como esta, ya que su forma de actuar va a estar condicionada por el tipo de discapacidad que poseen y esto no es tenido en cuenta, convirtiéndose en una manera “moderna” de prescindencia. 
      p.mb-4(data-aos="fade-left") A continuación, se presenta un ejemplo: 
      .row.justify-content-center.align-items-center
        .col-lg-10
          .bloque-texto-gg.bloque-texto-gg--inverso.color-secundario.p-3
            .bloque-texto-gg__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img5.png')})`}"
            )
            .bloque-texto-gg__texto.mt-5.mt-lg-0.p-2
              p.mb-0 El ciudadano mexicano Ramiro Hernández Llanas quien fue ejecutado en Texas pese a las pruebas que indicaba que su discapacidad intelectual, evaluada en seis pruebas diferentes de cociente intelectual en la última década, convertía su pena de muerte en inconstitucional. (Amnistía Internacional, 2014).

    .tarjeta--BG03.pe-5.ps-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img6.png', alt='Imagen decorativa')
        .col-lg-9
          p(data-aos="fade-left") En el anterior fragmento, Amnistía Internacional, muestra cómo los países actualmente no tienen en todos los casos, un trato diferencial con las personas con discapacidad que han cometido delitos y siguen prescindiendo de ellas como se realizaba históricamente en Grecia y Roma.
          .row.align-items-center.bloque-texto-c.color-primario-claro.p-4.mb-4
            .col-lg-2.col-8.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/tema1/img7.svg', alt='Imagen decorativa')
            .col-lg-10
              p.mb-0(data-aos="fade-left") De igual forma, las personas con discapacidad continúan enfrentando múltiples formas de exclusión. Así lo evidencia el estudio realizado por la Organización de Naciones Unidas (ONU), citado por la relatora Devandas (2015), quien señala las brechas persistentes y las diversas exclusiones que afectan a esta población en todo el mundo.
          p.mb-0(data-aos="fade-left") Las personas con discapacidad representan más de mil millones en el mundo; es decir, una de cada siete personas. La gran mayoría vive en países en vías de desarrollo y más del 80 % se encuentra en situación de pobreza. Sin embargo, esta condición no se limita únicamente a los países en desarrollo, ya que, en las naciones más ricas, las personas con discapacidad también están desproporcionadamente representadas entre los grupos más desfavorecidos.


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img8.svg', alt='Imagen decorativa')
          .col-lg-10
            p.mb-0(data-aos="fade-left") Además de la pobreza, esta población continúa enfrentando diversas formas de exclusión. Entre ellas se encuentran las barreras físicas que dificultan su desplazamiento, la falta de acceso a información adecuada para personas sordas y ciegas, y la carencia de servicios esenciales para quienes tienen discapacidades psicosociales o de salud mental.
        p(data-aos="fade-left") Las brechas mencionadas anteriormente reflejan, sin duda, una adaptación contemporánea del modelo de prescindencia. En contextos de pobreza, muchas familias enfrentan dificultades para atender, capacitar y permitir que las personas con discapacidad salgan de sus hogares. Esta situación se agrava cuando estas personas viven en zonas rurales de difícil acceso, donde la escuela o el centro de salud más cercano puede estar a horas de camino. Incluso en ciudades como Medellín, existen barrios construidos en zonas de escalas que dificultan la movilidad.
        p.mb-0(data-aos="fade-left") Como resultado, se vuelve “razonable” que muchas personas con discapacidad no salgan o sientan temor al hacerlo. Este panorama es un reflejo del modelo de prescindencia en pleno siglo XXI, como lo expresa Lina María Arango, una persona con discapacidad que, desde hace más de 30 años, enfrenta obstáculos diarios para movilizarse en su silla de ruedas por la ciudad de Medellín. Entre los desafíos que menciona están los huecos en las vías, vendedores en las aceras, carros mal parqueados, falta de rampas, escaleras, vehículos y peatones. Al respecto, agrega: “He tenido miedo de salir sola a la calle por las barreras y porque pienso que no me van a ver” (Periódico El Tiempo, 2017).
      .col-lg-4.col-6.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img9.svg', alt='Imagen decorativa')

    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0  Modelo médico o rehabilitador
    
    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Figura 2.
      i Representación del modelo médico o rehabilitador

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.tarjeta--BG12.tarjeta.p-4
        .row.justify-content-center.align-items-center
          .col-lg-10.movil(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img10_1.svg', alt=' La imagen muestra a un grupo de profesionales médicos y un paciente en silla de ruedas. Hay dos médicos masculinos, ambos con batas blancas de laboratorio y batas azules. El primer médico está de pie y sostiene una tableta, mientras que el segundo médico también está de pie y tiene la mano extendida hacia el paciente sentado en la silla de ruedas. A la izquierda de los dos médicos, hay una enfermera o técnica vestida con un uniforme verde azulado, con el cabello recogido y un estetoscopio alrededor del cuello. Lleva un portapapeles en el brazo izquierdo. Al fondo, se aprecia a otra mujer que podría ser otro miembro del equipo médico, posiblemente otra enfermera o técnico, también con bata verde azulado. Su postura sugiere que puede estar interactuando con el grupo o tal vez observando la escena. El grupo está todo sobre un fondo liso de color pastel que no distrae de las figuras en primer plano. La atmósfera general es profesional pero accesible, representada a través del lenguaje corporal y la vestimenta de los personajes, lo que sugiere un entorno médico positivo donde se brinda atención y probablemente se discute.')
          .col-lg-10.desktop(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img10.svg', alt=' La imagen muestra a un grupo de profesionales médicos y un paciente en silla de ruedas. Hay dos médicos masculinos, ambos con batas blancas de laboratorio y batas azules. El primer médico está de pie y sostiene una tableta, mientras que el segundo médico también está de pie y tiene la mano extendida hacia el paciente sentado en la silla de ruedas. A la izquierda de los dos médicos, hay una enfermera o técnica vestida con un uniforme verde azulado, con el cabello recogido y un estetoscopio alrededor del cuello. Lleva un portapapeles en el brazo izquierdo. Al fondo, se aprecia a otra mujer que podría ser otro miembro del equipo médico, posiblemente otra enfermera o técnico, también con bata verde azulado. Su postura sugiere que puede estar interactuando con el grupo o tal vez observando la escena. El grupo está todo sobre un fondo liso de color pastel que no distrae de las figuras en primer plano. La atmósfera general es profesional pero accesible, representada a través del lenguaje corporal y la vestimenta de los personajes, lo que sugiere un entorno médico positivo donde se brinda atención y probablemente se discute.')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img8.svg', alt='Imagen decorativa')
      .col-lg-11
        p.mb-0(data-aos="fade-left") Modelo centrado en la persona, el cual considera la discapacidad como un problema individual, causado por una enfermedad o condición de salud. Bajo esta perspectiva, las prácticas también eran de exclusión y aislamiento, ya que las personas con discapacidad eran llevadas a escuelas y centros especiales que buscaban su rehabilitación con el objetivo de “normalizarlas”. Se les ofrecían tratamientos para lograr una cura, pues eran vistas como incapaces de resolver situaciones cotidianas y de enfrentarse a la sociedad, lo que generaba una percepción de minusvalía (Palacios, 2008).
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img12.svg', alt='Imagen decorativa')
      .col-lg-9
        .row.justify-content-center.mb-4
          .col-lg-1.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img11.svg', alt='Imagen decorativa')
          .col-lg-11
            p.mb-0(data-aos="fade-left") Durante el siglo XX, se produjo un avance sin precedentes en la medicina. A mayor desarrollo médico, mayor fue la confianza en los tratamientos y su capacidad para transformar vidas. En este contexto, la discapacidad se benefició en algunos casos, gracias a nuevos desarrollos que permitieron prevenir enfermedades y discapacidades. Se establecieron nuevas prácticas sanitarias, las madres gestantes pudieron monitorear el desarrollo de sus bebés, y niños, niñas y niñes accedieron a intervenciones médicas para corregir problemas físicos. Así, se desplegó un abanico de alternativas que podían mejorar la calidad de vida de las personas con discapacidad y sus familias, generando la idea de que, ante cualquier discapacidad, la medicina tendría una respuesta (Palacios, 2008).
        .bloque-texto-c.color-primario.p-4
          p.mb-0(data-aos="fade-left") Aunque el modelo médico buscaba curar a las personas con discapacidad, mediante tratamientos o medicamentos, esto no descalifica completamente su valor. Es fundamental que las personas con discapacidad tengan acceso a tratamientos que les faciliten la vida o reduzcan el dolor. Ya en la antigua Grecia, Aristóteles observaba que las personas sordas tenían dificultades para pronunciar palabras, pues consideraba que la mente era más rápida que la lengua. Intentaba impartir cursos para que la lengua igualara la velocidad del pensamiento.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p.mb-0(data-aos="fade-left") Sin embargo, es importante aclarar que no todas las personas con discapacidad mejoran su condición con tratamientos o capacitaciones. Por ejemplo:

    .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .bloque-texto-gg.color-secundario.p-3
            .bloque-texto-gg__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img13.png')})`}"
            )
            .bloque-texto-gg__texto.p-5
              p.mb-0 Una persona sorda no tiene dificultades para hablar porque piensa más rápido, sino porque nunca ha escuchado cómo se hace. 
    

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1.mb-4.mb-lg-0
        p(data-aos="fade-left") Esto no significa que no pueda aprender, pero es una decisión personal —y familiar— optar por la lengua de señas o la oralidad. Dejar de lado la conexión entre ideas y lenguaje evita caer en afirmaciones como que “las manos y la mente se mueven al mismo ritmo”, como sugería Aristóteles.
        .bloque-texto-c.color-primario-medio.p-4.mb-4
          p.mb-0 Esta visión de la discapacidad como algo que debe ser tratado o corregido se mantuvo en el modelo médico, que busca sanar y remediar las pérdidas funcionales. No obstante, también ha contribuido a mejorar las condiciones de vida de las personas con discapacidad. Al permitirles vivir, se les reconoció como personas, y los tratamientos y medicamentos les brindaron una mejor calidad de vida. Estos avances han permitido que las personas con discapacidad puedan exigir sus derechos, reflexionar sobre sí mismas y sus familias, y ser reconocidas como sujetos de derechos (Palacios, 2008). 
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img15.svg', alt='Imagen decorativa')
          .col-lg-10
            p.mb-0(data-aos="fade-left") En este punto, es importante hacer una descripción del concepto de discapacidad, el cual ha tenido variaciones según el ente que lo haya dado, el momento histórico, social y en especial el propósito y la función que tiene cada una de las organizaciones que los han emitido. La Organización Internacional del Trabajo (OIT), cuyo enfoque está basado en la relación empleado- empleador y Estado, ha puesto en su definición elementos dirigidos a clasificar el grado de discapacidad que posee una persona para ser empleada:
      .col-lg-3.col-6.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img14.png', alt='Imagen decorativa')
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-c.color-primario-beige.p-4
          .row.justify-content-center.align-items-center
            .col-lg-11
              p.mb-0(data-aos="fade-left") …se entiende por persona inválida toda persona cuyas posibilidades de obtener y conservar un empleo adecuado y de progresar en el mismo queden sustancialmente reducidas a causa de una deficiencia de carácter físico o mental debidamente reconocida. (Definición de la persona con discapacidad, OIT, 1983).
            .col-lg-1.d-none.d-lg-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/tema1/img16.svg', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen decorativa')  
      .col-lg-9
        p(data-aos="fade-left") La definición propuesta por la Organización Internacional del Trabajo (OIT) en 1983 introduce un concepto clave para el futuro: la diferenciación entre discapacidad y deficiencia. Esta distinción permite comprender que una deficiencia —ya sea física o mental— no implica necesariamente una pérdida de capacidad. Es decir, una persona con discapacidad puede tener limitaciones funcionales en ciertas actividades, pero esto no afecta su capacidad para desempeñarse laboralmente.
        .row.justify-content-center.align-items-center
          .col-lg-1.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img8.svg', alt='Imagen decorativa')
          .col-lg-11
            p.mb-0(data-aos="fade-left") Además, esta definición establece que la deficiencia debe ser probada y reconocida por un ente autorizado, en este caso, el Estado. Así, se sientan las bases para distinguir entre tres conceptos fundamentales: deficiencia, discapacidad y minusvalía.
    p(data-aos="fade-left") Según Stellman (1998), en el contexto de la salud: 
    
    
    .row.mb-lg-5.mb-4
      .col-sm-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta--boton.color-primario.tarjeta--BG04.p-4.h-100
          .row.justify-content-center.align-items-center.mb-3
            .col-12
              .divcentrado
                .imgg2.img1
          h5.text-center Deficiencia
          p Es toda pérdida o anormalidad de una estructura o función psicológica, fisiológica o anatómica.
      .col-sm-10.col-lg-4.mb-4.mb-lg-0(data-aos="flip-right")
        .tarjeta--boton.color-primario.tarjeta--BG04.p-4.h-100
          .row.justify-content-center.align-items-center.mb-3
            .col-12
              .divcentrado
                .imgg2.img2
          h5.text-center Discapacidad
          p Es toda restricción o ausencia (debida a una deficiencia) de la capacidad de realizar una actividad en la forma o dentro del margen que se considera normal para un ser humano.
      .col-sm-10.col-lg-4.mb-4.mb-lg-0(data-aos="flip-left")
        .tarjeta--boton.color-primario.tarjeta--BG04.p-4.h-100
          .row.justify-content-center.align-items-center.mb-3
            .col-12
              .divcentrado
                .imgg2.img3
          h5.text-center Minusvalía
          p Es una situación desventajosa para un individuo, consecuencia de una deficiencia o discapacidad, que limita o impide el desempeño de un rol considerado normal según su edad, sexo y contexto sociocultural.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-6.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img21.png', alt='Imagen decorativa')
      .col-lg-9
        .row.justify-content-center.mb-4
          .col-lg-1.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img22.svg', alt='Imagen decorativa')
          .col-lg-11
            p.mb-0(data-aos="fade-left") Esta evolución conceptual permite avanzar hacia una comprensión más justa e inclusiva de la discapacidad, reconociendo que las personas con deficiencias no deben ser definidas únicamente por sus limitaciones, sino por sus capacidades, derechos y posibilidades de participación plena en la sociedad.
        p(data-aos="fade-left") Los tres elementos anteriores: deficiencia, discapacidad y minusvalía, son lo que se denomina enfoque médico de la discapacidad, el cual separa la pérdida funcional, psíquica o fisiológica, teniendo en cuenta lo que la persona deja de hacer, por ejemplo: mover su cuerpo, caminar, tomar objetos, ver o escuchar, calcular de manera rápida, distinguir formas o gráficas, actitudes de relacionamiento con los otros, como lo es participar de actos sociales, grupales, tener contacto visual cuando se le habla, entre otras muchas más.
        .bloque-texto-c.color-secundario.p-4
          p.mb-0(data-aos="fade-left") Dicho modelo ha sido utilizado en Colombia para medir la pérdida de capacidad laboral, en el que se sitúa a la persona con discapacidad como enferma y se pone en ella, las limitantes.

    p.mb-4(data-aos="fade-left") Hasta aquí se ha desarrollado el análisis de los dos primeros modelos que han influido en la forma de pensar la discapacidad: el #[b Modelo de prescindencia] y el #[b Modelo médico]. La concepción de la discapacidad en estos enfoques puede sintetizarse de la siguiente manera, destacando en sus respectivas épocas:  

    .tarjeta--container.row.justify-content-center
      .col-lg-5.tarjeta.color-primarioss.p-5
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/temas/tema1/img92.png', alt='Imagen decorativa')
        h4.text-center Prescindencia
        p.text-bold Antigüedad
        p.text-bold Dos visiones: 
        p.text-bold Primera:
        ul.lista-ul
          li
            ul
              li 
                i.lista-ul__vineta
                | Ante la pérdida funcional o comportamiento distinto, se optaba por la muerte.
              li 
                i.lista-ul__vineta
                | Diferencias físicas o mentales entendidas como castigo. 
        p.text-bold Segunda:
        ul.lista-ul
          li
            ul
              li 
                i.lista-ul__vineta
                | Relación con enfermedad. 
              li 
                i.lista-ul__vineta
                | Para las discapacidades adquiridas, tratamientos de “base científica”. 
          p Aún tiene vigencia.
      .col-lg-5.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-8
            figure
              img(src='@/assets/curso/temas/tema1/img93.png', alt='Imagen decorativa')
        h4.text-center Médico
        ul.lista-ul
          li
            p.text-bold Siglo XX:
          li
            ul
              li 
                i.lista-ul__vineta
                | Formas sanitarias que previenen discapacidades.
              li 
                i.lista-ul__vineta
                | Ante discapacidad, la medicina tendría la respuesta. 
              li 
                i.lista-ul__vineta
                | Idea de curar las personas con discapacidad con medicamentos o tratamientos.
              li 
                i.lista-ul__vineta
                | Oportunidad a las personas con discapacidad de exigir sus derechos. 
              li 
                i.lista-ul__vineta
                | La Organización Internacional del Trabajo (OIT) empieza a hablar de la distinción entre discapacidad, deficiencia y persona con discapacidad.
                      
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Enfoque de derechos: alcances y limitantes
    p.mb-4(data-aos="fade-left") En la actualidad, el enfoque de derechos se ha convertido en un eje central cuando se habla de atención a personas con discapacidad. Este modelo, también conocido como modelo social, plantea una transformación profunda en la forma de entender la discapacidad, alejándose de visiones centradas en la deficiencia o la enfermedad.

    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Figura 3.
      i Representación del modelo social

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.tarjeta--BG12.tarjeta.p-4
        .row.justify-content-center.align-items-center
          .col-lg-10.movil(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img22_1.svg', alt='Esta imagen muestra un grupo de niños jugando al aire libre en un círculo mientras se toman de las manos. Están ubicados en un espacio verde, probablemente un campo o parque y todos parecen estar disfrutando del momento juntos. Los niños representan una diversidad de habilidades físicas, destacando inclusividad. Por ejemplo, uno de ellos está sentado en una silla de ruedas en el centro del círculo, otro utiliza muletas y hay uno con un bastón. Sus expresiones faciales y posturas transmiten alegría, cooperación y unidad. Las vestimentas de los niños son coloridas, incluyendo tonos de rojo, azul, verde y rosa, y el diseño de sus atuendos es informal y amigable, adaptado a la escena infantil de juego. Los trazos de la ilustración son caricaturescos, con líneas suaves que sugieren un ambiente amistoso y accesible. También hay un fondo que combina gradientes de verde y amarillo suave, con curvas blancas que enmarcan la escena. En general, la atmósfera es cálida, positiva y transmite un mensaje de inclusión y diversión compartida.')
          .col-lg-10.desktop(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img22_2.svg', alt='Esta imagen muestra un grupo de niños jugando al aire libre en un círculo mientras se toman de las manos. Están ubicados en un espacio verde, probablemente un campo o parque y todos parecen estar disfrutando del momento juntos. Los niños representan una diversidad de habilidades físicas, destacando inclusividad. Por ejemplo, uno de ellos está sentado en una silla de ruedas en el centro del círculo, otro utiliza muletas y hay uno con un bastón. Sus expresiones faciales y posturas transmiten alegría, cooperación y unidad. Las vestimentas de los niños son coloridas, incluyendo tonos de rojo, azul, verde y rosa, y el diseño de sus atuendos es informal y amigable, adaptado a la escena infantil de juego. Los trazos de la ilustración son caricaturescos, con líneas suaves que sugieren un ambiente amistoso y accesible. También hay un fondo que combina gradientes de verde y amarillo suave, con curvas blancas que enmarcan la escena. En general, la atmósfera es cálida, positiva y transmite un mensaje de inclusión y diversión compartida.')
    .row.justify-content-center.mb-4
      .col-lg-9.mb-4.mb-lg-0
        p(data-aos="fade-left") Según Victoria (2013) este modelo surge de disciplinas y prácticas sociales y políticas, con un enfoque de derechos; da cuenta que la discapacidad no tiene origen ni religioso ni científico, sino que en gran medida corresponde a factores sociales. Considera que la discapacidad no es un asunto de la persona, es más consecuencia de las barreras y la exclusión que impone la sociedad a todo aquel que considera “distinto” e “incapaz”; resalta la definición de la discapacidad como un asunto social, que deviene de la interacción entre las personas y las condiciones que le ofrece a su favor o no, una sociedad. De igual manera, está enfocado en la dignidad humana, la autonomía, la independencia, la libertad y la capacidad de decisión de las personas con discapacidad. Desde esta concepción, las prácticas sociales están centradas en el diseño de un mundo para todos, todas y todes, siendo la accesibilidad factor determinante en la eliminación de barreras y que conlleva a la inclusión de las personas en igualdad de oportunidades y a la participación plena en la sociedad.
      .col-lg-3.col-6.d-none.d-lg-block.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img23.png', alt='Imagen decorativa')

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-left") Para comenzar el análisis del enfoque de derechos, es importante determinar cómo los derechos humanos han favorecido el desarrollo de las personas con discapacidad, aunque no siempre todas las personas del mundo han sido incluidas como receptoras de esta categoría, esto es, no todas las personas han sido incluidas. La condición clásica de derechos humanos parte de la Revolución Francesa, que a su vez tiene origen en el período histórico que se denomina Ilustración, “¡#[i Sapere aude]! ¡Ten el valor de servirte de tu propia razón!” (Kant).

    .row.justify-content-center.mb-4
      .col-lg-9
        p(data-aos="fade-left") El filósofo alemán Immanuel Kant, en el escrito ¿Qué es la ilustración?, da una serie de condiciones que deben cumplir las personas para ser consideradas mayores de edad, dicha mayoría radica principalmente en pensar por sí mismas. Kant, en su construcción, analiza cómo la libertad es un requisito a priori para el desarrollo de las capacidades que desarrolla la razón, primero se percibe por los sentidos, luego se clasifica y se distingue la información recibida, y se nutre de las leyes morales universales, todo esto mediado por las imágenes y la imaginación, hasta llegar a un dispositivo interno que permite saber cómo actuar, siempre teniendo en cuenta que la persona es un fin en sí mismo, afirma Kant: 
      .col-lg-3(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img25.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bloque-texto-c.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.text-bold.mb-0.ms-2 La ilustración es la liberación del hombre de su culpable incapacidad. La incapacidad significa la imposibilidad de servirse de su inteligencia sin la guía de otro. Esta incapacidad es culpable porque su causa no reside en la falta de inteligencia, sino de decisión y valor para servirse por sí mismo de ella sin la tutela de otro. 
            br
            .d-flex.justify-content-end.align-items-center
              span - (Kant, 1994. p, 1).
              i.fas.fa-quote-right.ms-2
    
    .row.justify-content-center.mb-4
      .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img26.png', alt='Imagen decorativa')
      .col-lg-8
        p(data-aos="fade-left") El anterior fragmento eleva la condición humana a términos de decisión, parte de la idea de que los seres humanos pueden determinarse y gobernarse por sí mismos (as, es), pero, a su vez; habla de aquellas personas que no pueden hacerlo y les nombra incapaces. Se sabe que Kant tenía la intención de potenciar al hombre que usa la razón para modificar su época, deshacerse de la monarquía y sus dictámenes, pero este mismo discurso liberador y atrayente, olvidó y dejó a un lado a las personas con discapacidad, que no tenían decisión por su condición física, sensorial o cognitiva, o porque sus familias no se los permitían; por una u otra razón, un discurso liberador terminó poniendo a las personas con discapacidad, al margen de la posibilidad de adquirir derechos, contraer obligaciones y participar de la vida social.
    p.mb-4(data-aos="fade-left") Prosiguiendo con lo anterior, la Declaración de los Derechos del Hombre, de 1789 también tiene en cuenta como sujetos de derechos solo a las personas que pueden auto determinarse y hacen parte de una sociedad. El Artículo 4 indica: 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bloque-texto-c.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.text-bold.mb-0.ms-2 La libertad consiste en poder hacer todo lo que no daña a los demás. Así, el ejercicio de los Derechos naturales de cada hombre no tiene más límites que los que aseguran a los demás miembros de la sociedad el goce de estos mismos Derechos. Estos límites sólo pueden ser determinados por la ley.
            br
            .d-flex.justify-content-end.align-items-center
              span - (Declaración de los derechos del hombre, 1789).
              i.fas.fa-quote-right.ms-2
    .bloque-texto-c.color-primario-medio.px-lg-0.px-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img27.png', alt='Imagen decorativa')
        .col-lg-7
          .row.mb-3
            .col-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img28.svg', alt='Imagen decorativa')
          p(data-aos="fade-left") Así mismo, la Declaración Universal de los Derechos Humanos de 1948 establece en su Artículo 1 que “Todos los seres humanos nacen libres e iguales en dignidad y derechos, y dotados como están de razón y conciencia”. Sin embargo, esta formulación deja por fuera a un número significativo de personas que no cumplen con estas características, como aquellas con parálisis cerebral severa, que no pueden elegir libremente, adquirir propiedades o expresar su opinión. En consecuencia, se podría interpretar que estas personas no realizan las acciones que el artículo protege y defiende, lo que llevaría a la preocupante conclusión de que serían consideradas como personas sin derechos.
    
    .row.justify-content-center
      .col-lg-9.order-1.order-lg-2.mb-4.mb-lg-0
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-1.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img8.svg', alt='Imagen decorativa')
          .col-lg-11
            p.mb-0(data-aos="fade-left") Este enfoque revela que el #[b Modelo de la Ilustración], basado en la razón y la conciencia como atributos esenciales del ser humano, no fue completamente abandonado. Aunque la Declaración de 1948 amplía el reconocimiento de derechos a grupos históricamente excluidos —como mujeres, niños y no ciudadanos—, mantiene la idea de que la racionalidad es una condición para el ejercicio pleno de los derechos humanos.
        p(data-aos="fade-left") Con esta visión se excluyen nuevamente a personas con deficiencias físicas, sensoriales o cognitivas severas, que no se ajustan a los procesos “racionales” definidos por el modelo ilustrado. Así, se perpetúa una concepción limitada de humanidad que no reconoce la diversidad funcional como parte legítima de la condición humana.
        .row.align-items-center.bloque-texto-c.color-primario-claro.p-4.mb-4
          .col-2.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img30_2.svg', alt='Imagen decorativa')
          .col-10
            p.mb-0(data-aos="fade-left") También hay que mencionar que la evolución de los Derechos Humanos de 1948, ha sido evidente y notoria, en tanto se amplió el concepto a cada una de las personas que habita la tierra, al menos desde el punto de vista de las legislaciones y en especial de los tratados internacionales de naciones unidas. se encuentran así declaraciones, tratados y convenciones y, a su vez, textos vinculantes y no vinculantes para los 
              a.lnk(@click="modal1 = true") Estados.
              sup 1 

      .col-lg-3.col-6.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img29.png', alt='Imagen decorativa')

    
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center.bloque-texto-c.color-primario-claro.p-4
        .col-12.mb-md-0
          p
            sup 1
            |  En este punto se alude a la vinculación de algunos Estados para tener en cuenta en su ordenamiento jurídico, los documentos no vinculantes, son recomendaciones que guían, pero que su eficacia depende de la buena voluntad de cada uno de los Estados.
    .tarjeta--BG02.p-5(style="margin-top: -27px")
      p.mb-4(data-aos="fade-left") Los documentos vinculantes son:
      SlyderF.color-acento-botones.mb-0(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img31.svg' alt='Imagen decorativa')
          p.text-center.mb-0 Carta Internacional de Derechos Humanos.
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img32.svg' alt='Imagen decorativa')
          p.text-center.mb-0 Convención contra la Tortura y otros Tratos Crueles, Inhumanos o Degradantes.
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img33.svg' alt='Imagen decorativa')
          p.text-center.mb-0 Convención Internacional sobre la Eliminación de todas las Formas de Discriminación Racial.
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img34.svg' alt='Imagen decorativa')
          p.text-center.mb-0 Convención Internacional sobre la Eliminación de todas las Formas de Discriminación Contra la Mujer.
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img35.svg' alt='Imagen decorativa')
          p.text-center.mb-0 Convención sobre Derechos del Niño.
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img36.svg' alt='Imagen decorativa')
          p.text-center.mb-0 Convención Internacional sobre la Protección de los Derechos de todos los Trabajadores Migratorios y de sus Familiares.
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img37.svg' alt='Imagen decorativa')
          p.text-center.mb-0 Convención sobre Derechos de las Personas con Discapacidad y los Convenios de la Organización Internacional del Trabajo (OIT).


    p.mb-4(style="margin-top: -27px")(data-aos="fade-left") Estos instrumentos ampliaron el concepto de ser humano, eliminando esas raíces eurocéntricas que privilegiaban la razón y que, en muchos casos, desconocían a las otras culturas o pensamientos diferentes. Se advierte que es vinculante en el sentido que han sido ratificados por los Estados; es decir, son vinculantes para los que los ratifican y no lo son para los que los desconocen, ejemplo de ello es la Convención Internacional sobre la Eliminación de todas las Formas de Discriminación contra la Mujer, que no ha sido ratificada por los países árabes, dejando un manto de dudas acerca de la obligatoriedad del derecho internacional.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1.mb-4.mb-lg-0
        p(data-aos="fade-left") Ahora bien, los documentos no vinculantes, son recomendaciones que guían, pero que su eficacia depende de la voluntad de cada uno de los Estados; se encuentran entre ellos:  
        .row.align-items-center.bloque-texto-c.color-primario-medio.p-3
          .col-lg-3.col-6.mb-4.mb-lg-0(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img38.svg', alt='Imagen decorativa')
          .col-lg-9
            ul.lista-ul--color
              li 
                i.fas.fa-user
                p.mb-0 #[b 4 de diciembre de 1986] - La declaración sobre el derecho al desarrollo. 
              li 
                i.fas.fa-user
                p.mb-0  #[b 9 de diciembre de 1975] - La declaración de los derechos de los impedidos. 
              li 
                i.fas.fa-user
                p.mb-0  #[b 20 de diciembre de 1971] - La declaración de los derechos del retrasado mental. 
              li 
                i.fas.fa-user
                p.mb-0  #[b 11 de diciembre del 1969] - La declaración sobre el progreso y el desarrollo social. 
              li 
                i.fas.fa-user
                p.mb-0  #[b 27 de junio del 2001] - La declaración de compromiso en la lucha contra el VIH/ SIDA.
      .col-lg-3.col-6.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img39.png', alt='Imagen decorativa')

    p(data-aos="fade-left") Además de los anteriores documentos, también se encuentran las normas uniformes para la igualdad de oportunidades para las personas con discapacidad y la relatoría especial sobre discapacidad. 
    p(data-aos="fade-left") Los documentos no vinculantes pueden ser acatados o no acatados por los Estados, en el caso de Colombia, la Corte Constitucional ha traído y ha mostrado el carácter obligatorio de distintos instrumentos internacionales, gracias al bloque de constitucionalidad consagrado en los artículos 93 y 94 de la Constitución. 
    p.mb-4(data-aos="fade-left") Basado en lo anterior, a continuación, se detalla una línea del tiempo, con respecto a los documentos vinculantes y no vinculantes: 

    .tarjeta.tarjeta--gris.fondo.p-4.mb-4
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-center(titulo="1789 - 1951")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img40.png', alt='Texto que describa la imagen')
          .col-lg-6
            p.mb-0.text-bold 1789
            p Si bien se habla de derechos humanos, eleva la condición humana a la decisión y a quienes no lo hacen, los llama “incapaces”.
            p.mb-0.text-bold 1948: Evolución de los derechos humanos
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Amplía el concepto de derechos humanos a cada una de las personas que habita la tierra, desde el punto de vista de la legislación.
              li
                i.fas.fa-angle-right
                | Convención contra la Tortura y otros Tratos Crueles.

            p.mb-0.text-bold 1951
            p Convenio sobre la igualdad de remuneración entre hombres y mujeres por un trabajo de igual valor de la Organización Internacional del Trabajo (Vinculante).
        .row.justify-content-center(titulo="1957 - 1969")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img41.png', alt='Texto que describa la imagen')
          .col-lg-6
            p.mb-0.text-bold 1957
            p Convenio sobre la abolición del trabajo forzoso de la Organización Internacional del Trabajo (Vinculante).

            p.mb-0.text-bold 1965
            p Convención Internacional sobre la Eliminación de todas las Formas de discriminación Racial adoptada por la Asamblea General de las Naciones Unidas (Vinculante).

            p.mb-0.text-bold 1969
            p Declaración sobre el Progreso y el Desarrollo Social de las Naciones Unidas (No vinculante).
        .row.justify-content-center(titulo="1971 - 1975")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img42.png', alt='Texto que describa la imagen')
          .col-lg-6
            p.mb-0.text-bold 1971
            p Declaración de los Derechos del Retrasado Mental de las Naciones Unidas (No vinculante).

            p.mb-0.text-bold 1973
            p Convenio sobre la edad mínima de admisión al empleo de la Organización Internacional del Trabajo (Vinculante).

            p.mb-0.text-bold 1975
            p Declaración de los Derechos de los impedidos de las Naciones Unidas (No vinculante).

        .row.justify-content-center(titulo="1984 - 1989")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img43.png', alt='Texto que describa la imagen')
          .col-lg-6
            p.mb-0.text-bold 1984
            p Convención contra la Tortura y otros Tratos Crueles, adoptada por la Asamblea General de las Naciones Unidas (Vinculante).            
            p.mb-0.text-bold 1986
            p Declaración sobre el Derecho al Desarrollo (No vinculante).            
            p.mb-0.text-bold 1989
            p Convención sobre Derechos del Niño adoptada por Asamblea General de las Naciones Unidas (Vinculante).
        .row.justify-content-center(titulo="1990 - 1999")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img44.png', alt='Texto que describa la imagen')
          .col-lg-6
            p.mb-0.text-bold 1990
            p Convención Internacional sobre la Protección de los Derechos de todos los Trabajadores Migratorios y de sus Familiares Tratado por las Naciones Unidas y adoptada por la Organización Internacional del Trabajo (Vinculante).
            p.mb-0.text-bold 1993
            p Normas Uniformes para la Igualdad de Oportunidades para las Personas con Discapacidad de las Naciones Unidas (No vinculante).            
            p.mb-0.text-bold 1999
            p Convenio sobre las peores formas de trabajo infantil y la acción inmediata para su eliminación la Organización Internacional del Trabajo (Vinculante).
        .row.justify-content-center(titulo="2001 - 2011")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img45.png', alt='Texto que describa la imagen')
          .col-lg-6
          
            p.mb-0.text-bold 2001
            p Declaración de Compromiso en la Lucha contra el VIH de las Naciones Unidas (No vinculante).
            
            p.mb-0.text-bold 2006
            p Convención sobre Derechos de las Personas con Discapacidad, adoptada por las Naciones Unidas (Vinculante).
            
            p.mb-0.text-bold 2011
            p Convenio sobre las trabajadoras y los trabajadores domésticos de la Organización Internacional del Trabajo.

        .row.justify-content-center(titulo="2014 - 2020")
          .col-lg-6.col-10.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img46.png', alt='Texto que describa la imagen')
          .col-lg-6
          
            p.mb-0.text-bold 2014
            p Mandato de la Relatoría Especial sobre Discapacidad de las Naciones Unidas (No vinculante).

            
            p.mb-0.text-bold 2019
            p Convenio sobre la violencia y el acoso de la Organización Internacional del Trabajo (Vinculante).

            
            p.mb-0.text-bold 2020
            p Renovación del Mandato Relatoría Especial sobre Discapacidad de las Naciones Unidas (No vinculante).

    p.mb-4(data-aos="fade-left") Un instrumento vinculante, relevante para las personas con discapacidad, es la Convención sobre Derechos de las Personas con Discapacidad, la cual trae en su articulado lo que se denomina, #[b Modelo social de la discapacidad], que fue el resultado de una lucha permanente, de estas personas, en el mundo, para ser consideradas y valoradas como seres humanos. En ella, se sitúa a las personas con discapacidad como sujetos de derecho. Al respecto, Naciones Unidas en la Convención de 2006 explica lo que ella entiende por modelo social de la discapacidad:

    .tarjeta--BG02.p-4.px-lg-0.px-4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .bloque-texto-c.color-primario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.text-bold.mb-0.ms-2 La Convención de los Derechos de las Personas con Discapacidad de Naciones Unidas, consagra lo que se denomina el modelo social de la discapacidad visto desde el enfoque de Derechos, en ella se sitúa la discapacidad en el entorno y no en la persona y se recurre al concepto de deficiencia para nombrar las pérdidas funcionales o psíquicas. Reconociendo, que la discapacidad es un concepto que evoluciona y que resulta de la interacción entre las personas con deficiencias y las barreras debidas a la actitud y al entorno, que evitan su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás.
              br
              .d-flex.justify-content-end.align-items-center
                span - (ONU, 2006).
                i.fas.fa-quote-right.ms-2
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .bloque-texto-c.color-primario-beige.px-4.px-lg-0
            .row.justify-content-center.align-items-center
              .col-lg-3.col-10.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema1/img47.png', alt='Texto que describa la imagen')
              .col-lg-8
                p.mb-0(data-aos="fade-left") Es imperativo que, como personas funcionarias públicas, se conozca en profundidad y se apliquen los lineamientos dados en los documentos vinculantes (que son adoptados como Estado en el ordenamiento jurídico) y los no vinculantes (que son recomendaciones dadas), para hacer efectiva la inclusión y respetar los derechos de todas las personas con discapacidad.

    .row.justify-content-center.align-items-center.mb-5(style="margin-top: -27px")
      .col-lg-10
        p(data-aos="fade-left") La anterior definición introduce en la discusión significativos elementos. Entendiendo que la discapacidad es un concepto en construcción, no propone una verdad, sino que muestra una situación actual, donde la deficiencia y la discapacidad son dos cosas distintas: la primera la poseen las personas y, la segunda, las genera el entorno; así, al referirse a barreras actitudinales y físicas, se dirá que la discapacidad puede ser generada por las personas que integran la sociedad, con sus comportamientos y exclusiones, reconoce igualmente las barreras físicas que pone en medio, a las personas con discapacidad para su adecuado desplazamiento y trabajo, entre otros. 
        p.mb-0(data-aos="fade-left") A continuación, se presentan dos situaciones, que permiten reflexionar sobre el tema:

    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Figura 4.
      i  Diálogo entre personas con discapacidad
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.tarjeta--BG12.tarjeta.p-4
        .row.justify-content-center.align-items-center
          .col-lg-10.movil(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img48_1.svg', alt='Descripción: Una ilustración en estilo de dibujo animado retrata a dos personas con discapacidades en un diálogo, transmitiendo perspectivas contrastantes sobre sus limitaciones. La composición muestra dos figuras sobre un fondo blanco. A la izquierda, un hombre con una pierna enyesada y muletas habla, mientras que, a la derecha, una niña en silla de ruedas levanta la mano, expresando su preocupación. La disposición yuxtapone las perspectivas de los individuos a través de burbujas de diálogo sobre sus cabezas. El entorno es minimalista, centrado en los personajes y sus interacciones. La ausencia de un fondo detallado mantiene la atención en los personajes y el mensaje que transmiten. Las escaleras en el fondo pueden interpretarse como una barrera que enfrenta la niña, contrastando con la movilidad del hombre gracias a las muletas. La iluminación es neutra, sin sombras ni efectos de luz complejos. La simplicidad del entorno centra la atención en el mensaje.')
          .col-lg-10.desktop(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img48.svg', alt='Descripción: Una ilustración en estilo de dibujo animado retrata a dos personas con discapacidades en un diálogo, transmitiendo perspectivas contrastantes sobre sus limitaciones. La composición muestra dos figuras sobre un fondo blanco. A la izquierda, un hombre con una pierna enyesada y muletas habla, mientras que, a la derecha, una niña en silla de ruedas levanta la mano, expresando su preocupación. La disposición yuxtapone las perspectivas de los individuos a través de burbujas de diálogo sobre sus cabezas. El entorno es minimalista, centrado en los personajes y sus interacciones. La ausencia de un fondo detallado mantiene la atención en los personajes y el mensaje que transmiten. Las escaleras en el fondo pueden interpretarse como una barrera que enfrenta la niña, contrastando con la movilidad del hombre gracias a las muletas. La iluminación es neutra, sin sombras ni efectos de luz complejos. La simplicidad del entorno centra la atención en el mensaje.')
        
    p.mb-4(data-aos="fade-left") Estos elementos permiten asegurar que la Convención de Naciones Unidas, introduce un nuevo nivel de exigibilidad y de responsabilidad con el otro y la otra, implicando no solamente a los Estados, sino también a las instituciones públicas y privadas, a las sociedades y a las personas individualmente consideradas. Es por ello que el cambio no consiste solo en abandonar un modelo de enfermedad, sino más bien, enfatizar en la promoción de las potencialidades y el reconocimiento de las capacidades, así, se deja de pensar en lo que no se tiene y se explota lo que si se posee. 

    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Figura 5.
      i  Diálogo sobre la promoción de las discapacidades
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.tarjeta--BG12.tarjeta.p-4
        .row.justify-content-center.align-items-center
          .col-lg-10.movil(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img49_1.svg', alt='Descripción: Una ilustración digital simple muestra a una mujer pensativa al lado de un bocadillo que contiene una declaración sobre la promoción de las capacidades de las personas en el servicio público. La composición de la imagen presenta dos elementos principales: un bocadillo de diálogo en la parte superior izquierda y una ilustración de una mujer en la parte inferior derecha. El bocadillo contiene texto en español y el diseño de este sugiere que la pregunta está siendo planteada. La mujer está colocada en la parte inferior derecha, con la mano en la barbilla, expresando pensamiento o duda. La interacción visual principal es entre el texto en el bocadillo y la expresión de la mujer, sugiriendo que está reflexionando sobre el mensaje. La composición es sencilla y directa, con un fondo blanco que resalta los dos elementos principales. El personaje principal es una mujer joven, que parece estar en sus veintes o treintas. Tiene pelo largo y rojizo, con una expresión de preocupación o duda. Su pose, con la mano en la barbilla, indica contemplación. Viste una camiseta verde. La imagen de la mujer transmite una sensación de reflexión y consideración. El bocadillo contiene texto, en fuente negra, que expresa una pregunta o una reflexión sobre la promoción de las capacidades de las personas dentro del servicio público. El estilo de la imagen es plano y simplificado, con contornos marcados y colores sólidos. El diseño recuerda al arte vectorial o a la ilustración digital moderna. El estilo es limpio y directo, lo que sugiere que está destinado a ser comprensible y fácil de entender. El uso de colores es limitado y predominan los tonos pastel. El fondo blanco y la ausencia de detalles ambientales dirigen la atención del espectador a los dos elementos principales de la imagen: la pregunta en el bocadillo y la reflexión de la mujer. La iluminación es plana y uniforme, sin sombras ni gradaciones. La atmósfera general es de reflexión, contemplación y posible incertidumbre relacionada con la cuestión planteada en el texto.')
          .col-lg-10.desktop(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img49.svg', alt='Descripción: Una ilustración en estilo de dibujo animado retrata a dos personas con discapacidades en un diálogo, transmitiendo perspectivas contrastantes sobre sus limitaciones. La composición muestra dos figuras sobre un fondo blanco. A la izquierda, un hombre con una pierna enyesada y muletas habla, mientras que, a la derecha, una niña en silla de ruedas levanta la mano, expresando su preocupación. La disposición yuxtapone las perspectivas de los individuos a través de burbujas de diálogo sobre sus cabezas. El entorno es minimalista, centrado en los personajes y sus interacciones. La ausencia de un fondo detallado mantiene la atención en los personajes y el mensaje que transmiten. Las escaleras en el fondo pueden interpretarse como una barrera que enfrenta la niña, contrastando con la movilidad del hombre gracias a las muletas. La iluminación es neutra, sin sombras ni efectos de luz complejos. La simplicidad del entorno centra la atención en el mensaje.')
    
    p.mb-4(data-aos="fade-left") Otro elemento clave para el análisis del enfoque de derechos es la identificación de los pilares sobre los cuales se fundamenta la Convención sobre los Derechos de las Personas con Discapacidad (ONU, 2006). Estos pilares permiten comprender cómo se garantiza la inclusión, la igualdad y la dignidad de esta población. Por lo anterior, se deben tener presente los siguientes pilares: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Reconocimiento como sujetos de derechos (Artículo 1)")
            p El primer pilar se encuentra en el Artículo 1, que establece que las personas con discapacidad son sujetos de derechos y que cualquier forma de exclusión constituye una violación a los derechos humanos. La Convención tiene como propósito: “Promover, proteger y asegurar el goce pleno y en condiciones de igualdad de todos los derechos humanos y libertades fundamentales para todas las personas con discapacidad y promover el respeto de su dignidad inherente.” (ONU, 2006)
            p.mb-0 Este artículo resalta que las personas con discapacidad, independientemente de su condición —incluyendo aquellas con discapacidades cognitivas severas—, poseen dignidad humana. Esto implica que tienen derecho a una vida con autonomía, responsabilidades y entornos adecuados que les permitan dirigir su propio destino.

          div(titulo="Igualdad y no discriminación (Artículo 5)")
            p.mb-0 El segundo pilar se encuentra en el Artículo 5, que consagra el principio de igualdad y no discriminación. Este artículo reconoce dos dimensiones de la igualdad:
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Igualdad formal ante la ley, que garantiza que todas las personas sean tratadas de manera igual.
              li
                i.fas.fa-angle-right
                | Igualdad material, que exige a los Estados crear condiciones reales y efectivas para que las personas con discapacidad puedan ejercer sus derechos de manera libre y plena, como lo establece el Artículo 1.

          div(titulo="Accesibilidad (Artículo 9)")
            p El tercer pilar está en el Artículo 9, que aborda la accesibilidad como condición esencial para el ejercicio de todos los demás derechos. Este artículo establece que:
            p A fin de que las personas con discapacidad puedan vivir en forma independiente y participar plenamente en todos los aspectos de la vida, los Estados Partes adoptarán medidas pertinentes para asegurar el acceso de las personas con discapacidad, en igualdad de condiciones con las demás, al entorno físico, el transporte, la información y las comunicaciones, incluidos los sistemas y las tecnologías de la información y las comunicaciones, y a otros servicios e instalaciones abiertos al público o de uso público, tanto en zonas urbanas como rurales (ONU, 2006).
            p La accesibilidad no solo se refiere a la infraestructura física, sino también al acceso a la información en formatos adaptados (audiovisuales, impresos, digitales), que garanticen la misma cantidad y calidad de información para todas las personas. Un ejemplo claro es el derecho al empleo, donde la accesibilidad debe ser entendida en su dimensión real: desde el entorno físico hasta los procesos de comunicación y adaptación laboral.
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img50.png', alt='Texto que describa la imagen')
    p.mb-4(data-aos="fade-left") Enfatizando un poco en el último pilar, la Real Academia de la Lengua Española, indica que la accesibilidad es: 1. adj. Que tiene acceso. 2. adj. De fácil acceso o trato. 3. adj. De fácil comprensión, inteligible. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img51.png', alt='Texto que describa la imagen')
      .col-lg-9
        p(data-aos="fade-left") La definición de accesibilidad propuesta por la Real Academia Española, no logra captar la verdadera magnitud del concepto. Cuando se habla de accesibilidad, no basta con pensar únicamente en el acceso físico o digital a un recurso; también debe considerarse la posibilidad de utilizarlo de manera efectiva. Es decir, no se trata solo de llegar a lo que se necesita, sino de poder interactuar con ello de forma autónoma y funcional. En este sentido, la accesibilidad se aproxima al concepto de usabilidad, pues ambos implican que el entorno esté adaptado a las necesidades de todas las personas.
        .bloque-texto-c.color-primario-medio.p-4
          p(data-aos="fade-left") En el caso específico del derecho al empleo, esta idea cobra especial relevancia. Los puestos de trabajo deben contar con espacios, herramientas y condiciones adecuadas que permitan a cualquier persona desempeñar sus funciones sin depender de terceros. No es razonable suponer que una persona con una discapacidad física pueda cumplir con sus responsabilidades si su oficina, ubicada en un quinto piso, no cuenta con ascensor ni rampa de acceso. De igual forma, sería inviable que una persona ciega desempeñe sus tareas en una oficina donde el computador carece de un lector de pantalla. Estos ejemplos evidencian que, si el entorno impone barreras, la persona con discapacidad no podrá ejercer su empleo de manera plena. Es importante subrayar que un desempeño laboral limitado en estos casos no se debe a la discapacidad en sí, sino a las condiciones del entorno que impiden el acceso o el uso adecuado de los recursos necesarios.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1.mb-4.mb-lg-0
        p Es precisamente aquí donde la accesibilidad adquiere un papel protagónico: es el principio que permite acceder a los espacios, a la información y a las herramientas necesarias, garantizando de manera efectiva el derecho al trabajo. Para lograrlo, la Convención sobre los Derechos de las Personas con Discapacidad, ha instado a los Estados miembros a implementar acciones afirmativas que aseguren el cumplimiento de esta disposición.
        .row.align-items-center.bloque-texto-c.color-primario-claro.p-3
          .col-lg-2.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img53.svg', alt='Imagen decorativa')
          .col-lg-10
            p.mb-0 En consonancia con este mandato, Colombia promulgó la Ley Estatutaria 1618 de 2013, “Por medio de la cual se establecen las disposiciones para garantizar el pleno ejercicio de los derechos de las personas con discapacidad”. Esta ley busca poner en marcha las acciones afirmativas necesarias para dar cumplimiento a la Convención. En su artículo 13 consagra el derecho al trabajo y en el artículo 14, el derecho a la accesibilidad. Ambos artículos establecen cómo deben desarrollarse estos derechos conforme a los lineamientos internacionales, como se señala en las Observaciones Finales del Informe Inicial de Colombia, elaborado por el Comité sobre los Derechos de las Personas con Discapacidad de la ONU en 2016.
      .col-lg-3.col-6.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img52.png', alt='Texto que describa la imagen')

    p.mb-4(data-aos="fade-left") Sin embargo, dicho informe advierte una debilidad persistente: la excesiva confianza depositada en la legislación, sin considerar las condiciones reales y concretas de la sociedad colombiana. En relación con el derecho al trabajo, la observación señala:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p(data-aos="fade-left") Al comité le preocupa que los esfuerzos para promover la inclusión laboral de personas con discapacidad son escasos y de bajo impacto, aunado a las evidentes desigualdades interseccionales. También le preocupa la persistente discriminación basada en la discapacidad y la ausencia de una regulación de los ajustes razonables.
        p(data-aos="fade-left") El Comité le recomienda al Estado parte que:
        .bloque-texto-c.color-primario-medio.p-4
          .row.justify-content-center
            .col-lg-9.order-2.order-lg-1.mb-4.mb-lg-0
              ol.lista-ol--cuadro.mb-0
                li
                .lista-ol--cuadro__vineta
                  span a
                | Adopte medidas para agilizar el pleno empleo de personas con discapacidad en el mercado de trabajo abierto, incluyendo medidas de acción afirmativa y el combate de la discriminación por motivos de la discapacidad;
                li
                .lista-ol--cuadro__vineta
                  span b
                | Adopte normas que regulen los ajustes razonables en la esfera del empleo;
                li
                .lista-ol--cuadro__vineta
                  span c
                | Se guíe por el Artículo 27 en la implementación de la meta 8.5 del ODS 8, para asegurar el logro de un empleo productivo y decente para todas las personas, incluyendo personas con discapacidad en línea con el principio de remuneración igual por trabajo de igual valor. (ONU, 2016, p. 11).
            .col-lg-3.col-6.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img54.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p(data-aos="fade-left") Lo anterior muestra que, a más de diez años de la Convención y a quince de su ratificación por parte del Estado colombiano, las acciones afirmativas como la ley 1618 de 2013, revisada en Sentencia de Constitucionalidad C-765/12 y el CONPES 166 de 2013 (Política Pública Nacional de discapacidad e inclusión social), se quedaron en el papel y no pasaron a verse reflejadas en las vidas de las personas con discapacidad. En este mismo sentido, Colombia no ha hecho lo necesario en el tema de accesibilidad, señala también el Informe de la observación realizada por el comité:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bloque-texto-c.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.text-bold.mb-0.ms-2 El comité nota con preocupación la inexistencia de un plan nacional para implementar las normas de accesibilidad y los escasos avances para asegurar la accesibilidad en áreas rurales, el transporte público, las instalaciones de servicios públicos, la información y comunicación, y la accesibilidad para personas sordas, sordo ciegos y con discapacidad intelectual. También le preocupa que la accesibilidad no sea incluida como condición vinculante en la licitación de compra y concesión de servicios y bienes públicos. 
            br
            .d-flex.justify-content-end.align-items-center
              span - (ONU, 2016, p. 4).
              i.fas.fa-quote-right.ms-2
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img55.png', alt='Texto que describa la imagen')
      .col-lg-9
        p(data-aos="fade-left") Todas estas dificultades relacionadas con la accesibilidad generan vulneraciones en otros derechos fundamentales, como la movilidad, la educación y el empleo. Esto ocurre porque, actualmente, no existe una obligación para los particulares de adaptar sus entornos y puestos de trabajo conforme a los principios del diseño universal. En consecuencia, cualquier iniciativa estatal orientada a fomentar la contratación de personas con discapacidad resulta ineficaz si no se acompañan de adecuaciones estructurales y funcionales en estos espacios.
        p(data-aos="fade-left") El cuarto gran pilar de la convención es el artículo 12, en el que se cambia la terminología, se deja de hablar de discapacidad y se comienza a hablar de capacidad.
        p.mb-0(data-aos="fade-left") Según el artículo 12, de igual reconocimiento como persona ante la ley por las siguientes acciones: 
    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.tarjeta--BG05.p-4.h-100
          .row.justify-content-center.mb-3
            .col-lg-3.col-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img56.svg', alt='Texto que describa la imagen')
          .row.justify-content-center.mb-3
            .col-lg-3.fondoh3.p-2
              h4.mb-0.text-center.text-white  Acción 1
          p.text-center  Los Estados Parte reafirman que las personas con discapacidad tienen derecho en todas partes al reconocimiento de su personalidad jurídica.

      .col-lg-5 
        .tarjeta--boton.color-primario.tarjeta--BG05.p-4.h-100
          .row.justify-content-center.mb-3
            .col-lg-3.col-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img57.svg', alt='Texto que describa la imagen')
          .row.justify-content-center.mb-3
            .col-lg-3.fondoh3.p-2
              h4.mb-0.text-center.text-white Acción 2
          p.text-center  Los Estados Parte reconocerán que las personas con discapacidad tienen capacidad jurídica en igualdad de condiciones con las demás en todos los aspectos de la vida. (ONU, 2006).
    p(data-aos="fade-left") Este cuarto pilar representa una ruptura definitiva con la tradición occidental en materia de derechos humanos, la cual históricamente ha excluido a las personas con discapacidad bajo argumentos relacionados con la razón. Su incorporación obliga a reformar las legislaciones internas, promoviendo el uso de un lenguaje inclusivo y reconociendo la voz y agencia de las personas con discapacidad.
    p(data-aos="fade-left") Este pilar plantea una pregunta fundamental: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-BG07.tarjeta.p-4
          .row.justify-content-center.mb-2
            .col-lg-1.d-none.d-lg-block
              figure
                img.img-fluid(src="@/assets/curso/temas/tema2/img4.svg" alt="Introducción al curso")
          .row.justify-content-center
            .col-lg-6
              h4.text-center ¿Qué implica realmente la capacidad jurídica?

    p.mb-4(data-aos="fade-left") La Convención sobre los Derechos de las Personas con Discapacidad, como desarrollo normativo en el ámbito de los derechos humanos, propone una visión integral del ser humano. No se trata únicamente de reconocer a las personas con discapacidad como receptoras de derechos, sino también como creadoras de oportunidades y agentes activos en la sociedad.
    
    .bloque-texto-c.color-primario-medio.px-4.px-lg-0
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-6.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img59.png', alt='Imagen decorativa')
        .col-lg-7
          .row.mb-3
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img60.svg', alt='Imagen decorativa')
          p Históricamente, la capacidad jurídica de las personas con discapacidad ha estado sujeta a restricciones, que varían según el tipo de discapacidad. En particular, las personas con discapacidades intelectuales han sido objeto de normas que han limitado profundamente su participación en diversos ámbitos de la vida.
          p.mb-0 El artículo 12 de la convención establece que todo ser humano, para ser considerado integral, debe tener capacidad jurídica; es decir, debe ser libre para elegir y tomar decisiones. Complementariamente, el artículo 8 exhorta a los Estados a reconocer que las personas con discapacidad son seres humanos plenos, con derecho a la autonomía, la libertad y la toma de decisiones. En consecuencia, se deben eliminar todas las barreras legislativas y actitudinales que impidan su ejercicio pleno de derechos.
    p.mb-4(data-aos="fade-left") En Colombia, el artículo 12 de la convención fue desarrollado mediante la Ley 1996 de 2019, “por medio de la cual se establece el régimen para el ejercicio de la capacidad legal de las personas con discapacidad mayores de edad”. Es importante señalar que, aunque algunas personas pueden enfrentar limitaciones en su proceso de toma de decisiones, ello no significa que carezcan de capacidad para decidir. Lo que propone la Convención es la implementación de apoyos —ya sean tecnológicos o humanos— que faciliten y acompañen dicho proceso, respetando siempre la voluntad y preferencias de la persona.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-c.color-primario-oscuro.p-4
          p.mb-0.text-center Apoyar es distinto a decidir por otro. Apoyar es creer que el otro es un ser humano integral y dentro de esa unidad está ser libre, como lo muestran las distintas declaraciones de derechos humanos y todas las convenciones.
    p.mb-4(data-aos="fade-left") Hasta aquí se han tratado cuatro pilares de la convención, que son fundamentales para el reconocimiento de las personas con discapacidad, así como de sus derechos. Y como resumen, a continuación, basado en las Naciones Unidas, se detalla cada uno:  

    .row.mb-2
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta-avatar(style="padding-top: 0px !important;").h-100          
            .tarjeta.color-primarios.w-100(style="padding-top: 0px !important;")
              img(src='@/assets/curso/temas/tema1/img61.png', alt='Imagen decorativa')
              .p-4
                p.text-bold Sujetos de derecho
                ul.lista-ul
                  li
                    ul
                      li.mb--44
                        i.lista-ul__vineta
                        p.mb--44 Goce pleno y condiciones de igualdad en todos los derechos y libertades fundamentales.
                      li.mb--44
                        i.lista-ul__vineta
                        p.mb--44 Respeto por la dignidad humana.
                      li.mb--44
                        i.lista-ul__vineta
                        p.mb--44 Autodeterminación.
            
      .col-lg-6
        .tarjeta-avatar(style="padding-top: 0px !important;").h-100            
            .tarjeta.color-primarios.w-100(style="padding-top: 0px !important;")
              img(src='@/assets/curso/temas/tema1/img62.png', alt='Imagen decorativa')
              .p-4
                p.text-bold Igualdad
                ul.lista-ul
                  li.mb--44
                    ul
                      li.mb--44 
                        i.lista-ul__vineta
                        | No discriminación.
                p.mb-0 Diferencias entre:
                ul.lista-ul
                  li.mb--44
                    ul
                      li.mb--44 
                        i.lista-ul__vineta
                        | Igualdad formal: ante la ley, ej: la ley dice que Carlos, con discapacidad mental tiene derecho al empleo.
                      li.mb--44 
                        i.lista-ul__vineta
                        | Igualdad material: en la realidad, se requiere exigencia de garantía ante el Estado, ej: Carlos es excluido del sistema laboral.
            
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta-avatar(style="padding-top: 0px !important;").h-100          
            .tarjeta.color-primarios.w-100(style="padding-top: 0px !important;")
              img(src='@/assets/curso/temas/tema1/img63.png', alt='Imagen decorativa')
              .p-4
                p.text-bold Accesibilidad
                ul.lista-ul
                  li.mb--44
                    ul
                      li.mb--44 
                        i.lista-ul__vineta
                        | Adaptaciones físicas.
                      li.mb--44 
                        i.lista-ul__vineta
                        | Adaptaciones en sistemas de transporte.
                      li.mb--44 
                        i.lista-ul__vineta
                        | Adaptaciones en sistemas de información y comunicación.
                      li.mb--44 
                        i.lista-ul__vineta
                        | Ajustes razonables.
                      li.mb--44 
                        i.lista-ul__vineta
                        | Acciones afirmativas.
            
      .col-lg-6
        .tarjeta-avatar(style="padding-top: 0px !important;").h-100            
            .tarjeta.color-primarios.w-100(style="padding-top: 0px !important;")
              img(src='@/assets/curso/temas/tema1/img64.png', alt='Imagen decorativa')
              .p-4
                p.text-bold Cambio de términos
                ul.lista-ul
                  li.mb--44
                    ul
                      li.mb--44 
                        i.lista-ul__vineta
                        | En lugar de discapacidad se habla de capacidad.
                      li.mb--44 
                        i.lista-ul__vineta
                        p.mb-0(style="line-height: 1.1") Reconocimiento de la capacidad jurídica (libertad y autonomía para elegir y tomar decisiones).
                      li.mb--44 
                        i.lista-ul__vineta
                        | Lenguaje inclusivo.
                      li.mb--44 
                        i.lista-ul__vineta
                        | Voz personas con discapacidad.
                      li.mb--44 
                        i.lista-ul__vineta
                        | Apoyo para toma de decisiones.

    p.mb-4(data-aos="fade-left") Estos cuatro pilares —el reconocimiento como sujetos de derechos en igualdad de condiciones, la accesibilidad y el ejercicio pleno de la capacidad jurídica— son los que nutren, sustentan y garantizan el conjunto de derechos consagrados en la convención. Gracias a ellos, se hace posible el acceso efectivo a derechos fundamentales como la salud, la educación, el empleo, la recreación y la conformación de una familia, entre otros.
    
    .titulo.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5.mb-0 Modelo de diversidad funcional
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2.mb-lg-0.mb-4
        p(data-aos="fade-left") La propuesta de diversidad funcional, formulada por Palacios & Romañach (2007), surge como una respuesta crítica al modelo social y a la Convención de Naciones Unidas sobre los Derechos de las Personas con Discapacidad, adoptada en 2008. Esta perspectiva parte de la premisa de que los seres humanos son diversos también en su constitución genética y por tanto, no se debe considerar a una persona con manifestaciones genéticas distintas como portadora de una discapacidad. Esta idea refuerza la necesidad de pensar a las personas con discapacidad desde el enfoque de la dignidad humana. Sin embargo, para la propuesta de diversidad funcional, dicho concepto debería ser sustituido por el de “vida digna”, lo cual introduce una tensión en el ámbito jurídico, al exigir un tránsito desde un discurso legalista hacia uno centrado en las condiciones reales de vida de las personas.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img65.svg', alt='Imagen decorativa')
    .bloque-texto-c.color-primario-claro2.mb-4.px-4.px-lg-0
      .row.align-items-center.justify-content-center
        .col-lg-3.col-6.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema1/img66.svg', alt='Imagen decorativa')
        .col-lg-9
          .pe-4
            p Aunque el modelo social plantea que la discapacidad se origina en el entorno —y que, al modificar dicho entorno, la discapacidad desaparece— esta visión puede resultar reduccionista. Ignora que las personas continúan enfrentando deficiencias que no se eliminan simplemente con la instalación de una rampa o un lector de pantalla. En contraste, el modelo de diversidad funcional pone énfasis en las condiciones únicas y personales de cada individuo. Busca que se reconozcan sus vivencias, emociones y percepciones, independientemente de si el entorno está adaptado o no. Su objetivo es devolver a la persona con discapacidad su dimensión ética y moral, y reivindicarla como un ser libre, sensible y autónomo (Palacios & Romañach, 2007).
    p.mb-4(data-aos="fade-left") Tras este recorrido conceptual, resulta fundamental reflexionar: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-BG07.tarjeta.p-4
          .row.justify-content-center.mb-2
            .col-lg-1.d-none.d-lg-block
              figure
                img.img-fluid(src="@/assets/curso/temas/tema2/img4.svg" alt="Introducción al curso")
          .row.justify-content-center
            .col-lg-6
              h4.text-center ¿Qué modelo se privilegia al recibir y atender a personas con discapacidad en el ejercicio como persona facilitadora de la valoración de apoyos?
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p(data-aos="fade-left") Esta pregunta es clave, ya que el enfoque adoptado determinará la calidad y la integralidad de la atención brindada.
        p.mb-0(data-aos="fade-left") A continuación, se presenta una recapitulación que identifica el énfasis de cada uno de estos modelos de discapacidad, destacando los aspectos más representativos en sus respectivas épocas: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Prescindencia Antigüedad	")
            p Dos visiones:
            p.text-bold Primera:
            ul.lista-ul
              li
                i.lista-ul__vineta
                | Ante la pérdida funcional o comportamiento distinto, se optaba por la muerte.
              li
                i.lista-ul__vineta
                | Diferencias físicas o mentales entendidas como castigo.
            p.text-bold Segunda:
            ul.lista-ul
              li
                i.lista-ul__vineta
                | Relación con enfermedad. Para las discapacidades adquiridas, tratamientos de “base científica”.
          div(titulo="Médico o rehabilitador Mitad del Siglo XIX	")
            ul.lista-ul
              li
                i.lista-ul__vineta
                | Formas sanitarias que previenen discapacidades.
              li
                i.lista-ul__vineta
                | Ante cualquier discapacidad, la medicina tendría la respuesta.
              li
                i.lista-ul__vineta
                | Idea de curar las personas con discapacidad con medicamentos o tratamientos.
              li
                i.lista-ul__vineta
                | Oportunidad a las personas con discapacidad de exigir sus derechos.
              li
                i.lista-ul__vineta
                | La Organización Internacional del Trabajo (OIT) empieza a hablar de la distinción entre discapacidad, deficiencia y persona con discapacidad.

          div(titulo="Social o enfoque de derechos 1983	")
            ul.lista-ul
              li
                i.lista-ul__vineta
                | Surge de disciplinas y prácticas sociales y políticas, con un enfoque de derechos.
              li
                i.lista-ul__vineta
                | La discapacidad corresponde a factores sociales y es consecuencia de las barreras y la exclusión que impone la sociedad a todo aquel que considera “distinto” e “incapaz”.
              li
                i.lista-ul__vineta
                | Se enfoca en la dignidad humana, la autonomía, la independencia, la libertad y la capacidad de decisión de las personas con discapacidad.
              li
                i.lista-ul__vineta
                | Centrado en la accesibilidad y la eliminación de barreras.


          div(titulo="Modelo de diversidad funcional 2008")
            ul.lista-ul
              li
                i.lista-ul__vineta
                |  Respuesta al modelo social.
              li
                i.lista-ul__vineta
                |  Propuesto por Palacios & Romañach.
              li
                i.lista-ul__vineta
                |  Los seres humanos son distintos también en su condición genética, por tanto, no se puede considerar a una persona con manifestaciones genéticas distintas, como poseedora de discapacidad.
              li
                i.lista-ul__vineta
                |  Habla de una vida digna.
              li
                i.lista-ul__vineta
                |  La deficiencia no desaparece con la adaptación del medio.
              li
                i.lista-ul__vineta
                |  Tiene en cuenta las condiciones personalísimas de cada individuo y lo que siente.
              li
                i.lista-ul__vineta
                |  Regresa a las personas con discapacidad su condición moral y ética.
              li
                i.lista-ul__vineta
                |  Considera a las personas con discapacidad como seres libres, sensibles y autónomas.
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img68.png', alt='Texto que describa la imagen')


    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Enfoque de capacidades: aciertos y limitaciones
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2.mb-lg-0.mb-4
        p(data-aos="fade-left") Se destaca la importancia de devolver a las personas con discapacidad su plena condición humana, valorándolas por lo que son y no únicamente por lo que el derecho establece sobre ellas. En este sentido, resultan especialmente pertinentes los planteamientos de Sen (2000) y los aportes de Martha Nussbaum (2007), quienes han desarrollado el denominado enfoque de capacidades. Esta perspectiva propone una mirada más amplia y humana del desarrollo, entendida no solo como un concepto económico, sino como la posibilidad real de que las personas vivan una vida digna.
        p.mb-0(data-aos="fade-left") Sen (2000) señala que, si bien la riqueza es necesaria para financiar el Estado, el desarrollo no puede medirse exclusivamente por indicadores como el ingreso per cápita o el flujo de divisas. Lo esencial es que la población experimente de manera tangible los beneficios de esa riqueza, lo cual se traduce en calidad de vida. Para ilustrar esta idea, Sen propone un ejemplo: 

      .col-lg-3.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img69.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img70.svg', alt='Texto que describa la imagen')
      .col-lg-10
        .bloque-texto-c.color-primario.p-4
          p.mb-0 Dos personas sienten hambre. La primera no tiene recursos para adquirir alimentos; la segunda está en ayuno voluntario por razones religiosas. Aunque ambas experimentan la misma sensación física, la diferencia radica en que una lo hace por imposición y la otra por elección. 
    
    p.mb-4(data-aos="fade-left") Este ejemplo evidencia que el desarrollo económico no siempre se correlaciona directamente con la satisfacción de las necesidades humanas. Existen países con altos niveles de riqueza donde las necesidades básicas no se satisfacen, y otros con menos recursos que logran atenderlas adecuadamente.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img71.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este análisis abre la puerta a un segundo concepto fundamental: la libertad. Para Sen, la libertad consiste en la capacidad de actuar y decidir entre distintas opciones, partiendo de condiciones iniciales similares. En este punto, se distancia de las concepciones de igualdad y justicia propuestas por John Rawls y Ronald Dworkin. Ambos autores sostienen que, en un momento inicial —lo que Rawls denomina “velo de la ignorancia”— se debe prescindir de toda subjetividad y atributos personales para garantizar igualdad. Bajo esta lógica, al ignorar las condiciones individuales, cada persona puede pensar en términos colectivos, y así se establece una igualdad de partida que legitima las diferencias posteriores como justas.
    p.mb-4(data-aos="fade-left") Sin embargo, Nussbaum, en su obra Las fronteras de la justicia (2007), cuestiona esta teoría del contrato, señalando que omite situaciones particulares como las que enfrentan las personas con discapacidad. No propone abandonar el modelo contractual, sino reformularlo para que contemple la diversidad humana. Para ella, el desarrollo económico y la libertad de elección deben estar interrelacionados, ya que una potencia a la otra. Como afirma Sen, una concepción del desarrollo basada en las libertades fundamentales de los individuos tiene profundas implicaciones para entender el proceso de desarrollo y para definir los medios adecuados para promoverlo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-c.bloque-texto-c.color-primario-medio.mb-4.p-4.p-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-3.col-sm-6.col-8.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img72.svg', alt='Imagen decorativa')
            .col-lg-9
              .pe-4
                p(data-aos="fade-left") Desde una perspectiva evaluativa, esto implica que los requisitos del desarrollo deben analizarse en función de la eliminación de las restricciones a la libertad que afectan a las personas que integran la sociedad. Según Sen, el proceso de desarrollo es, en esencia, la historia de la superación de esas limitaciones. Aunque está vinculado al crecimiento económico y a la acumulación de capital físico y humano, su verdadero alcance va mucho más allá de estas variables (Sen, 2000, p. 52).
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2.mb-lg-0.mb-4
        p(data-aos="fade-left") La libertad es un componente esencial para el desarrollo. Aunque el crecimiento económico resulta necesario en los Estados, este no debe limitarse a generar riqueza, sino a formar personas ciudadanas libres. Pero ¿qué se entiende por libertad? Desde el enfoque de capacidades, la libertad representa tanto el destino como el camino: es el objetivo al que se aspira y, a la vez, el conjunto de condiciones que permiten alcanzarlo. Sen (2000) denomina estas condiciones libertades instrumentales, ya que constituyen herramientas fundamentales para el desarrollo humano.
        .row.justify-content-center
          .col-lg-1.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img8.svg', alt='Imagen decorativa')
          .col-lg-11
            p.mb-0(data-aos="fade-left") Entre ellas, la libertad política ocupa un lugar central, pues permite a las personas participar activamente en la vida pública, expresar sus opiniones y transformar su entorno. Asimismo, los servicios sociales como la salud y, especialmente, la educación, son pilares indispensables. La educación, en particular, es la base de la libertad, ya que brinda a los individuos la capacidad de elegir lo que más les conviene. Este aspecto merece especial atención, pues el enfoque de capacidades no busca uniformar el pensamiento, sino fomentar el aprendizaje para que cada persona pueda ser diferente y, al mismo tiempo, respetar la diferencia.
      .col-lg-3.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img73.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bloque-texto-c.color-primario-claro.mb-4.p-4.p-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-4      
              figure
                img(src='@/assets/curso/temas/tema1/img74.svg', alt='Imagen decorativa')
            .col-lg-8
              .pe-4
                p Además, el desarrollo exige la existencia de oportunidades reales para acceder al empleo y para que las familias puedan satisfacer sus necesidades básicas. En este sentido, Sen (2000) no se limita a considerar los ingresos individuales, sino que también valora lo que las instituciones estatales ofrecen a la ciudadanía. Por ello, la educación debe ser pública y gratuita, como garantía de equidad y transparencia. Una sociedad compuesta por personas educadas y con condiciones económicas dignas es una sociedad políticamente libre.
    p.mb-4(data-aos="fade-left") Finalmente, Sen (2010) sostiene que las personas ciudadanas libres se protegen mutuamente, mediante el respeto a la diversidad. En este marco, la función de seguridad ya no recae exclusivamente en el Estado, sino que se convierte en una responsabilidad compartida entre individuos que reconocen y valoran la libertad del otro.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bloque-texto-c.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.text-bold.mb-0.ms-2 Los papeles instrumentales de la libertad comprenden varios componentes distintos, pero interrelacionados, como los servicios económicos, las libertades políticas, las oportunidades sociales, las garantías de transparencia y la seguridad protectora. Estos Derechos instrumentales, estas oportunidades y estos Derechos económicos tienen poderosas interrelaciones, que pueden ir en diferentes direcciones. Las interconexiones influyen de una manera fundamental en el proceso de desarrollo. Estas múltiples libertades interconectadas, deben ir acompañadas de la creación y el apoyo de múltiples instituciones, entre las cuales se encuentran los sistemas democráticos, los mecanismos jurídicos, las estructuras de mercado, los sistemas de educación y de sanidad, los medios de comunicación y otros servicios de comunicación 
            br
            .d-flex.justify-content-end.align-items-center
              span - (p.74).
              i.fas.fa-quote-right.ms-2
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2.mb-lg-0.mb-4
        p A lo anterior cabe añadir una reflexión fundamental: cuando se concibe el desarrollo como libertad y se deposita una profunda confianza en la capacidad de la sociedad para generarse y regenerarse a través de la educación —suponiendo que este proceso conduce a la formación de personas libres— podría pensarse que se trata, en última instancia, de una exigencia meramente moral. En ese caso, la discusión correría el riesgo de reducirse a una intuición o propósito ético sin fuerza vinculante ni obligatoriedad real.
        .row.justify-content-center
          .col-lg-2.col-sm-6.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img76.svg', alt='Imagen decorativa')
          .col-lg-10
            p.mb-0(data-aos="fade-left") Sin embargo, Pogget (2009), en su propuesta global sobre los derechos humanos, sostiene que dicha exigencia moral no es relativa ni opcional. Parte de la premisa de que existen ciertos valores fundamentales que deben ser reconocidos universalmente por todas las sociedades, apelando siempre al papel transformador de la educación. Estos valores, según Pogget, deben reflejarse en las instituciones, que son, en definitiva, las encargadas de garantizar el cumplimiento de aquello que las sociedades han decidido establecer como principios rectores para sí mismas.
      .col-lg-3.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img75.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-left")
        .bloque-texto-c.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.text-bold.mb-0.ms-2(data-aos="fade-left") Esto mismo se puede aplicar a los derechos humanos como un estándar moral para nuestro ordenamiento global. Este estándar no presupone un acuerdo sobre todos o incluso la mayoría de los acuerdos morales. A lo sumo, puede exigírsele que este orden global sea diseñado de tal manera que, en la medida de lo posible, todas las personas tengan un acceso asegurado a algunos bienes vitales para los seres humanos. Ahora bien, es cierto que diseñar un orden institucional teniendo en consideración unos valores claves tendrá efectos colaterales sobre el predominio de otros valores. Una sólida vida familiar católica (o musulmana) será más difícil de sostener en una sociedad que salvaguarda la libertad de religión, de una en la que el catolicismo (o Islam) sea la religión oficial del Estado. De manera similar, la elección de un orden global diseñado para realizar los Derechos humanos tendría un impacto diferencial en las culturas de varias sociedades y en la popularidad de varias religiones y estilos de vida. 
            br
            .d-flex.justify-content-end.align-items-center
              span - (Pogget, 2009.p.60).
              i.fas.fa-quote-right.ms-2
    p.mb-4(data-aos="fade-left") Lo anterior revela una propuesta moral de alcance global que podría denominarse ética, en tanto que posee una pretensión universal: busca fundamentar las instituciones, las sociedades y los individuos, y al mismo tiempo, que estos últimos sean los encargados de construir y sostener una moral. No se trata, sin embargo, de una moral plausible en el sentido que plantea Tugendhat (2001) en sus Lecciones de moral y Lecciones de ética, donde la moral se edifica a partir de valores compartidos, pero carece de eficacia práctica al no existir instituciones capaces de materializarla. En contraste, el Enfoque de Capacidades propone una moral concreta y liberadora, orientada a transformar las condiciones reales de vida.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2.mb-lg-0.mb-4
        p(data-aos="fade-left") Ahora bien, ¿y las personas con discapacidad? En un modelo que promueve la libertad y el desarrollo, no debería ser necesario establecer distinciones entre personas o poblaciones. Tanto Sen (2000) como Nussbaum (2019), sostienen que cada individuo, con o sin discapacidad, debe tener la posibilidad de elegir libremente lo que desea. El entorno y el desarrollo deben proveer los elementos necesarios para que esa elección sea posible. Por ejemplo, las tecnologías de apoyo no hacen libres a las personas simplemente porque estén disponibles, sino porque estas han decidido utilizarlas, y el desarrollo debe garantizar su acceso como expresión de autonomía.
      .col-lg-3.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img77.png', alt='Texto que describa la imagen')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-sm-6.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img78.png', alt='Texto que describa la imagen')
      .col-lg-7
        p.mb-0(data-aos="fade-left") No obstante, el debate no se agota allí. Aunque Nussbaum (2007) propone una revisión crítica de la Teoría del Contrato de Rawls, incorporando a grupos históricamente excluidos de la deliberación pública y del ejercicio de sus derechos, tanto el enfoque de capacidades como el contractualismo parten de la existencia de derechos previamente otorgados, ya sea por medio de un pacto social o a través de instituciones como el Estado y su constitución. En este sentido, el modelo de capacidades reconoce y privilegia ciertos derechos fundamentales vinculados a la libertad, pero estos están predeterminados desde el inicio. Aunque ofrecen un mayor margen de acción para los individuos, no permiten afirmar que puedan surgir nuevos derechos en función de las necesidades emergentes de las personas.
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img79.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0  Desde esta perspectiva, Sen (2000) plantea que los únicos derechos que pueden considerarse auténticos son aquellos que las personas eligen para sí mismas. Esto establece una correspondencia entre quien recibe obligaciones y quien crea el derecho. Por tanto, no basta con garantizar la libertad de elección; es indispensable contar con un entorno que posibilite ejercer esa libertad. Si una persona con discapacidad requiere una tecnología de apoyo específica, no debe ser el Estado quien determine cuál debe usar, sino quien garantice su derecho a decidir libremente. De allí surge la necesidad de revaluar el concepto de derecho fundamental, para que responda a las condiciones singulares de cada persona y de cada población.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bloque-texto-c.tarjeta.p-4
          p.mb-0(data-aos="fade-left") La opinión de las personas con discapacidad deba ser tenida en cuenta, no solo en la construcción de los modelos, sino también en cada uno de los aspectos que toquen su vida y en este sentido, se le debe dar voz a las personas con discapacidad para que expresen lo que piensan y significan para ellas, las tecnologías de apoyo.
    
    
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4 Tipos de discapacidad en Colombia

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2.mb-lg-0.mb-4
        p(data-aos="fade-left") La Resolución 113 de 2020 introdujo en Colombia el proceso de certificación de personas con discapacidad, basado en una evaluación interdisciplinaria que permite identificar siete tipos de discapacidad reconocidos oficialmente en el país. Esta clasificación se corresponde con los espacios de representación asignados a cada tipo de discapacidad dentro del Consejo Nacional de Discapacidad.
        .row.align-items-center.bloque-texto-c.color-secundario.p-3
          .col-lg-2.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img81.svg', alt='Imagen decorativa')
          .col-lg-10
            p.mb-0(data-aos="fade-left") Aunque las decisiones derivadas de este proceso se enmarcan principalmente en un enfoque médico —centrado en la identificación de deficiencias más que en el reconocimiento de capacidades— resultan valiosas para comprender las distintas formas de afectación física, sensorial, intelectual o psicoemocional que presenta la población colombiana.
      .col-lg-3.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img80.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-sm-6.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img82.svg', alt='Imagen decorativa')
      .col-lg-9
        p(data-aos="fade-left") Asimismo, se incorporará la definición propuesta por la Organización Mundial de la Salud (OMS), que entiende la discapacidad como la pérdida total o parcial de una función corporal o mental. En este sentido, cada tipo de discapacidad implica una afectación —ya sea total o parcial— de la función correspondiente, lo que permite establecer criterios más precisos para su evaluación y atención.
        p.mb-0(data-aos="fade-left") Basado en lo anterior, se presentan los siguientes tipos de discapacidades: 

    .tarjeta--BG06.p-4.px-md-5.mb-4
      .tarjeta.tarjeta--FBG06.p-4.my-4(data-aos="fade-left")
        PasosB.color-acento-botones
          .row
            .col-lg-6.order-2.order-lg-1
              h5 Discapacidad física
              p.mb-0 Es una pérdida total o parcial de la función de la movilidad. Esta puede estar representada tanto en miembros inferiores como superiores, además en otros aspectos de la movilidad del cuerpo. Aquí las mayores barreras que se presentan están situadas por la infraestructura física y las construcciones de ciudades o viviendas.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img83.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h5 Discapacidad visual
              p.mb-0 Es una pérdida total o parcial de la función de la visión. Teniendo distintas categorías las personas ciegas que se encuentran dentro del 10% o menos de visión y las personas de baja visión que están ubicadas entre el 10 % y el 25 %. Las mayores barreras que presenta este tipo de discapacidad están situadas en el acceso a la información, en algunos casos la movilidad.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img84.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h5 Discapacidad auditiva
              p.mb-0 Se encuentran distintas pérdidas totales o parciales de la función de la escucha, donde puede haber personas sordas profundas que están por debajo del 25 % en términos de decibeles hasta 80 %. Aquí las mayores barreras que se encuentran son comunicacionales. Las personas sordas, usuarias de lengua de señas, tienen restricciones en la participación y en otros derechos a partir de que la sociedad oyente no conoce su lengua y les excluye en términos comunicacionales.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img85.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h5 Discapacidad sordoceguera
              p.mb-0 Si bien este es un tipo de discapacidad que también se encuentra dentro de las discapacidades sensoriales, la suma de ambas le genera a la persona sordociega una serie de barreras distintas a las que presentan las personas ciegas o las personas sordas que tienen el tipo de discapacidad por separado. Las mayores barreras presentadas acá son comunicacionales y en términos de movilidad.
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img86.png', alt='Imagen decorativa')
          .row
            .col-lg-6.order-2.order-lg-1
              h5 Discapacidad intelectual
              p.mb-0 Es una pérdida total o parcial de la función del aprendizaje. Aquí no se está diciendo que las personas con discapacidad intelectual no aprenden, sino más bien que las personas aprenden a un ritmo distinto y requieren una serie de apoyos tecnológicos o personas para obtener conocimiento. Las mayores barreras que se presentan aquí son las actitudinales. Las personas que observan escuchan a personas con discapacidad intelectual ponen en ellas barreras en toma de decisiones y no les permiten de una manera libre expresarse o comunicarse. 
            .col-lg-6.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img87.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              h5 Discapacidad psicosocial
              p.mb-0 Es una pérdida total o parcial de alguna función en términos emocionales o relacionados con la psiquiatra interna. Si bien esta discapacidad en la actualidad sigue estando sujeta a diagnósticos médicos, es una discapacidad que resulta invisible a la vista, de allí que sus mayores barreras están puestas en las barreras actitudinales. Las personas los excluyen por ciertos comportamientos, por ciertas actitudes, sin entender la complejidad de la mente humana.
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img88.png', alt='Imagen decorativa')
          .row
            .col-lg-5.order-2.order-lg-1
              h5 Discapacidad múltiple
              p.mb-0 Es la suma de dos o más de las discapacidades anteriormente descritas. Y se presentan las mayores barreras dado que se suman de distinto tipo. 
            .col-lg-7.col-10.order-1.order-lg-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img89.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p.mb-0(data-aos="fade-left") Si bien estas son las siete discapacidades consideradas en Colombia, es importante anotar acá que por la Ley 1275 de 2009, las personas de talla baja también fueron incluidas dentro de los tipos de discapacidad y se les dio su distinción en términos de derechos en dicha ley.

    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Figura 6.
      i Dudas sobre personas con discapacidad

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.tarjeta--BG12.tarjeta.p-4
        .row.justify-content-center.align-items-center
          .col-lg-10.movil(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img90_1.svg', alt='Descripción: Una ilustración de estilo gráfico presenta a una mujer pensativa junto a un bocadillo que plantea una pregunta sobre las barreras para las personas con discapacidad. La composición se organiza en dos elementos principales: un bocadillo de diálogo negro con un texto en español y una ilustración de una mujer a la derecha. El bocadillo ocupa gran parte del lado izquierdo, con una forma que sugiere una conversación. La mujer está posicionada en la parte inferior derecha, mirando hacia el bocadillo, creando una conexión visual. La composición está equilibrada y la distribución del espacio es armónica. El personaje principal es una mujer joven, con pelo largo y rojizo. Se le muestra con una expresión de reflexión, sosteniendo su barbilla con la mano. Viste una blusa verde. Sobre su cabeza, aparecen dos signos de interrogación amarillos, lo que sugiere que la mujer está pensando o tiene dudas. El bocadillo contiene texto en español. El estilo artístico es simple, plano y gráfico, con líneas negras gruesas que definen los contornos y los elementos. Los colores son planos, con una paleta de tonos suaves y sin gradientes. El fondo es blanco. La ejecución técnica es sencilla y funcional, con un diseño de estilo de ilustración de libro de texto. El entorno es mínimo, sin detalles que distraigan. La iluminación es suave, sin sombras marcadas. La atmósfera general es directa y concisa, con la intención de presentar la información de forma clara.')
          .col-lg-10.desktop(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img90.svg', alt='Descripción: Una ilustración de estilo gráfico presenta a una mujer pensativa junto a un bocadillo que plantea una pregunta sobre las barreras para las personas con discapacidad. La composición se organiza en dos elementos principales: un bocadillo de diálogo negro con un texto en español y una ilustración de una mujer a la derecha. El bocadillo ocupa gran parte del lado izquierdo, con una forma que sugiere una conversación. La mujer está posicionada en la parte inferior derecha, mirando hacia el bocadillo, creando una conexión visual. La composición está equilibrada y la distribución del espacio es armónica. El personaje principal es una mujer joven, con pelo largo y rojizo. Se le muestra con una expresión de reflexión, sosteniendo su barbilla con la mano. Viste una blusa verde. Sobre su cabeza, aparecen dos signos de interrogación amarillos, lo que sugiere que la mujer está pensando o tiene dudas. El bocadillo contiene texto en español. El estilo artístico es simple, plano y gráfico, con líneas negras gruesas que definen los contornos y los elementos. Los colores son planos, con una paleta de tonos suaves y sin gradientes. El fondo es blanco. La ejecución técnica es sencilla y funcional, con un diseño de estilo de ilustración de libro de texto. El entorno es mínimo, sin detalles que distraigan. La iluminación es suave, sin sombras marcadas. La atmósfera general es directa y concisa, con la intención de presentar la información de forma clara.')
    p.mb-4(data-aos="fade-left") Para concluir este apartado, se recomienda escuchar el siguiente pódcast, el cual complementa los contenidos abordados:
    
    .row.justify-content-center
      .col-lg-8(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img91.svg', alt='Texto que describa la imagen')
      .col-lg-8(data-aos="zoom-in")
        .tarjeta.clr--pink.p-4.rounded-0.h-100
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Entendiendo la discapacidad paso a paso"
              :audio="require('@/assets/actividad/audio/Podcast_01.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
        
      
      


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
    modal1: false,
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
