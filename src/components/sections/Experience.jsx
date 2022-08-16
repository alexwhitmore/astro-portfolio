import { Show, createSignal } from 'solid-js';
import '../../styles/experience.css';

const FirstTab = () => {
  return (
    <div className='tab-body first-tab'>
      <div className='test-tab'>
        <p className='tab-body-text'>
          Worked with Azure DevOps to create infrastructure/resources, improve
          automation, and assist with code deployments. Also took part in
          several co-op projects where we then presented in front of 60+ people
          including the senior IT leadership.
        </p>
      </div>
      <br />
      <div className='test-tab'>
        <p className='tab-body-text'>
          Researched enterprise container security and created an extensive
          report listing out the container best practices, possible/common risks
          and threats, and possible implementations.
        </p>
      </div>
      <br />
      <div className='test-tab'>
        <p className='tab-body-text'>
          Evaluated the current intake process (process in which one team
          requests something from another), and leveraged Microsoft tools to
          improve, consolidate, and automate this process.
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
          Leverage tools such as Azure and GitHub to create cloud resources,
          CI/CD pipelines, and automate tasks. Work with the development teams
          to improve existing processes in a Scaled Agile Framework (SAFe)
          environment. Assist with the development of members of the team as a
          technical resource.
        </p>
      </div>
      <br />
      <div className='test-tab'>
        <p className='tab-body-text'>
          Responsible for the design and implementation of a highly available
          and disaster resistant application architecture.
        </p>
      </div>
      <br />
      <div className='test-tab'>
        <p className='tab-body-text'>
          Created a best practice/style guide for infrastructure as code
          (Bicep/ARM Templates) to help shorten the amount of time to onboard,
          increase readability, and promote reusability.
        </p>
      </div>
    </div>
  );
};

const Experiences = () => {
  const [isActive, setIsActive] = createSignal('tabOne');

  const tabOneHandler = () => {
    setIsActive('tabOne');
  };

  const tabTwoHandler = () => {
    setIsActive('tabTwo');
  };

  return (
    <section className='experience-wrapper flex'>
      <h2 className='experience-header' id='experience'>
        Experience
      </h2>
      <div className='tabs-wrapper flex'>
        <div className='nav flex'>
          <ul className='tab'>
            <li
              className={
                isActive() === 'tabOne' ? 'active tab-item tab-one' : 'tab-item'
              }
              onClick={tabOneHandler}>
              Engineer Co-op
            </li>
            <li
              className={
                isActive() === 'tabTwo' ? 'active tab-item tab-two' : 'tab-item'
              }
              onClick={tabTwoHandler}>
              Software Engineer I
            </li>
          </ul>
        </div>
        <Show when={isActive() === 'tabOne'} fallback={<SecondTab />}>
          <FirstTab />
        </Show>
      </div>
    </section>
  );
};

export default Experiences;
