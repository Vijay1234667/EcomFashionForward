import React from 'react'

import ProjectCard from './assets/ProjectCard.png';
import ProjectCard2 from './assets/ProjectCard2.png';
import ProjectCard3 from './assets/ProjectCard3.png';
import ProjectCard4 from './assets/ProjectCard4.png';
import ProjectCard5 from './assets/ProjectCard5.png';
import ProjectCard6 from './assets/ProjectCard6.png';
import ProjectCard7 from './assets/ProjectCard7.png';
import ProjectCard8 from './assets/ProjectCard8.png';
import ProjectCard9 from './assets/ProjectCard9.png';
import ProjectCard10 from './assets/ProjectCard10.png';
import BreadcrumbFixedTop from './BreadcrumbFixedTop';
import ProjectPortfolioCard from './ProjectPortfolioCard';

const ProjectsPage = () => {
    return (
        <>
            <BreadcrumbFixedTop Title="Projects" Subtitle="Project" />
            <section className="section-work-data">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-lg-3 col-6 text-center mb-4 mb-md-0 ">
                            <h2 className="counter-numbers" data-number="2000">2220+</h2>
                            <p>Project Completed</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <h2 className="counter-numbers" data-number="6000">4440+</h2>
                            <p>Happy Clients</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <h2 className="counter-numbers" data-number="5000">3320+</h2>
                            <p>Cup Of Coffee</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <h2 className="counter-numbers" data-number="3000">4550+</h2>
                            <p>Real Proffessionals</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-project-section">
                <div className="container ">
                    <div className="our-project-section-top-content text-center mb-5">
                        <h4 className='font-h3'>All Projects</h4>
                        <p className='text-paragraph'>
                            Meet the Slick's crew - a dedicated and passionate team who wants to improve <br /> your experience of creating websites.
                        </p>
                        <div className="transparent-btn">
                            <a href="/" className="btn">OUR PROJECTS</a>
                        </div>
                    </div>

                    <div className="row popup-view1">
                        <ProjectPortfolioCard ProjectNum="Project1" Image={ProjectCard}/>
                        <ProjectPortfolioCard ProjectNum="Project2" Image={ProjectCard2} />
                        <ProjectPortfolioCard ProjectNum="Project3" Image={ProjectCard3} />
                        <ProjectPortfolioCard ProjectNum="Project4" Image={ProjectCard4} />
                        <ProjectPortfolioCard ProjectNum="Project5" Image={ProjectCard5} />
                        <ProjectPortfolioCard ProjectNum="Project6" Image={ProjectCard6} />
                        <ProjectPortfolioCard ProjectNum="Project7" Image={ProjectCard7} />
                        <ProjectPortfolioCard ProjectNum="Project8" Image={ProjectCard8} />
                        <ProjectPortfolioCard ProjectNum="Project9" Image={ProjectCard9} />
                        <ProjectPortfolioCard ProjectNum="Project10" Image={ProjectCard10} />
                    </div>
                </div >
            </section >
        </>
    )
}

export default ProjectsPage
