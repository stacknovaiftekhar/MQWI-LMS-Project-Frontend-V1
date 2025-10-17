import { useState } from 'react';
import Layout from '../Layout/Layout';

const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    
    const toggleAuthMode = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <Layout>
        <div className="container-fluid vh-100 d-flex">
            {/* Left Part with Logo */}
            <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-light">
                <img src="/path/to/logo.png" alt="Logo" className="img-fluid" style={{ maxWidth: '200px' }} />
            </div>

            {/* Right Part with Form */}
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <div className="w-100 px-4" style={{ maxWidth: '400px' }}>
                    <h2 className="mb-4">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" required />
                        </div>
                        {isSignUp && (
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Confirm password" required />
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary w-100 mb-3">
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </button>
                    </form>
                    {isSignUp ? (
                        <p>
                            Already have an account?{' '}
                            <button className="btn btn-link btn-text p-0" onClick={toggleAuthMode}>
                                Sign in
                            </button>
                        </p>
                    ) : (
                        <p>
                            Don't have an account?{' '}
                            <button className="btn btn-link btn-text p-0" onClick={toggleAuthMode}>
                                Sign up
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>
        </Layout>
    );
};

export default AuthPage;
