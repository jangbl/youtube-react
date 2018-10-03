import React from 'react';
import {shallow} from 'enzyme';
import {WatchContent} from '../WatchContent';


const videoId = 'OVazJLD5lM8';
const channelId = 'UCsN8M73DMWa8SPp5o_0IAQQ';
const channels = {
  [channelId]: {
    "kind": "youtube#channel",
    "id": "UCsN8M73DMWa8SPp5o_0IAQQ",
    "snippet": {
      "title": "Tomorrowland",
      "description": "",
      "customUrl": "TomorrowlandChannel",
      "thumbnails": {
        "medium": {
          "url": "https://yt3.ggpht.com/-3XgUfBpSx-U/AAAAAAAAAAI/AAAAAAAAAAA/dvkt4EKQbMs/s240-c-k-no-mo-rj-c0xffffff/photo.jpg",
          "width": 240,
          "height": 240
        },
      },
    },
    "statistics": {
      "subscriberCount": "6750773",
    }
  }
};
const comments = {
  [videoId]: [
    {
      "kind": "youtube#commentThread",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/7qOYhKtSTLDez0FUuT8Axyuyhvg\"",
      "id": "UgycuaK9UFzPyBHmgNJ4AaABAg",
      "snippet": {
        "videoId": "OVazJLD5lM8",
        "topLevelComment": {
          "kind": "youtube#comment",
          "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/iPL4MvxUFXz1L8Rgn1EAXvIVU5s\"",
          "id": "UgycuaK9UFzPyBHmgNJ4AaABAg",
          "snippet": {
            "authorDisplayName": "Peter Unlustig",
            "authorProfileImageUrl": "https://yt3.ggpht.com/-QO3910-PfI0/AAAAAAAAAAI/AAAAAAAAAAA/XiVbzk5N7TI/s28-c-k-no-mo-rj-c0xffffff/photo.jpg",
            "authorChannelUrl": "http://www.youtube.com/channel/UC5hCkka0HvWJ0PqRFhUDaig",
            "authorChannelId": {
              "value": "UC5hCkka0HvWJ0PqRFhUDaig"
            },
            "videoId": "OVazJLD5lM8",
            "textDisplay": "WTF is this setup … what does he need 20 channels for?",
            "textOriginal": "WTF is this setup … what does he need 20 channels for?",
            "canRate": true,
            "viewerRating": "none",
            "likeCount": 0,
            "publishedAt": "2018-07-27T07:42:12.000Z",
            "updatedAt": "2018-07-27T07:42:12.000Z"
          }
        },
        "canReply": true,
        "totalReplyCount": 0,
        "isPublic": true
      }
    },
    {
      "kind": "youtube#commentThread",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/T0sT4IaC2pvS6vcIBKXnPj9Tisc\"",
      "id": "UgyMcYqdC45ZxlB21od4AaABAg",
      "snippet": {
        "videoId": "OVazJLD5lM8",
        "topLevelComment": {
          "kind": "youtube#comment",
          "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/7F2iala6QM8arnhO0vYhucJSNUM\"",
          "id": "UgyMcYqdC45ZxlB21od4AaABAg",
          "snippet": {
            "authorDisplayName": "skinnyguy 96",
            "authorProfileImageUrl": "https://yt3.ggpht.com/-3UpLc3OFFg0/AAAAAAAAAAI/AAAAAAAAAAA/ItLZkpJpTIk/s28-c-k-no-mo-rj-c0xffffff/photo.jpg",
            "authorChannelUrl": "http://www.youtube.com/channel/UCfj2YFpHr-7Cqw_ZGh3iRVg",
            "authorChannelId": {
              "value": "UCfj2YFpHr-7Cqw_ZGh3iRVg"
            },
            "videoId": "OVazJLD5lM8",
            "textDisplay": "What&#39;s the song at minute \u003ca href=\"https://www.youtube.com/watch?v=OVazJLD5lM8&amp;t=33m00s\"\u003e33:00\u003c/a\u003e ? Pleaaase",
            "textOriginal": "What's the song at minute 33:00 ? Pleaaase",
            "canRate": true,
            "viewerRating": "none",
            "likeCount": 0,
            "publishedAt": "2018-07-27T03:34:28.000Z",
            "updatedAt": "2018-07-27T03:34:28.000Z"
          }
        },
        "canReply": true,
        "totalReplyCount": 0,
        "isPublic": true
      }
    },
    {
      "kind": "youtube#commentThread",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/oCeh5wWi-o4DTu_S17Dtg6mwu58\"",
      "id": "UgyWzeAFVcriz6eoqHJ4AaABAg",
      "snippet": {
        "videoId": "OVazJLD5lM8",
        "topLevelComment": {
          "kind": "youtube#comment",
          "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/ry0MKR74RE4suvQiOi4sUze35Ow\"",
          "id": "UgyWzeAFVcriz6eoqHJ4AaABAg",
          "snippet": {
            "authorDisplayName": "CyberPixl Music",
            "authorProfileImageUrl": "https://yt3.ggpht.com/-IQnM1McHOtU/AAAAAAAAAAI/AAAAAAAAAAA/bg0izTzgGVw/s28-c-k-no-mo-rj-c0xffffff/photo.jpg",
            "authorChannelUrl": "http://www.youtube.com/channel/UC9chIogLbG5wIL7PVZvu5GQ",
            "authorChannelId": {
              "value": "UC9chIogLbG5wIL7PVZvu5GQ"
            },
            "videoId": "OVazJLD5lM8",
            "textDisplay": "\u003cb\u003e\u003ci\u003eYou just gotta love how he feels the music!\u003c/i\u003e\u003c/b\u003e",
            "textOriginal": "*_You just gotta love how he feels the music!_*",
            "canRate": true,
            "viewerRating": "none",
            "likeCount": 1,
            "publishedAt": "2018-07-27T00:35:42.000Z",
            "updatedAt": "2018-07-27T00:35:42.000Z"
          }
        },
        "canReply": true,
        "totalReplyCount": 0,
        "isPublic": true
      }
    },
  ]
};
const videos = {
  [videoId]: {
    "kind": "youtube#video",
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/pfAEtRMpZYwHJ2BWFjUzYO1UTdE\"",
    "id": "OVazJLD5lM8",
    "snippet": {
      "publishedAt": "2018-07-24T09:04:33.000Z",
      "channelId": "UCsN8M73DMWa8SPp5o_0IAQQ",
      "title": "Paul Kalkbrenner | Tomorrowland Belgium 2018",
      "description": "Dive into The Story of Planaxis... \n\nLive Today, Love Tomorrow, Unite Forever,...\nwww.tomorrowland.com",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/OVazJLD5lM8/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/OVazJLD5lM8/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/OVazJLD5lM8/hqdefault.jpg",
          "width": 480,
          "height": 360
        },
        "standard": {
          "url": "https://i.ytimg.com/vi/OVazJLD5lM8/sddefault.jpg",
          "width": 640,
          "height": 480
        }
      },
      "channelTitle": "Tomorrowland",
      "tags": [
        "tomorrowland",
        "belgium",
        "boom",
        "edm",
        "festival",
        "music"
      ],
      "categoryId": "24",
      "liveBroadcastContent": "none",
      "localized": {
        "title": "Paul Kalkbrenner | Tomorrowland Belgium 2018",
        "description": "Dive into The Story of Planaxis... \n\nLive Today, Love Tomorrow, Unite Forever,...\nwww.tomorrowland.com"
      },
      "defaultAudioLanguage": "zxx"
    },
    "contentDetails": {
      "duration": "PT56M15S",
      "dimension": "2d",
      "definition": "hd",
      "caption": "false",
      "licensedContent": true,
      "projection": "rectangular"
    },
    "statistics": {
      "viewCount": "184837",
      "likeCount": "4093",
      "dislikeCount": "125",
      "favoriteCount": "0",
      "commentCount": "411"
    }
  },
  "5ZQjVrzcPs0": {
    "kind": "youtube#searchResult",
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/gGXlLfmdDgFIlBhrrQYDJI7dEvc\"",
    "id": "5ZQjVrzcPs0",
    "snippet": {
      "publishedAt": "2018-07-21T08:53:42.000Z",
      "channelId": "UCsN8M73DMWa8SPp5o_0IAQQ",
      "title": "Hardwell | Tomorrowland Belgium 2018",
      "description": "Dive into The Story of Planaxis... \n\nLive Today, Love Tomorrow, Unite Forever,...\nwww.tomorrowland.com",
      "thumbnails": {
        "medium": {
          "url": "https://i.ytimg.com/vi/5ZQjVrzcPs0/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
      },
      "channelTitle": "Tomorrowland",
    }
  },
  "79nFO8dTJfY": {
    "kind": "youtube#searchResult",
    "id": "79nFO8dTJfY",
    "snippet": {
      "publishedAt": "2018-07-22T11:56:18.000Z",
      "channelId": "UCu5jfQcpRLm9xhmlSd5S8xw",
      "title": "Armin van Buuren live at Tomorrowland 2018",
      "description": "Armin van Buuren live at Tomorrowland 2018\n▶ https://AvB.lnk.to/TL2018YA\n\nTracklist:\n1    Armin van Buuren vs Shapov - Our Origin\n2    Armin van Buuren feat. James Newman - Therapy (Leo Reyes Remix)\n3    Loud Luxury feat. brando - Body vs Luke Bond - U\n4    Armin van Buuren feat. Josh Cumbee - Sunny Days vs Mark Sixma - Sinfonia\n5    Armin van Buuren and Sunnery James & Ryan Marciano - You Are Too\n6    ID - ID\n7    Armin van Buuren feat. Kensington - Heading Up High vs Fatum - Violet\n8    Armin van Buuren feat. Mr. Probz - Another You vs KhoMha - Tierra\n9    Armin van Buuren & Garibay feat. Olaf Blackwood - I Need You vs NWYR - ID\n10    Armin van Buuren x Vini Vici x Alok feat. Zafrir - United\n11    Ran-D - Zombie vs Scott Project - D (Don't Stop) vs Allen Watts - Flashback\n12    Armin van Buuren feat. Trevor Guthrie - This Is What It Feels Like vs First State & Shinovi - Children Of The Masai vs Chris Schweizer - Ascension\n13    ID - ID\n14    Splinta - Shock Therapy (Rising Altitude Mix)\n15    Militia - Take Me There vs Armin van Buuren vs Vini Vici feat. Hilight Tribe - Great Spirit\n16    Armin van Buuren - Blah Blah Blah vs Armin van Buuren - Blah Blah Blah (Brennan Heart & Toneshifterz Remix) vs Armin van Buuren - Blah Blah Blah (Zany Remix)\n\nStream Armin van Buuren Presents Playlist: https://AvBPresents.lnk.to/PLYA\nClick here for all the A State Of Trance episodes: https://AStateOfTrance.lnk.to/PLYA\nSubscribe to Armin van Buuren: http://bit.ly/SubscribeArmin\n\n#ArminvanBuuren\n#Tomorrowland2018\n#Tomorrowland",
      "thumbnails": {
        "medium": {
          "url": "https://i.ytimg.com/vi/79nFO8dTJfY/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
      },
      "channelTitle": "Armin van Buuren",
      "liveBroadcastContent": "none"
    }
  },
  "p3OH0AErK8I": {
    "kind": "youtube#searchResult",
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/oeCW6qb5F16TNMcHdJW_Sjq0Ryo\"",
    "id": "p3OH0AErK8I",
    "snippet": {
      "publishedAt": "2018-07-22T23:15:49.000Z",
      "channelId": "UCsN8M73DMWa8SPp5o_0IAQQ",
      "title": "Martin Solveig | Tomorrowland Belgium 2018",
      "description": "Dive into The Story of Planaxis... \n\nLive Today, Love Tomorrow, Unite Forever,...\nwww.tomorrowland.com",
      "thumbnails": {
        "medium": {
          "url": "https://i.ytimg.com/vi/p3OH0AErK8I/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
      },
      "channelTitle": "Tomorrowland",
      "liveBroadcastContent": "none"
    }
  },
};
const relatedVideos = {
  [videoId]: ['5ZQjVrzcPs0', '79nFO8dTJfY', 'p3OH0AErK8I'],
};
const location = {
  key: 'key-for-testing',
};

test('WatchContent without props', () => {
  const wrapper = shallow(<WatchContent location={location}/>);
  expect(wrapper).toMatchSnapshot();
});

test('WatchContent without videoId', () => {
  const wrapper = shallow(
    <WatchContent channelId={channelId} comments={comments} channels={channels} videos={videos}
                  relatedVideos={relatedVideos} location={location}/>
  );
  expect(wrapper).toMatchSnapshot();
});

test('WatchContent without channelId', () => {
  const wrapper = shallow(
    <WatchContent videoId={videoId} channels={channels} comments={comments} videos={videos}
                  relatedVideos={relatedVideos} location={location}/>
  );
  expect(wrapper).toMatchSnapshot();
});

test('WatchContent without any channels', () => {
  const wrapper = shallow(
    <WatchContent videoId={videoId} channelId={channelId} comments={comments} videos={videos}
                  relatedVideos={relatedVideos} location={location}/>
  );
  expect(wrapper).toMatchSnapshot();
});

test('WatchContent without any comments', () => {
  const wrapper = shallow(
    <WatchContent videoId={videoId} channelId={channelId} videos={videos} relatedVideos={relatedVideos} location={location}/>
  );
  expect(wrapper).toMatchSnapshot();
});

test('WatchContent without any videos', () => {
  const wrapper = shallow(
    <WatchContent videoId={videoId} channels={channels} comments={comments} relatedVideos={relatedVideos} location={location}/>
  );
  expect(wrapper).toMatchSnapshot();
});

test('WatchContent with valid props', () => {
  const wrapper = shallow(
    <WatchContent videoId={videoId} channelId={channelId} comments={comments} channels={channels} videos={videos}
                  relatedVideos={relatedVideos} location={location}/>
  );
  expect(wrapper).toMatchSnapshot();
});


/* bottomReachedCallback={this.fetchMoreComments}
videoId={videoId}
channelId={channelId}
channels={this.props.channels}
comments={this.props.comments}
videos={this.props.videos}
relatedVideos={this.props.relatedVideos} */


/* const {videoId, channelId} = this.props;
if (!videoId || !channelId || !this.props.videos || !this.props.videos[videoId]) {
  return <div></div>;
}

const video = this.props.videos[videoId];
const channel = this.props.channels ? this.props.channels[channelId] : null;
const comments = this.props.comments ? this.props.comments[videoId] : null;
const relatedVideos = this.getRelatedVideos(videoId); */