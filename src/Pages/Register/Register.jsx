import { Helmet } from "react-helmet-async";


const Register = () => {
    return (
        <div>
             {/* helmet */}
             <Helmet>
                <title>Register: TKS Bistro</title>
            </Helmet>

            <h3 className='text-white'>This is Register form</h3>

        </div>
    );
};

export default Register;