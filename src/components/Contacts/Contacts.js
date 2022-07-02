import React from 'react';
import UserContact from 'components/UserContact/UserContact';

class Contacts extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <ul>
          {this.props.filteredContacts().map(e => {
            return (
              <UserContact
                key={e.id}
                name={e.name}
                number={e.number}
                onDelete={this.props.onDelete}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Contacts;
