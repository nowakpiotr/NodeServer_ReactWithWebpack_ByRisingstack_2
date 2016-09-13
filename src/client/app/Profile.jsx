import React from 'react';
import styles from './App.css';

class Profile extends React.Component {
  render () {
    return <div>
                <p className={styles.header}>Hello worldzzz222232999!</p>
                <h3>{this.props.name}</h3>
                <img src={this.props.imgURL} />
            </div>;
  }
}

export default Profile;
