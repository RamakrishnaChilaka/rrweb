import React from 'react';

import '../../../sessionLibs/ESrrweb.css';
import { cleanAndAddData } from '../../utils';
import { connect } from 'react-redux';
import {
  kickStartSessions,
  fetchSessionDataByBlockId,
  dispatchMetaDataAction,
  lastConcatedIndexAction,
} from '../../actions';

class SessionPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.sessionId = props.sessionId;
    this.kickStartedForGreaterThan3 = false;
  }

  componentDidMount() {
    this.props.fetchMetaData({ sessionId: this.sessionId });
  }

  componentDidUpdate() {
    var totalNumberOfBlocks = this.props.totalNumberOfBlocks;
    var playbackTime = this.props.playbackTime;
    if (totalNumberOfBlocks && !this.kickStartedForGreaterThan3) {
      this.kickStartedForGreaterThan3 = true;
      this.props.kickStartFetching({
        sessionId: this.sessionId,
        totalNumberOfBlocks,
      });
    }
    if (this.props.sessionData) {
      var { lastConcatedIndex } = cleanAndAddData({
        globalValues: this.props.sessionData,
        lastConcatedIndex: this.props.lastConcatedIndex,
        playbackTime: 35000,
      });
      this.props.updateLastConcatedIndex({ lastConcatedIndex });
    }
  }

  render() {
    const { sessionData } = this.props;
    if (!sessionData.length) {
      return null;
    }
    return <div id="jankay" />;
  }
}

// connect to store
const mapStateToProps = state => {
  const { Sessions } = state;
  return {
    ...Sessions,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    kickStartFetching: ({ sessionId, totalNumberOfBlocks }) =>
      dispatch(kickStartSessions({ sessionId, totalNumberOfBlocks })),
    fetchMetaData: ({ sessionId }) => dispatch(dispatchMetaDataAction({ sessionId })),
    updateLastConcatedIndex: ({ lastConcatedIndex }) =>
      dispatch(lastConcatedIndexAction({ lastConcatedIndex })),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionPlayer);
