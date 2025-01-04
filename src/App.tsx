import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import Board from './pages/Board/Board';
import BoardWrite from './pages/Board/BoardWrite';
import Splash from './pages/Splash/Splash';
import MessagePage from './pages/Message/MessagePage';
import ProfilePage from './pages/Profile/ProfilePage';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import WithdrawPage from './pages/Withdraw/WithdrawPage';
import MessageWrite from './pages/Message/MessageWrite';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/splash" component={Splash} exact={true} />
        <Route path="/home" component={Home} exact={true} />
        <Route path="/board" component={Board} exact={true} />
        <Route path="/board-write" component={BoardWrite} exact={true} />
        <Route path="/message" component={MessagePage} exact={true} />
        <Route path="/message-write" component={MessageWrite} exact={true} />
        <Route path="/profile" component={ProfilePage} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/signup" component={Signup} exact={true} />
        <Route path="/withdraw" component={WithdrawPage} exact={true} />
        <Redirect exact from="/" to="/splash" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
