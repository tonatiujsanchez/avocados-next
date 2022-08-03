import { FC, ReactNode } from "react"
import { Navbar } from "@components/Navbar"

interface Props {
    children?: ReactNode
}

export const Layout:FC<Props> = ({children}) => {
  return (
    <>
        <Navbar />

        { children }
        <footer className="container">This is teh footer</footer>

        <style jsx>{`
            .container {
                background: salmon
            }

        `}</style>
    </>
  )
}
