import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { useHistory, Link } from 'react-router-dom';
import ExploreContainer from '../../components/ExploreContainer';
import './MessagePage.css';

const Home: React.FC = () => {
  const history = useHistory();

  const navigateToBoard = () => {
    history.push('/board');
  };

  const samplePosts = [
    { id: 1, senderName: '사용자 A', content: '어울림 최고', createdAt: '2024.12.11' },
    { id: 2, senderName: '사용자 B', content: '어울림 최고', createdAt: '2024.12.11' },
    { id: 3, senderName: '사용자 C', content: '어울림 최고', createdAt: '2024.12.11' },
    { id: 4, senderName: '사용자 D', content: '어울림 최고', createdAt: '2024.12.11' },
    { id: 5, senderName: '사용자 E', content: '어울림 최고', createdAt: '2024.12.11' }
  ];

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
              <IonTitle className="small-title">어울림</IonTitle>
            </IonButtons>
            <IonTitle>쪽지함</IonTitle>
            <IonButtons slot="end">
              <IonButton>👤</IonButton>
            </IonButtons>
          </IonToolbar>
          {samplePosts.map((post) => (
            <IonCard key={post.id}>
              <IonCardHeader>
                <IonCardSubtitle>{post.senderName}</IonCardSubtitle>
                <IonCardTitle>{post.content}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    보낸 시간: {post.createdAt}
                  </div>
                  <div>
                    <button>⋮</button>
                  </div>
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;