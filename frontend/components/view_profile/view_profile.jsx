import React from 'react';
import ViewProfileHeader from './view_profile_header';
import ViewProfileSection from './view_profile_section';
import ViewProfileAside from './view_profile_aside';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    let profileBody;
    if (this.props.profile) {
      profileBody = (
        <div>
          <ViewProfileHeader
            profile={this.props.profile}/>
          <main className="main-profile">

          </main>
        </div>
      );
    }
    return (
      <div>
        {profileBody}
      </div>
    );
  }
}

export default Profile;


// <ViewProfileSection
//   profile={this.props.profile}/>
// <ViewProfileAside
//   profile={this.props.profile}/>
