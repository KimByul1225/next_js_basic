import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h2>
        Welcome!
      </h2>
      <Image
        src="/next.svg"
        alt="정적이미지 넣기"
        width={300}
        height={100}
      />
    </>
  )
}
