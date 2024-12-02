import { FunctionComponent } from 'preact'
import { useState } from 'preact/hooks'

interface ChatHistory {
  id: string
  title: string
}

const Sidebar: FunctionComponent = () => {
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([
    {
      id: '1',
      title: 'Основы продаж',
    },
    {
      id: '2',
      title: 'Работа с возражениями',
    },
  ])
  return (
    <div className="flex h-screen w-64 flex-col bg-gray-800 text-white">
      {/*Header*/}
      <div className="border-b border-gray-700 p-4">
        <h2 className="text-lg font-semibold">История</h2>
      </div>

      {/* New Chat button */}
      <button className="m-4 rounded-lg border border-gray-600 px-4 py-2 hover:bg-gray-700">
        Новая тема
      </button>

      {/* Chat history list*/}
      <div className="flex-1 overflow-y-auto">
        {chatHistory.map((chat) => (
          <div
            key={chat.id}
            className="m-2 cursor-pointer rounded-lg p-2 hover:bg-gray-700"
          >
            <div className="font-medium">{chat.title}</div>
            <div className="text-sm text-gray-400"></div>
            <div className="line-clamp-2 text-sm text-gray-300"></div>
          </div>
        ))}
      </div>

      {/*Footer with user count*/}
      <div className="border-t border-gray-700 p-4">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gray-600"></div>
          <div className="ml-3">
            <div className="font-medium">Ученик</div>
            <div className="text-sm text-gray-400">Онлайн</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
