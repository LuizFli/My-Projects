import React, { use, useEffect } from 'react'
import { useState } from 'react'
import './Jogo.css'

function Jogo() {

    const [figures, setFigures] = useState("./image/0.svg")
    const [images, setImages] = useState([])
    const [saidos, setSaidos] = useState([])


    function rodarCubo() {

        
        let image;
        
        do{
            image = Math.floor(Math.random() * 27) + 1;

        } while (saidos.includes(image) && saidos.length < 27);
        console.log(image);

        const newFigure = "./image/" + image + ".svg";
        
        setSaidos(prevSaidos => [...prevSaidos, image]);
        setFigures(newFigure);
        if(saidos.length < 27){

            setImages(prevImages => [...prevImages, newFigure])
        }
        

    }
    return (

        <div className='container-jogo'>
            <div className='div-p'>
                <p>Clique no incone para gerar outra aleatória!</p>

            </div>
            <div className='div-img'>

                {saidos.length > 27 && <img className='imagens' src="./image/0.svg" alt=""  />}
                {saidos.length <= 27 && <img className='imagens' src={figures} alt="" onClick={rodarCubo} />}


            </div>
            <div className='map'>
                {
                    images.map((figures, i) => {
                        return (
                            <img key={i} className='im' src={figures} alt="" />
                        )
                    })
                }



            </div>
            <div className='footer'>

                <button className='btn' onClick={() => {setFigures("./image/0.svg"),setImages([]),setSaidos([])}}>Reset</button>

            </div>
        </div>
    )
}

export default Jogo
