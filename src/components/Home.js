import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {HELP} from '../constants/routes';
import { compose } from 'redux';
import { connect } from 'react-redux';
//import { someStorageActionCreator, someOtherStorageActionCreator } from '../actionCreators/someActionCreators';
//import { REQUEST_DATA, SOME_STORAGE_REDUCER } from '../constants/reducerTypes';

class Home extends Component {

  /*
  onClickHandler = () => {
    try {
      this.props.someStorageActionCreator(someResource)
    } 
    catch(e) {
      //do something with e
    }
  }
  */

  render() {
    return (
      <div>
        <button onClick={() => this.onClickHandler()}/>
        Welcome to the Electron-React Boilerplate! - Home Page
      </div>
    );
  }
}

/*
const mapStateToProps = (state) => ({
  storeResource : state[SOME_STORAGE_REDUCER]
})

const mapDispatchToProps = {
  someStorageActionCreator,
  someOtherStorageActionCreator,
}
*/

export default compose(
  //connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(Home);
