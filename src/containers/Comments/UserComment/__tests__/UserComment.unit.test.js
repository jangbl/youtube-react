import React from 'react';
import {shallow} from 'enzyme';
import {UserComment} from '../UserComment';

const comment = {
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
};

test('renders UserComment with props.comment = null', () => {
  const wrapper = shallow(<UserComment/>);
  expect(wrapper).toMatchSnapshot();
});

test('renders UserComment with valid comment', () => {
  const wrapper = shallow(<UserComment comment={comment}/>);
  expect(wrapper).toMatchSnapshot();
});