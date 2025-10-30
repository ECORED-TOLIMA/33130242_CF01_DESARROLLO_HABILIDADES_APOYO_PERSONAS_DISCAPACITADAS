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
        'Identificar el grado de apropiación de los conocimientos en la valoración de apoyos, teniendo en cuenta la valoración integral de cada persona.',
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
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
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
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: 'El modelo médico de discapacidad se centra en:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las barreras sociales y actitudinales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La inclusión y participación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La deficiencia como enfermedad o anormalidad individual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los derechos humanos y el enfoque de capacidades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes conceptos se alinea con el enfoque de capacidades?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compensar deficiencias con ayuda médica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El potencial de las personas para realizar elecciones y llevar una vida digna.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Clasificar a las personas según su grado de discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Restringir la participación a quienes no tienen deficiencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes afirmaciones corresponde al enfoque de derechos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tratar la discapacidad desde una perspectiva exclusivamente médica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Otorgar beneficios solo a quienes tienen discapacidad física.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Promover la igualdad, inclusión y participación de las personas con discapacidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Asistir a las personas con discapacidad solo si lo solicitan.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué caracteriza al modelo de prescindencia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Considera la discapacidad como un tema de derechos humanos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Busca eliminar las barreras del entorno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Considera a las personas con discapacidad como una carga social o moral.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reconoce la diversidad como valor social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué enfoque se centra en la dignidad humana y el desarrollo de capacidades?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Médico.', esCorrecta: false },
            { id: 'b', texto: 'Prescindencia.', esCorrecta: false },
            { id: 'c', texto: 'De capacidades.', esCorrecta: true },
            { id: 'd', texto: 'Clínico.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes elementos es un tipo de barrera que afecta a las personas con discapacidad?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Barreras culturales solamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Barreras físicas, actitudinales, comunicativas y sociales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Barreras arquitectónicas exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Barreras financieras únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el propósito de los apoyos en el contexto de la discapacidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir la voluntad de las personas con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar el ejercicio de la capacidad legal y la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Limitar las opciones para evitar errores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Instruir a las personas para adaptarse al entorno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué garantiza la implementación de ajustes razonables?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uniformidad en la atención médica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El goce y ejercicio de derechos en igualdad de condiciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducción de costos en servicios públicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Asistencia obligatoria a las personas con discapacidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de los siguientes documentos establece el régimen para el ejercicio de la capacidad legal de las personas con discapacidad mayores de edad en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ley 1346 de 2009', esCorrecta: false },
            { id: 'b', texto: 'Ley 1618 de 2013', esCorrecta: false },
            { id: 'c', texto: 'Ley 1996 de 2019', esCorrecta: true },
            { id: 'd', texto: 'Ley 1098 de 2006', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es la función principal de la persona facilitadora en el proceso de valoración de apoyos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Certificar la discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Coordinar y llevar a cabo la valoración de apoyos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Autorizar tratamientos médicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Representar legalmente a la persona con discapacidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'La aplicación del enfoque de género en la valoración de apoyos permite:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Homogeneizar los apoyos sin distinción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reconocer y responder a desigualdades específicas entre mujeres y hombres con discapacidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Excluir a los hombres del proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dar prioridad solo a niños con discapacidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué tipo de barrera impide o dificulta el acceso a la información y al proceso comunicativo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Barreras físicas.', esCorrecta: false },
            { id: 'b', texto: 'Barreras actitudinales.', esCorrecta: false },
            { id: 'c', texto: 'Barreras comunicativas.', esCorrecta: true },
            { id: 'd', texto: 'Barreras legales.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'El diseño universal busca:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar herramientas para personas sin discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Adaptar productos existentes a cada discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Concebir entornos y productos utilizables por todos desde el origen.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Establecer protocolos médicos universales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Cuál es el objetivo principal de las acciones afirmativas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Privilegiar a ciertos grupos por encima de otros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar desigualdades y barreras hacia personas con discapacidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eximir de responsabilidades legales a las personas con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limitar el acceso de personas sin discapacidad a ciertos beneficios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué define la capacidad jurídica según la Corte Constitucional colombiana?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La posibilidad de obtener un certificado de discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La aptitud para realizar actos jurídicos sin necesidad de apoyo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El nivel de conocimiento en derecho civil.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La autorización expresa de un familiar o tutor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué documento internacional establece principios sobre discapacidad y derechos humanos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Convención sobre los Derechos del Niño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Convención sobre los Derechos de las Personas con Discapacidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Declaración de Río sobre el Medio Ambiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Carta de las Naciones Unidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'El concepto de autonomía en el contexto legal implica:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La decisión de un juez sobre el destino de una persona con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La autodeterminación y toma de decisiones conforme a deseos y preferencias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La intervención obligatoria de un tercero en decisiones personales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La limitación legal de la voluntad de las personas con discapacidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué busca la valoración de apoyos según la Ley 1996 de 2019?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar el grado de discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Asignar un tutor legal permanente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Establecer los apoyos necesarios para el ejercicio de la capacidad legal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Clasificar a las personas según su condición médica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
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
