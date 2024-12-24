export default function CustomAvatar({ user }) {
  return (
    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-lg font-bold">
      {user ? user.charAt(0).toUpperCase() : 'U'} {/* Validación para evitar errores */}
    </div>
  );
}



