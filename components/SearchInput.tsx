"use client";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/${search.trim().toLowerCase()}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Pokémon..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchInput;
