import {useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) =>{
    const user = useSelector(store => store.user);
    console.log("Protected Routes occours");
    //if no user, redirect to login
    if(!user) return <Navigate to='/' replace/>;

    // otherwise, render the children route
    return children;
}

export default ProtectedRoute;

