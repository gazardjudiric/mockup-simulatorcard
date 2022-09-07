import React from 'react';
import CardDirection from './Tools/CardDirection';
import Recto from './Tools/Recto';
import Verso from './Tools/Verso';

function Tools({managerDisplay, managerTableImg, managerZoom, imgWidth, managerColor, colorText, managerEntreprise, managerProfession, managerColorVerso, colorTextVerso, managerNomPrenom, managerNumero, managerMail,managerAdresse, managerSite}) {
    return (
        <div>
            <CardDirection  managerDisplay={managerDisplay}/>
            <Recto managerTableImg={managerTableImg} managerColor={managerColor}  colorText={colorText} managerZoom={managerZoom} imgWidth={imgWidth} managerEntreprise={managerEntreprise} managerProfession={managerProfession}/>
            <Verso  managerColorVerso={managerColorVerso} colorTextVerso={colorTextVerso} managerNomPrenom={managerNomPrenom} managerNumero={managerNumero} managerMail={managerMail} managerAdresse={managerAdresse} managerSite={managerSite} />
        </div>
    );
}

export default Tools;