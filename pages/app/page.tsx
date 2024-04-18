import {cookies} from "next/headers"
import Image from "next/image"

import {Mail} from "@/components/mail/mail"

export default function MailPage() {
  return (
    <>
      <div>
        <Mail navCollapsedSize={4} />
      </div>
    </>
  )
}
