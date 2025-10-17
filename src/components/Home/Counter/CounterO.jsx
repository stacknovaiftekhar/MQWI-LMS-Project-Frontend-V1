
const Counter = () => {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                <div className="counter counter1 text-center">
                    <div className="ico"><i className="fa fa-heart"></i></div>
                    <h4 className="hsb">শিক্ষক/স্টাফ</h4>
                    <div className="count-number">
                        <span className="count hsb">১২</span>
                        <span className="plus">+</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                <div className="counter counter2 text-center">
                    <div className="ico"><i className="fa fa-globe"></i></div>
                    <h4 className="hsb">চলমান কোর্স</h4>
                    <div className="count-number">
                        <span className="count hsb">১৫</span>
                        <span className="plus">+</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                <div className="counter counter3 text-center">
                    <div className="ico"><i className="fa fa-user"></i></div>
                    <h4 className="hsb">সমাপ্ত কোর্স</h4>
                    <div className="count-number">
                        <span className="count hsb">১০</span>
                        <span className="plus">+</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                <div className="counter counter4 text-center">
                    <div className="ico"><i className="fa fa-users"></i></div>
                    <h4 className="hsb">ছাত্রসংখ্যা</h4>
                    <div className="count-number">
                        <span className="count hsb">৫০০</span>
                        <span className="plus">+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter