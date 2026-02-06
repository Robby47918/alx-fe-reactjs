// src/components/UserProfile.jsx
function UserProfile() {
  return (
    <div className="max-w-xs p-4 mx-auto my-20 bg-gray-100 shadow-lg hover:shadow-xl sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-24 h-24 mx-auto transition-transform duration-300 ease-in-out rounded-full hover:scale-110 sm:w-24 sm:h-24 md:w-36 md:h-36"
      />
      <h1 className="my-4 text-lg text-blue-800 hover:text-blue-500 sm:text-lg md:text-xl">
        John Doe
      </h1>
      <p className="text-sm text-gray-600 sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
