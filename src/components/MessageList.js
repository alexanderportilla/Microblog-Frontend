import { useState } from 'react';
import CustomAvatar from './Avatar';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineLike } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (message) => {
  toast.success(message, { position: "top-right" });
};

export default function MessageList({ messages = [], onUpdateMessage, onDeleteMessage, onLikeMessage }) {
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editedContent, setEditedContent] = useState('');

  const handleSaveEdit = (id) => {
    if (editedContent.trim() === '') {
      toast.error('El mensaje no puede estar vacío.');
      return;
    }
    onUpdateMessage(id, editedContent.trim());
    setEditingMessageId(null);
    setEditedContent('');
    notify('Mensaje actualizado exitosamente.');
  };

  const handleDeleteMessage = (id) => {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este mensaje?');
    if (confirmDelete) {
      onDeleteMessage(id);
      notify('Mensaje eliminado exitosamente.');
    }
  };

  const handleLikeMessage = async (id) => {
    try {
      await onLikeMessage(id);
      notify('¡Mensaje liked exitosamente!');
    } catch (error) {
      toast.error('Error al dar like.');
    }
  };

  return (
    <ul className="space-y-4">
      {messages.map((msg) => (
        <li
          key={msg.id}
          className="p-4 bg-white dark:bg-gray-800 rounded-md shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <CustomAvatar user={msg.user} />
              <div>
                <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{msg.user}</h2>
                <time className="text-sm text-gray-500 dark:text-gray-400">{msg.timestamp}</time>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                aria-label="Editar mensaje"
                className="text-blue-500 hover:text-blue-700 dark:text-yellow-500 dark:hover:text-yellow-600"
                onClick={() => {
                  setEditingMessageId(msg.id);
                  setEditedContent(msg.content);
                }}
              >
                <AiOutlineEdit />
              </button>
              <button
                aria-label="Eliminar mensaje"
                className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600"
                onClick={() => handleDeleteMessage(msg.id)}
              >
                <AiOutlineDelete />
              </button>
              <button
                aria-label="Dar like"
                className="text-green-500 hover:text-green-700 dark:text-green-400 dark:hover:text-green-600"
                onClick={() => onLikeMessage(msg.id)}
              >
                <AiOutlineLike /> {msg.likes || 0}
              </button>

            </div>
          </div>
          {editingMessageId === msg.id ? (
            <div className="mt-4">
              <textarea
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
              <div className="flex justify-end space-x-2 mt-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  onClick={() => handleSaveEdit(msg.id)}
                >
                  Guardar
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                  onClick={() => {
                    setEditingMessageId(null);
                    setEditedContent('');
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <p className="mt-4 text-gray-800 dark:text-gray-300">{msg.content}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
