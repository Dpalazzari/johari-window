import React, { Component } from 'react';
import './Root.css';
import Header from '../header/Header';
import AssigneeList from '../assignee-list/AssigneeList';

class Root extends Component {
  render() {
    return (
      <div className='root'>
        <Header />
        <AssigneeList />
      </div>
    );
  }
}

export default Root;