import React from 'react';

function Profil(props){
    const nomPrenom = props.name.split(' ');
    const picture = props.picture;

    return(
        <div className="profil">
            <p>
                {nomPrenom[0]} <br />
                {nomPrenom[1]}
              </p>
              <img src={picture} alt="Photo de profil" />
        </div>
    )
}

export default Profil;