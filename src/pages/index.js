import { useState, useEffect } from 'react';
import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';
import { getMessages, createMessage, updateMessage, deleteMessage, likeMessage } from '../utils/mockApi';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
  }, []);

  const handleSendMessage = async (content) => {
    if (!content.trim()) {
      alert('El mensaje no puede estar vacío.');
      return;
    }
    try {
      const newMessage = await createMessage({ user_name: 'User', content });
      setMessages([newMessage, ...messages]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleUpdateMessage = async (id, updatedContent) => {
    try {
      const updatedMessage = await updateMessage(id, updatedContent);
      setMessages(messages.map((msg) => (msg.id === id ? updatedMessage : msg)));
    } catch (error) {
      console.error('Error updating message:', error);
    }
  };

  const handleDeleteMessage = async (id) => {
    if (!window.confirm('¿Seguro que quieres eliminar este mensaje?')) return;
    try {
      await deleteMessage(id);
      setMessages(messages.filter((msg) => msg.id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const handleLikeMessage = async (id) => {
    try {
      const updatedMessage = await likeMessage(id);
      setMessages(messages.map((msg) => (msg.id === id ? updatedMessage : msg)));
    } catch (error) {
      console.error('Error liking message:', error);
    }
  };

  return (
    <div className={`flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
      <div className="flex flex-col w-full max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Message Board</h1>
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded-md bg-blue-500 text-white dark:bg-yellow-500"
          >
            {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
        </div>
        <MessageForm onSendMessage={handleSendMessage} />
        <MessageList
          messages={messages}
          onUpdateMessage={handleUpdateMessage}
          onDeleteMessage={handleDeleteMessage}
          onLikeMessage={handleLikeMessage}
        />
      </div>
    </div>
  );
}
