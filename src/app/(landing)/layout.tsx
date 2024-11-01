import { ReactNode } from "react"
import Header from "@/components/Header"

const layout = ({children}: {children:ReactNode}) => {
  return (
    <><Header />
    {children}
    </>
  )
}
export default layout