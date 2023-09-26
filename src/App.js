// <--------------------------------------------CLASS BASED IMPLEMENTATION------------------------------------------------------->
// import './App.css';

// import React, { Component } from 'react'
// import NavBar from './components/NavBar';
// import News  from './components/News';
// import {
//   Routes,
//   Route
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

// export default class App extends Component {

//   pageSize = 5
//   apiKey = process.env.REACT_APP_NEWS_API
//   // apiKey = "6b0ed98294424e2a8bbbd713ffb3f592"

//   state = {
//    progress:0
//   }

// setProgress = (progress)=>{
//   this.setState({progress:progress});
// }



//   render() {
//     return (
//       <div>
//         <LoadingBar
//         color='#f11946'
//         progress={this.state.progress}
//       />
//       <NavBar/>
         
//          <Routes>
//          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="general"  country="us" category="general"/>} />
//          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="business"  country="us" category="business"/>} />
//          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="entertainment"  country="us" category="entertainment"/>} />
//          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="health"  country="us" category="health"/>} />
//          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="science"  country="us" category="science"/>} />
//          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="sports"  country="us" category="sports"/>} />
//          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="technology"  country="us" category="technology"/>} />
//          </Routes>
         
//       </div>
      
//     )
//   }
// }



// <--------------------------------------FUNCTION BASED IMPLEMENTATION------------------------------------------------------->
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () =>{

  const [progress, setprogress] = useState(0)

  const pageSize = 5
  const apiKey = process.env.REACT_APP_NEWS_API
  // apiKey = "6b0ed98294424e2a8bbbd713ffb3f592"

    return (
      <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Navbar/>
         
         <Routes>
         <Route exact path="/" element={<News setProgress={setprogress} apiKey={apiKey} pageSize={pageSize} key="general"  country="us" category="general"/>} />
         <Route exact path="/business" element={<News setProgress={setprogress} apiKey={apiKey} pageSize={pageSize} key="business"  country="us" category="business"/>} />
         <Route exact path="/entertainment" element={<News setProgress={setprogress} apiKey={apiKey} pageSize={pageSize} key="entertainment"  country="us" category="entertainment"/>} />
         <Route exact path="/health" element={<News setProgress={setprogress} apiKey={apiKey} pageSize={pageSize} key="health"  country="us" category="health"/>} />
         <Route exact path="/science" element={<News setProgress={setprogress} apiKey={apiKey} pageSize={pageSize} key="science"  country="us" category="science"/>} />
         <Route exact path="/sports" element={<News setProgress={setprogress} apiKey={apiKey} pageSize={pageSize} key="sports"  country="us" category="sports"/>} />
         <Route exact path="/technology" element={<News setProgress={setprogress} apiKey={apiKey} pageSize={pageSize} key="technology"  country="us" category="technology"/>} />
         </Routes>
         
      </BrowserRouter>
      
    )
  }

export default App;