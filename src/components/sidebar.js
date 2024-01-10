import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


export default function Sidebar({ setCity, search, city, isActiveCategory, setIsActiveCategory, menuCities, lastSearchedCities, isSidebarOpen, setIsSidebarOpen }) {

    const SidebarTriggerButton = <>
        <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`z-[9999] absolute top-1/2 ${isSidebarOpen ? '-right-1' : ''} bg-[#9467a196] p-2 text-xl rounded-full text-md hover:bg-white`}
        >
            {isSidebarOpen ? <BsArrowLeft className="text-gray-700" /> : <BsArrowRight className="text-gray-700" />}
        </button>
    </>


    return (
        <>
            <div className={`sidebar ${isSidebarOpen ? 'w-[40%] md:w-1/4' : 'w-0'} bg-[#9467a196] border-r border-gray-300 overflow-y-auto pt-3.5 text-center relative duration-300`}>
                {isSidebarOpen && SidebarTriggerButton}
                <div className="p-4 flex-col gap-4 flex max-sm:p-0">
                    <div className="text-lg font-semibold flex justify-center items-center">
                        <div className="relative py-1 px-4 w-[100%]">
                            <div className="relative flex items-center">
                                <input
                                    type="search"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    onKeyDown={(e) => { if (e.key === 'Enter') search(); }}
                                    autoFocus
                                    placeholder="Search for a place..."
                                    className="pl-2 sm:pl-10 pr-2 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 w-full"
                                />
                                <div className='hidden sm:flex'>
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-1 px-4 mb-12 hover:bg-[#8000801f]">
                        <div className="mb-4 border-b border-gray-200">
                            <h1 className="capitalize truncate">{city}</h1>
                        </div>
                        <div className="flex flex-col gap-y-1.25">
                            <button
                                onClick={() => { setIsActiveCategory('today'); }}
                                className={`p-2 text-white rounded text-left ${isActiveCategory === 'today' ? 'active' : ''}`}>
                                Today
                            </button>

                            <button
                                onClick={() => { setIsActiveCategory('daily'); }}
                                className={`p-2 text-white rounded text-left ${isActiveCategory === 'daily' ? 'active' : ''}`}>
                                Daily
                            </button>
                        </div>
                    </div>
                    <div className="py-1 px-4 hover:bg-[#8000801f]">
                        <div className="mb-4 border-b border-gray-200">
                            <h1 className="capitalize">Last</h1>
                        </div>
                        <div className="flex flex-col gap-y-1.">
                            {lastSearchedCities.map((cityName, index) => (<>
                                <button onClick={() => {
                                    setCity(cityName);
                                    search(cityName);
                                }}
                                    className={`p-2  text-white rounded text-left truncate ${city === cityName ? 'active' : ''}`}>
                                    {cityName}</button>
                            </>))}
                        </div>
                    </div>

                    <div className="py-1 px-3 hover:bg-[#8000801f]">
                        <div className="mb-4 border-b border-gray-200">
                            <h1 className="capitalize">World</h1>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            {menuCities.map((cityName, index) => (<>
                                <button onClick={() => {
                                    setCity(cityName);
                                    search(cityName);
                                }}
                                    className={`p-2 text-white rounded text-left truncate ${city === cityName ? 'active' : ''}`}>
                                    {cityName}</button>
                            </>))}
                        </div>
                    </div>
                </div>
            </div>
            {!isSidebarOpen && SidebarTriggerButton}
        </>
    )
}
