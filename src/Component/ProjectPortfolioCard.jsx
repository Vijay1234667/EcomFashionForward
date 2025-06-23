import React from 'react'

const ProjectPortfolioCard = ({Image,ProjectNum}) => {
    return (
        <>
            <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInLeft">
                <div className="card">
                    <img className="img-fluid  card-img-top"
                        src={Image} alt="ShopImage" />
                    <div className="card-body text-center">
                        <h6>{ProjectNum}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPortfolioCard
