import React from 'react';

function CardDirection({managerDisplay}) {

    const affichageVertical = () => {
        managerDisplay.setDisplay(true)
    }

    const affichageHorizontale = () => {
        managerDisplay.setDisplay(false)
    }

    return (
        <div className='cardDirection'>
            <h2>Orientation de la carte</h2>

            <div className='cardDirectionHome'>
                <div className='cardDirectionHomeContent1'>
                    <div className='cardDirectionHomeContent1Boite' onClick={affichageHorizontale}> </div>
                    <span>Horizontal</span>
                </div>
               
               <div className='cardDirectionHomeContent2'>
                    <div className='cardDirectionHomeContent2Boite' onClick={affichageVertical}> </div>
                    <span>Vertical</span>
               </div>
            </div>
        </div>
    );
}

export default CardDirection;