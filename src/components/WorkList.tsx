import Link from 'next/link';
import menu from './WorkList.module.scss';
import type { Works } from '../types';

export default function WorkList({ list }: { list: Works[] }) {
  return (
    <>
      <ul className={menu.wrapper}>
        {list.map((work) => (
          <li key={work.id} className={menu.name}>
            <Link href={`/works/${work.id}`}>{work.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
