import React, { useState, useRef, useEffect } from 'react';
import '../styles/header-menu.css';

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const buttonHandler = () => setIsOpen(!isOpen);

  return (
    <div className='test' ref={wrapperRef}>
      <button
        className='menu-icon-wrapper'
        aria-label='Right Align'
        onClick={buttonHandler}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 448 512'
          fill='currentColor'
          className='menu-icon'>
          <path d='M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z' />
        </svg>
      </button>
      {isOpen && (
        <div id='myDropdown' className='dropdown-content'>
          <a href='#about' onClick={buttonHandler}>
            About
          </a>
          <a href='#experience' onClick={buttonHandler}>
            Experience
          </a>
          <a href='#contact' onClick={buttonHandler}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
