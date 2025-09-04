'use client'
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { gsap } from 'gsap';
import Link from 'next/link';
import Loading from '@/Components/Loading';

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

export default function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const userDetailsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (id) {
            const fetchUser = async () => {
                try {
                    setLoading(true);
                    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                    setUser(data);
                } catch (err) {
                    console.log(err);
                } finally {
                    setLoading(false);
                }
            };
            fetchUser();
        }
    }, [id]);

    useEffect(() => {
        if (user && userDetailsRef.current) {
            gsap.fromTo(
                userDetailsRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power3.out',
                }
            );
        }
    }, [user]);

    if (loading) return <Loading/>
    if (!user) return <div className="flex justify-center items-center h-screen">User not found</div>;

    return (
        <div ref={userDetailsRef} className="container mx-auto p-4 sm:p-6 md:p-8">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-6 sm:p-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">{user.name}</h1>
                    <p className="text-lg text-gray-600 mb-6">@{user.username}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                            <p className="text-gray-700 mb-2"><strong>Email:</strong> {user.email}</p>
                            <p className="text-gray-700 mb-2"><strong>Phone:</strong> {user.phone}</p>
                            <p className="text-gray-700"><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{user.website}</a></p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Company & Address</h2>
                            <p className="text-gray-700 mb-2"><strong>Company:</strong> {user.company.name}</p>
                            <p className="text-gray-700"><strong>Address:</strong> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
                        </div>
                        
                    </div>
                    <Link href={'/'} className='btn bg-blue-500 text-white rounded mt-2'>back to dashboard</Link>
                </div>
            </div>
        </div>
    );
}
