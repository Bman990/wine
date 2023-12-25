import '/src/Styles/AboutUs.css';
import wine1 from '/wine1.jpg'



export default function AboutUs(){
    
    return(
        <div id="wineSection" className="aboutUsContainer">
            <div className="aboutUsContent">

                <div className="aboutUsText">
                    <h1>Elevating Taste, Redefining Elegance</h1>

                    <p>
                        The wine unfolds on your palate with a poetic grace, each layer of flavor telling a story. 
                        Imagine the initial burst of sweet <span className='span1'>peach</span>, a cascade of sun-drenched goodness that sets the tone. 
                        Delicate <span className='span2'>florals</span> follow, intertwining with the peachy symphony to create a melody of taste. 
                        The crisp freshness of meticulously crafted <span className='span3'>rosé</span> becomes the backbone, a refreshing punctuation that enhances the overall composition.
                    </p>

                    <p>
                    As you sip, envision the taste of summer encapsulated in each nuanced note—a journey through the <span className='span4'>richness</span> of the orchard, 
                    the sweetness of sun-ripened peaches, and the masterful artistry of winemaking. 
                    It{"'"}s a poetic experience that lingers, leaving an indelible impression on your palate. 
                    Every drop of Rosé de Pêche is a verse in this <span className='span5'>symphony</span>, a testament to the dedication poured into each bottle.
                    </p>

                </div>

                <div className="aboutUsImageDiv">
                    <div className="aboutUsImageContent">
                        <img src={wine1} className='aboutUsImageStyle' />
                    </div>
                </div>
            </div>
        </div>
    )
}