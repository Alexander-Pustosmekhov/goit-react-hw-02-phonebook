import React from 'react';

class UserContact extends React.Component {
  render() {
    return (
      <li key={this.props.key}>
        {this.props.name}: {this.props.number}
        <button
          type="button"
          onClick={() => {
            this.props.onDelete(this.props.key);
          }}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default UserContact;
