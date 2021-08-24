import Header from 'components/Header';
import VideoThumbnailList from 'components/Video/VideoThumbnailList';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoPlayer from 'pages/VideoPlayer';
import { Switch, Route, withRouter } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Index = ({ history }) => {
	const [videos, setVideos] = useState([]);
	const [searchText, setSearchText] = useState('');

	const handleSearch = (event) => {
		event.preventDefault();
		const searchText = event.target[0].value;
		setSearchText(searchText);
		history.push('/');
	};

	const loadVideos = async (searchText) =>
		axios.get(API_URL, {
			params: {
				key: API_KEY,
				part: 'snippet',
				type: 'video',
				maxResults: 50,
				q: searchText,
			},
		});

	useEffect(() => {
		loadVideos(searchText).then((res) => {
			setVideos(res.data.items);
		});
	}, [searchText]);

	return (
		<div>
			<Header handleSearch={handleSearch} />
			<Switch>
				<Route exact path="/">
					<VideoThumbnailList videos={videos} />
				</Route>

				<Route path="/watch/:videoId">
					<VideoPlayer />
				</Route>
			</Switch>
		</div>
	);
};

export default withRouter(Index);
