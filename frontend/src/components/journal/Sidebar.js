import React, { useState } from 'react';

const Sidebar = () => {
    const [sortBy, setSortBy] = useState('Relevance');
    const [publicationYear, setPublicationYear] = useState('');

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleYearChange = (e) => {
        setPublicationYear(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div className='sidebar flex flex-col'>
            <div className='Search Filters flex flex-col p-[15px] '>
                <div className='text-[22px] mb-[10px] '>Search Filters</div>
                <div className='flex flex-col'>
                    <div className="Topic">
                        <div className="text-[14px] mt-[10px] mb-[5px] ">Topic</div>
                        <input
                            type="text"
                            name="Topic"
                            placeholder="Artificial intelligence"
                            className="w-full h-[30px] px-[2px] py-[1px] border-none outline outline-offset-1 outline-1 outline-gray-200 rounded-full "
                        />
                        <div className="text-[14px] mt-[10px] mb-[5px] ">Publication Year</div>
                        <select
                            className="w-full h-[30px] px-[2px] py-[1px] border-none outline outline-offset-1 outline-1 outline-gray-200 rounded-full"
                            value={publicationYear}
                            onChange={handleYearChange}
                        >
                            <option value="">Select Year</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            {/* Add more options as needed */}
                        </select>
                        <div className="text-[14px] mt-[10px] mb-[5px] ">Author</div>
                        <input
                            type="text"
                            name="Author"
                            placeholder="John Doe"
                            className="w-full h-[30px] px-[2px] py-[1px] border-none outline outline-offset-1 outline-1 outline-gray-200 rounded-full "
                        />
                        <div className="text-[14px] mt-[10px] mb-[5px] ">Sort By</div>
                        <select
                            className="w-full h-[30px] px-[2px] py-[1px] border-none outline outline-offset-1 outline-1 outline-gray-200 rounded-full"
                            value={sortBy}
                            onChange={handleSortChange}
                        >
                            <option value="Relevance">Relevance</option>
                            <option value="Date">Date</option>
                            <option value="Author">Author</option>
                            {/* Add more options as needed */}
                        </select>
                        <button class="py-[6px] my-[20px] w-full  h-[35px] bg-[#f81b83] text-white items-center font-semibold rounded-full shadow-md hover:bg-[#e2422a] focus:outline-none focus:ring  focus:ring-opacity-75 border-transparent">
                            <p>Search</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
