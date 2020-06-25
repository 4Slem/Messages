import React from 'react';

import './index.scss';
import arrowBackIco from '../../assets/icons/arrow-back.svg'
import trashIco from '../../assets/icons/trash.svg'


const Header = (props) => {
  return (
    <div className="header">
      <div className="header__back">
        <img className="back" src={arrowBackIco} />
      </div>
      <div className="header__user">
        <div className="user">
          <div className={`user__wrapper ${props.isRemixing ? 'active': ''}`}>
            <div className="user__logo" style={{'backgroundImage': `url(${props.userImage})`}} onClick={() => props.editVcc('userImage')} />
            <div className="user__title" onClick={() => props.editVcc('userName')}>
              { props.userName }
            </div>
          </div>
        </div>
      </div>
      <div className="header__trash">
        {
          props.isRemixing &&
          <div className="trash" onClick={() => props.deleteAllMessages()}>
            <img className="trash__icon" src={trashIco} alt=""/>
            <div className="trash__title">
              Delete All
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Header;
