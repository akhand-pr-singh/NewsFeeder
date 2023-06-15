import React from 'react';

const NewsItem = (props) => {
    const { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <>
            <div className="card">
                <div>
                    <span style={{
                        justifyContent: 'flex-end',
                        position: 'absolute', right: '0'
                    }} className="d-flex badge rounded-pill bg-danger">{!source ? 'Unknown' : source}</span>
                </div>

                <img src={!imageUrl ? "https://s.yimg.com/uu/api/res/1.2/LKRH31mzL9wqtcqoQ_lkjw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/835a5670-e5f4-11ed-9db6-3febf57b7a4a.cf.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-body-secondary">Published by {!author ? 'Unknown' : author} on {new Date(date).toLocaleString()}</small></p>
                    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </>
    );
};

export default NewsItem;