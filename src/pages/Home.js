import React from 'react';
// import Login from '../Components/LogIn/Login';
import SignUp from '../Components/SignUp/SignUp';

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            {/* <Login></Login> */}
            <SignUp></SignUp>
        </div>
    );
};

export default Home;