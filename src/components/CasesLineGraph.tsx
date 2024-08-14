import { useQuery } from '@tanstack/react-query'
import {
  getCasesWithDates,
  getAllGlobalCases,
} from '../helpers/apis/graph-apis'
import { aggregateDataByMonth } from '../helpers/data-by-month'
import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const CasesLineGraph: React.FC = () => {
  const { data: casesData, status: casesStatus } = useQuery({
    queryKey: ['casesByDate'],
    queryFn: getCasesWithDates,
  })

  const { data: casesAll, status: casesAllStatus } = useQuery({
    queryKey: ['allCases'],
    queryFn: getAllGlobalCases,
  })

  let lineChartData
  if (casesStatus === 'success') {
    let Cases = casesData.cases
    lineChartData = aggregateDataByMonth(Cases)
  }

  const NumberToM = (value: number) => {
    if (value >= 1_000_000) {
      return `${Math.round(value / 1_000_000)}M`
    }
    return value.toString()
  }

  return (
    <div className='w-full h-full bg-neutral-200 font-palanquin shadow-lg rounded-lg overflow-auto flex flex-col p-5'>
      <div className='flex justify-between text-neutral-700'>
        <h3 className='font-bold text-lg'>Cases Fluctuations Global</h3>
        <div className='flex gap-4'>
          <span>
            All Cases :{' '}
            {casesAllStatus === 'success'
              ? casesAll.cases
              : 'data not available'}
          </span>
          <span>
            Deaths :{' '}
            {casesAllStatus === 'success'
              ? casesAll.deaths
              : 'data not available'}
          </span>
          <span>
            Recovered :{' '}
            {casesAllStatus === 'success'
              ? casesAll.recovered
              : 'data not available'}
          </span>
        </div>
      </div>

      <ResponsiveContainer>
        <LineChart
          data={lineChartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis tickFormatter={NumberToM} />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='cases'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CasesLineGraph
