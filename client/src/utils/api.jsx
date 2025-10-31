const API_BASE = "http://localhost:3000";

export async function AuthFetch(endpoint, options = {}) {
  const token = localStorage.getItem("access_token");
  if (!token) throw new Error("No token found");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...options.headers,
  };

  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
