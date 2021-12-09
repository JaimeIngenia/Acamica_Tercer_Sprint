import React from 'react';
import Card from '../Card/Card';
import styles from './Resultado.module.css'

const Resultado = ({clickSugerido, setClickSugerido,trending,setTrending,setDarkMode,darkMode,breaks,setBreaks}) => {
    return (
        <div className={styles.contenedor}>
            <div className={darkMode?styles.titulo:styles.tituloLight}>
                {/* <h3>Resultados de la búsqueda</h3>  */}
                <div className={styles.Resultado}>
                     {breaks?clickSugerido.map((props)=>{
                        return (
                            <div className={styles.Resultado}>
                                <Card key={props.id} props={props}/>
                            </div>
                                )})
                    :trending.map((props)=>{
                        return (
                            <div className={styles.Resultado}>
                                <Card key={props.id} props={props}/>
                            </div>                            
                        )})}


                    {/* {clickSugerido.map((props)=>{
                        return (
                            <div className={styles.Resultado}>
                                <Card key={props.id} props={props}/>
                            </div>
                                )})}
                    
                    {trending.map((props)=>{
                        return (
                            <div className={styles.Resultado}>
                                <Card key={props.id} props={props}/>
                            </div>                            
                        )})} */}
                    
                </div>
            </div>
        </div>
    );
}

export default Resultado;
