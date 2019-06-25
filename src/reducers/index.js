import { combineReducers } from 'redux';

const songsReducer = () => {
   return [
        { title: 'I Want it That Way', duration: '4:05'},
        { title: 'Sweet Caroline', duration: '2:45'},
        { title: 'Shallows', duration: '3:25'},
        { title: 'Pour Some Sugar On Me', duration: '3:45'}
   ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});