import React from 'react';
import './Login.css'

import { useLocation, useHistory } from 'react-router-dom';
import useAuht from '../../hooks/useAuth';

const Login = () => {

    const { googleSingIn} = useAuht()

    const location = useLocation();
    const history = useHistory();

    // const redirect_uri = location.state?.from || "/serviceDetails";

    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleLogin = () => {
        googleSingIn()
            .then(result => {
                // history.push(redirect_uri);
                history.replace(from)
            })
           
    }

    return (

        <div className="text-center pt-5 login">
            <h1 className="mb-5 text-success">Please Login</h1>
           <div>
           <button onClick={handleGoogleLogin} className="me-2 mb-3 btn btn-success" >
            Login with Google <i class="fab fa-google"></i>
            </button>
           </div>
        </div>

    );
};

export default Login