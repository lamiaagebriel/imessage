import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import Link from "next/link"
export const metadata: Metadata = { title: "iMessage | Privacy" }

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
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground">
            Read our terms and conditions.
          </p>
        </div>

        <hr className="my-4" />
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsumMagna fermentum iaculis eu non diam. Vitae purus faucibus
          ornare suspendisse sed nisi lacus sed. In nibh mauris cursus mattis
          molestie a iaculis at. Enim sit amet venenatis urna. Eget sit amet
          tellus cras adipiscing.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
          Legal Notices
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsumMagna fermentum iaculis eu non diam. Vitae purus faucibus
          ornare suspendisse sed nisi lacus sed. In nibh mauris cursus mattis
          molestie a iaculis at. Enim sit amet venenatis urna. Eget sit amet
          tellus cras adipiscing.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
          Warranty Disclaimer
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsumMagna fermentum iaculis eu non diam. Vitae purus faucibus
          ornare suspendisse sed nisi lacus sed. In nibh mauris cursus mattis
          molestie a iaculis at. Enim sit amet venenatis urna. Eget sit amet
          tellus cras adipiscing.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
          General
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsumMagna fermentum iaculis eu non diam. Vitae purus faucibus
          ornare suspendisse sed nisi lacus sed. In nibh mauris cursus mattis
          molestie a iaculis at. Enim sit amet venenatis urna. Eget sit amet
          tellus cras adipiscing.
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
          Disclaimer
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsumMagna fermentum iaculis eu non diam. Vitae purus faucibus
          ornare suspendisse sed nisi lacus sed. In nibh mauris cursus mattis
          molestie a iaculis at. Enim sit amet venenatis urna. Eget sit amet
          tellus cras adipiscing.
        </p>
      </article>
    </>
  )
}
export default Terms
