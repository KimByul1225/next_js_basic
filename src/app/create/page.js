"use client"

import { useRouter } from "next/navigation";
// 반드시 next/navigation에서 import해야함.

export default function Create() {
  const router = useRouter();
  // useRouter는 Client  Component에서만 사용이 가능하며 
  // 이 useRouter를 사용하면 원하는 router로 리디렉션 시킬 수 있다.
  return (
    <>
      <h2>
        Create!
      </h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({title, body})
        }
        fetch("http://localhost:9999/topics", options)
          .then(res => res.json())
          .then(result => {
            const lastid = result.id;
            router.refresh();
            router.push(`/read/${lastid}`);
          })
      }}>
        <p>
          <input type="text" name="title" placeholder="title"/>
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
          />
        </p>
        <input type="submit" value="create" />
      </form>
    </>
  )
}
