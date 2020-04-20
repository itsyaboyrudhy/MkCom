import React from 'react';

const TweetBox = (props) => {
  return(
    <div className="tweet-body">
      {props.children}
    </div>
  )
}

const Image = (props) => {
  return(
    <img src={props.image} alt="Logo" className="picture">
    </img>
  )
}

const Handle = (props) => {
  return(
    <div className="handle">
      {props.handle}
    </div>
  )
}

const Name = (props) => {
  return(
    <div className="name">
      {props.name}
    </div>
  )
}

const Tweet = (props) => {
  return(
    <div className="tweet">
      {props.tweet}
    </div>
  )
}

const TweetCommentButton = (props) => {
  return(
    <div className="tweet-comment-button"> 
      <button>Reageer</button>
    </div>
  )
}

const TweetLikeButton = (props) => {
  return(
    <div className="tweet-like-button">
      <button>Vind ik leuk</button>
    </div>
  )
}

const TweetShareButton = (props) => {
  return(
    <div className="tweet-share-button">
      <button>Deel</button>
    </div>
  )
}

const TweetBody = (props) => {
  return(
    <TweetBox>
      <div className="inner-body">
        <Image image={props.image}/>
        <div className="body">
          <div className="inner-body">
            <Name name={props.name}/>
            <Handle handle={props.handle}/>
          </div>
          <Tweet tweet={props.tweet}/>
        </div>
      </div>
      <div className="tweet-buttons">
        <TweetCommentButton tweet-comment-button={props.TweetCommentButton}/>
        <TweetLikeButton tweet-like-button={props.TweetLikeButton}/>
        <TweetShareButton tweet-share-button={props.TweetShareButton}/>
      </div>
    </TweetBox>
  )
}

export { TweetBody }