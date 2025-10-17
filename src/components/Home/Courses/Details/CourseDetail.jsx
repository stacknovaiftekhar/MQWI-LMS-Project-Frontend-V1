import { useParams } from "react-router-dom";
import { course } from "../../../../assets/assets";
import Layout from "../../../Layout/Layout";
import courses from "../../../data/courses.json"; // Import course data

const CourseDetail = () => {
  const { courseId } = useParams(); // Get course ID from URL
  const courseData = courses.find((c) => c.id === courseId);

  if (!courseData) {
    return (
      <Layout>
        <div className="container">
          <h2>কোর্স পাওয়া যায়নি</h2>
          <p>আপনার দেওয়া লিংকে কোনো কোর্স পাওয়া যায়নি।</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="course-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pe-4">
              <img src={course[courseData.image]} alt={courseData.title} />
            </div>
            <div className="col-lg-6 ps-4">
              <div className="course-content hsf hsr">
                <h1 className="hsf hsb m-0 mb-4">{courseData.title}</h1>
                {courseData.description.map((desc, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: desc }}></p>
                ))}
              </div>
            </div>
          </div>
          <hr />
          <div className="mt-5 info hsf hsr">
            <div className="row">
              <div className="col-lg-6 ps-4">
                <h5 className="hsf hsb mb-3">কোর্সের সুবিধা ও প্রয়োজনীয় তথ্য</h5>
                <ul>
                  {courseData.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6 ps-4 links hsf hsr">
                <h5 className="hsf hsb mb-3">ভর্তি প্রক্রিয়া ও যোগাযোগের তথ্য</h5>
                <p>
                  আপনি যদি এই কোর্সে আগ্রহী হন, তাহলে এখনই
                  <a href={courseData.registrationLink} target="_blank" rel="noopener noreferrer">
                    {" "}
                    রেজিস্ট্রেশন ফরম
                  </a>{" "}
                  পূরণ করুন।
                </p>
                <h6 className="hsf hsm mt-3">আরও বিস্তারিত জানতে এবং নিয়মিত আপডেট পাওয়ার জন্য:</h6>
                <ul>
                  <li>
                    আমাদের ফেসবুক পেইজটি ফলো করতে ক্লিক করুন -{" "}
                    <a href="https://www.facebook.com/markazulquranwassunnah" target="_blank">
                      এখানে
                    </a>
                  </li>
                  <li>
                    আমাদের ফেসবুক গ্রুপে জয়েন করতে ক্লিক করুন -{" "}
                    <a href="https://www.facebook.com/markazulquranwassunnah" target="_blank">
                      এখানে
                    </a>
                  </li>
                  <li>
                    আমাদের হোয়াটসঅ্যাপে সরাসরি যোগাযোগ করতে ক্লিক করুন -{" "}
                    <a href="https://wa.me/8801974018621" target="_blank">
                      এখানে
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetail;