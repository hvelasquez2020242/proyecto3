import React from "react";
import '../style-sheets/productos.css'
import sudadero2 from '../images/sudadero.png'
import sudadero from '../images/sudadero2.jpg'
import sudadero3 from '../images/sudadero3.jpg'
import ropa from '../images/ropa.jpg'
import accesorios from '../images/accesorrios.jpg'
import tecnologia from '../images/tecnologia.png';

function productos() {

  return (
   
   
    



    
   <section className="container">



<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={ropa} className="a d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Ropa</h5>
        <p>Ropa para cualquier edad</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={accesorios} className="a d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Accesorios</h5>
        <p>Accesorios para cualquier ocasion</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={tecnologia} className="a d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Tecnologia</h5>
        <p>Tecnologia nueva</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



      <div className="caja1">
        <h1 className="titulo">Catalogo</h1>
        <div>
          <div className="card">
            <img src={sudadero2}className="card-img-top" alt="imagen de sudadero" />
            <div className="card-body">
              <h5 className="card-title">Sudadero</h5>
              <p className="card-text">Sudadero de algodon marca Nike</p>
              <a href="#" className="btn btn-primary">Ver</a>
            </div>
          </div>
          <div className="card" >
            <img src={sudadero} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Sudadero</h5>
              <p className="card-text">Sudadero negro de marca nike tamaño xs para adulto.</p>
              <a href="#" className="btn btn-primary">Ver</a>
            </div>
          </div>
          <div className="card" >
            <img src={sudadero3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Sudadero</h5>
              <p className="card-text">Sudadero color azul marino marca adidas para niño</p>
              <a href="#" className="btn btn-primary">Ver</a>
            </div>
          </div>

        </div>
        

      </div>
      <div className="caja2">

      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Ropa
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <h3>Contamos con</h3>
        <ul>
          <li>Playeras</li>
          <li>Sudaderos</li>
          <li>Pantalones</li>
          
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      
        Accesorios
      </button>
      
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><h3>Contamos con</h3>
        <ul>
          <li>Aretes</li>
          <li>Collares</li>
          <li>Pulseras</li>
          
        </ul></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Otros
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><h3>Contamos con</h3>
        <ul>
          <li>Tecnologia</li>
          <li>Higiene</li>
          <li>Mantenimiento</li>
          <li>Comida</li>
        </ul></div>
    
    </div>
  </div>
</div>
        <div>Somos una tienda en linea. Dedicada a la venta de diferentes articulos que se necesiten</div>
       
      </div>


    </section>
  );


}
export default productos;