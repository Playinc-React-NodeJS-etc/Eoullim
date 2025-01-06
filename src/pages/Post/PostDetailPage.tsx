import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonItem, IonLabel } from '@ionic/react';
import { useHistory, Link } from 'react-router-dom';
import ExploreContainer from '../../components/ExploreContainer';
import './PostDetailPage.css';

const Home: React.FC = () => {
  const history = useHistory();

  const navigateToBoard = () => {
    history.push('/board');
  };

  const samplePost = {
    id: 1,
    author: '익명',
    date: '12/04',
    title: '어울림 짱짱굿!',
    content: '솔까 어울림 최고지 않남?',
    category: '자유게시판',
    likes: 100,
    comments: 100
  };

  const comments = [
    { id: 1, author: '익명', content: '어울림 최고', date: '12/04' },
    { id: 2, author: '익명', content: '어울림 최고', date: '12/04' },
    { id: 3, author: '익명', content: '어울림 최고', date: '12/04' },
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
              <IonTitle>어울림</IonTitle>
            </IonButtons>
            <IonTitle className="small-title">쪽지함</IonTitle>
            <IonButtons slot="end">
              <IonButton>👤</IonButton>
            </IonButtons>
          </IonToolbar>
          <IonCard key={samplePost.id}>
            <IonCardHeader>
              <IonCardSubtitle>{samplePost.category}</IonCardSubtitle>
              <IonCardTitle>{samplePost.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{samplePost.content}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span role="img" aria-label="thumbs up">👍</span> {samplePost.likes}
                  <span role="img" aria-label="comments" style={{ marginLeft: '10px' }}>💬</span> {samplePost.comments}
                  <button className="action-button" onClick={() => history.push('/messages/write')}>⋮</button>
                </div>
                <div>
                  {samplePost.author} {samplePost.date}
                </div>
              </div>
            </IonCardContent>
          </IonCard>
          <IonList>
            <IonItem>
              <IonLabel>
                <div className="comments-section">
                  {comments.map(comment => (
                    <div key={comment.id} className="comment">
                      <div className="comment-author-info">
                        <img src="/default-profile.png" alt="프로필" className="comment-profile" />
                        <div className="comment-details" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                          <span className="comment-author">{comment.author}</span>
                          <span className="comment-content">{comment.content}</span>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span className="comment-date">{comment.date}</span>
                            <button className="action-button" onClick={() => history.push('/messages/write')}>⋮</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </IonLabel>
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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;