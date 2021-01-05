import React from 'react';

const Posts = ({load, posts}) => {
    if (load) {
        return <small>Loading</small>
    }
    return (
        <div className='container-fluid'>
            <div className="row">
                {posts.map((headline, i) => {
                    return (
                        <div className="col-sm-4 mt-2" key={i}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{headline.title}</h5>
                                    <hr/>
                                    <img className="card-img-top" src={headline.urlToImage} alt={headline.description}/>
                                    <p className="card-text">{headline.description}</p>
                                    <a href={headline.url} target='_blank'>Читать дальше{headline.source.id}</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
export default Posts;