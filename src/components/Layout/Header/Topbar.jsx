import { FAIcon, social } from '../../../assets/faicons';
import { Link } from 'react-router';

const Topbar = () => {
  const quote = (
    <h6 className="hsf hsb">পড় তোমার রবের নামে, যিনি সৃষ্টি করেছেন।<span> - আল-আলাক্ব: ১</span></h6>
  )

  return (
    <div className="topbar">
      <div className="container">
        <div className="row align-items-center">

          {/* Quote: Top on small screens, hidden on medium screens */}
          <div className="col-12 d-md-none text-center mb-2 top-quote">{quote}</div>

          <div className="col-md-3 col-sm-6 col-6 mb-2 mb-md-0">
            <ul className="list-inline text-start top-social">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/markazulquranwassunnah" target='_blank'>
                  <FAIcon icon={social.faFacebookSquare} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://wa.me/8801974018621" target='_blank'>
                  <FAIcon icon={social.faWhatsappSquare} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target='_blank'>
                  <FAIcon icon={social.faYoutubeSquare} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target='_blank'>
                  <FAIcon icon={social.faGooglePlusSquare} />
                </a>
              </li>
            </ul>
          </div>

          {/* Quote: Hidden on small screens, visible on medium screens */}
          <div className="col-md-6 d-none d-md-block text-center top-quote">{quote}</div>

          <div className="col-md-3 col-sm-6 col-6 text-end">
            <div className="btn-group top-button">
              <Link to="/signin" className="btn btn-top btn-sm">Login</Link>
              <Link to="/signup" className="btn btn-top btn-sm">Register</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Topbar;