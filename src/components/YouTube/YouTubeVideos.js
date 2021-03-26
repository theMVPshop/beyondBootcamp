import React from 'react'
import YouTube from 'react-youtube-embed'
import "./youTubeVideos.css";

export default function YouTubeVideos() {
    return (
        <div className="youtube-body">
            <div className="youtube-bigVideoCont">
                <div className="youtube-bigVideo">
                    <div>
                        <YouTube id='KDBP4FKXOXs' />
                    </div>
                </div>
            </div>
            <div className="youtube-smallVideosCont">
                <div>
                    <div className="youtube-smallVideos">
                        <div className="youtube-smallVid"><YouTube id='KDBP4FKXOXs' /></div>
                        <div className="youtube-smallVid"><YouTube id='KDBP4FKXOXs' /></div>
                        <div className="youtube-smallVid"><YouTube id='KDBP4FKXOXs' /></div>
                    </div>
                </div>
            </div>
            <div className="youtube-moreVids">
                <a href="http://www.youtube.com">See More Videos</a>
            </div>
            
        </div>
    )
}
