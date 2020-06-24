import React from 'react';
import { InstantRemixing, FeedSdk } from '@withkoji/vcc';
import './assets/scss/phone.scss';
import Header from './components/header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.instantRemixing = new InstantRemixing();
    this.instantRemixing.onSetRemixing((isRemixing) => {
      this.isRemixing = isRemixing;
      console.log('this.isRemixing', this.isRemixing)
    });

    this.instantRemixing.ready();
    this.feed = new FeedSdk();
    this.feed.load();
  }

  componentDidMount() {
    this.instantRemixing.onValueChanged((path, newValue) => {
      this.setState({
        userName: newValue
      });
    })
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
            <Header isRemixing={true} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
