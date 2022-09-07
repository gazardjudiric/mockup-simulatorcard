import React from 'react';
import DisplayHorizontale from './Display/DisplayHorizontale';
import DisplayVertical from './Display/DisplayVertical';


function Display({managerDisplay, managerTableImg, managerZoom, imgWidth, managerColor, colorText, managerEntreprise, managerColorVerso, colorTextVerso, managerNomPrenom, managerProfession, managerNumero, managerMail,managerAdresse, managerSite}) {


    return (
        <div className='display'> 
            {managerDisplay.display ? 
            <DisplayVertical managerTableImg={managerTableImg} managerZoom={managerZoom} imgWidth={imgWidth} managerColor={managerColor} colorText={colorText}  managerEntreprise={managerEntreprise} managerProfession={managerProfession} managerNomPrenom={managerNomPrenom} managerNumero={managerNumero} managerMail={managerMail} managerAdresse={managerAdresse} managerSite={managerSite} managerColorVerso={managerColorVerso} colorTextVerso={colorTextVerso}/> : 
            <DisplayHorizontale managerTableImg={managerTableImg}  managerZoom={managerZoom} imgWidth={imgWidth} managerColor={managerColor} colorText={colorText}  managerEntreprise={managerEntreprise} managerColorVerso={managerColorVerso} colorTextVerso={colorTextVerso} managerNomPrenom={managerNomPrenom} managerProfession={managerProfession} managerNumero={managerNumero} managerMail={managerMail} managerAdresse={managerAdresse} managerSite={managerSite}/> }
        </div>
    );
}

export default Display;