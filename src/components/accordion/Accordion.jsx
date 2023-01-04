import React, { useState } from 'react';

function Accordion(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  }

  const sections = props.sections.map((section, index) => {
    return (
      <li key={index}>
        <button onClick={() => handleClick(index)}>
          {section.title}
        </button>
        {(activeIndex === index) && <p>{section.content}</p>}
      </li>
    );
  });

  return (
    <ul>
      {sections}
    </ul>
  );
}

export default Accordion;