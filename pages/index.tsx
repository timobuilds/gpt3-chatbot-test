import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h1">Chat GPT-3</Text>
        <Text className="text-zinc-600">
          This is a sample GPT-3 chat bot that is pre-prompted to answer engineering-related questions. 
        </Text>
      </section>
      
      <section className="flex flex-col gap-3">
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
      
    </Page>
  )
}

Home.Layout = Layout

export default Home
