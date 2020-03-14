import React from "react";

function Profile() {
    return (
        <>
            <div className="container-fluid mt-5 px-md-5">
                <div className="row">
                    <div className="col-12">
                        <div className="secMain">
                            <h1>Tina Lawrence</h1>
                            <img src="assets/images/TinaProfile.jpg" className="myimage" alt="Tina" />
                            <p> Hi, my name is Tina Lawrence. I am currently a student at Johns Hopkins University, in a boot camp program
                            to become a full stack web developer. Throughout my career as a nurse, I have always worked with computers.
                            Lately, I've see more reliance on software programs in medicine, so I decided to make the move from using
                            those programs to building them. Once I complete my program, I will be looking for a full time position with a
                            company as a Jr. Developer.</p>
                            <p>I started my career in nursing and would like to further my career in software development while continuing to
                            help the community. Since I have gained a proficiency in the nursing field, I am looking for a company that will
                            offered me the opportunity to work in medical technology. I feel the medical community needs to evolve into the 21st
                            century. With some Hospitals implementing virtual appointments and video consultations with doctors across the country, I
                            feel this is the first steps to providing medical care across the nation and globe.  I was able to get first
                            hand experience in with working with virtual appointments and video consultations. I feel that the medical community needs to
                            embrace the demands of global healthcare and long-distance collaboration.</p>
                            <p>Contact #: 443-270-4247</p>
                            <h5>Links:
                            <a href="https://www.linkedin.com/in/tina-lawrence-15a20ab6/"><i
                                    className="fab fa-linkedin-in fa-lg"></i></a>
                                <a href="https://github.com/Kina-rain"><i className="fab fa-github fa-lg"></i></a>
                                <a href="tina@lawtk.net"><i className="far fa-envelope fa-lg"></i></a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container secMain mt-2">
                <div className="row bg-white">
                    <div className="col-12">
                        <h2>Computer Languages</h2>
                    </div>
                </div>
                <div className="row bg-white justify-content-center">
                    <div className="col-lg-1 col-md-3 col-sm-3 col-xs-4 text-center p-0">
                        <img src="./assets/images/html5.png" alt="html" height="90" width="90" />
                        <h6 className="font-weight-bold" >HTML5</h6>
                    </div>
                    <div className="col-lg-1 col-md-3 col-sm-3 col-xs-4 text-center p-0">
                        <img src="./assets/images/css3.png" alt="css3" height="90" width="90" />
                        <h6 className="font-weight-bold" >CSS3</h6>
                    </div>
                    <div className="col-lg-1 col-md-3 col-sm-3 col-xs-4 text-center p-0">
                        <img src="./assets/images/javascript.png" alt="javascript" height="90" width="90" />
                        <h6 className="font-weight-bold" >Javascript</h6>
                    </div>
                    <div className="col-lg-1 col-md-3 col-sm-3 col-xs-4 text-center p-0">
                        <img src="./assets/images/jquery.png" alt="jquery" height="90" width="90" />
                        <h6 className="font-weight-bold" >jQuery</h6>
                    </div>
                    <div className="col-lg-1 col-md-3 col-sm-3 col-xs-4 text-center p-0">
                        <img src="./assets/images/nodejs.png" alt="nodejs" height="90" width="90" />
                        <h6 className="font-weight-bold" >Node</h6>
                    </div>
                    <div className="col-lg-1 col-md-3 col-sm-3 col-xs-4 text-center p-0">
                        <img src="./assets/images/bootstrap.png" alt="bootstrap" height="90" width="90" />
                        <h6 className="font-weight-bold" >Bootstrap</h6>
                    </div>
                    <div className="col-lg-1 col-md-3 col-sm-3 col-xs-4 text-center p-0">
                        <img src="./assets/images/github.png" alt="Github" height="90" width="90" />
                        <h6 className="font-weight-bold" >Github</h6>
                    </div>
                    <div className="col-lg-1 col-md-3 col-sm-3 col-xs-4 text-center p-0">
                        <img src="./assets/images/gitLab.png" height="90" width="90" alt="Gitlab" />
                        <h6 className="font-weight-bold" >GitLab</h6>
                    </div>
                    <div className="col-lg-1 col-md-3 col-sm-3 col-xs-4 text-center p-0">
                        <img src="./assets/images/MDL.jpg" height="90" width="90" alt="MDL" />
                        <h6 className="font-weight-bold" >MDL</h6>
                    </div>
                    <div className="col-lg-1 col-md-3 col-sm-3 col-xs-4 text-center p-0">
                        <img src="./assets/images/mysql.png" height="90" width="90" alt="mysql" />
                        <h6 className="font-weight-bold" >MySql</h6>
                    </div>
                    <div className="col-lg-1 col-md-3 col-sm-3 col-xs-4 text-center p-0">
                        <img src="./assets/images/sequelize.png" height="90" width="90" alt="sequelize" />
                        <h6 className="font-weight-bold" >Sequelize</h6>
                    </div>
                    <div className="col-lg-1 col-md-3 col-sm-3 col-xs-4 text-center p-0">
                        <img src="./assets/images/mongo.png" height="90" width="90" alt="mongo" />
                        <h6 className="font-weight-bold" >MongoDB</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;