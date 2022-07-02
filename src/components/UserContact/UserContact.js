import React from 'react';
import s from './UserContact.module.css';
import PropTypes from 'prop-types';

class UserContact extends React.Component {
  render() {
    return (
      <li className={s.item}>
        &#128222; {this.props.name}: {this.props.number}
        <button
          className={s.button}
          type="button"
          onClick={() => {
            this.props.onDelete(this.props.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  }
}

UserContact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserContact;
