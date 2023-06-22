import React from 'react';
import PropTypes from 'prop-types';

export default function ItemNote(props) {
  const { note } = props;

  const handleDelete = (id) => {
    props.onDelete(id);
  };

  return (
    <div className='item-note'>
      <p>{note.text}</p>
      <div className='material-icons delete-button' onClick={ () => { handleDelete(note.id); } }>clear</div>
    </div>
  );
}

ItemNote.propTypes = {
  note: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
