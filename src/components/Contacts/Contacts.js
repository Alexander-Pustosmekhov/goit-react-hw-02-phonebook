import React from 'react';
import UserContact from 'components/UserContact/UserContact';
import s from './Contacts.module.css';
import PropTypes from 'prop-types';

class Contacts extends React.Component {
  render() {
    return (
      <div className={s.contacts}>
        {this.props.children}
        {this.props.filteredContacts().length ? (
          <ul className={s.list}>
            {this.props.filteredContacts().map(e => {
              return (
                <UserContact
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  number={e.number}
                  onDelete={this.props.onDelete}
                />
              );
            })}
          </ul>
        ) : (
          <p className={s.message}>Not found &#128542;</p>
        )}
      </div>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  filteredContacts: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
