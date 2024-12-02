import Chat from 'components/Chat'
import Sidebar from 'components/Sidebar'

export default function () {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex h-screen w-full items-center justify-center">
        <Chat />
      </div>
    </div>
  )
}
