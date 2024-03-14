import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        Income: 4000,
        Expense: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        Income: 3000,
        Expense: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        Income: 2000,
        Expense: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        Income: 2780,
        Expense: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        Income: 1890,
        Expense: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        Income: 2390,
        Expense: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        Income: 3490,
        Expense: 4300,
        amt: 2100,
    },
];

const AdminRevenueChart = () => {
    return (
        <div className='flex flex-col justify-center mb-10'>
            <h3 className='text-2xl font-semibold text-center font-heading mt-10 mb-10'>Revenue</h3>
            <div className='flex justify-center gap-20 mx-20 mb-4'>
                <div className='flex gap-3'>
                    <div className='w-4 h-4 bg-[#8884d8] my-auto rounded-full'></div>
                    <div>
                        <h3 className='text-md text-heading'>
                            Income
                            <span className='text-lg font-bold'> $23,445 </span>
                            <span className='text-base text-green-700 font-semibold'>+0.4%</span>

                        </h3>
                    </div>
                </div>

                <div className='flex gap-3'>
                    <div className='w-4 h-4 bg-[#82ca9d] my-auto rounded-full'></div>
                    <div>
                        <h3 className='text-md text-heading'>
                            Expanse
                            <span className='text-lg font-bold'> $8,445 </span>
                            <span className='text-base text-red-700 font-semibold'>+0.4%</span>

                        </h3>
                    </div>
                </div>
            </div>
            <div className='mx-auto'>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Income" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Expense" stroke="#82ca9d" />
                </LineChart>
            </div>

        </div>
    );
};

export default AdminRevenueChart;