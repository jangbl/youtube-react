import React, {useState, useRef, useEffect} from 'react';
import './Video.scss';
import YouTube from 'react-youtube';
import axios from "axios";
// https://www.npmjs.com/package/react-youtube

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

export function Video(props) {
  //todo: triggers error:  React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render
  // if (!props.id) {
  //   return null;
  // }

  const [player, setPlayer] = useState(null);
  const [bookmarks, setBookmarks] = useState(null);
  const [duration, setDuration] = useState(0);

  //const embedUrl = `${BASE_EMBED_URL}${props.id}?autoplay=1`;
  // const range = props.start? `start=${props.start}&end=${props.end}` : '';
  // const embedUrl = `${BASE_EMBED_URL}${props.id}?${range}`;

  // seek to example: https://codesandbox.io/s/0xryy1xk6l
  // use ref={} !

  // console.log('video.js this: ' + player)

  const opts = {
    height: '400',
    width: '700',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const random_color = () => Math.floor(Math.random() * 16777215).toString(16);

  const fetchBookmarks = (videoID, duration) => {
    setDuration(duration);
    // todo: POST request causes CORS prob
    axios.get('http://127.0.0.1:5000/bookmarks', {
      params: {
        videoID,
        object_name: null,
      }
    }).then(response => {
      console.log('bookmark data fetched: ')
      console.log(JSON.stringify(response.data));
      // convert obj[key: val] to Map[key: val]
      let bookmarks = new Map(Object.entries(response.data));
      // plan: Map(name => [range_objs])
      for (const [label, ranges] of bookmarks) {
        // console.log(class_name + ranges)
        const all_ranges = [];
        // https://stackoverflow.com/questions/2086260/youtube-player-api-how-to-get-duration-of-a-loaded-cued-video-without-playing-i

        let prev = 0;

        for (const [start, end] of ranges) {
          console.log(start + ' ' + end);
          all_ranges.push({start: prev, end: start, occur: false})
          all_ranges.push({start, end, occur: true})
          prev = end;
        }
        // alert(duration);
        if (prev !== duration) {
          all_ranges.push({start: prev, end: duration, occur: false})
        }
        bookmarks.set(label, all_ranges)
      }

      // console.log(bookmarks);
      // console.log(bookmarks.get('car'))

      setBookmarks(bookmarks);
    });
  }

  // tutorial: https://medium.com/@timtan93/states-and-componentdidmount-in-functional-components-with-hooks-cac5484d22ad
  useEffect(() => {
    // fetchBookmarks(props.id);
    // console.log('fetched bookmarks');
  }, [])

  // console.log(bookmarks ? 'yes' : 'no')
  const bookmarksPanel = bookmarks !== null && duration ?
    <div> {
      [...bookmarks.entries()].map((pair, i) => {
        const [label, ranges] = pair;
        console.log('bookmarks for ' + label)
        const color = `#${random_color()}`;
        console.log(ranges);
        return (<div key={label}>{label}<br/>
            {ranges.map((range, range_index) =>
              <button disabled={!range.occur} onMouseOver={'pointer'}
                      style={{
                        width: Math.floor((opts.width / duration) * (range.end - range.start)),
                        height: 40,
                        display: 'inline',
                        padding: 10,
                        margin: 5,
                        border: 0,
                        backgroundColor: range.occur ? color : 'white'
                      }}
                      onClick={() => player.seekTo(range.start)}>{/*{range.start}-{range.end}*/}</button>
            )} </div>)

      })} </div> : null;

      // const player = useRef(null);
      // let player;
      // https://stackoverflow.com/questions/62199553/seekto-in-reactplayer-not-working-for-youtube-links

      // player = new YT.Player
      // https://developers.google.com/youtube/iframe_api_reference#Example_Video_Player_Constructors
      return (
      <div className='video-container'>
        <div className="video">
          {/*<iframe className='video-player' src={embedUrl} frameBorder='0' enablejsapi={true}*/}
          {/*        allow='autoplay; encrypted-media' allowFullScreen title='video'/>*/}
          <YouTube videoId={props.id} opts={opts}
                   onReady={event => {
                     setPlayer(event.target);
                     fetchBookmarks(props.id, event.target.getDuration());
                   }}/> {/* instead of player => setPlayer(player) */}
          {bookmarksPanel}
        </div>
      </div>
      );
      }