import React from 'react';

class Hobbies extends React.Component {

  render () {
    var hobbies = this.props.hobbyList.map(function(hobby,index){
      return (<li key={index}>{hobby}</li>);
    });
    return <div>
                <h5>My hobbieszzzzsasa:</h5>
              <ul>
                {hobbies}
              </ul>
            </div>;
  }
}
export default Hobbies;
