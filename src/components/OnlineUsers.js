import CustomAvatar from './Avatar';

export default function OnlineUsers({ users = [] }) {
  return (
    <div className="w-1/3 p-6 bg-gray-50 border-l border-gray-300 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Online Users ({users.length})
      </h2>
      <ul className="space-y-2">
        {Array.isArray(users) &&
          users.map((user, index) => (
            <li
              key={index}
              className="flex items-center p-2 bg-white rounded-lg shadow hover:bg-gray-100"
            >
              <CustomAvatar user={user} />
              <span className="ml-2 font-medium text-gray-800">{user}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
