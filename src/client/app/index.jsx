import React from 'react';
import {render} from 'react-dom';
import Profile from './Profile.jsx';
import Hobbies from './Hobbies.jsx';

var DATA = {
    name: 'John Smith',
    imgURL: 'http://lorempixel.com/200/200/',
    hobbyList: ['coding', 'writing', 'skiing']
}

class App extends React.Component {
  render () {
    return <div>AAAasassdsd
                <Profile name={this.props.profileData.name} imgURL={this.props.profileData.imgURL}/>
                <Hobbies hobbyList={this.props.profileData.hobbyList}  />
            </div>;
  }
}

render(<App profileData={DATA} />, document.getElementById('app'));
