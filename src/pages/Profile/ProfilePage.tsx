import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonItem, IonLabel, IonList } from '@ionic/react';
import './ProfilePage.css';
import { useHistory } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="main-container">
            <IonToolbar>
              <IonButtons slot="start">
                <IonTitle onClick={() => history.push('/home')}>어울림</IonTitle>
              </IonButtons>
              <IonTitle className="small-title" onClick={() => history.push('/message')}>쪽지함</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => history.push('/profile')}>👤</IonButton>
              </IonButtons>
            </IonToolbar>
        
          <div className="profile-header">
            <div className="profile-icon">🖼️</div>
              <div className="profile-name">신스님</div>
              <div className="profile-school">이화여자대학교 22학번</div>
          </div>
          <IonList>
            <IonItem>
              <IonLabel>⚠️ FAQ</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>⚠️ 고객센터</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>⚠️ 이용약관</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>⚠️ 개인정보처리방침</IonLabel>
            </IonItem>
          </IonList>
          <div className="action-button">
            <div onClick={() => history.push('/withdraw')}>회원탈퇴</div>
            <div onClick={() => history.push('/login')}>로그아웃</div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;