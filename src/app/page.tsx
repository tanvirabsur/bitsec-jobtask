"use client";
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
  const currentPage = 1
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



  // pagination logic 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexofFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = user.slice(indexofFirstItem, indexOfLastItem);
  console.log(currentItems);

  if (loading) return <div>Loading...</div>
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        <ul className="space-y-4">
          {
            currentItems.map(user => <li key={user.id}>{user.name}</li>)
          }
        </ul>
        {/* pagination buttons */}
        
        <div className="flex gap-2 mt-4">

        </div>
      </div>
    </>
  );
}
