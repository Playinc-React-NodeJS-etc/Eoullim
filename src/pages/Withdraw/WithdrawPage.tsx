import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './WithdrawPage.css';
import { IonInput, IonItem, IonList, IonText, IonButton } from '@ionic/react';

const WithdrawPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/withdraw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        alert('회원탈퇴가 완료되었습니다.');
        history.push('/signup');
      } else {
        alert('회원탈퇴에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="main-container">
      <header className="withdraw-header">
        <h1>회원탈퇴</h1>
      </header>

      <IonInput
        labelPlacement="floating"
        value={password}
        onIonChange={(e) => setPassword(e.detail.value!)}
        style={{ color: 'black' }}
      >
        <div slot="label">
          비밀번호 <IonText color="danger">(Required)</IonText>
        </div>
      </IonInput>

      <div className="withdraw-button-container">
        <IonButton className="ion-text-wrap" style={{ maxWidth: '400px' }}>
          회원탈퇴
        </IonButton>
      </div>


    </div>
  );
};

export default WithdrawPage;