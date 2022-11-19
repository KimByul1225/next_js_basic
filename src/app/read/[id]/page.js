
export default async function Read(props) {
  const res = await fetch(`http://localhost:9999/topics/${props.params.id}`);
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
