import { WeatherData } from '@/@types/weather'

async function getWeather() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/weather`, {
        cache: 'no-store',
    })
    return res.json()
}

export async function Temp() {
    const data = await getWeather()
    const weatherResponse: WeatherData = data

    return (
        <div className="px-[.5625rem] py-[.6875rem] text-brand__gray-100 bg-brand__gray-950 font-bold uppercase text-[.8125rem] md:text-[.875rem] rounded-md transition leading-none hover:bg-brand__blue-700_base hover:text-brand__gray-1000">
            {weatherResponse.main.temp_max} <span>GRAUS</span>
        </div>
    )
}
