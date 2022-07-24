import Link from 'next/link'

export default function Offline() {
    return (
        <div className="flex flex-col justify-center items-center text-center min-h-screen">App is Offline Please contact <Link href='tel:+91-7875995888' passHref><a>@7875995888</a></Link>.</div>
    )
}