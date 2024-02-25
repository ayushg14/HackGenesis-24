import React, { useState } from "react";

const Accordian = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCollapseToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="relative right-[2rem]">
      <div className="collapse collapse-plus bg-base-200 m-[2rem]">
        <input
          type="radio"
          name="my-accordion-3"
          checked={expandedIndex === 0}
          onClick={() => handleCollapseToggle(0)}
        />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        {expandedIndex === 0 && (
          <div className="collapse-content">
            <p>hello</p>
          </div>
        )}
      </div>

      <div className="collapse collapse-plus bg-base-200 m-[2rem]">
        <input
          type="radio"
          name="my-accordion-3"
          checked={expandedIndex === 1}
          onClick={() => handleCollapseToggle(1)}
        />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        {expandedIndex === 1 && (
          <div className="collapse-content">
            <p>hello</p>
          </div>
        )}
      </div>

      <div className="collapse collapse-plus bg-base-200 m-[2rem]">
        <input
          type="radio"
          name="my-accordion-3"
          checked={expandedIndex === 2}
          onClick={() => handleCollapseToggle(2)}
        />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        {expandedIndex === 2 && (
          <div className="collapse-content">
            <p>hello</p>
          </div>
        )}
      </div>

      <div className="collapse collapse-plus bg-base-200 m-[2rem]">
        <input
          type="radio"
          name="my-accordion-3"
          checked={expandedIndex === 3}
          onClick={() => handleCollapseToggle(3)}
        />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        {expandedIndex === 3 && (
          <div className="collapse-content">
            <p>hello</p>
          </div>
        )}
      </div>

      <div className="collapse collapse-plus bg-base-200 m-[2rem]">
        <input
          type="radio"
          name="my-accordion-3"
          checked={expandedIndex === 4}
          onClick={() => handleCollapseToggle(4)}
        />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        {expandedIndex === 4 && (
          <div className="collapse-content">
            <p>hello</p>
          </div>
        )}
      </div>

      <div className="collapse collapse-plus bg-base-200 m-[2rem]">
        <input
          type="radio"
          name="my-accordion-3"
          checked={expandedIndex === 5}
          onClick={() => handleCollapseToggle(5)}
        />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        {expandedIndex === 5 && (
          <div className="collapse-content">
            <p>hello</p>
          </div>
        )}
      </div>

      <div className="collapse collapse-plus bg-base-200 m-[2rem]">
        <input
          type="radio"
          name="my-accordion-3"
          checked={expandedIndex === 6}
          onClick={() => handleCollapseToggle(6)}
        />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        {expandedIndex === 6 && (
          <div className="collapse-content">
            <p>hello</p>
          </div>
        )}
      </div>

      <div className="collapse collapse-plus bg-base-200 m-[2rem]">
        <input
          type="radio"
          name="my-accordion-3"
          checked={expandedIndex === 7}
          onClick={() => handleCollapseToggle(7)}
        />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        {expandedIndex === 7 && (
          <div className="collapse-content">
            <p>hello</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
