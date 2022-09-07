import React from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function Verso({managerColorVerso, colorTextVerso, managerNomPrenom, managerNumero, managerMail,managerAdresse, managerSite}) {

    const changeNomPrenom = (e) => {
        managerNomPrenom.setNomPrenom(e.target.value)
    }

    const changeNumero = (e) => {
        managerNumero.setNumero(e.target.value)
    }

    const changeMail = (e) => {
        managerMail.setMail(e.target.value)
    }

    const changeAdresse = (e) => {
        managerAdresse.setAdresse(e.target.value)
    }

    const changeSite = (e) => {
        managerSite.setSite(e.target.value)
    }

    const changeColor = (e) => {
        if(e.target.value !== colorTextVerso) {
            console.log(e.target.value);
            managerColorVerso.setColorVerso(true)
            managerColorVerso.setColorVerso(e.target.value)
        } else {
            toast('La couleur de carte doit etre différent de la couleur des textes');
        }
    }
    return (
        <div className='Verso'> 
            <div className='verso'>
                
                <h3>Personaliser votre carte (Verso)</h3>

                <div>
                    <input type="text"  defaultValue={managerNomPrenom.nomPrenom} onChange={changeNomPrenom} />
                </div>

                <div>
                    <input type="text" defaultValue={managerNumero.numero} onChange={changeNumero} />
                </div>

                <div>
                    <input type="text" defaultValue={managerMail.mail} onChange={changeMail} />
                </div>

                <div>
                    <input type="text" defaultValue={managerAdresse.adresse} onChange={changeAdresse} />
                </div>

                <div>
                    <input type="text" defaultValue={managerSite.site} onChange={changeSite} />
                </div>

                <div>
                    <input type="color" name="couleur" onChange={changeColor}/>
                </div>
            </div>
            <ToastContainer className='toaster'/>
        </div>
    );
}

export default Verso;