import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './MessageWrite.css';
import { useHistory } from 'react-router-dom';
import { IonInput, IonItem, IonList, IonText, IonButton, IonTextarea } from '@ionic/react';

const MessageWrite: React.FC = () => {
    const [title, setTitle] = useState('');

  return (
    <div className="main-container">
      <header className="withdraw-header">
        <h1>쪽지 보내기</h1>
      </header>

      <div className="message-write-container">
        <IonTextarea
          label="제목(required)"
          labelPlacement="floating"
          fill="solid"
          placeholder="Enter text"
          style={{ flex: 1, padding: '10px 20px' }}
        ></IonTextarea>
      </div>

      <div className="flex-container">
        <IonTextarea
          label="내용(required)"
          labelPlacement="floating"
          fill="solid"
          placeholder="Enter text"
          style={{ flex: 1, padding: '0px 20px' }}
        ></IonTextarea>
      </div>

      <div className="button-container">
        <label htmlFor="file-input" className="upload-icon">📷</label>
        <IonButton className="ion-text-wrap" style={{ maxWidth: '400px' }}>
          전송
        </IonButton>
      </div>
    </div>
  );
};

export default MessageWrite;