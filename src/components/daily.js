export default function Daily({ isActiveCategory, isSearched, isNotFound, isSearching, todayHeaderImage, formattedDate, description, currentDesc, deg, formattedTime, sevenDays, getDayOfWeek, formatDate }) {
    return (
        <>
            {
                (isActiveCategory == 'daily' && isSearched && isNotFound == false && isSearching == false) && (
                    <div className="daily main bg-[#652c7e] w-[75%] p-4 flex flex-row gap-5 max-sm:flex-col">
                        <div className="flex flex-col gap-3">
                            {sevenDays.map((day, index) => (
                                <div key={index} className="border-solid rounded-md px-4 justify-between flex bg-[#be8ccb8c]">
                                    <div className='flex flex-col self-center'>
                                        <div className='font-bold text-xl text-white'>{getDayOfWeek(day.date)}</div>
                                        <div className='text-m text-white'>{formatDate(day.date)}</div>
                                    </div>
                                    <div className='flex flex-row items-center justify-between min-w-[120px] text-2xl text-white'>
                                        <img src={day.day.condition.icon} alt="Weather icon" />
                                        <div>{day.day.avgtemp_c}°</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-5">
                            <div style={{ backgroundImage: `url(./img/${todayHeaderImage}.png)` }} className='daily-summary-header h-[50%] rounded-md px-4 bg-cover'>
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-col'>
                                        <div className='font-bold text-xl text-black'>{formattedDate} </div>
                                        <div className='text-m text-black'>{formattedTime} </div>
                                    </div>
                                    <div className='flex flex-col self-end items-center'>
                                        <div className='text-black text-3xl font-bold' >{deg}°</div>
                                        <span className='text-m text-black'>{currentDesc}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='border border-white h-[50%] bg-[#be8ccb8c] rounded-md text-white text-lg p-12 max-sm:overflow-auto'>
                                {description}
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}