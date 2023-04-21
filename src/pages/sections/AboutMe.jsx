import fotoAaron from "../../assets/images/foto-aboutme.jpg";

function AboutMe() {
  const darkMode = "text-black dark:text-white"
  return (
    <section className="max-w-7xl">
      <h3 className={darkMode}>About me</h3>
      <div className="flex-col justify-center">
        <img src={fotoAaron} alt="foto-aaron" className="text-center" style={{width: "20%"}}/>
        <p className={darkMode}>
          ¡Hola! Soy un desarrollador full-stack junior de 25 años con una pasión por el
          diseño gráfico. Aunque mi carrera profesional comenzó en el mundo de
          la comunicación cuando tenía 18 años, siempre supe que quería
          adentrarme en el mundo de la tecnología. Después de graduarme como
          publicista, decidí dar un paso más allá y explorar el sector
          tecnológico. Combinando mis habilidades en diseño con mi interés en
          tecnología, encontré mi camino en el desarrollo full-stack. Hoy en
          día, me considero un profesional completo con experiencia en algunas
          de las tecnologías de desarrollo más utilizadas en el sector, así como
          en la atención al detalle visual. Como diseñador gráfico, tengo un
          enfoque meticuloso y una atención al detalle que me permite crear
          interfaces de usuario atractivas y efectivas. Y como desarrollador
          full-stack, tengo experiencia en varias tecnologías, desde HTML, CSS y
          JavaScript hasta frameworks como React y Node.js. Siempre estoy
          buscando mejorar mis habilidades y expandir mis conocimientos en el
          mundo de la tecnología. Me encanta trabajar en equipo y estoy
          emocionado de contribuir a proyectos emocionantes y desafiantes.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
