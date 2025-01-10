import React, { useRef } from 'react';

function Card() {
  const templateRef = useRef(null); // Create a ref to the template

  return (
    <>
      <div className="mt-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4"
          id="cards-container"
        ></div>
      </div>

      {/* Hidden template card for cloning */}
      <div
        id="template-news-card"
        ref={templateRef} // Attach the ref to this div
        style={{ display: 'none' }} // Hide the template from view
      >
        <div className="news-card card mt-3 md:max-w-xs border rounded-lg shadow-lg shadow-blue-500/50 transition ease-in-out delay-15 hover:-translate-y-1.5 hover:scale-60 hover:bg-indigo-200 duration-300">
          <div className="card-header rounded-t-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x200"
              alt="news-img"
              className="w-full news-img"
            />
          </div>
          <div className="card-body p-2">
            <h2 className="text-lg text-gray-700 news-title">This is a card</h2>
            <h6 className="text-sm text-gray-700 news-date">
              End Gadget 26/8/24024
            </h6>
            <p className="text-sm text-gray-700 news-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              nam impedit nulla natus quae voluptate sequi ullam nostrum
              consectetur cupiditate, hic vitae debitis eum atque eius earum
              iusto possimus. Non.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
