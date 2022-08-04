import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Avocado } from '@components/SVG'
import { useCart } from '../../hooks/useCart';


export const Navbar = () => {

    const { pathname } = useRouter()
    const { productsCart } = useCart()

    return (
        <header className='shadow'>
            <div className='container flex justify-between items-center'>
                <NextLink href="/" passHref>
                    <a>
                        <Avocado />
                    </a>
                </NextLink>
                <nav className='flex gap-6'>
                    <NextLink href="/" passHref>
                        <a className={`${pathname === '/' ? 'nav-link-active' : ''} nav-link py-5 flex gap-1 relative`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            Tienda
                        </a>
                    </NextLink>
                    <NextLink href="/cart" passHref>
                        <a className={`${pathname === '/cart' ? 'nav-link-active' : ''} nav-link py-5 flex gap-1 relative`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Canasta ({ productsCart.length })
                        </a>
                    </NextLink>
                </nav>
            </div>
        </header>
    )
}
