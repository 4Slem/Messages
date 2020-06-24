import React from 'react';
import { InstantRemixing, FeedSdk } from '@withkoji/vcc';

class App extends React.Component {
  state = {
    userName: 'sdfsd'
  }

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
    console.log(this.instantRemixing.get(['userSettings', 'userName']), 'sdfdsf')
 this.instantRemixing.onValueChanged((path, newValue) => {
   console.log('sdfsd')
      this.setState({
        userName: this.instantRemixing.get(['userSettings', 'userName'])
      });
    })
  }

  render() {
    return (
      <div onClick={() => this.instantRemixing.onPresentControl(['userSettings', 'userName'])}>{ this.state.userName }</div>
    );
  }
}

export default App;
