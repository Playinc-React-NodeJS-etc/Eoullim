import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonLabel, IonItemDivider, IonItemGroup, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import './Board.css';

const Board: React.FC = () => {
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Board</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="main-container">
        <IonContent fullscreen>
          <p>게시판 페이지입니다.</p>
          <IonItemGroup>
              <IonItemDivider>
              <IonLabel>Fruits</IonLabel>
              </IonItemDivider>

              <IonItemSliding>
              <IonItem>
                  <IonLabel>Grapes</IonLabel>
              </IonItem>
              <IonItemOptions>
                  <IonItemOption>Favorite</IonItemOption>
              </IonItemOptions>
              </IonItemSliding>

              <IonItemSliding>
              <IonItem>
                  <IonLabel>Apples</IonLabel>
              </IonItem>
              <IonItemOptions>
                  <IonItemOption>Favorite</IonItemOption>
              </IonItemOptions>
              </IonItemSliding>

              <IonItemSliding>
              <IonItem lines="none">
                  <IonLabel>Bananas</IonLabel>
              </IonItem>
              <IonItemOptions>
                  <IonItemOption>Favorite</IonItemOption>
              </IonItemOptions>
              </IonItemSliding>
              <IonCard color="primary">
              <IonCardHeader>
              <IonCardTitle>Card Title</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>Card Content</IonCardContent>
          </IonCard>

          <IonCard button = {true} color="secondary" disabled={false} type="reset">
              <IonCardHeader>
              <IonCardTitle>Card Title</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>Card Content</IonCardContent>
        </IonCard>


          </IonItemGroup>
        </IonContent>
      </div>
    </IonPage>
  );
};

export default Board;