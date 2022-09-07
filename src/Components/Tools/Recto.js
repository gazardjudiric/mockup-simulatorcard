import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Recto({managerTableImg, managerColor, colorText, managerZoom, imgWidth, managerEntreprise, managerProfession}) {

    const [buttonDelete , setButtonDelete] = useState(false)
    
    

    
    const uploadLogo = (e) => {
        // if (e.target.files.length !== 0) {
            console.log(e.target.files);
            managerTableImg.setTableImg(true)
            managerTableImg.setTableImg(URL.createObjectURL(e.target.files[0]))
            setButtonDelete(true)
        // }
    }
   

    const deleteLogo = () => {
        managerTableImg.setTableImg(false)
        setButtonDelete(false)
    }

    const changeTaile = (e) => {
        console.log(e.target.value);
        managerZoom.setZoom(true)
        managerZoom.setZoom(parseInt(e.target.value))
        console.log(managerZoom.zom);
    }

    const changeColor = (e) => {
        if(e.target.value !== colorText) {
            console.log(e.target.value);
            managerColor.setColor(true)
            managerColor.setColor(e.target.value)
        } else {
            toast('La couleur de carte doit etre différent de la couleur des textes');
        }
    }

    const changeEntreprise = (e) => {
        managerEntreprise.setEntreprise(e.target.value)
    }

    const changeProfession = (e) => {
        managerProfession.setProfession(e.target.value)
    }

    return (
        <div className='Recto'>
            <div className='recto'>
                <h3>Personaliser votre carte (Recto et Verso)</h3>
                <div>
                    <span>Ajouter un Logo</span>
                    <input type="file" onChange={uploadLogo}/>
                    {buttonDelete ? <button onClick={deleteLogo}>Supprimer ce logo</button> : null }
                </div>
                
                <div className='range'>
                    <span>Ajuster la taille de votre Logo</span>
                    <input type="range" defaultValue={imgWidth} onChange={changeTaile}/>
                </div>

                <div>
                    <span>Choisiez une couleur</span>
                    <input type="color" name="couleur"  onChange={changeColor}/>
                </div>
                <div>
                    <label htmlFor="nom">Nom de l'Entreprise</label>
                    <input type="text" id='nom' defaultValue={managerEntreprise.entreprise} onChange={changeEntreprise} />
                </div>
                <div>
                    <label htmlFor="nom">Profession</label>
                    <input type="text" id='nom' defaultValue={managerProfession.profession} onChange={changeProfession} />
                </div>
                
            </div>
            <ToastContainer className='toaster'/>
        </div>
    );
}

export default Recto;