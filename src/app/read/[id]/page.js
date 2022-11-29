
export default async function Read(props) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/topics/${props.params.id}`, { cache: 'no-store' });
  const topic = await res.json();
  return (
    <>
      <h2>
        Read / {topic.title}
      </h2>
      <p>parameter : {props.params.id}</p>
      <div>
        {topic.body}
      </div>
    </>
  )
}
