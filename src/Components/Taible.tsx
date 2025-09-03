import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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

type TableProps = {
  currentItems: User[];
  title: string;
};

export default function Taible({ currentItems, title }: TableProps) {
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    if (tableRef.current) {
      const tableRows = tableRef.current.querySelectorAll('tbody tr');
      gsap.fromTo(
        tableRows,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }
  }, [currentItems]);

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table ref={tableRef} className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/5 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
            <th className="w-1/5 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Username</th>
            <th className="w-1/5 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
            <th className="w-1/5 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">City</th>
            <th className="w-1/5 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Company</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentItems.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100 transition-colors duration-200">
              <td className="px-6 py-4 whitespace-nowrap">
                <Link href={`/user/${user.id}`} className="text-blue-600 hover:underline">
                  {user.name}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.address.city}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.company.name}</td>
            </tr>
          ))}
          {currentItems.length === 0 && (
            <tr>
              <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
