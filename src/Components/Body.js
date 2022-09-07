import React, {useState} from 'react';
import Display from './Display';
import Tools from './Tools';


function Body() {

    const [display, setDisplay] = useState(false)
    const [tableImg, setTableImg] = useState(false)
    const [zoom, setZoom] = useState(false)
    const imgWidth = 60
    const [color, setColor] = useState(false)
    const colorText = "#ffffff"
    const [entreprise, setEntreprise] = useState("All Web Service")
    const [colorVerso, setColorVerso] = useState(false)
    const colorTextVerso = "#000000"
    const [nomPrenom, setNomPrenom] = useState("Nom et Prenoms")
    const [profession, setProfession] = useState("Profession")
    const [numero, setNuremo] = useState("+229000000")
    const [mail, setMail] = useState("gazardjudiric@gmail.com")
    const [adresse, setAdresse] = useState("Street Rue2 Sikècodji")
    const [site, setSite] = useState("www.gazardjudiri.com")

    


    return (
        <div className='body'>
            <div className='tools'><Tools managerDisplay={{display, setDisplay}} managerTableImg={{tableImg, setTableImg}} managerZoom={{zoom, setZoom}} imgWidth={imgWidth} managerColor={{color, setColor}} colorText={colorText}  managerEntreprise={{entreprise, setEntreprise}} managerProfession={{profession, setProfession}}  managerColorVerso={{colorVerso, setColorVerso}} colorTextVerso={colorTextVerso} managerNomPrenom={{nomPrenom, setNomPrenom}} managerNumero={{numero, setNuremo}} managerMail={{mail, setMail}} managerAdresse={{adresse, setAdresse}} managerSite={{site, setSite}}/></div>
            
            
            <div className='display'><Display managerDisplay={{display, setDisplay}} managerTableImg={{tableImg,setTableImg}} managerZoom={{zoom, setZoom}} imgWidth={imgWidth} managerColor={{color, setColor}} colorText={colorText}  managerEntreprise={{entreprise, setEntreprise}} managerProfession={{profession, setProfession}}  managerColorVerso={{colorVerso, setColorVerso}} colorTextVerso={colorTextVerso} managerNomPrenom={{nomPrenom, setNomPrenom}} managerNumero={{numero, setNuremo}} managerMail={{mail, setMail}} managerAdresse={{adresse, setAdresse}} managerSite={{site, setSite}} /></div> 
        </div> 
    );
}

export default Body;