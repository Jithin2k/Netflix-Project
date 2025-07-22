import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";



const Header = () => {

  const navigate = useNavigate();


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
     
        navigate("/")
      })
      .catch((error) => {
          navigate("/error")
      });
  };

  return (
    <div className="fixed w-full top-0 left-0 sm:px-8 px-2 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="sm:w-44 w-32"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netfilx logo"
      />
      <div className="flex justify-between gap-2 md:gap-4 mx-2 md:mx-4">
        <img
          className="object-contain w-5 sm:w-7 md:w-10"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAArlBMVEX/AAz/////AAD8////AAX8AAD8//3///3///v+z8T++PX8+/X849n9Rjz96eP9FwD8YE/7hHD9u6r5y7n9ppb5VDf8d2X8tKT7sZ77aVP+HRb63s78kIb8+O377N39hnj4nov81Mr7fWj4w7D4pY78mIz8bmf8vrX+OCz87ev9MB/+WVH+Xl78rJ3+cm/839r8UUH7MQv6kH720br7ZVj+QzP8W0b7bl/5mHz7QB4ApgPDAAADI0lEQVR4nO2abVfiMBCFzaRtWlraQlGUWl6EVaiLKAqs//+PbaAoLa7YYKq7Z+/zlZPLzUwy5MxwcgIAAAAAAAAAAAAAAAAAAAAAAP83Bm2oQPloYYOCRjOKWqfabZF51o6i8wt1Yeq0bLYhDrW6MszLJBPu9hSFyYx5ttS23IZGV0bQtNgW3jeVlnYGXGQrhRDWlT5XNOS2eHU1UhGmH2yHsPyOocvTtZVTZm69vCuDXCF2pmze1xQqmQEmcttlN+WFKeQivyE20GSK6oldUPbGpZWpxQue2CTVkz+6Y3lT3LJuy5tq75tSyP1B4R7Lp49Z/Gd5U9M3kdJk6q6oy7lCpBp7pjylgnJA+NbNywqWlE+BQby49lzX7UtnBWHLUdgt3RRSr1JOPhDu83yxsc4UhGkxsexd5qfaKroReK8VXdgsUjoWdL9LPh+SroK+rlTeSxIEdxTvD4Ux4+vjxJO+Rk9SeOysdaUxqxmoZoBoFfm+PxulWj2tHyDh0JPCzdNjhImC5wezgqcnkfnwCWFDb5C+QBgAAAAAAAAAAPjXMCqaRn0GSuePzacKXG0mZMd0BWSUGjPOuHuh3RWFw65zp944NmSUupwLJrg/1tzpoIUvNyviK1MlWjJI5sjjmya/sBX66CVN3fCsF97tjcseWaJgNbR3vWeFPnopjNR7meBwf5R+fJXW123cn+0avHJ1FGj1JHFyfW0rulwc8iU/66z6cXFokExN3c0zWiaFkcZkME/J3LuR2XTcpLQxnLm8ODNw6prbqZmrQe5bNlFLolbv6T4NMm/STWe8vJ5PBwX7my3YzrKa2kkn8y7L714IzqzaxPdiZ8NjPJvUamLfEWNuFJpVlXODzHmcS4qwhf3WQWGkIosT85pptb8w8vw6fwjF+7iDq9IV5GjkUb7vx3aWvfecbD/hiXP4kmqEKK2PvJr1nqXMl9sdrhbBF74M1jd/MW+/vWXblCWD9nz5HW+VdX0cLxtTJ/bllcuYTLqPzV+r+jioYp5Sju0ficyHxXIZhuHp82vB+iZDebbm/govAAAAAAAAAAAAAACAKvgNZbwrK/M2F8wAAAAASUVORK5CYII="
          alt="usericon"
        />
        <button
          onClick={handleSignOut}
          className="w-1/2 md:w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-lg"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
