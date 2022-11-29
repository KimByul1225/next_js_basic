"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// 반드시 next/navigation에서 import해야함.

export default function Update(props) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const router = useRouter();
    // useRouter는 Client  Component에서만 사용이 가능하며 
    // 이 useRouter를 사용하면 원하는 router로 리디렉션 시킬 수 있다.
    const id = props.params.id;

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL +`/topics/${id}`, { cache: 'no-store' })
        .then(res => res.json())
        .then(result => {
            setTitle(result.title)
            setBody(result.body)
        })
    }, [id])
    return (
        <>
            <h2>
                Update!
            </h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;
                const options = {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ title, body })
                }
                fetch(process.env.NEXT_PUBLIC_API_URL + `/topics/${id}`, options)
                .then(res => res.json())
                .then(result => {
                    const lastid = result.id;
                    router.refresh();
                    router.push(`/read/${lastid}`);
                })
            }}>
                <p>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="title" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </p>
                <p>
                    <textarea
                        name="body"
                        placeholder="body"
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    />
                </p>
                <input type="submit" value="update" />
            </form>
        </>
    )
}
