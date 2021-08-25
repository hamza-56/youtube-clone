import { useHistory } from 'react-router-dom';
import VideoThumbnail from '../VideoThumbnail';

const VideoThumbnailList = ({ videos }) => {
	const history = useHistory();

	const playVideo = (videoId) => {
		history.push(`/watch/${videoId}`);
	};

	const videoThumbnails = videos.map((video) => (
		<VideoThumbnail
			onClick={() => playVideo(video.id.videoId)}
			key={video.etag}
			video={video.snippet}
		/>
	));

	return <div className="container">{videoThumbnails}</div>;
};

export default VideoThumbnailList;
