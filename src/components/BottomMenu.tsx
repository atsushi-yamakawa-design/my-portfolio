import Link from 'next/link';
import style from './BottomMenu.module.scss';

export default function BottomMenu({
  showTop = true,
  showAbout = true,
  showEx = true,
  showSNS = true,
  showContact = true,
}) {
  return (
    <>
      <div className={style.wrapper}>
        <ul className={style.menuList}>
          <li className={showTop ? '' : 'hide'}>
            <Link href={`/`} className={`hover-change textPale`}>
              work
            </Link>
          </li>
          <li className={showAbout ? '' : 'hide'}>
            <Link href={`/about`} className={`hover-change textPale`}>
              about
            </Link>
          </li>
          <li className={showEx ? '' : 'hide'}>
            <Link href={`/exhibitions`} className={`hover-change textPale`}>
              exhibitions
            </Link>
          </li>
          <li className={showContact ? '' : 'hide'}>
            <Link href={`/contact`} className={`hover-change textPale`}>
              contact
            </Link>
          </li>
        </ul>
        <ul className={`${style.snsList} ${showSNS ? '' : 'hide'}`}>
          <li>
            <a
              href={`https://twitter.com/Seeyou_myfriend`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={'twitter'} />
            </a>
          </li>
          <li>
            <a
              href={`https://instagram.com/atsushi_design?igshid=MjEwN2IyYWYwYw==`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={'instagram'} />
            </a>
          </li>
          <li>
            <a
              href={`https://www.facebook.com/profile.php?id=100024585540327`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={'facebook'} />
            </a>
          </li>
          {/* <li>
            <a
              href={`https://www.threads.net/@atsushi_design`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={'threads'} />
            </a>
          </li> */}
          <li>
            <a
              href={`https://note.com/atsushi_yamakawa/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={'note'} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
