import React from 'react';
import s from './Section.module.css';
import PropTypes from 'prop-types';

class Section extends React.Component {
  render() {
    return (
      <section>
        <h2 className={s.title}>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = { title: PropTypes.string };

export default Section;
