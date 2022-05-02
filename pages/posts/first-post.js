import Link from 'next/link'

export default function FirstPost() {
    return (
    <>
    <head>
        <title>First Post</title>
    </head>
    <h1>First Post</h1>
    <h2>
        <Link href="/">
            <a>Back to home</a>
        </Link>
    </h2>  
    </>
    )
  }