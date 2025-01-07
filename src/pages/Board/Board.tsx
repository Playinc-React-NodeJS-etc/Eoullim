import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { useHistory, Link } from 'react-router-dom';
import './Board.css';

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
          <header className="board-header">
            <button onClick={() => history.push('/home')} className="back-button">
              ←
            </button>
            <h1 className="board-title">자유게시판</h1>
          </header>
          {samplePosts.map((post) => (
            <IonCard key={post.id} onClick={() => history.push('/post-detail')}>
              <IonCardHeader>
                <IonCardSubtitle>{post.category}</IonCardSubtitle>
                <IonCardTitle>{post.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>{post.content}</p>
                <div className="action-button-container">
                  <span role="img" aria-label="thumbs up">👍</span> {post.likes}
                  <span role="img" aria-label="comments" style={{ marginLeft: '10px' }}>💬</span> {post.comments}
                  <button onClick={(e) => { e.stopPropagation(); history.push('/message-write'); }}>⋮</button>
                <div>
                    {post.author} {post.date}
                  </div>
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        <Link to="/board-write" className="add-button">
          <button className="add-button">
            +
          </button>
        </Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;