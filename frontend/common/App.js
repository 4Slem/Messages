import React from 'react';
import { connect } from 'react-redux';
import  { FeedSdk } from '@withkoji/vcc';
import './assets/scss/phone.scss';

import { onSetRemixing } from './store/actions/vcc.js';
import { editUserName, editUserImage } from './store/actions/user.js';
import { addMessages, editMessage } from './store/actions/messages.js';
import { updateReceiver, updateSender } from './store/actions/controls.js';


import Editing from './containers/editing.js';
import Preview from './containers/preview.js';

class App extends React.Component {
  componentDidMount() {
    this.init();
    this.initUser();
    this.initMessages();
    this.initControlls();
  }

  init() {
    const instantRemixing = this.props.vcc.instantRemixing;

    instantRemixing.onSetRemixing((isRemixing) => {
      this.props.onSetRemixing(isRemixing);
    });

    instantRemixing.onValueChanged((path, newValue) => {
      if ((path[0] && path[0] === 'userSettings') && path[1]) {
        if (path[1] === 'userName') {
          this.props.editUserName(newValue)
        } else if (path[1] === 'userImage') {
          this.props.editUserImage(newValue);
        }
      } else if ((path[0] && path[0] === 'messagesSettings') && path[1]) {
        if (path[1] === 'editMessage') {
          this.props.editMessage(newValue);
        } else if (path[1] === 'messages') {
          this.props.addMessages(newValue);
        } else if (path[1] === 'receiverMessage') {
          this.props.updateReceiver(newValue);
        } else if (path[1] === 'senderMessage') {
          this.props.updateSender(newValue);
        }
      }
    });

    instantRemixing.ready();
    this.feed = new FeedSdk();
    this.feed.load();
  }

  initUser() {
    const data = this.props.vcc.instantRemixing.get(['userSettings']);
    this.props.editUserName(data.userName);
    this.props.editUserImage(data.userImage);
  }

  initMessages() {
    this.props.addMessages(this.props.vcc.instantRemixing.get(['messagesSettings', 'messages']));
  }

  initControlls() {
    const data = this.props.vcc.instantRemixing.get(['messagesSettings']);
    this.props.updateSender(data.senderMessage)
    this.props.updateReceiver(data.receiverMessage)
  }

  render() {
    return (
      <div>
        <div className="marvel-device iphone-x">
          <div className="notch">
            <div className="camera" />
            <div className="speaker" />
          </div>
          <div className="top-bar" />
          <div className="sleep" />
          <div className="bottom-bar" />
          <div className="volume" />
          <div className="overflow">
            <div className="shadow shadow--tr" />
            <div className="shadow shadow--tl" />
            <div className="shadow shadow--br" />
            <div className="shadow shadow--bl" />
          </div>
          <div className="inner-shadow" />
          <div className="screen">
            { !this.props.vcc.isRemixing ? <Preview /> : <Editing /> }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    vcc: state.vccReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetRemixing(value) {
      dispatch(onSetRemixing(value));
    },
    editUserName(value) {
      dispatch(editUserName(value));
    },
    editUserImage(value) {
      dispatch(editUserImage(value));
    },
    addMessages(data) {
      dispatch(addMessages(data));
    },
    editMessage(data) {
      dispatch(editMessage(data));
    },
    updateReceiver(data) {
        dispatch(updateReceiver(data));
    },
    updateSender(data) {
        dispatch(updateSender(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
