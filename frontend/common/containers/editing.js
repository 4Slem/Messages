import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';

const Editing = (props) => {
    const editVcc = (value) => {
      props.instantRemixing.onPresentControl(['userSettings', value])
    };

    const deleteAllMessages = () => {
      console.log('deleteAllMessages');
    };

    return (
        <Header
          isRemixing={true}
          userName={props.user.userName}
          userImage={props.user.userImage}
          editVcc={editVcc}
          deleteAllMessages={deleteAllMessages}
        />
    );
};

const mapStatetoProps = (state) => {
  return {
    user: state.userReducer,
    instantRemixing: state.vccReducer.instantRemixing
  }
}

export default connect(mapStatetoProps)(Editing);