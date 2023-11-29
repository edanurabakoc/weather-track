import React, { useState, useEffect } from 'react';


export default function Today({ isActiveCategory, isSearched, isNotFound, isSearching, icon, moonset, uvIndex, humidity, moonrise, pressure, windSpeed, deg, minutesAgo, formattedTime, formattedDate, todayHeaderImage }) {
    return (
        <>
            {(isActiveCategory == 'today' && isSearched && isNotFound == false && isSearching == false) &&
                <div className=" main w-3/4 h-screen bg-[#652c7e] p-4 flex flex-col justify-between">
                    <div style={{ backgroundImage: `url(./img/${todayHeaderImage}.png)` }} className="today-summary-header bg-white px-10 py-5 rounded-md flex flex-col justify-between md:h-full">
                        <div className="flex-icon">
                            <img src={icon} />
                        </div>
                        <div className="flex flex-row justify-between max-sm:self-center">
                            <div className="flex flex-col">
                                <div className="flex-formattedDate">
                                    <h1 className="mr-4 text-white">{formattedDate}</h1>
                                </div>
                                <div className="flex-formattedTime">
                                    <h1 className="mr-4 text-white">{formattedTime}</h1>
                                </div>
                                <div className="flex-minutesAgo text-xs text-white">
                                    <span> {minutesAgo} minutes ago</span>
                                </div>
                            </div>
                            <div className="flex-deg flex justify-end text-white self-center max-sm:sm max-sm:justify-between">
                                <h2 className='text-6xl'>{deg}&deg;</h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4 max-sm:block max-sm:overflow-auto">
                        <div className="bg-[#be8ccb8c] p-4 rounded-md flex items-center max-sm:m-2">
                            <div className="grid-icons p-2  rounded-full">
                                <svg className="h-9 w-9 text-gray-500 " xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 30.000000 30.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M67 263 c-14 -14 -6 -22 21 -20 21 2 27 -2 27 -18 0 -16 -8 -21 -42 -23 -54 -4 -57 -22 -4 -22 38 0 71 19 71 41 0 36 -51 65 -73 42z" />
                                        <path d="M180 235 c-11 -13 -8 -15 20 -13 39 4 61 -21 41 -46 -11 -13 -34 -16 -112 -16 -59 0 -99 -4 -99 -10 0 -6 41 -10 103 -10 88 0 106 3 120 18 22 24 21 55 -1 75 -23 21 -56 22 -72 2z" />
                                        <path d="M30 110 c0 -5 39 -11 88 -12 79 -3 87 -5 87 -23 0 -16 -6 -20 -27 -18 -28 2 -37 -10 -17 -22 18 -11 57 4 64 25 3 10 1 28 -5 40 -10 18 -20 20 -100 20 -51 0 -90 -4 -90 -10z" />
                                    </g>
                                </svg>
                            </div>
                            <div className="ml-2 text-white">
                                <h1 className="text-l font-bold ">Wind speed</h1>
                                <h2 className='text-xl'>{windSpeed} km/h</h2>
                            </div>
                        </div>
                        <div className="bg-[#be8ccb8c] p-4 rounded-md flex items-center text-white max-sm:m-2">
                            <div className="grid-icons p-2  rounded-full">
                                <svg className="h-9 w-9 text-gray-500" xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 50.000000 50.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M170 458 c-133 -68 -131 -250 3 -317 31 -15 47 -29 47 -42 0 -17 -8 -19 -95 -19 -57 0 -95 -4 -95 -10 0 -6 42 -10 105 -10 l105 0 0 30 c0 17 5 30 10 30 6 0 10 -13 10 -30 l0 -30 105 0 c63 0 105 4 105 10 0 6 -38 10 -95 10 -87 0 -95 2 -95 19 0 13 16 27 47 42 101 50 132 167 70 260 -27 41 -98 79 -147 79 -20 0 -56 -10 -80 -22z m143 -12 c103 -43 128 -177 48 -257 -65 -65 -157 -65 -222 0 -124 123 13 325 174 257z" />
                                        <path d="M310 369 c-14 -11 -40 -27 -58 -35 -25 -11 -33 -20 -30 -37 5 -34 45 -35 58 -2 6 14 22 42 36 61 30 39 29 42 -6 13z" />
                                        <path d="M30 10 c0 -6 80 -10 220 -10 140 0 220 4 220 10 0 6 -80 10 -220 10 -140 0 -220 -4 -220 -10z" />
                                    </g>
                                </svg>
                            </div>
                            <div className="ml-4 ">
                                <h1 className="text-l font-bold">Pressure</h1>
                                <h2 className='text-xl'>{pressure} mb</h2>
                            </div>
                        </div>
                        <div className="bg-[#be8ccb8c] p-4 rounded-md flex items-center text-white max-sm:m-2">
                            <div className="grid-icons p-2  rounded-full">
                                <svg className="h-9 w-9 text-gray-500" xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 50.000000 50.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M217 412 c-23 -25 -21 -35 3 -27 18 6 20 2 20 -34 0 -23 5 -41 10 -41 6 0 10 16 10 35 0 19 3 34 8 33 13 -5 13 11 0 32 -16 25 -30 25 -51 2z" />
                                        <path d="M175 246 c-36 -16 -76 -60 -94 -105 -8 -17 -20 -31 -27 -31 -8 0 -14 -4 -14 -10 0 -6 75 -10 205 -10 130 0 205 4 205 10 0 6 -4 10 -10 10 -5 0 -17 17 -25 37 -31 75 -89 113 -167 113 -24 -1 -57 -7 -73 -14z m65 -17 c0 11 4 9 15 -5 13 -16 14 -16 9 -1 -9 26 29 22 41 -5 6 -14 19 -23 31 -23 29 -1 50 -20 63 -56 10 -29 10 -29 -28 -29 -30 0 -40 4 -44 20 -3 11 -19 25 -36 31 -17 6 -29 15 -25 20 3 5 -5 5 -18 0 -13 -5 -23 -17 -24 -27 -2 -37 -4 -44 -14 -44 -5 0 -7 8 -4 18 5 16 5 16 -6 0 -12 -20 -35 -25 -24 -5 5 8 2 8 -9 -2 -13 -10 -17 -10 -17 -1 0 9 -4 9 -17 -1 -15 -12 -16 -12 -8 1 8 13 7 13 -8 1 -49 -39 -16 41 33 83 31 26 60 34 60 17 0 -13 -22 -29 -50 -34 l-25 -4 27 -2 c30 -1 58 22 58 47 0 15 2 15 10 2 8 -13 10 -13 10 -1z m100 -20 c0 -14 -17 -10 -23 5 -4 10 -1 13 9 9 7 -3 14 -9 14 -14z m-52 -59 c44 -27 40 -40 -13 -40 -50 0 -53 4 -27 33 16 19 16 20 0 14 -10 -4 -18 -2 -18 3 0 16 22 12 58 -10z" />
                                    </g>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h1 className="text-l font-bold">Moonrise</h1>
                                <h2 className='text-xl'>{moonrise}</h2>
                            </div>
                        </div>
                        <div className="bg-[#be8ccb8c] p-4 rounded-md flex items-center text-white max-sm:m-2">
                            <div className="grid-icons p-2  rounded-full">
                                <svg className="h-8 w-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" version="1.0" width="128.000000pt" height="128.000000pt" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M604 1158 c-101 -108 -227 -292 -290 -421 -87 -182 -95 -300 -30 -433 43 -86 103 -144 194 -187 98 -47 226 -47 324 0 135 64 223 186 235 328 10 128 -52 291 -186 488 -73 106 -188 248 -206 254 -6 2 -25 -11 -41 -29z m101 -95 c67 -82 141 -187 185 -265 25 -46 29 -58 16 -58 -8 0 -36 -10 -61 -22 l-46 -22 -44 24 -45 25 -45 -25 -45 -25 -45 25 -45 25 -44 -25 c-44 -24 -45 -24 -85 -5 -23 10 -41 21 -41 24 0 12 80 144 126 208 63 88 143 183 154 183 5 0 35 -30 65 -67z m-10 -473 c7 -12 -71 -370 -85 -384 -7 -7 -13 -7 -21 1 -7 7 1 63 31 194 23 101 44 187 46 191 7 11 22 10 29 -2z m-140 -75 c16 -15 25 -36 25 -55 0 -19 -9 -40 -25 -55 -15 -16 -36 -25 -55 -25 -19 0 -40 9 -55 25 -16 15 -25 36 -25 55 0 19 9 40 25 55 15 16 36 25 55 25 19 0 40 -9 55 -25z m280 -120 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80 80 80 19 0 40 -9 55 -25z" />
                                        <path d="M470 485 c-15 -18 -10 -45 13 -59 34 -22 73 27 47 59 -16 19 -44 19 -60 0z" />
                                        <path d="M750 365 c-15 -18 -10 -45 13 -59 34 -22 73 27 47 59 -16 19 -44 19 -60 0z" />
                                    </g>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h1 className="text-l font-bold">Humidity</h1>
                                <h2 className='text-xl'>{humidity} %</h2>
                            </div>
                        </div>
                        <div className="bg-[#be8ccb8c] p-4 rounded-md flex items-center text-white max-sm:m-2">
                            <div className="grid-icons p-2  rounded-full">
                                <svg className="h-8 w-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 14.984375 0.98632812 A 1.0001 1.0001 0 0 0 14 2 L 14 5 A 1.0001 1.0001 0 1 0 16 5 L 16 2 A 1.0001 1.0001 0 0 0 14.984375 0.98632812 z M 5.796875 4.7988281 A 1.0001 1.0001 0 0 0 5.1015625 6.515625 L 7.2226562 8.6367188 A 1.0001 1.0001 0 1 0 8.6367188 7.2226562 L 6.515625 5.1015625 A 1.0001 1.0001 0 0 0 5.796875 4.7988281 z M 24.171875 4.7988281 A 1.0001 1.0001 0 0 0 23.484375 5.1015625 L 21.363281 7.2226562 A 1.0001 1.0001 0 1 0 22.777344 8.6367188 L 24.898438 6.515625 A 1.0001 1.0001 0 0 0 24.171875 4.7988281 z M 15 8 A 7 7 0 0 0 8 15 A 7 7 0 0 0 15 22 A 7 7 0 0 0 22 15 A 7 7 0 0 0 15 8 z M 2 14 A 1.0001 1.0001 0 1 0 2 16 L 5 16 A 1.0001 1.0001 0 1 0 5 14 L 2 14 z M 25 14 A 1.0001 1.0001 0 1 0 25 16 L 28 16 A 1.0001 1.0001 0 1 0 28 14 L 25 14 z M 7.9101562 21.060547 A 1.0001 1.0001 0 0 0 7.2226562 21.363281 L 5.1015625 23.484375 A 1.0001 1.0001 0 1 0 6.515625 24.898438 L 8.6367188 22.777344 A 1.0001 1.0001 0 0 0 7.9101562 21.060547 z M 22.060547 21.060547 A 1.0001 1.0001 0 0 0 21.363281 22.777344 L 23.484375 24.898438 A 1.0001 1.0001 0 1 0 24.898438 23.484375 L 22.777344 21.363281 A 1.0001 1.0001 0 0 0 22.060547 21.060547 z M 14.984375 23.986328 A 1.0001 1.0001 0 0 0 14 25 L 14 28 A 1.0001 1.0001 0 1 0 16 28 L 16 25 A 1.0001 1.0001 0 0 0 14.984375 23.986328 z" /></svg>
                            </div>
                            <div className="ml-4">
                                <h1 className="text-l font-bold">UV Index</h1>
                                <h2 className="text-xl">{uvIndex} max</h2>
                            </div>
                        </div>
                        <div className="bg-[#be8ccb8c] p-4 rounded-md flex items-center text-white max-sm:m-2">
                            <div className="grid-icons p-2   rounded-full">
                                <svg className="h-9 w-9 text-gray-500" xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 50.000000 50.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M248 393 c-2 -30 -7 -37 -20 -35 -23 4 -23 -11 0 -31 24 -22 35 -21 50 3 12 21 12 37 0 33 -5 -2 -8 13 -8 32 0 47 -18 45 -22 -2z" />
                                        <path d="M185 246 c-36 -16 -76 -60 -94 -105 -8 -17 -20 -31 -27 -31 -8 0 -14 -4 -14 -10 0 -6 75 -10 205 -10 130 0 205 4 205 10 0 6 -4 10 -10 10 -5 0 -17 17 -25 37 -31 75 -89 113 -167 113 -24 -1 -57 -7 -73 -14z m65 -17 c0 11 4 9 15 -5 13 -16 14 -16 9 -1 -9 26 29 22 41 -5 6 -14 19 -23 31 -23 29 -1 50 -20 63 -56 10 -29 10 -29 -28 -29 -30 0 -40 4 -44 20 -3 11 -19 25 -36 31 -17 6 -29 15 -25 20 3 5 -5 5 -18 0 -13 -5 -23 -17 -24 -27 -2 -37 -4 -44 -14 -44 -5 0 -7 8 -4 18 5 16 5 16 -6 0 -12 -20 -35 -25 -24 -5 5 8 2 8 -9 -2 -13 -10 -17 -10 -17 -1 0 9 -4 9 -17 -1 -15 -12 -16 -12 -8 1 8 13 7 13 -8 1 -49 -39 -16 41 33 83 31 26 60 34 60 17 0 -13 -22 -29 -50 -34 l-25 -4 27 -2 c30 -1 58 22 58 47 0 15 2 15 10 2 8 -13 10 -13 10 -1z m100 -20 c0 -14 -17 -10 -23 5 -4 10 -1 13 9 9 7 -3 14 -9 14 -14z m-52 -59 c44 -27 40 -40 -13 -40 -50 0 -53 4 -27 33 16 19 16 20 0 14 -10 -4 -18 -2 -18 3 0 16 22 12 58 -10z" />
                                    </g>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h1 className="text-l font-bold">Moonset</h1>
                                <h2 className='text-xl'>{moonset}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}