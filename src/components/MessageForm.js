import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

export default function MessageForm({ onSendMessage }) {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex items-center mb-4">
      <textarea
        className="flex-grow border rounded-md p-2 mr-2 resize-none"
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-600"
        onClick={handleSendMessage}
      >
        <AiOutlineSend className="mr-1" /> Send
      </button>
    </div>
  );
}
