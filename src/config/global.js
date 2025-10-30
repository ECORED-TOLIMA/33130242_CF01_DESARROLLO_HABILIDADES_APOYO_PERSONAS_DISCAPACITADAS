export default {
  global: {
    componenteFormativo:
      'Discapacidad y valoración de apoyos: introducción y conceptualización',
    descripcionCurso:
      'En este componente formativo se aborda la conceptualización de la discapacidad, según la Convención sobre los Derechos de las Personas con Discapacidad de la ONU; desde los enfoques social y de derechos humanos, los modelos de diversidad funcional en clave filosófica, vida independiente y vida en comunidad. Además, se estudian los tipos de discapacidad y el concepto de valoración de apoyos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Concepción de la discapacidad desde diferentes modelos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'La discapacidad vista desde los modelos de prescindencia y médico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Enfoque de derechos: alcances y limitantes',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Enfoque de capacidades: aciertos y limitaciones',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tipos de discapacidad en Colombia',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Conceptos y aspectos interdisciplinarios de la valoración de apoyos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Aspectos interdisciplinarios de la valoración de apoyos',
            hash: 't_2_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_XX_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.2. Enfoque de derechos: alcances y limitantes',
      referencia:
        'Palacios, A. & Romañach, J. (2006). <em>El modelo de la diversidad. La Bioética y los Derechos Humanos como herramientas para alcanzar la plena dignidad en la diversidad funcional</em>, Diversitás Ediciones, Madrid.',
      tipo: 'Artículo de revista',
      link: 'https://www.dykinson.com/cart/download/articulo/3949/',
    },
    {
      tema: '1.2. Enfoque de derechos: alcances y limitantes',
      referencia:
        'Palacios, A. (2006). <em>El modelo social de discapacidad: orígenes, caracterización y plasmación en la Convención Internacional sobre los Derechos de las Personas con Discapacidad</em>. CERMI.',
      tipo: 'Libro en línea',
      link: 'https://dds.cepal.org/redesoc/publicacion?id=4010',
    },
    {
      tema: '1.2. Enfoque de derechos: alcances y limitantes',
      referencia:
        'Victoria Maldonado, J. A. (2013). El modelo social de la discapacidad: una cuestión de derechos humanos. <em>Boletín Mexicano de derecho comparado</em>, 46(138), 1093-1109.',
      tipo: 'Artículo de Revista',
      link:
        'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0041-86332013000300008',
    },
    {
      tema:
        '2.1.3. Aspectos interdisciplinarios que deben tenerse en cuenta en la valoración de apoyos',
      referencia:
        'Abad Salgado, A. M. (2016). Familia y discapacidad: consideraciones apreciativas desde la inclusión. <em>Latinoamericana de Estudios de Familia</em>, 8, 58–77.',
      tipo: 'Artículo de Revista',
      link:
        'https://revistasojs.ucaldas.edu.co/index.php/revlatinofamilia/article/view/3125',
    },
  ],
  glosario: [
    {
      termino: 'Acciones afirmativas',
      significado:
        'políticas, medidas o acciones dirigidas a favorecer a personas o grupos con algún tipo de discapacidad, con el fin de eliminar o reducir las desigualdades y barreras de tipo actitudinal, social, cultural o económico que los afectan. (Ley 1618, 2013, Colombia, Art. 2).',
    },
    {
      termino: 'Ajustes razonables',
      significado:
        'se entenderán las modificaciones y adaptaciones necesarias y adecuadas que no impongan una carga desproporcionada o indebida, cuando se requieran en un caso particular, para garantizar a las personas con discapacidad el goce o ejercicio, en igualdad de condiciones con las demás, de todos los derechos humanos y libertades fundamentales. (Convención sobre los Derechos de las Personas con Discapacidad, 2006, Art. 2).',
    },
    {
      termino: 'Apoyos',
      significado:
        'los apoyos de los que trata la presente ley son tipos de asistencia que se prestan a la persona con discapacidad para facilitar el ejercicio de su capacidad legal. Esto puede incluir la asistencia en la comunicación, la asistencia para la comprensión de actos jurídicos y sus consecuencias, así como la asistencia en la manifestación de la voluntad y preferencias personales. (Ley 1996, 2019, Colombia, Art. 3).',
    },
    {
      termino: 'Autonomía',
      significado:
        'en todas las actuaciones se respetará el derecho de las personas a autodeterminarse, a tomar sus propias decisiones, a equivocarse, a su independencia y al libre desarrollo de la personalidad conforme a la voluntad, deseos y preferencias propias, siempre y cuando estos, no sean contrarios a la Constitución, a la ley, y a los reglamentos internos que rigen las entidades públicas y privadas. (Ley 1996, 2019, Colombia, Art. 4).',
    },
    {
      termino: 'Barreras',
      significado:
        'cualquier tipo de obstáculo que impida el ejercicio efectivo de los derechos de las personas con algún tipo de discapacidad. Estas pueden ser: a) Actitudinales: aquellas conductas, palabras, frases, sentimientos, preconcepciones, estigmas, que impiden u obstaculizan el acceso. b) Condiciones de igualdad de las personas con y/o en situación de discapacidad a los espacios, objetos, servicios y en general a las posibilidades que ofrece la sociedad. c) Comunicativas: aquellos obstáculos que impiden o dificultan el acceso a la información, a la consulta, al conocimiento y en general, el desarrollo en condiciones de igualdad del proceso comunicativo de las personas con discapacidad a través de cualquier medio o modo de comunicación, incluidas las dificultades en la interacción comunicativa de las personas. d) Físicas: Aquellos obstáculos materiales, tangibles o construidos que impiden o dificultan el acceso y el uso de espacios, objetos y servicios de carácter público y privado, en condiciones de igualdad por parte de las personas con discapacidad. (Ley 1618, 2013, Colombia, Art.2)',
    },
    {
      termino: 'Capacidad jurídica',
      significado:
        'según la Corte Constitucional colombiana es la capacidad de goce y capacidad de ejercicio: a) Capacidad de goce: aptitud general que tiene toda persona natural o jurídica para ser sujeto de derechos y obligaciones, y es, sin duda alguna, el atributo esencial de la personalidad jurídica. b) Capacidad de ejercicio: consiste en la habilidad que la ley le reconoce a una persona para poderse obligar por sí misma, sin la intervención o autorización de otra. Implica, entonces, el poder realizar negocios jurídicos e intervenir en el comercio jurídico, sin que para ello requiera acudir a otro. (Corte Constitucional, Sentencia C-983 de 2002, M.P. Dr. Jaime Córdoba Triviño.)',
    },
    {
      termino: 'Decibelio',
      significado:
        'unidad de intensidad acústica equivalente a la décima parte de 1 belio. (RAE, 2025).',
    },
    {
      termino: 'Deficiencia',
      significado:
        'alteración en las funciones fisiológicas o en las estructuras corporales de una persona. Puede consistir en una pérdida, defecto, anomalía o cualquier otra desviación significativa respecto de la norma estadísticamente establecida. (Decreto 1507, 2014, Colombia. Art. 3)',
    },
    {
      termino: 'Derechos humanos',
      significado:
        'los derechos humanos son derechos inherentes a todos los seres humanos, sin distinción alguna de raza, sexo, nacionalidad, origen étnico, lengua, religión o cualquier otra condición. Entre los derechos humanos se incluyen el derecho a la vida y a la libertad; a no estar sometido ni a esclavitud ni a torturas; a la libertad de opinión y de expresión; a la educación y al trabajo, entre otros muchos. Estos derechos corresponden a todas las personas, sin discriminación alguna. (Naciones Unidas, s.f.).',
    },
    {
      termino: 'Discapacidad',
      significado:
        'es un concepto que evoluciona y que resulta de la interacción entre las personas con deficiencias y las barreras debidas a la actitud y al entorno que evitan su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás. (Convención sobre los Derechos de las Personas con Discapacidad, 2006, Preámbulo).',
    },
    {
      termino: 'Modelos de la discapacidad',
      significado:
        'representan la forma en que es explicada y abordada esta realidad a través de la historia. Un modelo devela una construcción social frente a una situación en particular, que determina la forma en cómo la sociedad visibiliza la complejidad de las múltiples relaciones que se establecen en una situación determinada. “La noción de modelo se refiere a representaciones conceptuales y relacionales utilizadas para explicar y comprender la realidad de cierta manera, ya que perfilan aspectos relevantes a una problemática de estudio” (Pinillos & Mercedes, 2017).',
    },
    {
      termino: 'Diseño universal',
      significado:
        'actividad por la que se conciben o proyectan desde el origen, y siempre que ello sea posible, entornos, procesos, bienes, productos, servicios, objetos, instrumentos, programas, dispositivos o herramientas, de tal forma que puedan ser utilizados por todas las personas, en la mayor extensión posible, sin necesidad de adaptación ni diseño especializado. (RAE, 2025).',
    },
    {
      termino: 'Persona facilitadora de la valoración de apoyos',
      significado:
        'es la persona natural, designada por la entidad pública o privada, para coordinar y llevar a cabo el proceso de valoración de apoyos de acuerdo con los lineamientos y el protocolo nacional para la realización de la valoración de apoyos expedidos por el ente rector del Sistema Nacional de Discapacidad. (Decreto 487, 2022, Colombia, Art. 2.8.2.5.1.).',
    },
    {
      termino: 'Valoración de apoyos',
      significado:
        'es el proceso que se realiza, con base en estándares técnicos, que tiene como finalidad determinar cuáles son los apoyos formales que requiere una persona para tomar decisiones relacionadas con el ejercicio de su capacidad legal. (Ley 1996, 2019, Colombia, Art. 3).',
    },
  ],
  referencias: [
    {
      referencia:
        'Abad Salgado, A. M. (2016). Familia y discapacidad: consideraciones apreciativas desde la inclusión. Latinoamericana de <em>Estudios de Familia</em>, 8, 58–77.',
      link:
        'https://revistasojs.ucaldas.edu.co/index.php/revlatinofamilia/article/view/3125',
    },
    {
      referencia:
        'Amnistía Internacional. (2014). <em>Los países siguen ejecutando a personas con discapacidad mental e intelectual</em>. Naciones Unidas, División de Política Social y Desarrollo.',
      link: '',
    },
    {
      referencia:
        'Asamblea General de las Naciones Unidas. (2006). <em>Convención sobre los Derechos de las Personas con Discapacidad y Protocolo Facultativo.</em>',
      link:
        'https://www.un.org/disabilities/documents/convention/convoptprot-s.pdf',
    },
    {
      referencia:
        'Congreso de Colombia. (2009). Ley 1275 de 2009. Por medio de la cual se establecen lineamientos de Política Pública Nacional para las personas que presentan enanismo y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=34494',
    },
    {
      referencia:
        'Congreso de Colombia. (2019, agosto 26). Ley 1996 de 2019. Por medio de la cual se establece el régimen para el ejercicio de la capacidad legal de las personas con discapacidad mayores de edad.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=99712',
    },
    {
      referencia:
        'Devandas Aguilar, C. (2015, marzo 10). <em>Declaración ante el 28° período de sesiones del Consejo de Derechos Humanos</em>. Oficina del Alto Comisionado para los Derechos Humanos.',
      link: '',
    },
    {
      referencia:
        'Espinosa, M. A. (2017, mayo 22). <em>La deuda del país con su población en condición de discapacidad</em>. El Tiempo.',
      link:
        'https://www.eltiempo.com/colombia/otras-ciudades/poblacion-en-condicion-de-discapacidad-y-sus-necesidades-en-colombia-90880',
    },
    {
      referencia: 'Kant, E. (1994). <em>¿Qué es la ilustración?</em>',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Ley 1618 de 2013. Por medio de la cual se establecen las disposiciones para garantizar el pleno ejercicio de los derechos de las personas con discapacidad.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/PS/documento-balance-1618-2013-240517.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2020, enero 31). Resolución 113 de 2020. Por la cual se dictan disposiciones en relación con la certificación de discapacidad y el Registro de Localización y Caracterización de Personas con Discapacidad.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%20113%20de%202020.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2024, julio 5). Resolución 1197 de 2024. Por la cual se dictan disposiciones en relación con el procedimiento de certificación de discapacidad y el Registro de Localización y Caracterización de Personas con Discapacidad y se deroga la Resolución 1239 de 2022.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No%201197%20de%202024.pdf',
    },
    {
      referencia:
        'Nussbaum, M. C. (2007). <em>Las fronteras de la justicia</em>. Paidós.',
      link: '',
    },
    {
      referencia:
        'Nussbaum, M. C. (2019). <em>Crear capacidades: Propuesta para el desarrollo humano</em> (5ª ed.). Planeta.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (1948). <em>Declaración Universal de los Derechos Humanos</em>. ONU.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. Comité sobre los Derechos de las Personas con Discapacidad. (2016). Observaciones generales. ONU.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (s.f.). <em>Derechos humanos</em>.',
      link: 'https://www.un.org/es/global-issues/human-rights',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (1983). <em>Convenio C159 sobre la readaptación profesional y el empleo (personas inválidas)</em>. OIT.',
      link:
        'https://normlex.ilo.org/dyn/nrmlx_es/f?p=NORMLEXPUB:12100:0::NO::P12100_INSTRUMENT_ID:312304',
    },
    {
      referencia:
        'Palacios, A. (2008). <em>El modelo social de la discapacidad: Orígenes, caracterización y plasmación en la Convención Internacional sobre los Derechos de las Personas con Discapacidad.</em> Ediciones CINCA.',
      link: '',
    },
    {
      referencia:
        'Palacios, A. (2015). Una introducción al modelo social de la discapacidad y su reflejo en la Convención Internacional sobre Derechos de las Personas con Discapacidad. En E. Salmón & R. Bregaglio (Eds.), <em>Nueve conceptos claves para entender la Convención sobre los derechos con las personas con discapacidad</em> (pp. 9–33). Pontificia Universidad Católica del Perú.',
      link: '',
    },
    {
      referencia:
        'Palacios, A. & Romañach, J. (2007). <em>El modelo de la diversidad: La bioética y los derechos humanos como herramienta para alcanzar la plena dignidad en la diversidad funcional</em>. Diversitas.',
      link: '',
    },
    {
      referencia:
        'Pinillos, Y. & Mercedes, M. (2017). <em>Modelos conceptuales que explican la discapacidad: de la teoría a la comprensión del funcionamiento.</em> Caracterización de la discapacidad en el distrito de Barranquilla.',
      link: '',
    },
    {
      referencia:
        'Pogget, T. (2009). <em>Hacer justicia a la humanidad.</em> Universidad Nacional Autónoma de México.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República. (2014, agosto 12). Decreto 1507 de 2014. Por el cual se expide el Manual Único para la Calificación de la Pérdida de la Capacidad Laboral y Ocupacional.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=58941',
    },
    {
      referencia:
        'Presidencia de la República. (2022, abril 1). Decreto 487 de 2022. Por el cual se adiciona la Parte 8 en el Libro 2 del Decreto 1081 de 2015, en el sentido de reglamentar la prestación del servicio de valoración de apoyos que realicen las entidades públicas y privadas en los términos de la Ley 1996 de 2019.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=185226',
    },
    {
      referencia:
        'Real Academia Española (RAE). (2025). <em>Diccionario de la lengua española</em>.',
      link: 'https://dle.rae.es/accesible',
    },
    {
      referencia: 'Sen, A. (2000). <em>Desarrollo y libertad</em>. Planeta.',
      link: '',
    },
    {
      referencia:
        'Stellman, J. (1998). <em>Enciclopedia de la salud y seguridad en el trabajo</em>. Chantal.',
      link: '',
    },
    {
      referencia: 'Tugendhat, E. (2001). <em>Lecciones de ética</em>. Gedisa.',
      link: '',
    },
    {
      referencia:
        'Valencia, L. A. (2014). <em>Breve historia de las personas con discapacidad: De la opresión a la lucha por sus derechos</em>.',
      link: 'https://www.rebelion.org/docs/192745.pdf',
    },
    {
      referencia:
        'Victoria Maldonado, J. A. (2013). El modelo social de la discapacidad: una cuestión de derechos humanos. <em>Boletín Mexicano de derecho comparado</em>, 46(138), 1093-1109.',
      link:
        'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0041-86332013000300008',
    },
    {
      referencia:
        'Zemelman, H. (2010). <em>Epistemología de la conciencia histórica: Aspectos básicos</em>. Ipecal.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre_Experto',
          cargo: 'Cargo_Experto',
          centro: 'Regional_Experto',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre_Experto',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_Experto',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_Experto',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre_Experto',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_Experto',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
