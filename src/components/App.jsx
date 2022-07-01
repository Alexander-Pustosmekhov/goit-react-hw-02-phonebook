import React from 'react';
// import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Section from './Section/Section';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    console.log(data);
    this.setState({ name: [data.name] });
  };

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts"></Section>
      </div>
    );
  }
}

export default App;
