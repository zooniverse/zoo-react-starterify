import axios from 'axios';
import firebase from 'firebase';

function getIssues(repo){
  return axios.get(`https://api.github.com/repos/zooniverse/${repo}/issues?labels=question`);
};

var helpers = {
  // get issues from github api
  getFeatures(repo){
    return axios.all([getIssues(repo)])
      .then((arr) => {
        return {
          issues: arr[0].data,
        }
      });
  },
  // save issue to firebase db
  saveFeatures(data) {
    return (data.issues).map((feature) => {
        console.log('Feature', feature);
        firebase.database().ref('features/' + feature.number).set({
        title: feature.title,
        body: feature.body,
        url: feature.html_url,
        state: feature.state,
        votes: 0,
      });
    });
  },
};

export default helpers;
