<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gestión de requisitos y arquitectura de software',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> valorar, a partir de situaciones propias del desarrollo de software, la comprensión integral de los procesos, técnicas y buenas prácticas que sustentan la gestión de requisitos, el modelado y el control del desarrollo, con el fin de evidenciar una aplicación coherente y fundamentada en contextos reales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la especificación de requisitos de software?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir funcionalidades del sistema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar la arquitectura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Implementar el código.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ejecutar pruebas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué estándar se utiliza para estructurar una ERS?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'ISO 9001.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'IEEE 830.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'UML.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'SCRUM.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué componente no pertenece a un informe de requisitos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Introducción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Requisitos funcionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Código fuente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Restricciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué actividad pertenece al análisis de requisitos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Programación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Validación de necesidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Despliegue.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantenimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué busca la gestión de requisitos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar interfaces.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar cambios en requisitos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ejecutar pruebas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Implementar código.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué técnica permite priorizar requisitos según importancia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'UML.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'ER.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'MoSCoW.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Git.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué permite la trazabilidad de requisitos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar interfaces.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Relacionar requisitos con otras fases.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Programar código.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ejecutar pruebas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué es una matriz de trazabilidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diagrama UML.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Documento de pruebas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tabla de relaciones de requisitos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Código fuente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué representa el modelado en software?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Implementación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pruebas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Representación abstracta del sistema.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Despliegue.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuál es un lenguaje de modelado estándar?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Git.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'UML.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'HTML.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'SQL.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué representa el nivel “Contexto” en el modelo C4?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Código.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Componentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entorno del sistema.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Base de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué herramienta se utiliza para diagramas UML?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'StarUML.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Excel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Word.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Notepad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué representa un caso de uso?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Código.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prueba.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Base de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Interacción usuario-sistema.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué caracteriza a una historia de usuario?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lenguaje técnico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diagrama complejo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Código.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lenguaje natural.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué herramienta se usa para prototipos visuales?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Figma.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Git.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'MySQL.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Jenkins.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Cuál es la primera fase del ciclo de vida del software?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desarrollo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pruebas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Planificación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mantenimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué se realiza en la fase de pruebas?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Codificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Validación del sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Planificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué permite el control del proceso de desarrollo?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Detectar desviaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Programar más rápido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crear diagramas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar interfaces.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué es un commit en Git?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rama.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Error.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Código.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registro de cambios.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué función cumple GitHub?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar diagramas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Base de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Editor de código.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Repositorio colaborativo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
