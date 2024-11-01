import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton
} from "@clerk/nextjs"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"

const Header = () => {
  return (
    <header className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            Ping <span className="text-brand-700">Panda</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            <SignedOut>
              <Link
                href="/pricing"
                className={buttonVariants({
                  className: "flex items-center",
                  variant: "secondary"
                })}
              >
                Pricing
              </Link>
              <Button variant="secondary" asChild>
                <SignInButton />
              </Button>
              <Button asChild>
                <SignUpButton>
                  <div>
                    Sign Up
                    <ArrowRight className="ml-1.5 size-4" />
                  </div>
                </SignUpButton>
              </Button>
            </SignedOut>
            <SignedIn>
              <Button variant="secondary" asChild>
                <SignOutButton />
              </Button>
              <Link
                href="/dashboard"
                className={buttonVariants({
                  className: "flex items-center",
                })}
              >
                Dashboard <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </SignedIn>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
export default Header
