// components/ChatInput.tsx
import { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export default function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
  const [input, setInput] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    onSendMessage(input);
    setInput('');
  }

  return (
    <form onSubmit={handleSubmit} className="border-t p-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about my experience, skills, or background..."
          className="flex-1 p-2 border rounded-lg"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={isLoading || !input.trim()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:bg-blue-300"
        >
          Send
        </button>
      </div>
    </form>
  );
}