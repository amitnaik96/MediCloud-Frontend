import React from 'react';

interface SearchBarProps {
    placeholder : string;
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit : (e: React.FormEvent) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({placeholder, onChange, handleSubmit}) => {
    return <div>
        <form className="mx-2 max-w-[700px] sm:mx-auto mb-4">   
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-3 h-3 text-sky-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input onChange={ onChange } type="search" id="default-search" className="block w-full p-4 ps-10 text-sm  border border-sky-300 rounded-md focus:outline-none text-sky-600" placeholder={placeholder} required />
                <button onClick={ handleSubmit } type="submit" className=" absolute end-2.5 bottom-2.5 text-white bg-sky-900 hover:bg-sky-700  focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
            </div>
        </form>
    </div>
}

export default SearchBar;