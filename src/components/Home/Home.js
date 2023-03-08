import React from 'react'
import Header from './Header'
import "./Home.css"
import image from "../../assets/1.png";
import ingredients from "../../assets/2.png"
import Data from '../../Data';
import Carousel from 'react-bootstrap/Carousel';
import item1 from './../../assets/id3.PNG'
import item2 from './../../assets/KABAB.jfif'

 function Home() {
  const blogitems = Data.map((items)=>{
    return(
      <div className='col-md-4'>
        <div className='box'>
        <img src={items.img}/>
        <h5>{items.title} </h5>
        <span>{items.time} </span>
         <h6>{items.price} </h6>
         <button><a href='#'>order now</a></button>
         </div>
        

      </div>
    )
  })
  return (
    <div>
 <Header/>
 <section className='numbers'>
  <div className='row'>
  <div className="col-md-3">
      <h2>8570+</h2>
      <h6>SAVING</h6>
      </div>
      <div className="col-md-3">
      <h2>1287+</h2>
      <h6>PHOTOS</h6>
      </div>
      <div className="col-md-3">
      <h2>7878+</h2>
      <h6>ROCKETS</h6>
      </div>
      <div className="col-md-3">
      <h2>7698+</h2>
      <h6>GLOBES</h6>
      </div>
     
  </div>
 </section>
 <section className='pride'>
  <div className='container'>
    <div className='row'>
    <div className='col-md-6'>
      <img src={image} title='image'/>
        

        </div>
        <div className='col-md-6'>
          <h2>We pride ourselves on making real food from the best ingredients.</h2>
          <p> you will find all the ingredients that have been used to cook these delicious meals
</p>
          <button><a href='#'>learn more</a></button>
        

        </div>
      

    </div>
  </div>
 </section>
 <section className='ingredients'>
  <div className='container'>
    <div className='row'>
   
        <div className='col-md-6'>
          <h2>We make everything by hand with the best possible ingredients..</h2>
          <p>The customer is very important, the customer will be followed by the customer. Yes, and pure from the limits of hatred, it should be drunk in a good time. Mauris Feugiat was the land.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <ul>
            <li>Yes, but the pain and the heart of the weekend..</li>
            <li>It was a weekend of financing.
.</li>
            <li>to drink pure from the borders of hatred
.</li>
          </ul>
          <button>
            <a href='#'>learn more</a>
            </button>
            </div>

          <div className='col-md-6'>

           <img src={ingredients} title='ingredients'/>
        

        </div>
        

      
      

    </div>
  </div>
 </section>
 <section className='paralex'>
 <div className='container'>
  <div className='row'>
    <div className='col-lg-12 col-md-12'>
      <h2>When a man's stomach is full it<br/> makes no
         difference whether<br/> he is rich or poor.</h2>
      <p></p>
         <button>
      <a href='#'> watch story</a>
      </button>
    </div>
  </div>
 </div>
 </section>
 <section className='blogs'>
 <div className='container'>
  <div className='row'>
    <div className='col-md-12 col-lg-12'>
      <h2>Explore Our Foods</h2>
      <p>this is our food meals the first one is rainbow vegetable sandwich .<br/> the secound is vegetarian burger.<br/>the third one is Raspberry Stuffed French Toast</p>
       
    </div>
  </div>
  <div className='row'>
    {blogitems}
    </div> 
 </div>
 </section>
 <section className='sliderx'>
 <Carousel>
      <Carousel.Item>
       <img src={item1}/>
        <Carousel.Caption>
          <p>I built this site with a lot of motivation and love I am a junior developer and I want to continue to develop for all my life</p>
          <span>front end developer</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={item2}/>

        <Carousel.Caption>
         <p>i helped my freind reda to build this site.</p>
         <span>web designer</span>
         </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>

 </section>
      
    </div>
    

  )
}
export default Home;
 