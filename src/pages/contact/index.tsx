import React from 'react';
import HeaderMeta from '@components/HeaderMeta';
import BottomMenu from '@components/BottomMenu';
import PageHeading from '@components/PageHeading';
import style from './contact.module.scss';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // デフォルトのフォーム送信を阻止
    const isConfirmed = window.confirm('この内容で送信しますか？');
    if (isConfirmed) {
      e.currentTarget.submit();
    }
  };

  return (
    <>
      <HeaderMeta pageUrl="/contact" />
      <main>
        <div className={'loadScreen'}></div>
        <PageHeading heading="Contact" />
        <div className={style.contentsWrapper}>
          <form
            action="https://api.postn.me/workspaces/atsushi-yamakawa-form/forms/my-form/answers"
            method="post"
            className={style.form}
            onSubmit={(e) => handleSubmit(e)}
          >
            <ul>
              <li>
                <label htmlFor="name">名前 Name</label>
                <input type="text" id="name" name="name" required />
              </li>
              <li>
                <label htmlFor="contact">連絡先 Contact information</label>
                <input type="text" id="contact" name="contact" required />
              </li>
              <li>
                <label htmlFor="Content">内容 Content</label>
                <textarea id="Content" name="Content" required />
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
