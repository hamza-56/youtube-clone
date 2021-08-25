import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {
	const { videoId } = useParams();
	const url = `https://www.youtube.com/watch?v=${videoId}`;
	return (
		<div className="container">
			<ReactPlayer url={url} />
		</div>
	);
};

export default VideoPlayer;
