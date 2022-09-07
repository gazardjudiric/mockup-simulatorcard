import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faGlobe} from '@fortawesome/free-solid-svg-icons';



function DisplayHorizontale({managerTableImg, managerZoom, imgWidth, managerColor, colorText, managerEntreprise, managerColorVerso, colorTextVerso, managerNomPrenom, managerProfession, managerNumero, managerMail, managerAdresse, managerSite}) {
    
    
    return (
        <div className='AffichageHorizontal'>
            <div className='displayInterface1'  style={{ backgroundColor: managerColor.color ? managerColor.color : "rgb(25, 32, 68)", color :  colorText}}>

                <div className='displayInterface1Contenu'>
                    <div className="Img">
                        {managerTableImg.tableImg ? <img src={managerTableImg.tableImg} alt="Logo2" style={{width: managerZoom.zoom ? managerZoom.zoom : imgWidth}}/> :  <img src="/Assets/logo1.png" alt="Logo1" style={{width: managerZoom.zoom ? managerZoom.zoom : imgWidth}} /> }
                    </div>
                    
                    <h2>{managerEntreprise.entreprise}</h2>
                    <h4>{managerProfession.profession}</h4>
                </div>
            </div>

            <div className='displayInterface2'  style={{ backgroundColor: managerColorVerso.colorVerso ? managerColorVerso.colorVerso : "#ffffff", color :  colorTextVerso}}>
                <div className='displayInterface2Information'>
                    <h3>{managerNomPrenom.nomPrenom}</h3>
                    <span>{managerProfession.profession}</span>
                    
                    <div className='displayInterface2InformationIcons'>
                        <div className='iconSocial'>
                            <FontAwesomeIcon className='iconsFont' icon={faPhone} />
                            <span className='iconSocialSpan'>{managerNumero.numero}</span>
                        </div>
                        <div className='iconSocial'>
                            <FontAwesomeIcon className='iconsFont' icon={faEnvelope} />
                            <span className='iconSocialSpan'>{managerMail.mail}</span>
                        </div>
                        <div className='iconSocial'>
                            <FontAwesomeIcon className='iconsFont' icon={faLocationDot} />
                            <span className='iconSocialSpan'>{managerAdresse.adresse}</span>
                        </div>
                        <div className='iconSocial'>
                            <FontAwesomeIcon className='iconsFont' icon={faGlobe} /> 
                            <span className='iconSocialSpan'>{managerSite.site}</span>
                        </div>
                    </div> 
                </div>
                <div className='displayInterface2Logo'>
                    <div className='Img'>
                        {managerTableImg.tableImg ? <img src={managerTableImg.tableImg} alt="Logo2" style={{width: managerZoom.zoom ? managerZoom.zoom : imgWidth}}/> :  <img src="/Assets/logo1.png" alt="Logo1" style={{width: managerZoom.zoom ? managerZoom.zoom : imgWidth}}/>}
                    </div>
                    <h3>{managerEntreprise.entreprise}</h3>
                    <span>Logo</span>
                </div>
            </div>
        </div>
    );
}

export default DisplayHorizontale;