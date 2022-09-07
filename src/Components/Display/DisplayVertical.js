import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faGlobe} from '@fortawesome/free-solid-svg-icons';

function DisplayVertical({managerTableImg, managerZoom, imgWidth, managerColor, colorText, managerEntreprise, managerProfession, managerNomPrenom, managerNumero, managerMail, managerAdresse, managerSite, managerColorVerso, colorTextVerso}) {
    return (
        <div className='verticale'>
            <div className='displayInterface1Verticale'  style={{ backgroundColor: managerColor.color ? managerColor.color : "rgb(25, 32, 68)", color :  colorText}}>
                <div className='displayInterface1VerticaleContenu'>
                    <div className='Img'>
                    {managerTableImg.tableImg ? <img src={managerTableImg.tableImg} alt="Logo2" style={{width: managerZoom.zoom ? managerZoom.zoom : imgWidth}}/> :  <img src="/Assets/logo1.png" alt="Logo1" style={{width: managerZoom.zoom ? managerZoom.zoom : imgWidth}} /> }
                    </div>

                    <h2>{managerEntreprise.entreprise}</h2>
                    <h4>{managerProfession.profession}</h4>
                </div>
            </div>

            <div className='displayInterface2Verticale' style={{ backgroundColor: managerColorVerso.colorVerso ? managerColorVerso.colorVerso : "#ffffff", color :  colorTextVerso}}>
                <div className='displayInterface2LogoVertical'>
                    <div className='Img'>
                        {managerTableImg.tableImg ? <img src={managerTableImg.tableImg} alt="Logo2" style={{width: managerZoom.zoom ? managerZoom.zoom : imgWidth}}/> :  <img src="/Assets/logo1.png" alt="Logo1" style={{width: managerZoom.zoom ? managerZoom.zoom : imgWidth}}/>}
                    </div>
                    <h3>{managerEntreprise.entreprise}</h3>
                    <span>Logo</span>
                </div>
                <div className='displayInterface2InformationVertical'>
                    <h3>{managerNomPrenom.nomPrenom}</h3>
                    <span>{managerProfession.profession}</span>
                    
                    <div className='displayInterface2InformationIconsVertical'>
                        <div className='iconSocialVertical'>
                            <FontAwesomeIcon className='iconsFontVertical' icon={faPhone} />
                            <span className='iconSocialSpanVertical'>{managerNumero.numero}</span>
                        </div>
                        <div className='iconSocial'>
                            <FontAwesomeIcon className='iconsFontVertical' icon={faEnvelope} />
                            <span className='iconSocialSpanVertical'>{managerMail.mail}</span>
                        </div>
                        <div className='iconSocialVertical'>
                            <FontAwesomeIcon className='iconsFontVertical' icon={faLocationDot} />
                            <span className='iconSocialSpanVertical'>{managerAdresse.adresse}</span>
                        </div>
                        <div className='iconSocialVertical'>
                            <FontAwesomeIcon className='iconsFontVertical' icon={faGlobe} /> 
                            <span className='iconSocialSpanVertical'>{managerSite.site}</span>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default DisplayVertical;