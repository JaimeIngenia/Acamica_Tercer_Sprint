import React, { useEffect } from 'react';
import styles from './Busqueda.module.css'
import logo3 from '../../assets/images/icon-search.svg'
import { useState } from 'react/cjs/react.development';

const Busqueda = ({clickSugerido, setClickSugerido,trending,setTrending,setDarkMode,darkMode,setBreaks,breaks}) => {
    console.clear();
    //---------------------------Hooks---------------------------
    const [gif, setGif]=useState("");
    const [mostrarAutocompletacion,setMostrarAutocompletacion]=useState(false)
    const[sugerencias,setSugerencias]=useState([])
    const[gifSugerido,setGifSugerido]=useState("")
    const [loading,setLoading]=useState(false);
    // const [break,setBreak]=useState(false);
    // const [clickSugerido,setClickSugerido]=useState([])
    
    useEffect(() => {
        let peticion =fetch("https://api.giphy.com/v1/gifs/trending?api_key=nUNTIQy4xKKNgSXeNU5e11JARe54a9Lo&limit=15&rating=a")
        setLoading(true);
        peticion
            .then((res0)=>{
                return res0.json();
            })
            .then ((data0)=>{
                setTrending(data0.data)
                setLoading(false);
            })
            .catch((error)=>{
                alert(error);
            })
    }, []);


    useEffect(() => {
        if(gif.length>2){
            setMostrarAutocompletacion(true);
        }else{
            setMostrarAutocompletacion(false)
        }

        let url = fetch("https://api.giphy.com/v1/gifs/search/tags"+"?"+
        "api_key=nUNTIQy4xKKNgSXeNU5e11JARe54a9Lo"+"&"+
        "q="+gif)
        // setLoading(true);
        url
            .then((res)=>{
                return res.json();
            })
            .then ((datos)=>{
                console.log(datos);
                datos.data.map((item)=>{
                    setSugerencias(datos.data)
                    // setLoading(false);
                    // console.log(item.name);
                 })
            })
    },[gif]);
    //---------------------------Segunda Url------------------------------
    useEffect(() => {
        let url2 = fetch(`https://api.giphy.com/v1/gifs/search?api_key=nUNTIQy4xKKNgSXeNU5e11JARe54a9Lo&q=${gifSugerido}&limit=15&offset=0&rating=g&lang=en`)
        setLoading(true);
            url2
            .then((res2)=>{
                return res2.json()
            })
            .then((data2)=>{
                console.log(data2);
                setClickSugerido(data2.data)
                setLoading(false);
            })
    }, [gifSugerido]);

    //---------------------------Función evento---------------------------
    const manejoInput=(e)=>{
        setGif(e.target.value)
        console.log(gif); 
        setBreaks(false);

    }
    const manejoSugerencia=(e)=>{
        setGifSugerido(e.target.innerText);
        setGif("");
        setBreaks(true);
    }

    const manejoClickBtn=(e)=>{
        e.preventDefault();
        setGifSugerido(gif);
        setGif("");
        setBreaks(true);
    }
    //---------------------------JavaScript---------------------------
    return (
        <div className={styles.busqueda}>
                <form onSubmit={manejoClickBtn}>
                    <input type="text" 
                    value={gif}
                    onChange={manejoInput}
                    placeholder="busca un gif"
                    className={darkMode?styles.input:styles.inputLight}
                    />
                    <button>
                        <img className={styles.lupa} src={logo3} alt="" />                    
                    </button>
                </form>
            {/* //---------------------------Autocompletación--------------------------- */}
            {
            mostrarAutocompletacion ===true?
            <div className={darkMode?styles.autocompletacion:styles.autocompletacionLight}>
                {sugerencias.map((sugerencia)=>{
                    return <p onClick={manejoSugerencia}>{sugerencia.name}</p>
                })}
            </div>:null
            }
            {loading?<div className={styles.anonimo}> <div class="conteneur_general_load_9" align="center"> <div class="loader_9"></div> </div> </div> :null}

            {/* {trending.map((item)=>{
                    console.log("hola");
                    return (<div>
                        <img src={item.images.downsized_medium.url} alt="" />
                    </div>)
            })}        */}
            <h3 className={darkMode?styles.h3:styles.h3Light}>Resultados de la búsqueda</h3> 

        </div>
    );
}

export default Busqueda;
