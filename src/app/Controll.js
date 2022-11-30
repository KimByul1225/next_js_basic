"use client"

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export function Controll() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  return (
    <>
      <div>
        <Link href="/create">
          글 등록 하기
        </Link>
      </div>
      {
        id && 
        <ul>
          <li>
            <Link href={`/update/${id}`}>
              글 수정
            </Link>
          </li>
          <li>
            <input 
              type="button" 
              value="글 삭제" 
              onClick={(e) => {
                e.preventDefault();
                const options = {
                  method: 'DELETE',
                }
                fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${id}`, options)
                  .then(res => res.json())
                  .then(result => {
                    router.refresh();
                    router.push("/");
                  })
              }}
            />
          </li>
        </ul>
      }
    </>
    
  );
}
