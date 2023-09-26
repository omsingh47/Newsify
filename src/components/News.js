// <--------------------------------------------CLASS BASED IMPLEMENTATION------------------------------------------------------->

// import React, { Component } from "react";
// import Newsitem from "./Newsitem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   constructor(props) {
//     super(props);
//     console.log("I am a constructor");
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0
//       // pageSize:8
//     };
//     document.title = `${capitalizeFirstLetter(
//       props.category
//     )} - NewsMonkey`;
//   }

//   capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   static defaultProps = {
//     country: "in",
//     pageSize: 6,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//  
//   async updateNews() {
//     this.props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page}&pageSize=${props.pageSize}`;
//     setState({ loading: true });
//     let data = await fetch(url);
//     this.props.setProgress(30);
//     let parsedData = await data.json()
//     this.props.setProgress(70);
//     setState({
//         articles: parsedData.articles,
//         totalResults: parsedData.totalResults,
//         loading: false, 
//     })
//     this.props.setProgress(100);

// }
// It is a lifecycle method and it runs after render is finished
// async componentDidMount() {
//   this.updateNews();
// }

//   // OnPrevclick = async () => {
//   //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page - 1}&page={state.page}&pageSize=${props.pageSize}`;
//   //   setState({ loading: true });
//   //   let data = await fetch(url);
//   //   let parsedData = await data.json();
//   //   // setState({articles: parsedData.articles});

//   //   setState({
//   //     page: this.state.page - 1,
//   //     articles: parsedData.articles,
//   //     loading: false,
//   //   });
//   // };

//   // OnNextclick = async () => {
//   //   if (
//   //     this.state.page + 1 >
//   //     Math.ceil(this.state.totalResults / this.state.pageSize)
//   //   ) {
//   //   } else {
//   //     let url = `https://newsapi.org/v2/top-headlines?country=${
//   //       this.props.country
//   //     }&category=${
//   //       this.props.category
//   //     }&apiKey=${props.apiKey}&page=${
//   //       this.state.page + 1
//   //     }&pageSize=${this.props.pageSize}`;
//   //     setState({ loading: true });
//   //     let data = await fetch(url);
//   //     let parsedData = await data.json();
//   //     // setState({articles: parsedData.articles});

//   //     setState({
//   //       page: this.state.page + 1,
//   //       articles: parsedData.articles,
//   //       loading: false,
//   //     });
//   //   }
//   // };

//   fetchMoreData = async () => {
//     // a fake async api call like which sends
//     // 20 more records in 1.5 secs
//     setState({ page: this.state.page + 1});
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page}&pageSize=${props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults
//     });
//   };

//   render() {
//     return (
//       <>

//           <h2 className="text-center">
//             NewsMonkey - Top {this.props.category} Headlines
//           </h2>
//           {/* {this.state.loading && <Spinner/>}  */}

//           <InfiniteScroll
//             dataLength={this.state.articles.length}
//             next={this.fetchMoreData}
//             hasMore={this.state.articles.length !== this.state.totalResults}
//             loader={
//                 <Spinner />
//             }
//           >  <div className="container">
//             <div className="row">
//               {
//                 /*!this.state.loading &&*/ this.state.articles.map(
//                   (element) => {
//                     return (
//                       <div className="col-md-4" key={element.url}>
//                         <Newsitem
//                           title={
//                             element.title?element.title:""
//                           }
//                           description={
//                             element.description?element.description:""
//                           }
//                           imageUrl={element.urlToImage}
//                           newsUrl={element.url}
//                           author={element.author ? element.author : "Unknown"}
//                           date={element.publishedAt}
//                         />
//                       </div>
//                     );
//                   }
//                 )
//               }
//             </div>
//             </div>
//           </InfiniteScroll>

//         </>

//     );
//   }
// }
//  {/* <div className="container d-flex justify-content-between">
//             <button disabled={state.page<=1} type="button" onClick={OnPrevclick} className="btn btn-dark">&larr; Previous</button>
//             <button type="button" className="btn btn-dark" onClick={OnNextclick}>Next &rarr;</button>
//             </div> */}

// export default News;


// <------------------------------------------FUNCTION BASED IMPLEMENTATION------------------------------------------------------->

import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setarticles] = useState([]);
    // eslint-disable-next-line
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);

    // pageSize:8

    // document.title = `${capitalizeFirstLetter(
    //   props.category
    // )} - NewsMonkey`;

    // eslint-disable-next-line
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    // It is a lifecycle method and it runs after render is finished
    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);

        setarticles(parsedData.articles);
        settotalResults(parsedData.articles);
        setloading(false);
        props.setProgress(100);

    }

    // Replacement of ComponentDidMount 
    useEffect(() => {
        updateNews();
    }, [])

    const fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setpage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);
    };


    return (
        <>

            <h2 className="text-center">
                Newsify - Top {props.category} Headlines
            </h2>
            {/* {state.loading && <Spinner/>}  */}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={
                    <Spinner />
                }
            >  <div className="container">
                    <div className="row">
                        {
                /*!state.loading &&*/ articles.map(
                            (element) => {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <Newsitem
                                            title={
                                                element.title ? element.title : ""
                                            }
                                            description={
                                                element.description ? element.description : ""
                                            }
                                            imageUrl={element.urlToImage}
                                            newsUrl={element.url}
                                            author={element.author ? element.author : "Unknown"}
                                            date={element.publishedAt}
                                        />
                                    </div>
                                );
                            }
                        )
                        }
                    </div>
                </div>
            </InfiniteScroll>

        </>

    );
}


News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};

export default News;