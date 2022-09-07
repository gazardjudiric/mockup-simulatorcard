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

            <div className='cardDirectionContent'>
                <div className='cardDirectionContentBoite' onClick={affichageHorizontale}> </div>
                <span>Horizontal</span>

                <div className='cardDirectionContentBoite1' onClick={affichageVertical}> </div>
                <span>Vertical</span>
            </div>
        </div>
    );
}

export default CardDirection;