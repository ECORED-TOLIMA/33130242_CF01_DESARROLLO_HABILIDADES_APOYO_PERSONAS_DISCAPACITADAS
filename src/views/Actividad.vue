<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Generalidades de la discapacidad y la valoración de apoyos',
      titulo: 'Cuestionario',
      introduccion:
        'Objetivo: identificar el grado de apropiación de los conocimientos en la valoración de apoyos y discapacidad, teniendo en cuenta la valoración integral de cada persona.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'Según la Convención sobre los Derechos de las Personas con Discapacidad, la discapacidad es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un concepto que se construye donde la enfermedad interactúa con las barreras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es un concepto que se construye donde las deficiencias interactúan con las barreras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un concepto que se construye donde las limitaciones interactúan con las barreras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un concepto que solo aplica a la discapacidad física.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: 'El modelo social de discapacidad es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Explicación conceptual sobre barreras actitudinales que la sociedad impone a personas con discapacidad, limitando inclusión y reconocimiento pleno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Explicación conceptual que reconoce a personas con discapacidad como sujetos de derechos, promoviendo eliminación de barreras desde el enfoque social.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Explicación conceptual sobre barreras cotidianas que enfrentan personas con discapacidad por limitaciones físicas, psíquicas o sensoriales en su entorno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Explicación conceptual que aborda la discapacidad exclusivamente desde una perspectiva médica, centrada en la condición clínica del individuo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'El modelo social de la discapacidad tiene en la actualidad un desarrollo pleno en las normas internas colombianas:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sí, porque la convención ratificada por Ley 1346 de 2009 ha modificado y cambiado todas las normas sobre discapacidad en Colombia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sí, porque la convención, artículo 8, insta al Estado a reconocer plenamente a las personas con discapacidad como sujetos de derechos humanos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sí, porque la convención ha impulsado avances normativos, pero aún falta preparación institucional y social para garantizar plenamente los derechos de personas con discapacidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sí, porque basta con que el Estado ajuste la normatividad para garantizar derechos de las personas con discapacidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'El movimiento de vida Independiente es una organización de personas con discapacidad, que busca:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El otorgamiento formal de derechos a las personas con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El reconocimiento pleno de derechos a las personas con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La posibilidad de desarrollarse como seres humanos y vivir con autonomía.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El acceso a recursos económicos para garantizar su bienestar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'La libertad de las personas con discapacidad consiste en:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejercer su derecho a autodeterminarse libremente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Prepararse adecuadamente para tomar decisiones informadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Elegir a alguien con mayor conocimiento para apoyar decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ratificar su dependencia por condición de discapacidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'El derecho a la accesibilidad:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es un derecho fundamental que permite a las personas con discapacidad acceder a educación, trabajo y seguridad social en igualdad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Es un derecho inherente a todos los seres humanos, incluyendo a las personas con discapacidad, sin excepción alguna.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es un derecho humano que complementa todos los derechos, garantizando inclusión plena en todos los aspectos de la vida cotidiana.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Es un derecho que poseen las personas, aunque depende de que las instituciones públicas decidan aplicarlo efectivamente en la práctica.	',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Las violencias que sufren las mujeres con discapacidad son las mismas violencias de género que padecen las mujeres en general:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'No, porque tener discapacidad implica, erróneamente, que se poseen menos derechos frente a otras personas en la sociedad..',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'No, porque las familias deciden cuándo y cómo las mujeres con discapacidad acceden a sus derechos, limitando su autonomía..',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sí, porque las mujeres con discapacidad sufren las mismas violencias que otras mujeres, pero su condición hace que permanezcan invisibilizadas y silenciadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sí, porque las mujeres con discapacidad pueden denunciar libremente y son escuchadas por las instituciones del Estado de forma efectiva..',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'La interdisciplinariedad le ayuda a las personas con discapacidad para:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tener terapias según el criterio que defina el psicólogo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desarrollarse de manera plena como seres humanos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tener protocolos adecuados de atención médica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Poder salir de sus casas a espacios públicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'La persona encargada de realizar una valoración de apoyos debe tener en cuenta:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Distintos instrumentos, herramientas y conocimientos jurídicos, psicológicos, sociales, arquitectónicos y de otras disciplinas para apoyar la discapacidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un conocimiento amplio y profundo de la norma y aplicarla manera exacta y precisa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Dictar un informe a partir de sus propias creencias y convicciones con respecto a la discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Contar con un conocimiento riguroso de diversas profesiones, porque sólo así podrá realizar una atención integral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuáles son los mayores retos que se presentan por parte de la persona que realiza la evaluación de apoyos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Falta de conocimiento y ausencia de una normatividad clara y precisa sobre derechos de las personas con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Desconocimiento en derechos humanos y discapacidad, junto con falta de normatividad clara y precisa en el contexto institucional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Persistencia de barreras actitudinales familiares, desconocimiento técnico claro y preciso, y falta de legitimación normativa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Falta de interés por parte de personas con discapacidad en defender sus derechos, debido a la apatía frente a la participación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué afectación podría tener para una persona con discapacidad no pertenecer a un núcleo familiar conformado y donde se le presten las mayores atenciones posibles?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La persona con discapacidad ve limitado su desarrollo humano si no tiene apoyos familiares que promuevan libertad y autodeterminación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Falta de apoyo familiar dificulta la toma de decisiones importantes en la vida diaria de personas con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No es indispensable contar con familia que acompañe, más allá del cuidado natural que esta suele brindar a la persona.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sin apoyo familiar, la persona con discapacidad no ejercería derechos, pues la familia es vista como única red responsable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Las valoraciones de apoyo están orientadas a las personas que deben guiar y acompañar a las personas con discapacidad para la realización de trámites.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sí, porque para las personas con discapacidad es importante contar con alguien que las guíe en la toma de decisiones. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sí, porque estar cerca de alguien de confianza les permite desarrollarse mejor y tomar decisiones con mayor seguridad y apoyo. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No, porque en las valoraciones de apoyo también se consideran ajustes razonables para facilitar decisiones con información clara y completa. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'No, porque quienes acompañan decisiones son personas designadas por un juez, responsables de apoyar en todos los ámbitos necesarios. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'El modelo de la diversidad funcional es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una explicación conceptual acerca de los derechos humanos de las personas con discapacidad. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una explicación conceptual dice que las expresiones físicas, psíquicas y sensoriales de las personas no hacen parte de la naturaleza humana, sino que son alteraciones que deben corregirse. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Una explicación conceptual que plantea que las deficiencias físicas, psíquicas y sensoriales son una expresión de la diversidad humana.	 ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una explicación conceptual acerca de la prescindencia. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'No es un pilar de la Convención sobre los Derechos de las Personas con Discapacidad:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El derecho a la igualdad.', esCorrecta: false },
            { id: 'b', texto: 'La capacidad jurídica.', esCorrecta: false },
            {
              id: 'c',
              texto: 'El derecho a la accesibilidad.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'El derecho al trabajo.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Las personas con discapacidad poseen _______________ espacio, derecho, goce y disfrute de su capacidad jurídica.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pleno.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Relativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Parcial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Medio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'Las personas con discapacidad en Colombia enfrentan _______ al interactuar con funcionarios, familia, sociedad e instituciones, lo que limita su desarrollo pleno y el ejercicio efectivo de sus derechos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Barreras.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Dificultades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Prórrogas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'La Convención de Derechos de las Personas con Discapacidad de Naciones Unidas (2006), ratificada en Colombia mediante Ley 1346 de 2009, desarrolla todos los derechos fundamentales de estas personas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'El concepto de discapacidad es un concepto que une la capacidad jurídica y el tipo de discapacidad. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'La discapacidad psicosocial es una discapacidad que resulta invisible a la vista, de allí que sus mayores barreras están puestas en las barreras actitudinales.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: 'La valoración de apoyos es solamente un requisito normativo.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Tiene un claro entendimiento del componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
