import { Component, PropTypes } from 'react';
import helpers from '../utils/helpers';

const initialState = {
  features: [],
};

export default class IssuesList extends Component {
  constructor(props) {
    super(props);
    this.renderClassroomList = this.renderClassroomList.bind(this);
    this.state = Object.assign({}, initialState, props)
  }
  componentDidMount() {
    const repo = 'wildcam-gorongosa-education';
    return (
      helpers.getFeatures(repo)
      .then((data) => {
        helpers.saveFeatures(data);
        this.setState({
          features: data.issues,
        });
      })
    )
  }
  renderClassroomList(data) {
    const list = (data.length > 0) ? data : [];
    return (
      <div className="list-group">
        { list.map((feature, i) =>
          <div key={i} className="list-group-item">
            <h1><a href={feature.html_url} target="_blank">{feature.title}</a></h1>
            <p>{feature.body}</p>
          </div>
        )}
      </div>
    );
  }

  render() {
    return (
      <div>
      { this.renderClassroomList(this.state.features) }
      </div>
    )
  }
}
