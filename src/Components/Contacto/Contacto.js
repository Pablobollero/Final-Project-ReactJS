import React from 'react';
import './Contacto.css';

const Contacto = () => {
    return (
        <div className="contact-container">
            <div>
            <h2 className="contact-title">Cuando encontrarnos!</h2>   
                <div className="contact-section">
                    <h3>Horarios</h3>
                    <p>Abierto: Lunes - Viernes 8:00 - 20:00</p>
                    <p>Sábados 9:00 - 18:00</p>
                </div>
                <div className="contact-section">
                    <h3>Deliveries</h3>
                    <p>Lunes - Viernes 9:00 - 19:00</p>
                    <p>Sábados 10:00 - 17:00</p>
                </div>
            </div>
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-details">
                <div className="contact-section">
                    <h3>Oficina Central</h3>
                    <p>4901 Keller Springs</p>
                    <p>Springfield, Santa Fe</p>
                    <p>Argentina</p>
                    <p>headoffice@rollup.com</p>
                </div>
                <div className="contact-section">
                    <h3>Customer Support</h3>
                    <p>questions@rollup.com</p>
                    <h3>Information</h3>
                    <p>info@rollup.com</p>
                    <h3>Se parte del equipo</h3>
                    <p>hhrr@rollup.com</p>
                </div>
            </div>
        </div>
    );
}

export default Contacto;