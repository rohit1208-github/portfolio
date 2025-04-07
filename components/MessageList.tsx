// components/MessageList.tsx
import { Message } from './ChatInterface';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export default function MessageList({ messages, isLoading }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 ? (
        <div className="text-center text-gray-500 my-12">
          <p className="text-lg mb-2">👋 Hello! I&apos;m a personal assistant.</p>
          <p>Ask me anything about my skills, experience, or qualifications.</p>
        </div>
      ) : (
        messages.map((message, index) => (
          <div 
            key={index}
            className={`p-3 rounded-lg ${
              message.role === 'user' 
                ? 'bg-blue-100 ml-auto max-w-[80%]' 
                : 'bg-gray-100 mr-auto max-w-[80%]'
            }`}
          >
            {message.content}
          </div>
        ))
      )}
      {isLoading && (
        <div className="bg-gray-100 p-3 rounded-lg mr-auto max-w-[80%]">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      )}
    </div>
  );
}