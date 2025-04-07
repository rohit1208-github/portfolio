// app/page.tsx
import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Personal Assistant</h1>
          <p className="text-gray-600">
            Ask me anything about my professional experience, skills, and background.
          </p>
        </div>
        
        <ChatInterface />
      </div>
    </main>
  );
}