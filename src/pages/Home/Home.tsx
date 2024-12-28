import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { useHistory, Link } from 'react-router-dom';
import ExploreContainer from '../../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();

  const navigateToBoard = () => {
    history.push('/board');
  };

  const samplePosts = Array(5).fill({
    id: 1,
    author: '익명',
    date: '12/04',
    title: '어울림 짱짱굿!',
    content: '솔까 어울림 최고지 않남?',
    category: '자유게시판',
    likes: 100,
    comments: 100
  }).map((post, index) => ({ ...post, id: index + 1 }));

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
              <IonTitle>어울림</IonTitle>
            </IonButtons>
            <IonTitle className="small-title">쪽지함</IonTitle>
            <IonButtons slot="end">
              <IonButton>👤</IonButton>
            </IonButtons>
          </IonToolbar>
          {samplePosts.map((post) => (
            <IonCard key={post.id}>
              <IonCardHeader>
                <IonCardSubtitle>{post.category}</IonCardSubtitle>
                <IonCardTitle>{post.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>{post.content}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span role="img" aria-label="thumbs up">👍</span> {post.likes}
                    <span role="img" aria-label="comments" style={{ marginLeft: '10px' }}>💬</span> {post.comments}
                  </div>
                  <div>
                    {post.author} {post.date}
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