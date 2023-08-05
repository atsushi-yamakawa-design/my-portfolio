import Link from 'next/link';
import style from './WorkList.module.scss';
import type { Works } from '../types';

export default function WorkList({ list }: { list: Works[] }) {
  return (
    <>
      <ul className={style.wrapper}>
        {list.map((work) => (
          <li key={work.id} className={` hover-change ${style.name}`}>
            <Link href={`/works/${work.id}`}>{work.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
