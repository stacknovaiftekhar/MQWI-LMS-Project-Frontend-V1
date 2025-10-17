import { FAIcon, search } from '../../../assets/faicons';
import { navbar } from '../../../assets/assets';
import { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router";

const Navbar = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg nav-bg ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={navbar.NavLogo} alt="Logo of Markajul Quran Wassunnah Institute" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item btn btn-nav"><NavLink to="/" className="nav-link" activeClassName="active" exact>মূলপাতা</NavLink></li>
            <li className="nav-item btn btn-nav"><NavLink to="/about" className="nav-link" activeClassName="active">পরিচিতি</NavLink></li>
            <li className="nav-item btn btn-nav dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">কোর্স</a>
              <ul className="dropdown-menu nav-bg text-center" aria-labelledby="navbarDropdown">
                <li><Link to="/courses/quran-shikkha" className="dropdown-item">বিশুদ্ধ কুরআন শিক্ষা কোর্স</Link></li>
                <li><Link to="/courses/deen-shikkha" className="dropdown-item">মৌলিক ইসলামী শিক্ষা কোর্স</Link></li>
                <li><Link to="/courses/hifzul-quran" className="dropdown-item">হিফজুল কুরআন কোর্স</Link></li>
                <li><Link to="/courses/aqidah-course" className="dropdown-item">আক্বিদা বিষয়ক কোর্স</Link></li>
                {/* <li><hr className="dropdown-divider" /></li> */}
                {/* <li><Link to="/temp" className="dropdown-item">অন্যান্য কোর্স</Link></li> */}
              </ul>
            </li>
            <li className="nav-item btn btn-nav"><NavLink to="/activity" className="nav-link" activeClassName="active">কার্যক্রম</NavLink></li>
            <li className="nav-item btn btn-nav"><NavLink to="/notice" className="nav-link" activeClassName="active">নোটিশ</NavLink></li>
            {/* <li className="nav-item"><a className="nav-link" href="#">ই-ক্যাম্পাস</a></li> */}
            <li className="nav-item btn btn-nav"><NavLink to="/fotoya" className="nav-link" activeClassName="active">ফতোয়া</NavLink></li>
            <li className="nav-item btn btn-nav"><NavLink to="/sadaqah" className="nav-link" activeClassName="active">সাদাকাহ</NavLink></li>
          </ul>
          <form className="d-flex">
            <div className="input-group">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
              <button className="btn btn-outline-success" type="submit" id="button-addon2"><FAIcon icon={search.faSearch} /></button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar