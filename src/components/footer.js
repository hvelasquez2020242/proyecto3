import React from "react";
import '../style-sheets/footer.css'
function footer(){
 return(
  
    <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="footer-col">
                <h4>Empresa</h4>
                <ul>
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="#">Nuestro servicios</a></li>
                    <li><a href="#">Politica de privacidad</a></li>
                    <li><a href="#">Programa de afilicacion</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Ayuda</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Envio</a></li>
                    <li><a href="#">Devoluciones</a></li>
                    <li><a href="#">Estado</a></li>
                    <li><a href="#">Opciones de pago</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Tienda online</h4>
                <ul>
                    <li><a href="#">Ropa</a></li>
                    <li><a href="#">Accesorios</a></li>
                    <li><a href="#">Otros</a></li>
                    <li><a href="#"></a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Siguenos</h4>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
 );
}
export default footer;