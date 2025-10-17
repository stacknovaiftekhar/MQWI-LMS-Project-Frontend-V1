import { Link } from 'react-router';
import Auth from "./Auth";
import Layout from '../Layout/Layout'

const SignUp = () => (
  <Layout>
    <Auth>
      <div className="auth shadow">
        <div className="text-center">
          <h3 className="mb-4">SIGN UP</h3>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter Your Full Name" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" placeholder="Enter Your Email Address" required />
          </div>
          <div className="mb-3">
            <label className="form-label me-3">Gender:</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" value="male" />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" value="female" />
              <label className="form-check-label">Female</label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input type="text" className="form-control" placeholder="Enter Your Mobile Number" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter Your New Password" required />
          </div>
          <div className="mb-4">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" placeholder="Enter Confirm password" required />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-gen w-50">SIGN UP</button>
          </div>
        </form>
      </div>
      <br />
      <div className="auth shadow auth-bottom text-center">
        <p>
          Already have an Account? <Link to="/signin" className="btn-text m-1">SIGN IN</Link>
        </p>
      </div>
    </Auth>
  </Layout>
);

export default SignUp