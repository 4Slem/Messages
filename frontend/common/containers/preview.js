import React from 'react';
import { connect } from 'react-redux';
import { Howl } from 'howler';

import Header from '../components/header';
import Message from '../components/message';
import Loader from '../components/loader';

import cameraIcon from '../assets/icons/camera.svg';

class Preview extends React.Component {
  timer = null;
  inSound = null;
  outSound = null;
  myRef = React.createRef();

  state = {
    messages: [],
    loader: false,
    typingText: '',
    camera: false
  };

  componentDidMount() {
    this.init();
  }

  init() {
    this.inSound = new Howl({ src : [this.props.instantRemixing.get(['messagesSettings', 'inSound'])]});
    this.outSound = new Howl({ src : [this.props.instantRemixing.get(['messagesSettings', 'outSound'])]});
    setTimeout(() => {
      this.showNewMessage(0);
    }, 1000);
  }

  showNewMessage(i) {
    if (i === this.props.messages.list.length) return;

    const item = this.props.messages.list[i];
    let messageLength = item.message.length;
    const isReciver = item.direction === 'receiver';
    let char = 0;

    this.setState({ loader: !isReciver });
   
    if (item.imgSrc) {
      messageLength = 15;
      if (isReciver) {
        this.setState({ camera: true });
      }
    }

    this.timer = setInterval(() => {
      if (char === messageLength - 1) {
        clearInterval(this.timer);
        this.setState({
          messages: [...this.state.messages, item],
          typingText: '',
          camera: false,
          loader: false
        });
  
        if (this.props.messages.list[i].direction === 'receiver') {
          this.inSound.play();
        } else {
          this.outSound.play();
        }
        setTimeout(() => {
          this.myRef.scrollTop = this.myRef.scrollTop + 10000;
        }, 100)
        this.showNewMessage(i + 1);
        return;
      }

      if (isReciver && !item.imgSrc) { this.setState({ typingText: this.state.typingText + item.message[char] }) }
      
      char = char + 1;
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className="warpper">
        <Header
          isRemixing={false}
          userName={this.props.user.userName}
          userImage={this.props.user.userImage}
        />
        <div ref={(e) => this.myRef = e} className="messages-list">
          {
            this.state.messages.map((item, i) => {
              return (<Message key={i} data={item} />)
            })
          }
          { this.state.loader && <Loader isReciver={'receive'} /> }
        </div>
        <div className="footer">
          <div className="footer__icon">
            <img className={`${this.state.camera && 'active'}`} src={cameraIcon} />
          </div>
          <div className="footer__input">
            <input type="text" className="input" placeholder="Message" value={this.state.typingText} />
          </div>
        </div>
        <div className="bottom-line" />
      </div>
    );
  }
};

const mapStatetoProps = (state) => {
  return {
    user: state.userReducer,
    instantRemixing: state.vccReducer.instantRemixing,
    messages: state.messagesReducer,
    receiverMessage: state.controlsReducer.receiverMessage,
    senderMessage: state.controlsReducer.senderMessage
  }
}

export default connect(mapStatetoProps)(Preview);