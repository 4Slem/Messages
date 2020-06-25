import React from 'react';
import { connect } from 'react-redux';
// import { Howl } from 'howler';

import Header from '../components/header';
import Message from '../components/message';
import Loader from '../components/loader';

import cameraIcon from '../assets/icons/camera.svg';

class Preview extends React.Component {
  timer = null;
  inSound = null;
  outSound = null;

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loader: false,
      typingText: ''
    };
  }


  componentDidMount() {
    this.showNewMessage(0)
    // this.inSound = new Howl({ src : [this.props.instantRemixing.get(['messagesSettings', 'inSound'])]});
    // this.outSound = new Howl({ src : [this.props.instantRemixing.get(['messagesSettings', 'outSound'])]});
    // const elem = document.querySelector('.messages-list');
    // let i = 0;
    // const l = this.props.messages.list.length;
    // this.timer = setInterval(() => {
    //   if (this.props.messages.list[i + 1] && this.props.messages.list[i + 1].direction !== 'receiver') {
    //     this.setState({
    //       loader: true
    //     });
    //   } else {
    //     this.setState({
    //         loader: false
    //     });
    //   }
    //   // if (this.props.messages.list[i].direction === 'receiver') {
    //   //   this.inSound.play();
    //   // } else {
    //   //   this.outSound.play();
    //   // }

    //   if (i === l - 1) {
    //     clearInterval(this.timer)
    //   }


    //   this.setState({
    //     messages: [...this.state.messages, this.props.messages.list[i]]
    //   });

    //   i = i + 1;

    //   elem.scrollTop = elem.scrollTop + 10000
    // },2000);
  }

  showNewMessage(i) {
    if (i === this.props.messages.list.length - 1) return;

    const item = this.props.messages.list[i];
    const messageLength = item.message.length;
    const isReciver = item.direction === 'receiver';
    let char = 0;

    this.setState({ loader: !isReciver });

    this.timer = setInterval(() => {
      if (char === messageLength - 1) {
        clearInterval(this.timer);
        this.setState({
          messages: [...this.state.messages, item],
          typingText: ''
        });
        this.showNewMessage(i + 1);
        return;
      }

      if (isReciver) {
        this.setState({ typingText: this.state.typingText + item.message[char] })
      }
      
      char = char + 1;
    }, 200);
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
        <div className="messages-list">
          {
            this.state.messages.map((item, i) => {
              return (<Message key={i} data={item} />)
            })
          }
          { this.state.loader && <Loader isReciver={'receive'} /> }
        </div>
        <div className="footer">
          <div className="footer__icon">
            <img src={cameraIcon} />
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
    senderMessage: state.controlsReducer.senderMessage,
    isRemixing: state.vccReducer.isRemixing
  }
}

export default connect(mapStatetoProps)(Preview);