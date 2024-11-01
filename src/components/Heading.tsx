import { cn } from "@/lib/utils"
import { HTMLAttributes, ReactNode } from "react"

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children?: ReactNode
}

 const Heading = ({children, className, ...props}: HeadingProps) => {
  return (
    <h1 className={cn("text-4xl sm:text-5xl text-pretty font-roboto font-semibold tracking-tight text-zinc-800", className)} {...props}>{children}</h1>
  )
}
export default Heading