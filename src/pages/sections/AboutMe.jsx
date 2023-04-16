import fotoAaron from "../../assets/images/foto-aboutme.jpg";

function AboutMe() {
  return (
    <section className="max-w-7xl">
      <h3>About me</h3>
      <img src={fotoAaron} alt="foto-aaron" className="max-w-xs" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        voluptas quisquam accusantium, mollitia ratione, quam sed recusandae
        inventore maxime non delectus vel nulla perspiciatis facilis rerum,
        neque magnam repellendus quae?
      </p>
    </section>
  );
}

export default AboutMe;
