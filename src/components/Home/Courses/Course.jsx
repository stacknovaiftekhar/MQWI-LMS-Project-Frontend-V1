import { course } from '../../../assets/assets';
import { Link } from 'react-router';

const Course = () => {

  const courses = [
    { image: course.QuranShikkha, title: "বিশুদ্ধ কুরআন শিক্ষা কোর্স", fee: "৮২০", link: "/courses/quran-shikkha",
      desc: "এই কোর্সে শিক্ষার্থীরা দক্ষ ও অভিজ্ঞ উস্তায-উস্তাযার তত্ত্বাবধানে স্পষ্ট, ঝরঝরে, বিশুদ্ধভাবে ও তাজবীদ সহকারে কুরআন তিলাওয়াত শিখতে পারবে, ইনশাআল্লাহ।"
     },
    { image: course.DeenShikkha, title: "মৌলিক ইসলামী শিক্ষা কোর্স", fee: "১০০০", link: "/courses/deen-shikkha",
      desc: "মৌলিক ইসলামী শিক্ষা কোর্সে আপনাদেরকে ইসলামের মৌলিক, প্রয়োজনীয় ও গুরুত্বপূর্ণ বিষয়গুলো বিস্তারিতভাবে শেখানো হবে, দক্ষ ও অভিজ্ঞ উস্তায-উস্তাযার তত্ত্বাবধানে।"
    },
    { image: course.HifzulQuran, title: "হিফজুল কুরআন কোর্স", fee: "১০২০", link: "/courses/hifzul-quran",
      desc: "এই কোর্সে শিক্ষার্থীদের সংক্ষিপ্ত সময়ের মধ্যে সম্পূর্ণ কুরআন অথবা ৩০ নম্বর পারা ও আমলী সূরাসমূহ নিয়মতান্ত্রিক পদ্ধতিতে মুখস্থ করানো ও হিফজ করানো হবে।"
    },
    { image: course.AqidahCourse, title: "আক্বিদা বিষয়ক কোর্স", fee: "৫০০", link: "/courses/aqidah-course",
      desc: "আক্বিদা কোর্সটিতে ১৬টি ক্লাসে আক্বিদা সম্পর্কিত বিভিন্ন মৌলিক বিষয়গুলো সহ জরুরি অনেক বিষয় শেখানো, জানানো ও বিস্তারিত আলোচনা করা হবে, ইনশাআল্লাহ।"
    },
  ];

  return (
    <div className="row">
      {courses.map((course, index) => (
        <div className="col-xl-3 col-md-6 mb-3" key={index}>
          <div className="card text-center">
            <div className="card-img">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="card-body hsf">
              <h5 className="card-title hsf hss">{course.title}</h5>
              <p className="card-text text-justify">{course.desc}</p>
              <p className="fee"><b>মাসিক ফি: {course.fee} টাকা</b></p>
              <Link to={course.link} className="btn btn-gen w-75"><span>বিস্তারিত দেখুন</span></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Course