import Chart from "react-google-charts";


const AdminOrderSummery = () => {

    const data = [
        ["Task", "Hours per Day"],
        ["On Delivery", 4],
        ["Delivered", 5],
        ["Canceled", 2],// CSS-style declaration
    ];

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between mx-20 mt-20 mb-5">
                <div>
                    <h3 className="text-3xl font-heading font-bold mb-2">Order Summary</h3>
                    <p className="text-md font-paragraph font-normal my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, suscipit!</p>
                </div>

                <div>
                    <select className="select w-full">
                        {/* <option disabled selected>Choose Option</option> */}
                        <option>Monthly</option>
                        <option>Weekly</option>
                        <option>Daily</option>

                    </select>
                </div>
            </div>

            {/* pie Chart */}

            <Chart
                chartType="PieChart"
                width="100%"
                height="80%"
                data={data}
            />
        </div>
    );
};

export default AdminOrderSummery;