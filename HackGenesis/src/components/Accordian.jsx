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
          Who can participate?
        </div>
        {expandedIndex === 0 && (
          <div className="collapse-content">
            <p>
              Well, if you've got fingers to type, you breathe air, and a brain
              <br /> full of ideas, you're in!
            </p>
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
          As the hackathon runs in hybrid mode, who gets the golden
          <br /> ticket for offline fun?
        </div>
        {expandedIndex === 1 && (
          <div className="collapse-content">
            <p>
              Only the crème de la crème, the chosen few destined for glory at
              the finale!
            </p>
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
          Will travel reimbursement be provided for offline
          <br /> participants (finalists)?
        </div>
        {expandedIndex === 2 && (
          <div className="collapse-content">
            <p>
              Nope, sorry! Hack Genesis '24 won't be covering travel expenses
              for
              <br /> offline mode participants. Better start saving those
              pennies!
            </p>
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
        <div className="collapse-title text-xl font-medium">Team size?</div>
        {expandedIndex === 3 && (
          <div className="collapse-content">
            <p>
              It's a party of 2-4, but hey, solo flyers, fear not! You can still
              <br /> hop aboard and find your dream team through our Discord
              <br /> server or team building events. Who knows, you might just
              <br /> find your coding soulmate! 😉
            </p>
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
          Is this hackathon beginner-friendly?
        </div>
        {expandedIndex === 4 && (
          <div className="collapse-content">
            <p>
              Absolutely! We welcome beginners with open arms, a warm smile,
              <br /> and a truckload of virtual high-fives. So don't be shy,
              jump right in
              <br /> and let the hacking adventures begin!
            </p>
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
          Is the hackathon solely focused on coding, or is there
          <br /> more to it than meets the eye?
        </div>
        {expandedIndex === 5 && (
          <div className="collapse-content">
            <p>
              Surprises await! While coding is definitely a big part of the fun,
              <br />
              there's a whole world of exciting surprises waiting to be
              uncovered
              <br /> throughout the hackathon journey.
            </p>
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
          Curious about anything else?
        </div>
        {expandedIndex === 6 && (
          <div className="collapse-content">
            <p>
              🤔 Don't hesitate to drop us a line at
              <br />
              technicalclubofscience.ncr@christuniversity.in. <br />
              We're all ears!
            </p>
          </div>
        )}
      </div>

      {/* <div className="collapse collapse-plus bg-base-200 m-[2rem]">
        <input
          type="radio"
          name="my-accordion-3"
          checked={expandedIndex === 7}
          onClick={() => handleCollapseToggle(7)}
        />
        <div className="collapse-title text-xl font-medium">
          Curious about anything else?
        </div>
        {expandedIndex === 7 && (
          <div className="collapse-content">
            <p>
              🤔 Don't hesitate to drop us a line at
              <br />
              technicalclubofscience.ncr@christuniversity.in. <br />
              We're all ears!
            </p>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Accordian;
