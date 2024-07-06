import { useSession, signIn, signOut } from "next-auth/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getServerSession } from "next-auth/next"
import { LoaderCircle } from "lucide-react"
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"
import db from "@/lib/db"
import CreateForm from "@/components/forms/create"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function Contribute({ params, searchParams }) {
  const session = await getServerSession(authOptions)
  const { map } = params
  const { post } = searchParams
  const locations = await db.location.findMany({
    where: {
      published: true,
      map,
    }
  })
  // console.log(questions)
  return (
    <>
      {post
        ? <CreateForm />
        : <Link href={`/contribute/${map}?post=true`}><Button>Add New</Button></Link>
      }
      <pre>{JSON.stringify(locations, null, 2)}</pre>
    </>
  )

  if (status === "unauthenticated") {
    signIn()
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="animate-spin w-16 h-16" />
      </div>
    )
  }
  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="animate-spin w-16 h-16" />
      </div>
    )
  }

  function submit(input) {
    console.log(input)
  }

  return (
    <Form getFieldState={getFieldState}>
      <form onSubmit={handleSubmit(submit)} className="space-y-8">
        <Accordion type="single" collapsible>
          {questions.map((question, i) => {
            return (
              <AccordionItem value={i}>
                <AccordionTrigger>{question.title}</AccordionTrigger>
                <AccordionContent>
                  <p>resolved: {question.resolved ? 'yes' : 'no'}</p>
                  {question.content}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>

        <FormField
          control={control}
          name="username"
          defaultValue=""
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form >
  )
}
