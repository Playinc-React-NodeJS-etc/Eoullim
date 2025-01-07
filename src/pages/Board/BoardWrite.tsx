import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './BoardWrite.css';
import { useHistory } from 'react-router-dom';
import { IonButton, IonTextarea, IonButtons, IonTitle } from '@ionic/react';

const MessageWrite: React.FC = () => {
    const history = useHistory();
    const [title, setTitle] = useState('');

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
          const storage = getStorage();
          const storageRef = ref(storage, `uploads/${file.name}`);
          await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(storageRef);
          console.log('File available at', downloadURL);
      }
  };

  return (
    <div className="main-container">
      <header className="board-write-header">
        <IonButtons slot="start">
          <IonTitle onClick={() => history.push('/home')} className="left-title">어울림</IonTitle>
        </IonButtons>
        <h1 className="center-title">게시글 쓰기</h1>
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
        <input
            type="file"
            id="file-input"
            style={{ display: 'none' }}
            onChange={handleFileChange}
        />
        <label htmlFor="file-input" className="upload-icon">📷</label>
        <IonButton className="ion-text-wrap" style={{ maxWidth: '400px' }}>
          전송
        </IonButton>
      </div>
    </div>
  );
};

export default MessageWrite;