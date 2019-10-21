import React from 'react';
import './userinfo.scss';

import User from '../User/User';

class UserInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10&nat=gb')
      .then(res => res.json())
      .then(resData => {
        this.setState({
          users: resData.results
        })
      })
      .catch(err => {
        console.log('Error fetching and parsing error', err)
      })
  }

  render() {
    return (
        <div className="userinfo">
          {
            this.state.users.map(user => (
              <User
                key={user.id.value}
                picture={user.picture.large}
                firstname={user.name.first}
                lastname={user.name.last}
                gender={user.gender}
                city={user.location.city}
                postcode={user.location.postcode}
                email={user.email}
                dob={user.dob.date}
                phone={user.cell}
                country={user.nat}
              />
            ))
          }
        </div>
    );
  }
}

export default UserInfo;
