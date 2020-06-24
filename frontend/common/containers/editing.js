import React from 'react';
import { connect } from 'react-redux';

import { selectMessage } from '../store/actions/messages.js';

import Header from '../components/header';
import Message from '../components/message';
import EditMessage from '../components/editMessage';

const Editing = (props) => {
    const editVcc = (value) => {
      props.instantRemixing.onPresentControl(['userSettings', value])
    };

    const deleteAllMessages = () => {
      props.instantRemixing.onPresentControl(['messagesSettings']);
    };

    const select = (message) => {
      props.selectMessage(message);
      props.instantRemixing.onSetValue(['messagesSettings', 'editMessage'], message);
    }

    const editReceiverMessage = () => {
      console.log('sdfdsf')
      props.instantRemixing.onPresentControl(['messagesSettings', 'receiverMessage']);
    }

    return (
      <>
        <Header
          isRemixing={true}
          userName={props.user.userName}
          userImage={props.user.userImage}
          editVcc={editVcc}
          deleteAllMessages={deleteAllMessages}
        />
        
        <div className="messages-list">
          {
            props.messages.list.map((item, i) => {
              return (
                <>
                { !item.edit ? <Message data={item} click={() => select(item)} key={i} /> : <EditMessage key={i} data={item} /> }
                </>
              );
            })
          }
        </div>
        <div className="messages-controls">
            <EditMessage data={props.messages.list[1]} editMessage={editReceiverMessage}  />
            <EditMessage data={props.messages.list[0]}  />
        </div>
      </>
    );
};

const mapStatetoProps = (state) => {
  return {
    user: state.userReducer,
    instantRemixing: state.vccReducer.instantRemixing,
    messages: state.messagesReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectMessage(data) {
      dispatch(selectMessage(data));
    }
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Editing);