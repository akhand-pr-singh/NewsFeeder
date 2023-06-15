import React from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useState, useEffect} from 'react';

const News= (props)=>{

    const[articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [results, setResults]= useState(0);

    const capitalize=(word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const handleClick = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        const data = await fetch(url);
        props.setProgress(30);
        const parsedData = await data.json();
        props.setProgress(70);
        setPage(page + 1);
        setArticles(parsedData.articles);
        setResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    };

    const fetchMoreData = async () => {
        setPage(page+1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setResults(parsedData.totalResults);
        setLoading(false);
    }

    useEffect(()=>{  
        document.title = `${capitalize(props.category)} - NeWs FeEdEr`
        handleClick();
    },[])

        return (
            <>
                <h1 style={{ textAlign: 'center', marginTop: '80px' }}>Top {capitalize(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < results}
                    loader={<Spinner />}
                >
                    <div className="container my-3">
                        <div className="row">
                            {articles.map((element) => {
                                return (
                                    <div className="col-md-4 mb-4" key={element.url} >
                                        <NewsItem source={element.source.name} author={element.author} date={element.publishedAt} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                                    </div>);
                            })}
                        </div>
                    </div >
                </InfiniteScroll>
            </>
        );
    };

 News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
};

 News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

};

export default News;