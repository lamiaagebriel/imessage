import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import Link from "next/link"
export const metadata: Metadata = { title: "iMessage | Terms" }

const Terms = () => {
  return (
    <>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <article className="container max-w-3xl pt-20 pb-6 lg:py-12">
        <div className="space-y-4">
          <h1 className="inline-block font-heading font-bold text-4xl lg:text-5xl">
            Privacy
          </h1>
          <p className="text-xl text-muted-foreground">
            The Privacy Policy for Taxonomy App.
          </p>
        </div>

        <hr className="my-4" />
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Blandit libero volutpat sed cras ornare arcu. Cursus sit amet dictum
          sit amet. Nunc vel risus commodo viverra maecenas accumsan. Libero id
          faucibus nisl tincidunt eget nullam non nisi est. Varius quam quisque
          id diam vel quam. Id donec ultrices tincidunt arcu non.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
          Consent
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
          sed cras ornare arcu. Nibh ipsum consequat nisl vel pretium lectus
          quam id leo. A arcu cursus vitae congue. Amet justo donec enim diam.
          Vel pharetra vel turpis nunc eget lorem. Gravida quis blandit turpis
          cursus in. Semper auctor neque vitae tempus. Elementum facilisis leo
          vel fringilla est ullamcorper eget nulla. Imperdiet nulla malesuada
          pellentesque elit eget. Felis donec et odio pellentesque diam volutpat
          commodo sed. Tortor consequat id porta nibh. Fames ac turpis egestas
          maecenas pharetra convallis posuere morbi leo. Scelerisque fermentum
          dui faucibus in. Tortor posuere ac ut consequat semper viverra.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
          Information we collect
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Amet justo donec enim diam. In hendrerit gravida rutrum quisque non.
          Hac habitasse platea dictumst quisque sagittis purus sit.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
          How we use your Information
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing.
          Consectetur adipiscing elit pellentesque habitant. Ut tristique et
          egestas quis ipsum suspendisse ultrices gravida.
        </p>
      </article>
    </>
  )
}
export default Terms
