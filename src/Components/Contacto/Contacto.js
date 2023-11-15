import React from 'react';
import './Contacto.css';

const Contacto = () => {
    return (
        <div className="contact-container">
            <div>
            <h2 className="subTitle">Cuando encontrarnos!</h2>   
                <div className="contact-section horario">
                    <h3 className='subSubtitle'>Horarios</h3>
                    <p className='parrafoContacto'>Abierto: Lunes - Viernes 8:00 - 20:00</p>
                    <p className='parrafoContacto'>Sábados 9:00 - 18:00</p>
                </div>
                <div className="contact-section delivery">
                    <h3 className='subSubtitle'>Deliveries</h3>
                    <p className='parrafoContacto'>Lunes - Viernes 9:00 - 19:00</p>
                    <p className='parrafoContacto'>Sábados 10:00 - 17:00</p>
                </div>
            </div>
            <h2 className="subTitle">Contact Us</h2>
            <div className="contact-details">
                <div className="contact-section">
                    <h3 className='subSubtitle'>Oficina Central</h3>
                    <p className='parrafoContacto'>4901 Keller Springs</p>
                    <p className='parrafoContacto'>Springfield, Santa Fe</p>
                    <p className='parrafoContacto'>Argentina</p>
                    <p className='parrafoContacto'>headoffice@rollup.com</p>
                </div>
                <div className="contact-section">
                    <h3 className='subSubtitle'>Customer Support</h3>
                    <p className='parrafoContacto'>questions@rollup.com</p>
                    <h3 className='subSubtitle'>Information</h3>
                    <p className='parrafoContacto'>info@rollup.com</p>
                    <h3 className='subSubtitle'>Se parte del equipo</h3>
                    <p className='parrafoContacto'>hhrr@rollup.com</p>
                </div>
            </div>
        </div>
    );
}

export default Contacto;