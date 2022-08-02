import Link from 'next/link'

export const Navbar = () => {
    return (
        <div>
            <nav>
                <Link href="/" passHref>
                    <a>Home</a>
                </Link>
                <Link href="/about" passHref>
                    <a>About</a>
                </Link>
            </nav>
        </div>
    )
}
