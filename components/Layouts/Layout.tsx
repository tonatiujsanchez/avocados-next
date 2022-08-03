import { FC, ReactNode } from "react"
import { Navbar } from "@components/ui/Navbar"
import { Footer } from "@components/ui/Footer"

interface Props {
    children?: ReactNode
}

export const Layout:FC<Props> = ({children}) => {
  return (
    <>
        <Navbar />

        { children }
        
        <Footer />

        <style jsx>{`
            .bg-salmon {
                background: salmon
            }

        `}</style>
    </>
  )
}
