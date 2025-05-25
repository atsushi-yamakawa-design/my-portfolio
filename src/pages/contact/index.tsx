import React, { useState, useEffect } from 'react';
import HeaderMeta from '@components/HeaderMeta';
import BottomMenu from '@components/BottomMenu';
import PageHeading from '@components/PageHeading';
import style from './contact.module.scss';

export default function Contact() {
  // フォームが表示された時間を記録
  const [startTime, setStartTime] = useState<number>(Date.now());

  useEffect(() => {
    // コンポーネントがマウントされたときに開始時間を設定
    setStartTime(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formTime = Date.now() - startTime;

    if (formTime < 3000) {
      alert('フォームの送信に時間がかかりすぎています。再度お試しください。');
      return;
    }

    const isConfirmed = window.confirm('この内容で送信しますか？');
    if (isConfirmed) {
      try {
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const result = await response.json();
          console.error('サーバーエラー:', result.error);
          throw new Error(result.error || '送信に失敗しました。');
        }

        alert('送信が完了しました。');
        window.location.href = '/'; // トップページにリダイレクト
      } catch (error) {
        console.error('エラー詳細:', error);
        alert('エラーが発生しました。再度お試しください。');
      }
    }
  };

  return (
    <>
      <HeaderMeta pageUrl="/contact" />
      <main>
        <div className={'loadScreen'}></div>
        <PageHeading heading="Contact" />
        <div className={style.contentsWrapper}>
          <form onSubmit={handleSubmit} className={style.form}>
            <ul>
              <li>
                <label htmlFor="name">名前 Name</label>
                <input type="text" id="name" name="name" required />
              </li>
              <li>
                <label htmlFor="email">連絡先 Contact information</label>
                <input type="email" id="email" name="email" required />
              </li>
              <li>
                <label htmlFor="message">内容 Content</label>
                <textarea id="message" name="message" required></textarea>
              </li>
            </ul>
            <div className={style.submitButtonWrapper}>
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
        <BottomMenu showContact={false} />
      </main>
    </>
  );
}
