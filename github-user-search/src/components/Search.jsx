import React, { useState, useEffect } from "react";
import { searchUsers } from "../services/githubService";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const data = await searchUsers(username, location, minRepos, 1);
      setUsers(data.items);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Looks like we can't find any users");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const data = await searchUsers(username, location, minRepos, nextPage);
      setUsers((prev) => [...prev, ...data.items]);
      setPage(nextPage);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Unable to load more users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      {/* Step 1: Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-gray-100 p-4 rounded shadow-md"
      >
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Step 2: Loading/Error States */}
      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Step 3: Display Results */}
      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="mt-6 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Load More
        </button>
      )}
    </div>
  );
};

// Separate component for user details
const UserCard = ({ user }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await axios.get(`https://api.github.com/users/${user.login}`);
      setDetails(res.data);
    };
    fetchDetails();
  }, [user.login]);

  return (
    <div className="flex items-center gap-4 p-4 border rounded shadow-sm">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h3 className="text-lg font-semibold">{user.login}</h3>
        {details && (
          <>
            <p className="text-gray-600">
              Location: {details.location || "N/A"}
            </p>
            <p className="text-gray-600">Repos: {details.public_repos}</p>
          </>
        )}
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

export default Search;
