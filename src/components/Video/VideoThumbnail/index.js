import moment from 'moment';
import './styles.css';

const VideoThumbnail = ({ video, onClick }) => (
	<div className="video-thumbnail-container">
		<img
			onClick={onClick}
			width="360"
			height="240"
			className="video-thumbnail me-3"
			loading="lazy"
			src={video.thumbnails.high.url}
			alt={video.title}
		/>
		<div className="d-flex flex-column text-start">
			<h3 onClick={onClick} className="video-title">
				{video.title}
			</h3>
			<span className="video-meta">{moment(video.publishedAt).fromNow()}</span>
			<span className="video-description">{video.description}</span>
		</div>
	</div>
);

export default VideoThumbnail;
