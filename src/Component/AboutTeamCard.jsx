import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const AboutTeamCard = ({MemberImg, MemberName, MemberDesignation, MemberEmail}) => {
    return (
        <>
            <div className="col-lg-4 col-sm-6">
                <div className="card">
                    <img className="img-fluid rounded-circle card-img-top"
                        src={MemberImg} alt="Vanessalaird" />
                    <div className="card-body text-center">
                        <h4>{MemberName}</h4>
                        <h6 className='orange-color'>{MemberDesignation}</h6>
                        <a href="/" className='text-decoration-none '><span><TwitterIcon /></span>{MemberEmail}</a>
                        <div>
                            <ul className="Team-Social-left-icon p-0">
                                <li><FacebookOutlinedIcon /></li>
                                <li><TwitterIcon /></li>
                                <li><LinkedInIcon /></li>
                                <li><InstagramIcon /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutTeamCard
