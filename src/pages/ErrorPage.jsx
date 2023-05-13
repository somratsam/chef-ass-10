import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <section className='container text-center'>
                <div className=''>
                    {/* <FaceFrownIcon className=' text-warning w-25' /> */}
                    <div className=''>
                        <h2 className='text-warning' style={{ fontSize: '4rem' }}>
                           <img className='w-100' src="https://i.ibb.co/NNs33Xx/147-1473883-404-error-404-not-found-png-thumbnail.png" alt="" />
                            {status || 404}
                        </h2>
                        <div className='success mt-3'> <Link to='/' className=' text-decoration-none'>
                            Back to homepage
                        </Link></div>
                        <h2 className='fw-bold text-danger'>
                            {error?.message}
                        </h2>
                       
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;