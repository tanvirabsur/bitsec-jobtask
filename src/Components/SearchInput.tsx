"use client"
import React from 'react'

type SearchInputProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export default function SearchInput({ searchQuery, setSearchQuery }: SearchInputProps) {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search by name or email"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
            />
        </div>
    )
}
