import { Home, Box, User, LogOut, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({
  open,
  setOpen,
  activeTab,
  setActiveTab,
}) {
  const navigate = useNavigate();

  const handleTab = (tab) => {
    setActiveTab(tab);
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
    window.location.reload();
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[260px]
        bg-gradient-to-b from-purple-600 to-indigo-700 text-white
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {}
        <div className="h-16 px-4 flex items-center justify-between border-b border-white/20">
          <span className="text-lg font-bold">SweetShop</span>

          {}
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {}
        <nav className="p-4 space-y-2">
          <button
            onClick={() => handleTab("home")}
            className="w-full flex gap-3 px-4 py-3 rounded-xl hover:bg-white/10"
          >
            <Home size={18} /> Home
          </button>

          <button
            onClick={() => handleTab("inventory")}
            className="w-full flex gap-3 px-4 py-3 rounded-xl hover:bg-white/10"
          >
            <Box size={18} /> Inventory
          </button>

          <button
            onClick={() => handleTab("profile")}
            className="w-full flex gap-3 px-4 py-3 rounded-xl hover:bg-white/10"
          >
            <User size={18} /> Profile
          </button>
        </nav>

        {}
        <div className="absolute bottom-6 w-full px-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 py-3 rounded-xl"
          >
            <LogOut size={18} className="inline mr-2" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
