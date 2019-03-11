import React from 'react';

// From https://github.com/yoshuawuyts/formdata-to-object
function toObject (data) {
  var result = {}
  var iterator = data.entries()
  var entry = iterator.next()
  var value = entry.value
  while (true) {
    if (Array.isArray(value) && value.length === 2) {
      result[value[0]] = value[1]
    }
    if (entry.done) break
    entry = iterator.next()
    value = entry.value
  }
  return result
};

const Form = ({ onSubmit, children }) => {
  const betterOnSubmit = e => {
    e.preventDefault();
    const data = toObject(new FormData(e.target));
    onSubmit(data);
  };
  return (
    <form onSubmit={betterOnSubmit}>
      {children}
    </form>
  );
};

export default Form;
