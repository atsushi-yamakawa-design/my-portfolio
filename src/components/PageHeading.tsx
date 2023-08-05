import style from './PageHeading.module.scss';

export default function PageHeading({ heading = 'NONE' }) {
  return (
    <>
      <div className={style.headingWrapper}>
        <h1>{heading}</h1>
      </div>
    </>
  );
}
