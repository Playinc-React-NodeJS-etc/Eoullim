import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import splashIcon from '../../assets/images/splash-icon.png';
import './Splash.css';

const Splash: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div className="splash-container">
      <div className="splash-content">
        <img 
          src={splashIcon} 
          alt="환영합니다" 
          className="splash-icon"
        />
      </div>
    </div>
  );
};

export default Splash;