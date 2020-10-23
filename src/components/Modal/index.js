import React from 'react';

function Modal({ onClose, currentPhoto}) {
    const {name, category, description, index, deployedLink, repoLink} = currentPhoto;
  

    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img src={require(`../../assets/${category}/${index}.png`)} alt="current category" />
          <p>{description}</p>
          <button onClick={onClose} type="button">Close this modal</button>
          <a href={deployedLink}><button className="btnLink">Deployed Link</button></a>
          <a href={repoLink}><button className="btnLink">Github Link</button></a>
        </div>
      </div>
    );
  }
  
  export default Modal;