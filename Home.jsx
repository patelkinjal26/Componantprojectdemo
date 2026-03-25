import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <h1>I am Home page Content</h1>
                <Footer/>
            </div>
        )
    }
}
export default Home;