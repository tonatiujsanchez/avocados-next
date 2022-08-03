import NextLink from 'next/link'


export const Footer = () => {
    return (
        <>
            <footer className="border-t py-10">
                <div className="container grid grid-cols-1 sm:grid-cols-3 px-12 justify-items-center">
                    <div className='mb-5 sm:mb-0'>
                        <h3 className='font-semibold mb-2'>Nosotros</h3>
                        <NextLink href="/about" passHref>
                            <a className='text-sky-600'>Conoce más</a>
                        </NextLink>
                    </div>
                    <div className='mb-5 sm:mb-0'>
                        <h3 className='font-semibold mb-2'>Servicios</h3>
                        <NextLink href="/" passHref>
                            <a className='text-sky-600'>Todos los productos</a>
                        </NextLink>
                    </div>
                    <div className='mb-5 sm:mb-0'>
                        <h3 className='font-semibold mb-2'>Hecho por</h3>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/tonatiujsanchez" className='text-sky-600'>@tonatiujsanchez</a>
                        <div className='flex gap-3 mt-2'>
                            <a target="_blank" rel="noreferrer" href="https://github.com/tonatiujsanchez" className='social-icon hover:scale-90'>
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#232323" d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" /></svg>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/tonatiujsanchez" className='social-icon hover:scale-90'>
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#232323" d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" /></svg>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tonatiujsanchez/" className='social-icon hover:scale-90'>
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#232323" d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <p className='flex justify-center gap-1 text-sm text-gray-600'>Avocado images taken from 
                        <a target="_blank" rel="noreferrer" href="https://californiaavocado.com/avocado101/avocado-varieties/" className='text-sky-600'>Avocado 101</a>
                        at
                        <a target="_blank" rel="noreferrer" href="https://californiaavocado.com/" className='text-sky-600'>California Avocado</a>
                    </p>
                </div>
            </footer>
            <style jsx>{`
                .social-icon svg{
                    width: 20px
                }
            `}</style>
        </>
    )
}
