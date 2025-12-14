 import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Eye, EyeOff } from "lucide-react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const validEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[^\s]{8,}$/.test(password);

  const getStrength = (password) => {
    let s = 0;
    if (password.length >= 8) s++;
    if (/[A-Z]/.test(password)) s++;
    if (/[0-9]/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    if (s <= 1) return { t: "Weak", c: "bg-red-500", w: "25%" };
    if (s === 2) return { t: "Medium", c: "bg-yellow-500", w: "60%" };
    return { t: "Strong", c: "bg-green-500", w: "100%" };
  };

  const strength = getStrength(form.password);
  const match =
    form.password &&
    form.confirmPassword &&
    form.password === form.confirmPassword;

  const submit = async () => {
    setMessage("");

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setMessage("All fields are required");
      return;
    }

    if (!validEmail(form.email)) {
      setMessage("Invalid email format");
      return;
    }

    if (!validPassword(form.password)) {
      setMessage("Password must be strong");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await register({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      setMessage("Registered successfully! Redirecting...");

      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[380px]">
        <h2 className="text-2xl font-bold text-center mb-4">
          Create Account
        </h2>

        {message && (
          <p className="text-sm text-center mb-4 text-red-600">
            {message}
          </p>
        )}

        <input
          placeholder="Full Name"
          className="w-full border p-2 rounded mb-3"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <div className="relative mb-3">
          <Mail className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            placeholder="Email"
            className="w-full border p-2 pl-10 rounded"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        <input
          placeholder="Contact Number (optional)"
          className="w-full border p-2 rounded mb-3"
          value={form.contact}
          onChange={(e) =>
            setForm({
              ...form,
              contact: e.target.value.replace(/[^0-9]/g, ""),
            })
          }
        />

        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
          <span
            className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {form.password && (
          <div className="mb-3">
            <div className="w-full h-2 bg-gray-200 rounded">
              <div
                className={`h-2 rounded ${strength.c}`}
                style={{ width: strength.w }}
              ></div>
            </div>
            <p className="text-xs mt-1">
              Password strength: <b>{strength.t}</b>
            </p>
          </div>
        )}

        <div className="relative mb-1">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />
          <span
            className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {form.confirmPassword && (
          <p
            className={`text-xs mb-3 ${
              match ? "text-green-600" : "text-red-600"
            }`}
          >
            {match ? "Passwords match ✔" : "Passwords do not match ✖"}
          </p>
        )}

        <button
          onClick={submit}
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg disabled:opacity-60"
        >
          {loading ? "Creating Account..." : "Register"}
        </button>

        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
