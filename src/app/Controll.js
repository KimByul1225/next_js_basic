"use client"

import Link from 'next/link';
import { useParams } from 'next/navigation';

export function Controll() {
  const params = useParams();
  const id = params.id;

  return (
    <>
      {
        id && 
        <ul>
          <li>
            <Link href="/create">
              Create
            </Link>
          </li>
          <li>
            <Link href={`/update/${id}`}>
              Update
            </Link>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </ul>
      }
    </>
    
  );
}
