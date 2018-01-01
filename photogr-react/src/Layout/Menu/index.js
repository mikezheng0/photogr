import React, { Component } from "react";
import { MenuItem } from "../../Core";
import { connect } from "react-redux";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <nav>
        {this.props.links.map((route, index) => {
          if (this.props.loggedIn || !route.requiresAuth)
            return <MenuItem url={this.props.url} key={index} link={route} />;
          return <span key={index}/>
        })}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.currentUserIsLoggedIn
});

export default connect(mapStateToProps)(Menu);
