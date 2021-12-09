import React, { useState } from 'react';
import styles from './Header.module.css'
import logo1 from '../../assets/images/logo-desktop.svg'
import logo2 from '../../assets/images/ilustra_header.svg'

const Header = ({setDarkMode , darkMode}) => {
    //hoocks


    //Funcion de eventos
    const manejarClick=()=>{
        setDarkMode(!darkMode)
    }
    return (
        <div>
            <div className={styles.linea}></div>
            <div className={styles.header}>
                <img src={logo1} alt="" />
                <button 
                    value={darkMode}
                    onClick={manejarClick}
                    className={darkMode?styles.botonDark:styles.botonLigth}>
                    {darkMode?"DARK MODE":"LIGHT MODE"}
                </button>
            </div>
            <div className={darkMode?styles.titulo:styles.tituloLigth}>
                <h1 className={styles.mini}>!Inspírate y busca los mejores&nbsp;<b> GIFS</b> <spam className={styles.spam}>!</spam> </h1>
            </div>

            <div className={styles.imagen}>
                <img  src={logo2} alt="" />
            </div>
        </div>
    );
}

export default Header;
