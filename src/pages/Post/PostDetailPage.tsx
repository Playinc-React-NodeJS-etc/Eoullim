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

  const comments = Array.from({ length: 3 }, (_, index) => ({
    id: index + 1,
    author: '익명',
    content: '어울림 최고',
    date: '12/04'
  }));

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="main-container">
          <header className="board-header">
            <button onClick={() => history.push('/home')} className="back-button">
              ←
            </button>
            <h1 className="board-title">자유게시판</h1>
          </header>
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
            {comments.map(comment => (
              <IonItem key={comment.id}>
                <IonLabel>
                    <div className="comment">
                      <div className="comment-author-info">
                        <img src="/default-profile.png" alt="프로필" className="comment-profile" />
                        <span className="comment-author">{comment.author}</span>
                      </div>
                      <span className="comment-content">{comment.content}</span>
                      <div className="comment-actions">
                        <span className="comment-date">{comment.date}</span>
                        <button className="action-button" onClick={() => history.push('/messages/write')}>⋮</button>
                      </div>
                    </div>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;