import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDelete={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
