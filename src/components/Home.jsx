import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';
function Home() {
  return (
    
<>
    <Carousel variant="success">
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhfGVufDB8fDB8fHww&w=1000&q=80"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://images.unsplash.com/photo-1531826267553-c4979aefab12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://e0.pxfuel.com/wallpapers/418/925/desktop-wallpaper-best-cars-classic-sports-car-classic-auto.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

        </>

    
  

    
   
);
}

export default Home