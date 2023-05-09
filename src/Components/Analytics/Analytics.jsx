import './Analytics.css'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts'
import { barChartData, lineChartData, pieChartData01, pieChartData02, areaChartData02 } from '../../Data/data'

const Analytics = ({ chart_i, chart_ii, chart_iii, chart_iV }) => {

    return (
        <div className='analytics'>
            {/* Chart 01 -- BarChart */}
            {chart_i && (
                <>
                    <header>
                        <span className='followers'>Subsicribers:</span>
                        <span className='earnings'>Earnings:</span>
                    </header>

                    <BarChart className='chart' width={250} height={210}
                        data={barChartData}>
                        <CartesianGrid strokeDasharray="100 10" />
                        <XAxis dataKey="name" />
                        <Tooltip /> <Legend />
                        <Bar dataKey="Followers" fill="#00464e" />
                        <Bar dataKey="Eanings" fill="#810551" />
                    </BarChart>
                </>
            )}

            {/* Chart 02 -- LineChart */}
            {chart_ii && (


                <LineChart className='chart' margin={{ right: 10, top: 10 }} width={260} height={220}
                    data={lineChartData}>
                    <XAxis dataKey="name" /> <YAxis /><Tooltip /> <Legend />
                    <Line type={'monotone'} dataKey="pv" stroke='#810551' />
                    <Line type={'monotone'} dataKey="uv" stroke='#00464e' />
                </LineChart>

            )}

            {/* Chart 03 -- PieChart */}
            {chart_iii && (
                <PieChart width={300} height={300}>
                    <Pie data={pieChartData01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#00464e" />
                    <Pie data={pieChartData02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={70} fill="#810551" label />
                </PieChart>
            )}
            {chart_iV && (
                <AreaChart width={250} height={210}
                    data={areaChartData02}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" fill="#00464e" stroke="#810551" />
                </AreaChart>
            )}
        </div>
    )
}

export default Analytics