import React from 'react'



const BlogsRightCard = ({Image, PostName, Posttext, Likes}) => {
    return (
        <>
            <div className="post-head mb-2 md-mb-2">
                <div className="row  py-1 border-bottom border-dark-subtle">
                    <div className="col-4 inner">
                        <img className="img-fluid" src={Image} alt="shopimage" />
                    </div>
                    <div className="col-8">
                        <div className="card-body p-0">
                            <h6>{PostName} <span className='d-block mt-2'>{Likes}</span></h6>
                            <p className='post-head-orange-text'>{Posttext}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogsRightCard
