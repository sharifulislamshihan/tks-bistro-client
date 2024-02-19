import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const adminRoute = ({children}) => {
    const [user, loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <div className="flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }

    // if there is no user it will navigate to login page
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default adminRoute;