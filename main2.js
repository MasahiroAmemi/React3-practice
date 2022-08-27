import React from 'react';
import Lesson from './Lesson';

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        name: 'HTML & CSS',
        image: '画像ファイル先',
      },
      {
        name: 'Sass',
        image: '画像ファイル先',
      },
      {
        name: 'JavaScript',
        image: '画像ファイル先',
      },
      {
        name: 'React',
        image: '画像ファイル先',
      },
    ];
    
    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Hello, World.</h1>
            <h2>プログラミングの世界へようこそ！</h2>
          </div>
          <div className='lesson-container'>
            <h3 className='section-title'>学べるレッスン</h3>
            {/* lessonListに対して、mapメソッドを用いる */}
            {lessonList.map((lessonItem) => {
              return (
              <Lesson
                  name={lessonItem.name}
                  image={lessonItem.image}
                />
              );
            })}
            
          </div>
        </div>
      </div>
    );
  }
}

export default Main;