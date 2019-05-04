import React from 'react';
//stateless

const Todoitem = ({name, completed, onDelete, onToggle}) => (
    <li>
      <span style={{
          textDecoration: completed ? 'underline line-through' : 'none'
      }}
            onClick={onToggle}
      >
          {name}
      </span>

        <span id="delete" onClick={onDelete}> (Delete It) </span>

    </li>

);
export default Todoitem;