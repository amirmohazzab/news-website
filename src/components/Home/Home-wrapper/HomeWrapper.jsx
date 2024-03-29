import React, { useContext } from 'react'
import img from '../../../assets/images/1.jpeg'
import './homewrapper.css'
import { HomeContext } from '../../../context/context'
import Loader from '../../Loading/Loader'
import { Link } from 'react-router-dom'

const HomeWrapper = () => {

    const {videos, loading, error, lastNewsState, loadingLastNews, lastNews} = useContext(HomeContext);
    
  return (
    <div className="wrapper">
        <div className="container">
            <div className="columns is-flex-widescreen is-block-tablet is-align-items-start">
                <div className="column is-one-quarter-widescreen is-full-desktop">
                    <div className="right-side-post">
                       {
                            loadingLastNews ?
                            (
                                <div className="right-side-top has-text-centered mt-6">
                                    <Loader />
                                </div>
                            )
                            :
                            (
                                <>
                                    {
                                        lastNews.map((news) => (
                                            <div className="right-side-top" key={news.id}>
                                                <Link state={news} to={`/detail/${news.id}`}>
                                                    <div className="right-side-img">
                                                        <div className="overlay"></div>
                                                        <img src={news.url} alt="" />
                                                    </div>
                                                    <div className="post-info">
                                                        <div className="post-cat">
                                                            <span> {news.category.name} </span>
                                                        </div>
                                                        <div className="post-title"> {news.title} </div>
                                                        <div className="post-date">{news.createdAt}</div>
                                                    </div>
                                                </Link>
                                            </div>
                                    ))
                                }
                                </>
                            ) 
                       }
                    </div>
                </div>
                <div className="column is-three-quarters-widescreen is-full-tablet">
                    <div className="post-left-side">
                        {
                            loading ? (<div className='has-text-right'>
                                <Loader />
                            </div>) :
                            (<video src={videos.url} controls width="100%" height="100%"></video>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeWrapper
