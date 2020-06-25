import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { selectMessage, deleteMessage, deleteAllMessages } from '../store/actions/messages.js';

import Header from '../components/header';
import Message from '../components/message';
import EditMessage from '../components/editMessage';

const Editing = (props) => {
  const editVcc = (value) => {
    props.instantRemixing.onPresentControl(['userSettings', value])
  };

  const deleteAll = () => {
    props.deleteAllMessages();
    props.instantRemixing.onSetValue(['messagesSettings', 'messages'], []);
  };

  const select = (message, i) => {
    if (message.imgSrc) {
      props.instantRemixing.onPresentControl(['messagesSettings', `messages`, i, 'imgSrc'])
    } else {
      props.instantRemixing.onPresentControl(['messagesSettings', `messages`, i, 'message'])
    }
    props.selectMessage(message);
    props.instantRemixing.onSetValue(['messagesSettings', 'messages'], props.messages.list);
  };

  const deleteM = (message) => {
    let arr = [...props.messages.list];
    arr = arr.filter(item => item.id !== message.id);
    props.instantRemixing.onSetValue(['messagesSettings', `messages`], arr);
  };

  const sent = (key) => {
    const arr = [...props.messages.list];
    arr.push({...props[key], direction: key === 'receiverMessage' ? 'receiver' : 'sender', id: uuid()});
    props.instantRemixing.onSetValue(['messagesSettings', 'messages'], arr);
    if (key === 'receiverMessage') {
      props.instantRemixing.onSetValue(['messagesSettings', 'receiverMessage'], {message: "", imgSrc: null, id: 10000});
      props.instantRemixing.onSetValue(['messagesSettings', 'receiverMessage', 'imgSrc'], "");
    } else {
      props.instantRemixing.onSetValue(['messagesSettings', 'senderMessage'], {message: "", imgSrc: null, id: 10000});
      props.instantRemixing.onSetValue(['messagesSettings', 'senderMessage', 'imgSrc'], "");
    }
  };

  const edit = () => {
    console.log('edit')
    props.selectMessage({hide: true});
  }

  return (
    <div className="warpper">
      <Header
        isRemixing={true}
        userName={props.user.userName}
        userImage={props.user.userImage}
        editVcc={editVcc}
        deleteAllMessages={deleteAll}
      />

      <div className="messages-list">
        {
          props.messages.list.map((item, i) => {
            return (
              <>
                { !item.edit ?
                  <Message
                    key={i}
                    data={item}
                    click={() => select(item, i)}
                  /> :
                  <EditMessage
                    key={i}
                    data={item}
                    editMessage={() => props.instantRemixing.onPresentControl(['messagesSettings', `messages`, i, 'message'])}
                    deleteMessage={() => deleteM(item, i)}
                    editImage={() => props.instantRemixing.onPresentControl(['messagesSettings', `messages`, i, 'imgSrc'])}
                    sentMessage={edit}
                  />
                }
              </>
            );
          })
        }

        <div className="controlls">
          <EditMessage
            data={{...props.senderMessage, direction: 'sender'}}
            editMessage={() => props.instantRemixing.onPresentControl(['messagesSettings', 'senderMessage', 'message'])}
            editImage={() => props.instantRemixing.onPresentControl(['messagesSettings', 'senderMessage', 'imgSrc'])}
            sentMessage={() => sent('senderMessage')}
            imageCancel={() => props.instantRemixing.onSetValue(['messagesSettings', 'senderMessage', 'imgSrc'], null)}
          />
          <EditMessage
            data={{...props.receiverMessage, direction: 'receiver'}}
            editMessage={() => props.instantRemixing.onPresentControl(['messagesSettings', 'receiverMessage', 'message'])}
            editImage={() => props.instantRemixing.onPresentControl(['messagesSettings', 'receiverMessage', 'imgSrc'])}
            sentMessage={() => sent('receiverMessage')}
            imageCancel={() => props.instantRemixing.onSetValue(['messagesSettings', 'receiverMessage', 'imgSrc'], null)}
          />
        </div>
      </div>
      <div className="bottom-line" />
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    user: state.userReducer,
    instantRemixing: state.vccReducer.instantRemixing,
    messages: state.messagesReducer,
    receiverMessage: state.controlsReducer.receiverMessage,
    senderMessage: state.controlsReducer.senderMessage,
    isRemixing: state.vccReducer.isRemixing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectMessage(data) {
      dispatch(selectMessage(data));
    },
    deleteMessage(data) {
      dispatch(deleteMessage(data));
    },
    deleteAllMessages() {
      dispatch(deleteAllMessages());
    }
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Editing);