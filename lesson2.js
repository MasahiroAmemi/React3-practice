import React from 'react';

class Lesson extends React.Component {
  render() {
    return (
      <div className='lesson-card'>
        <div className='lesson-item'>
          {/* props名nameの値を入れる*/}
          <p>{this.props.name}</p>
          
          {/* src属性に、props名imageの値を指定する */}
          <img  src={this.props.image}/>
          
        </div>
      </div>
    );
  }
}

export default Lesson;
