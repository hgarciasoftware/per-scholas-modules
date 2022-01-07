import { Fragment } from 'react';
import Contact from './Contact';

function ContactList(props) {
  return (
    <main className="contact-list">
      {props.results.map((contactInfo, index) => {
        return (
          <Fragment key={index}>
            <Contact contactInfo={contactInfo} />
            {index < props.results.length -1 ? <hr /> : ''}
          </Fragment>
        );
      })}
    </main>
  );
}

export default ContactList;
