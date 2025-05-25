import Image from 'next/image';
import Link from 'next/link';
import style from './entry.module.scss';
import { client } from '@libs/client';

export default function EntryPage({}: {}) {
  return (
    <>
      <div className={style.entryPage}>
        <h3>Atsushi Yamakawa</h3>
        <div className={style.snsIcons}>
          {/* SNSアイコンの配置 */}
          <a
            href={`https://twitter.com/Seeyou_myfriend`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={'twitter'} />
          </a>
          <a
            href={`https://www.facebook.com/profile.php?id=100024585540327`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={'facebook'} />
          </a>
          <a
            href={`https://instagram.com/atsushi_design?igshid=MjEwN2IyYWYwYw==`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={'instagram'} />
          </a>
          <a
            href={`https://note.com/atsushi_yamakawa/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={'note'} />
          </a>
        </div>

        {/* worksページへの動線 */}
        <div className={style.worksLink}>
          <Link href="/">
            <button className={style.worksButton}>View Portfolio</button>
          </Link>
        </div>
      </div>
    </>
  );
}
