import React from "react";
import { ImPhone } from "react-icons/im";
import { ImUser } from "react-icons/im";
import css from "../Contact/Contact.module.css";

const Contact = ({ id, number, name, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <li className={css.contactItem}>
      <div>
        <span className={css.contactName}>
          <ImUser />
          {name}
        </span>
        <span className={css.contactNumber}>
          <ImPhone />
          {number}
        </span>
      </div>
      <button
        className={css.contactDeleteBtn}
        onClick={handleDelete}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
