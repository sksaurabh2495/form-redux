import React, { Component } from 'react'
import CreateUser from './containers/CreateUser'
import Table from './containers/Table'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" style={{ marginTop: "10px"}} >
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12">
              <CreateUser />
            </div>
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
