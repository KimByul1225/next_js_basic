import Link from 'next/link'
import './globals.css'
import { Controll } from './Controll';

export const metadata = {
  title: 'Next js study',
  description: 'Next js basic',
}

export default async function RootLayout({ children }) {

  const res = await fetch("http://localhost:9999/topics", { cache: 'no-store' });
  const topics = await res.json();

  return (
    <html>
      <body>
        <h1>
          <Link
            href="/"
          >
            WEB
          </Link>
        </h1>
        <ol>
          {topics.map((topic) => {
            return(
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>
                  {topic.title}
                </Link>
              </li>
            )
          })}
        </ol>
        <br />
        <hr />
        {children}
        <hr />
        <br />
        <Controll/>
      </body>
    </html>
  )
}
