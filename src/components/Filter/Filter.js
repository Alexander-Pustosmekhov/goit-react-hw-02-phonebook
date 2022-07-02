import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.props.input}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Filter;
