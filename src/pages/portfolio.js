import React from "react";

function Portfolio() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-5 col-xs-5 pb-3">
                        <div className="card" style={{ width: '100%', height: '100%' }}>
                            <img src="assets/images/screenshotburger.png" className="card-img-top" alt="Burger App" />
                            <div className="card-body">
                                <h5 className="card-title">Burger App</h5>
                                <p className="card-text">Application focused on learning MVC/ORM with database interaction.</p>
                                <a href="https://hidden-garden-54962.herokuapp.com/" className="btn btn-primary">Burger App</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-5 col-xs-5 pb-3">
                        <div className="card" style={{ width: '100%', height: '100%' }}>
                            <img src="assets/images/WeatherScreenShot.png" height="200" width="200" className="card-img-top" alt="Weather" />
                            <div className="card-body">
                                <h5 className="card-title">Weather Board</h5>
                                <p className="card-text">Search the local weather and five day forecast. Find the weather in other cities.</p>
                                <a href="https://kina-rain.github.io/WeatherBoard/" className="btn btn-primary">Weather Board</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-5 col-xs-5 pb-3">
                        <div className="card" style={{ width: '100%', height: '100%' }}>
                            <img src="assets/images/Quiz.png" height="233" width="200" className="card-img-top" alt="Quiz Game" />
                            <div className="card-body">
                                <h5 className="card-title">Quiz Game</h5>
                                <p className="card-text">Fun quiz game that has a timer and takes score.</p>
                                <a href="https://kina-rain.github.io/JSQuiz/" className="btn btn-primary">Quiz Game</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-5 col-xs-5 pb-3">
                        <div className="card work" style={{ width: '100%', height: '100%' }}>
                            <img src="assets/images/calendarScreenShot.png" height="233" width="200" className="card-img-top" alt="Calendar" />
                            <div className="card-body">
                                <h5 className="card-title">Calendar</h5>
                                <p className="card-text">A daily calendar that can keep track of your schedule.</p>
                                <a href="https://kina-rain.github.io/Calendar/" className="btn btn-primary">Calendar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-5 col-xs-5 pb-3">
                        <div className="card work" style={{ width: '100%', height: '100%' }}>
                            <img src="assets/images/TeamProject.png" height="233" width="200" className="card-img-top" alt="Team Project" />
                            <div className="card-body">
                                <h5 className="card-title">Team Project 1</h5>
                                <p className="card-text">A team project to learn how to use Git Bash and APIs.</p>
                                <a href="https://kina-rain.github.io/The-Git-Gud-Team/" className="btn btn-primary">Team
                            Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-5 col-xs-5 pb-3">
                        <div className="card work" style={{ width: '100%', height: '100%' }}>
                            <img src="assets/images/screenshot2.png" height="233" width="200" className="card-img-top" alt="Team Project 2" />
                            <div className="card-body">
                                <h5 className="card-title">Team Project 2</h5>
                                <p className="card-text">A team project to learn full stack development and heroku.</p>
                                <a href="https://nottomon.herokuapp.com/" className="btn btn-primary">Team
                            Project 2</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;