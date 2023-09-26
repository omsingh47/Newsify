// <--------------------------------------------CLASS BASED IMPLEMENTATION------------------------------------------------------->

// import React, { Component } from 'react'

// export class Newsitem extends Component {
  
//     render() {
//     let {title, description, imageUrl,newsUrl,author,date} = this.props;
//     return (
//       <div>
//            <div className="my-3">
//             <div className="card">
//                 <img src={!imageUrl?"https://etimg.etb2bimg.com/thumb/msid-98204440,imgsize-646068,width-1200,height-628,overlay-ettelecom/qualcomm-demonstrates-stable-diffusion-on-android-phone.jpg":imageUrl} className="card-img-top" alt="..."/>
//                 <div className="card-body">
//                     <h5 className="card-title">{title}...</h5>
//                     <p className="card-text">{description}...</p>
//                     <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm btn-primary">Read More</a>
//                     <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
//                 </div>
//               </div>
//            </div>
//         </div>
        
//     )
//   }
// }

// export default Newsitem


// <------------------------------------- FUNCTION BASED IMPLEMENTATION------------------------------------------------------->
import React from 'react'

const Newsitem = (props) =>{
  
    
    let {title, description, imageUrl,newsUrl,author,date} = props; //so that we dont have to write like props.imageUrl
    return (
        <div>
           <div className="my-4 mx-5">
            <div className="card">
                <img src={!imageUrl?"https://i.ibb.co/37sy0JS/news-image.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm btn-primary">Read More</a>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                </div>
              </div>
           </div>
        </div>
    )
}

export default Newsitem