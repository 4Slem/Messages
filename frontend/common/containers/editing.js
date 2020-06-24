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
      console.log(message.message)
      message.id = (Math.random() * 1000).toString();
      try {
        props.instantRemixing.onSetValue(['messagesSettings', 'editMessage'], message);
      } catch (e) {
        console.log(e);
      }
      
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
        
        <div className="messages-list">
          {
            props.messages.list.map((item, i) => {
              return (
                <>
                { !item.edit ? <Message data={item} click={() => select(item)} key={i} /> : <EditMessage key={i} data={item} click={() => select(item)} /> }
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