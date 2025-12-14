 import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import CategoryTabs from "../components/CategoryTabs";
import ItemGrid from "../components/ItemGrid";
import AddItemForm from "../components/AddItemForm";
import Profile from "../components/Profile";

export default function Inventory() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState("home");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:3000/api/sweets")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [navigate, user]);

  const addItem = async (form) => {
    const res = await fetch("http://localhost:3000/api/sweets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setItems([data, ...items]);
  };

  const deleteItem = async (id) => {
    await fetch(`http://localhost:3000/api/sweets/${id}`, {
      method: "DELETE",
    });
    setItems(items.filter((item) => item._id !== id));
  };

  const filteredItems = items
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) =>
      activeCategory === "All"
        ? true
        : item.category?.toLowerCase() ===
          activeCategory.toLowerCase()
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50">
      <TopBar
        user={user}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        search={search}
        setSearch={setSearch}
      />

      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main
        className={`transition-all duration-300 ${
          sidebarOpen ? "md:ml-[260px]" : "ml-0"
        }`}
      >
        <div className="pt-4 px-6 md:px-10 max-w-7xl mx-auto">
          {activeTab === "profile" && <Profile user={user} />}

          {activeTab === "inventory" && (
            <div className="mb-6 bg-white rounded-2xl shadow p-5">
              <AddItemForm onAdd={addItem} />
            </div>
          )}

          {(activeTab === "home" || activeTab === "inventory") && (
            <>
              <CategoryTabs
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />

              <ItemGrid
                items={filteredItems}
                showDelete={activeTab === "inventory"}
                onDelete={deleteItem}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
