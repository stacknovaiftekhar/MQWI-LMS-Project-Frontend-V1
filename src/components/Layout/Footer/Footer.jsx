import { FAIcon, social, fooicon } from '../../../assets/faicons';
import { footer } from '../../../assets/assets';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-top hsf">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="footer-widget pe-2">
                <h5>About Us</h5>
                <img src={footer.Divider3} alt="Heading Divider" />
                <div className="row about-foo">
                  <div className="col-sm-3 col-4">
                    <img src={footer.FooterLogo} alt="Footer Logo" />
                  </div>
                  <div className="col-sm-9 col-8 text-justify">
                    <p>
                      <strong>মারকাজুল কুরআন ওয়াসসুন্নাহ ইন্সটিটিউট</strong> অনলাইনভিত্তিক একটি অনন্য ইসলামী শিক্ষা প্রতিষ্ঠান, যেখানে কুরআন, হাদিস, ফিকহসহ শরীয়তের বিভিন্ন বিষয়ে অভিজ্ঞ আলেম-আলেমাদের তত্ত্বাবধানে বিভিন্ন কোর্স করার সুব্যবস্থা রয়েছে। আমাদের লক্ষ্য হলো ইসলামী শিক্ষাকে সহজ, আকর্ষণীয় ও বোধগম্য করে সবার কাছে পৌঁছে দেওয়া, যাতে প্রত্যেকে কুরআন ও সুন্নাহর আলোকে নিজেদের জীবন গঠন করতে পারে এবং তা বাস্তব জীবনে প্রয়োগ করতে সক্ষম হয়।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-7">
              <div className="footer-widget ms-sm-0 ms-5">
                <h5>Contact Us</h5>
                <img src={footer.Divider3} alt="Heading Divider" />
                <div className="contact-foo">
                  <ul>
                    <li><i className="ico"><FAIcon icon={fooicon.faPhone} /></i><span><strong>+880 1974-018621</strong></span></li>
                    <li><i className="ico"><FAIcon icon={fooicon.faEnvelope} /></i><span className='email'>info@markazulquranwassunnah.com</span></li>
                    <li><i className="ico"><FAIcon icon={fooicon.faMapMarkerAlt} /></i><span>Dhaka, Bangladesh</span></li>
                  </ul>
                </div>
                <div className="social-foo">
                  <ul className="list-inline">
                    <i className="ico"><FAIcon icon={fooicon.faUsers} /></i>
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
              </div>
            </div>

            <div className="col-lg-3 col-sm-5">
              <div className="footer-widget ms-5">
                <h5>Useful Links</h5>
                {/* <img src={footer.Divider3} alt="" style={{ transform: 'scaleX(-1)' }} /> */}
                <img src={footer.Divider3} alt="Heading Divider" />
                <div className="link-foo">
                  <ul>
                    <li><a href="#"><i><FAIcon icon={fooicon.faAnglesRight} /></i>পরিচিতি</a></li>
                    <li><a href="#"><i><FAIcon icon={fooicon.faAnglesRight} /></i>কোর্স</a></li>
                    <li><a href="#"><i><FAIcon icon={fooicon.faAnglesRight} /></i>কার্যক্রম</a></li>
                    <li><a href="#"><i><FAIcon icon={fooicon.faAnglesRight} /></i>মিডিয়া</a></li>
                    <li><a href="#"><i><FAIcon icon={fooicon.faAnglesRight} /></i>সাদাকাহ</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <div className="copyright text-lg-start text-sm-center text-center">
                <p>Copyright © 2025 by <span>Markajul Quran Wassunnah Institute.</span> All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="developer text-lg-end text-sm-center text-center">
                <p>Designed & Developed By <span>Iftekhar Hasan</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer