import React from 'react'

export default function DashboardNav() {
    return (
        <div>
            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-base-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-4">
                            {/* Mobile menu button (hidden on lg and up) */}
                            <button
                                aria-label="Open menu"
                                // onClick={() => setMobileOpen(true)}
                                className="btn btn-ghost btn-square lg:hidden"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <div className="flex items-center gap-3">
                                <div className="font-bold text-lg">Brand</div>
                                <div className="text-sm text-neutral">Dashboard</div>
                            </div>
                        </div>

                        {/* <div className="flex items-center gap-3">
                            <div className="hidden sm:flex items-center gap-2">
                                <input type="text" placeholder="Search" className="input input-sm input-bordered" />
                            </div>

                            <button className="btn btn-ghost btn-square">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" />
                                </svg>
                            </button>

                            <div className="avatar">
                                <div className="w-9 h-9 rounded-full bg-primary text-primary-content flex items-center justify-center">U</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </header>
        </div>
    )
}
