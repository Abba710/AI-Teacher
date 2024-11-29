import { FunctionComponent } from 'preact'

interface MessageProps {
  text: string
  isAi: boolean
  timestamp?: Date
}

const Message: FunctionComponent<MessageProps> = ({
  text,
  isAi,
  timestamp,
}) => {
  return (
    <div className={`flex ${isAi ? 'justify-start' : 'justify-end'} mb-4`}>
      <div
        className={`max-w-[70%] rounded-lg px-4 py-2 ${
          isAi
            ? 'rounded-tl-none bg-gray-600'
            : 'rounded-tr-none bg-blue-500 text-white'
        }`}
      >
        <p className="text-white">{text}</p>
        {timestamp && (
          <span className="text-xs opacity-70">
            {timestamp.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        )}
      </div>
    </div>
  )
}

export default Message
