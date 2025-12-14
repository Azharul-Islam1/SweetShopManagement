 import { Menu, Search } from "lucide-react";

export default function TopBar({ user, onMenuClick, search, setSearch }) {
  return (
    <header className="sticky top-0 z-30 bg-gradient-to-r from-purple-700 to-indigo-700">
      <div className="h-16 px-4 md:px-6 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <button onClick={onMenuClick} className="text-white">
            <Menu size={22} />
          </button>
          <span className="text-white font-semibold text-lg">
            SweetShop
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search sweets..."
              className="pl-9 pr-4 py-2 rounded-full w-64 text-sm outline-none"
            />
          </div>

          <div className="flex items-center gap-2 text-white">
            <div className="w-9 h-9 rounded-full bg-white text-purple-700 flex items-center justify-center font-bold">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <span className="hidden md:block text-sm">
              {user?.name}
            </span>
          </div>
        </div>

      </div>
    </header>
  );
}
