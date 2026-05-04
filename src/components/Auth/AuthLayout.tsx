import Background from './Backgroound'
import LoginCard from './LoginCard'

export default function AuthLayout() {
  return (
    <main className="flex-grow relative flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <Background />

      <div className="relative z-10 w-full max-w-lg">
        <LoginCard />
      </div>
    </main>
  )
}
