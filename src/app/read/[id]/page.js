
export default async function Read(props) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `topics/${props.params.id}`, { cache: 'no-store' });
  const topic = await res.json();
  return (
    <>
      <h2>
        게시글 상세 페이지
      </h2>
      <h3>Title : {topic.title}</h3>
      <br />
      <h4>상세 내용</h4>
      <div>
        {topic.body}
      </div>
      {/* <p>parameter : {props.params.id}</p> */}
      <br />
    </>
  )
}
