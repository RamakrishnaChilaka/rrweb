import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppTitle, ContentRoot, NferxLogo, withQuery } from 'nferx-core-ui';
import { Redirect } from 'react-router-dom';
import { config } from '../../Config';
import Paper from '@material-ui/core/Paper';

import { Player, PlayerControls } from '../../components';

const styles = theme => ({});

class HomeRouteContents extends Component {
  render() {
    const { classes, query, sessionId } = this.props;
    return (
      <React.Fragment>
        <Player sessionId={sessionId} />
        {
          // <PlayerControls />
        }
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withQuery(HomeRouteContents));
