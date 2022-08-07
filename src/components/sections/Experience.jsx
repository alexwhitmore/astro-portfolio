import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import '../../styles/experience.css';

const FirstTab = () => {
  return (
    <div className='tab-body first-tab'>
      <div className='test-tab'>
        <p className='tab-body-text'>
          One. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          quidem iste incidunt temporibus consectetur amet illum laborum a!
          Optio voluptas libero quo illum? Molestias nemo labore quos, facilis
          fuga inventore.
        </p>
      </div>
      <br />
      <div className='test-tab'>
        <p className='tab-body-text'>
          One. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          quidem iste incidunt temporibus consectetur amet illum laborum a!
          Optio voluptas libero quo illum? Molestias nemo labore quos, facilis
          fuga inventore.
        </p>
      </div>
    </div>
  );
};

const SecondTab = () => {
  return (
    <div className='tab-body second-tab flex'>
      <div className='test-tab'>
        <p className='tab-body-text'>
          Two. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          quidem iste incidunt temporibus consectetur amet illum laborum a!
          Optio voluptas libero quo illum? Molestias nemo labore quos, facilis
          fuga inventore.
        </p>
      </div>
      <br />
      <div className='test-tab'>
        <p className='tab-body-text'>
          Two. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          quidem iste incidunt temporibus consectetur amet illum laborum a!
          Optio voluptas libero quo illum? Molestias nemo labore quos, facilis
          fuga inventore.
        </p>
      </div>
    </div>
  );
};

const Experience = () => {
  const [isActive, setIsActive] = useState('tabOne');

  const tabOneHandler = () => {
    setIsActive('tabOne');
  };

  const tabTwoHandler = () => {
    setIsActive('tabTwo');
  };

  return (
    <section className='experience-wrapper flex' id='experience'>
      <h2 class='experience-header'>Experience</h2>
      <div className='tabs-wrapper flex'>
        <div className='nav flex'>
          <ul className='tab'>
            <li
              className={
                isActive === 'tabOne' ? 'active tab-item tab-one' : 'tab-item'
              }
              onClick={tabOneHandler}>
              Engineering Co-op
            </li>
          </ul>
          <ul className='tab'>
            <li
              className={
                isActive === 'tabTwo' ? 'active tab-item tab-two' : 'tab-item'
              }
              onClick={tabTwoHandler}>
              Software Engineer I
            </li>
          </ul>
        </div>
        <div>{isActive === 'tabOne' ? <FirstTab /> : <SecondTab />}</div>
      </div>
    </section>
  );
};

export default Experience;
