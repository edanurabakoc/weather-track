import { useState, useEffect } from 'react';

function useWeather() {

    const menuCities = [
        'Ankara', 'Toronto','Van'
    ]

    const [city, setCity] = useState('');
    const [deg, setDeg] = useState(0);
    const [icon, setIcon] = useState();
    const [fahrenhayt, setFahrenhayt] = useState(0);
    const [minutesAgo, setMinutesAgo] = useState(0);
    const [windSpeed, setWindSpeed] = useState(0);
    const [sevenDays, setSevenDays] = useState([]);
    const [formattedDate, setFormattedDate] = useState();
    const [formattedTime, setFormattedTime] = useState();
    const [pressure, setPressure] = useState();
    const [moonrise, setMoonrise] = useState();
    const [humidity, setHumidity] = useState();
    const [uvIndex, setUvIndex] = useState();
    const [moonset, setMoonsete] = useState();
    const [isActiveCategory, setIsActiveCategory] = useState("today");
    const [isSearched, setIsSearched] = useState(false);
    const [currentDesc, setCurrentDesc] = useState();
    const [todayHeaderImage, setTodayHeaderImage] = useState('');
    const [isNotFound, setIsNotFound] = useState(false);
    const [description, setDescription] = useState();
    const [isSearching, setIsSearching] = useState(false);
    const [lastSearchedCities, setlastSearchedCities] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    function getDayOfWeek(dateString) {
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var date = new Date(dateString);
        return days[date.getDay()];
    }

    function formatDate(dateString) {
        var date = new Date(dateString);
        var day = date.getDate();
        var month = date.getMonth() + 1;

        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;

        return day + '/' + month;
    }

    useEffect(() => {
        let lastFiveCities = JSON.parse(localStorage.getItem('lastFiveCities'));
        if (lastFiveCities?.length > 0) {
            setlastSearchedCities(lastFiveCities);
        }
    }, []);

    function search(menuCity) {

        setlastSearchedCities(prevCities => {
            const cityToAdd = menuCity ?? city;

            if (!prevCities.includes(cityToAdd)) {
                let updatedCities = [...prevCities, cityToAdd];

                if (updatedCities.length > 3) {
                    updatedCities.shift();
                }
                localStorage.setItem('lastFiveCities', JSON.stringify(updatedCities));
                return updatedCities;
            }
            return prevCities;
        });

        setIsSearching(true);

        fetch(`https://api.weatherapi.com/v1/forecast.json?key=99271c9d611a42f68d8153241233010&q=${menuCity ?? city}&days=7&aqi=no
    `)
            .then((response) => response.json())
            .then((data) => {

                setIsSearching(false);
                setIsSearched(true);

                if (data.error) {
                    setIsNotFound(true);
                    return;
                }

                setIsNotFound(false);
                setDeg(data.current.temp_c);
                setIcon(data.current.condition.icon);
                setFahrenhayt(data.current.temp_f);
                const lastUpdated = new Date(data.current.last_updated);
                const now = new Date();

                const differenceInMilliseconds = now - lastUpdated;
                const differenceInMinutes = Math.floor(differenceInMilliseconds / 1000 / 60);
                setSevenDays(data.forecast.forecastday);
                setMinutesAgo(differenceInMinutes);
                setCurrentDesc(data.current.condition.text);

                const date = new Date(data.location.localtime);
                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                setFormattedDate(`${monthNames[date.getMonth()]} ${date.getDate()}`);

                const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

                const day = days[date.getDay()];
                const hours = date.getHours();
                const minutes = date.getMinutes();

                const ampm = hours >= 12 ? 'pm' : 'am';

                const hours12 = hours % 12 || 12;

                setFormattedTime(`${day}, ${hours12}:${String(minutes).padStart(2, '0')} ${ampm}`);

                setWindSpeed(data.current.wind_mph);

                setPressure(data.current.pressure_in);

                setMoonrise(data.forecast.forecastday[0].astro.moonrise);

                setHumidity(data.current.humidity);

                setUvIndex(data.current.uv);

                setMoonsete(data.forecast.forecastday[0].astro.moonset);

                let weatherText = data.current.condition.text;
                switch (true) {
                    case (weatherText.toLowerCase().includes('sun') || weatherText.toLowerCase().includes('clear')):
                        setTodayHeaderImage('sunny-weather');
                        setDescription('Sunny Weather: The sky is clear, the sun is shining. There is a gentle breeze. The temperature is ideal, an energetic day awaits you.');
                        break;
                    case weatherText.toLowerCase().includes('rain'):
                        setTodayHeaderImage('rainy-weather');
                        setDescription('Rainy Weather: The sky is filled with dark clouds, and raindrops are constantly falling. The air is cool, umbrellas at the ready');
                        break;
                    case weatherText.toLowerCase().includes('thunder'):
                        setTodayHeaderImage('thunder-weather');
                        setDescription('Thundery Showers Possible: Dark clouds and a charged atmosphere signal the possibility of sudden thundery downpours and cooler weather conditions.');
                        break;
                    case (weatherText.toLowerCase().includes('snow') || weatherText.toLowerCase().includes('freezing')):
                        setTodayHeaderImage('winter-weather')
                        setDescription('Snowy Weather: The ground is covered with white snow, the air is cold. Snowflakes gently descend to the earth. The magic of winter envelops everything.');
                        break;
                    case (weatherText.toLowerCase().includes('mist') || weatherText.toLowerCase().includes('overcast')):
                        setTodayHeaderImage('mist-foggy-weather');
                        setDescription('Mist Weather: A serene blanket of mist and fog reduces visibility, creating a tranquil yet obscured landscape, ideal for peaceful mornings but requiring caution in navigation.');
                        break;
                    case (weatherText.toLowerCase().includes('blizzard')):
                        setTodayHeaderImage('blizzard-weather');
                        setDescription('Blizzard Weather: Characterized by fierce winds and heavy snowfall, blizzards dramatically reduce visibility, creating hazardous conditions with snowdrifts and a biting chill, transforming landscapes into wintry whiteouts.');
                        break;
                    case (weatherText.toLowerCase().includes('cloudy')):
                        setTodayHeaderImage('cloudy');
                        setDescription('Cloudy Weather: The sky is covered with grey clouds, with a gentle breeze blowing. Occasionally, rays of sunshine peek through the clouds, dominating the cool air.');
                        break;
                    default:
                        setTodayHeaderImage('how-weather');
                        setDescription('You should check the weather outside.');
                }
            })
    }

    return [{
        city,
        lastSearchedCities,
        isSearching,
        description,
        isNotFound,
        todayHeaderImage,
        currentDesc,
        isSearched,
        isActiveCategory,
        moonset,
        humidity,
        moonrise,
        pressure,
        formattedTime,
        formattedDate,
        sevenDays,
        windSpeed,
        minutesAgo,
        icon,
        fahrenhayt,
        deg,
        uvIndex,
        menuCities,
        isSidebarOpen
    },
    {
        setCity,
        search,
        setlastSearchedCities,
        setIsSearching,
        setDescription,
        setIsNotFound,
        setTodayHeaderImage,
        setCurrentDesc,
        setIsSearched,
        setIsActiveCategory,
        setMoonsete,
        setUvIndex,
        setHumidity,
        setMoonrise,
        setPressure,
        setFormattedTime,
        setFormattedDate,
        setSevenDays,
        setWindSpeed,
        setMinutesAgo,
        setFahrenhayt,
        setIcon,
        setDeg,
        formatDate,
        getDayOfWeek,
        setIsSidebarOpen
    },
    ];
}

export default useWeather;
