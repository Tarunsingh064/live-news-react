import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Search from "./search";
import logo from './image/4.png'; // Importing the image

const Item = ({ onclick ,search_button}) => {
  const handlemenue = () => {
    const navitems = document.getElementById('nav-items');
    navitems.classList.toggle('hidden');
  };

  function onnavclick(id) {
    onclick(id);
  }

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow-lg shadow-blue-500/50">
      <a href="mainnav.jsx" className="flex gap-2 items-center">
        <img
          src={logo}
          alt="live-news"
          className="object-cover max-w-12 max-h-12 shadow-lg shadow-blue-500/50"
        />
        <span className="text-lg font-medium text-blue-400">Live News</span>
      </a>

      <div className="items-center hidden md:flex gap-12">
        <Search search_button={search_button} />
        <a
          href="#home"
          className="text-gray-800 hover:text-blue-400"
          id="sports"
          onClick={() => onnavclick('sports')}
        >
          Sports news
        </a>
        <a
          href="#about"
          className="text-gray-800 hover:text-blue-400"
          id="finance"
          onClick={() => onnavclick('finance')}
        >
          Finance news
        </a>
        <a
          href="#services"
          className="text-gray-800 hover:text-blue-400"
          id="politics"
          onClick={() => onnavclick('politics')}
        >
          Politics news
        </a>
      </div>

      <button className="md:hidden" onClick={handlemenue}>
        <FaBarsStaggered />
      </button>

      <div className="hidden bg-white inset-0 fixed md:hidden" id="nav-items">
        <div className="flex p-3 justify-between hover:bg-gray-100">
          <a href="mainnav.jsx" className="flex gap-2 items-center">
            <img
              src={logo}
              alt="live-news"
              className="object-cover max-w-12 max-h-12 shadow-lg shadow-blue-500/50"
            />
            <span className="text-lg font-medium text-blue-400">Live News</span>
          </a>

          <Search />

          <button className="md:hidden" onClick={handlemenue}>
            <RxCross1 />
          </button>
        </div>

        <div className="mt-6">
          <a
            href="#home"
            className="font-medium m-3 p-3 hover:text-blue-400 hover:bg-gray-100 block rounded-lg"
            id="sports"
            onClick={() => onnavclick('sports')}
          >
            Sports news
          </a>
          <a
            href="#about"
            className="font-medium m-3 p-3 hover:text-blue-400 hover:bg-gray-100 block rounded-lg"
            id="finance"
            onClick={() => onnavclick('finance')}
          >
            Finance news
          </a>
          <a
            href="#services"
            className="font-medium m-3 p-3 hover:text-blue-400 hover:bg-gray-100 block rounded-lg"
            id="politics"
            onClick={() => onnavclick('politics')}
          >
            Politics news
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
