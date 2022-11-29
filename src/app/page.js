import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h2>
        해당 프로젝트는 NEXT JS Study를 위해 만든 샘플 프로젝트입니다.
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
