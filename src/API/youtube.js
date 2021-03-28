import axios from 'axios';
const KEY = 'AIzaSyB7ei7H9NXCFGx305IgTJbAupLPRQS1AI8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',//to search only for videos not playlists
        maxResults: 15,
        key: KEY
    }
});