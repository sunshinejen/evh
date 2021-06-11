import React, { Component } from "react";
import InstagramEmbed from 'react-instagram-embed' 

class News extends Component {
  render() {
    return (
      <div>
        <h2>News</h2>
        <InstagramEmbed
  url='https://instagr.am/p/Zw9o4/'
  maxWidth={500}
  hideCaption={true}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
        />
      </div>
      
    );
  }
}
 
export default News;