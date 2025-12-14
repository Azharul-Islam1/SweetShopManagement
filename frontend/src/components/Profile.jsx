 export default function Profile({ user }) {
  return (
    <div className="max-w-xl bg-white p-8 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-6">
        Profile Settings
      </h2>

      <label className="text-sm text-gray-500">Name</label>
      <input
        className="border p-3 rounded-lg w-full mb-5 mt-1"
        value={user.name}
        disabled
      />

      <label className="text-sm text-gray-500">Email</label>
      <input
        className="border p-3 rounded-lg w-full mt-1"
        value={user.email}
        disabled
      />
    </div>
  );
}
