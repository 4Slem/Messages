import React from 'react';

import '../../assets/scss/header.scss';
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
            <div className="user__logo">

            </div>
            <div className="user__title">
              John Doe
            </div>
          </div>
        </div>
      </div>
      <div className="header__trash">
        {
          props.isRemixing &&
          <div className="trash">
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
