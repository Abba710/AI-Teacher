import { FunctionComponent } from 'preact'
import { useState } from 'preact/hooks'
import Message from 'components/Message'

interface ChatMessage {
  id: string
  text: string
  isAi: boolean
  timestamp: Date
}

const Chat: FunctionComponent = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Привет! Я AI Training Assistant. Как я могу помочь?',
      isAi: true,
      timestamp: new Date(),
    },
    {
      id: '2',
      text: 'Привет! Как мне начать обучение?',
      isAi: false,
      timestamp: new Date(),
    },
  ])

  return (
    <div className="flex h-[650px] w-[1100px] flex-col text-wrap rounded-[20px] bg-white shadow-xl">
      {/* Chat header */}
      <div className="border-b p-4 shadow-sm">
        <h1 className="text-xl font-semibold">AI-Teacher</h1>
      </div>

      {/* Chat messages */}
      <div className="flex-1 space-y-4 overflow-y-auto text-wrap p-4">
        {messages.map((msg) => (
          <Message key={msg.id} {...msg} />
        ))}
      </div>

      {/* Message input */}
      <div className="border-t p-4">
        <div className="mx-auto flex max-h-full max-w-full gap-4 text-wrap">
          <textarea
            placeholder="Type your message..."
            className="max-h-[120px] min-h-[40px] flex-1 resize-none overflow-y-auto rounded border border-gray-300 bg-white px-4 py-2"
            rows={1}
            onInput={(e) => {
              const textarea = e.currentTarget
              textarea.style.height = 'auto'
              textarea.style.height =
                Math.min(textarea.scrollHeight, 120) + 'px'
            }}
          />
          <button className="relative bottom-0 max-h-[40px] rounded bg-blue-500 px-4 py-2 text-white">
            Отправить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat
