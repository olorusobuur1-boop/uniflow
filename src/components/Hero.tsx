import heroImage from "../assets/images/hero-image.png"

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div>
        <section className='h1-section'>UniFlow: <span>Everything College</span>, in one smooth flow.</section>
      </div>
      <div className="section-row">
        <section>
          <p className="hero-p">UniFlow is an all-in-one digital platform
             designed to simplify and streamline daily college life for students
          </p>
          <a className="btn"> Start Free Trial Now &#8594;</a>
        </section>
        <section>
          <img src={heroImage} alt="" className="hero-image" />
        </section>
        <div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Hero
