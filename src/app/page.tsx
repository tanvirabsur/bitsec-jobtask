"use client";
import SearchInput from "@/Components/SearchInput";
import Taible from "@/Components/Taible";
import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function Home() {
  const [user, setUser] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const itemsPerPage = 5

  useEffect(() => {
    // user data fetching funconality 
    const fetchUser = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(data);
        setUser(data)
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false)
      }
    }
    fetchUser()

  }, [])

  // search and pagination logic
  const filteredUsers = user.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexofFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexofFirstItem, indexOfLastItem);

  if (loading) return <div>Loading...</div>
  return (
    <>
      <div className="container mx-auto p-4">
        <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Taible currentItems={currentItems} title="User List"/>
        {/* pagination buttons */}

        <div className="flex gap-2 mt-4">
          {Array.from({ length: Math.ceil(filteredUsers.length / itemsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border ${currentPage === i + 1 ? 'bg-blue-500 text-white' : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
