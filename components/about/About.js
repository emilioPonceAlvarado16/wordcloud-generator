import React from 'react';
import LazyLoad from 'react-lazyload';


export default function About() {
  return (
    <>
    
      <section className='section bg-light'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h3 className="section-title" style={{ fontWeight: "bold" }}>About Format Maker </h3>
              <p className="lead" >
                Formatting documents can be hard and very time-consuming, especially when dealing with a non-intuitive graphical interface, such as the majority of nowadays editors.
                That is the reason why Format Maker exists, to save your time and energy. :)
              
                <br></br>
                <br></br>
                <span style={{ fontWeight: "bold" }}>Free, Fast and Easy </span> format for ALL of your documents in just a few clicks.
                <br></br>
                <br></br>
                People searching on Google:
                <br></br>
                <LazyLoad
                alt={"Card image cap"}
             
                src="./wordcloud4.png" // use normal <img> attributes as props
                className='card-img-top'
              
                />
              </p>



            </div>
          </div>
        </div>



      </section>



    </>

  );
}
