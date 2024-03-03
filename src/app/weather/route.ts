const city = 'São Paulo, BR'
const API_KEY = process.env.NEXT_WEATHER_SECRET

const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=pt_br`

export async function GET() {
    const res = await fetch(WEATHER_URL)
    return res
}
