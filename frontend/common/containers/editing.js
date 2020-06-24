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
      props.instantRemixing.onSetValue(['messagesSettings', 'messages'], null);
    };

    const select = (message) => {
      props.selectMessage(message);
      props.instantRemixing.onSetValue(['messagesSettings', 'editMessage'], message);
    //   setTimeout(() => {
    //     props.instantRemixing.onPresentControl(['messagesSettings', 'editMessage']);
    //   }, 100);
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
        
        <div class="messages-list">
          {
            props.messages.list.map((item) => {
              return (
                <>
                  { !item.edit ? <Message data={item} click={() => select(item)} /> : <EditMessage data={item} click={() => select(item)} /> }
                </>
              );
            })
          }
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