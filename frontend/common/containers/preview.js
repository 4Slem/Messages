import React, { useState } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import Message from '../components/message';
import Loader from '../components/loader';

import cameraIcon from '../assets/icons/camera.svg';

class Preview extends React.Component {

  state = {
    messages: [],
    loader: false
  }

  timer;

  componentDidMount() {
        let i = 0;
        const l = this.props.messages.list.length;
        this.timer = setInterval(() => {
          if (this.props.messages.list[i + 1] && this.props.messages.list[i + 1].direction !== 'receiver') {
            this.setState({
              loader: true
            });
          } else {
            this.setState({
              loader: false
            });
          }


          if (i === l - 1) {
            clearInterval(this.timer)
          }
          console.log(this.props.messages.list[i])
          this.setState({
            messages: [...this.state.messages, this.props.messages.list[i]]
          });

          i = i + 1;
        },2000);
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
                      return (
                        <Message
                            key={i}
                            data={item}
                            click={() => select(item, i)}
                        />
                      )
                      
                    }) 
                  }
                  {
                    this.state.loader ? <Loader isReciver={'receive'} /> : null
                  }
                </div>
                <div className="footer">
                    <div className="footer__icon">
                        <img src={cameraIcon} />
                    </div>
                    <div className="footer__input">
                        <input type="text" className="input" placeholder="Message" />
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