import Chart from "react-google-charts";

const data = [
    ["Year", "Sales", "Expenses"],
    ["Jan", 1000, 400],
    ["Feb", 1170, 460],
    ["Mar", 660, 1120],
    ["Apr", 1030, 540],
    ["May", 1000, 640],
    ["Jun", 1230, 560],
    ["Jul", 1830, 380],
    ["Aug", 630, 100],
    ["Sept", 1030, 430],
    ["Oct", 1430, 240],
    ["Nov", 1730, 500],
    ["Dec", 1500, 200],
];

const options = {
    title: "Resturant Revenue",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "80%", height: "70%" },
};


const AdminRevenueChart = () => {
    return (
        <div className='flex flex-col justify-center mb-10 '>
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
            {/* <div className='mx-auto'>
                <LineChart
                    width = {'50%'}
                    height={'30%'}
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
            </div> */}

            <div>
                <Chart
                    chartType="AreaChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                />
            </div>


        </div>
    );
};

export default AdminRevenueChart;