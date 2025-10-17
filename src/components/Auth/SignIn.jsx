import { Link } from 'react-router';
import Auth from "./Auth";
import Layout from '../Layout/Layout'

const SignIn = () => (
  <Layout>
    <Auth>
      <div className="auth shadow">
        <div className="text-center">
          <h3 className="mb-4">SIGN IN</h3>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input type="text" className="form-control" placeholder="Enter Your Mobile Number" required />
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter Your Password" required />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-gen w-50">SIGN IN</button>
          </div>
        </form>
      </div>
      <br />
      <div className="auth shadow auth-bottom text-center">
        <p>
          Don&apos;t have an Account? <Link to="/signup" class="btn-text m-1">SIGN IN</Link>
        </p>
      </div>
    </Auth>
  </Layout>
);

export default SignIn;