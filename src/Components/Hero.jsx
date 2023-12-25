
import '/src/Styles/Hero.css';
import heroBG from '/heroBG3.jpg'

export default function Hero() {

    return (
      <div id="homeSection" className="heroContainer">
        <div className="heroContent">

        <div className='heroImageContainer'>

        <div className='heroImageDiv'>

          <div className='productNameContainer'>
          <h1 className='imageDivText1'>20 19</h1>

          <h1 className='imageDivText2'>Rosé de Peche Wine</h1>
          </div>

          <img src={heroBG} className='heroImageStyle' />

        </div> 

        </div>

        <div className='ctaTextContainer'>
            <div className='ctaContent'>
              <h2 className='ctaH2'>A Symphony of Flavors: Rosé De Pêche Beckons.</h2>
              <h3 className='ctaH3'>Discover More.</h3>
            </div>
          </div>

        </div>
      </div>
    );
  }