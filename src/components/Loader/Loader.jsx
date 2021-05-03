import { Component } from 'react';
import Loader from 'react-loader-spinner';
export default class App extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="Oval"
        color="#00BFFF"
        height={40}
        width={40}
        timeout={3000} //3 secs
      />
    );
  }
}
