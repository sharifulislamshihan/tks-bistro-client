import { Helmet } from "react-helmet-async";

const Login = () => {
    return (
        <div>
            {/* helmet */}
            <Helmet>
                <title>Login: TKS Bistro</title>
            </Helmet>


            <h3 className='text-white'>This is login form</h3>
        </div>
    );
};

export default Login;