import SectionTitle from "../components/SectionTitle";

const UserProfile = () => {
  const username = "hello";
  return (
    <>
      <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
        <div className="grid grid-cols-1 gap-1 justity-items-start">
          <div className="flex justify-between">
            <SectionTitle title={username} />
            <button className="py-2 px-4 rounded-lg bg-red-600 text-white text-xl hover:bg-red-700">
              Edit Profile
            </button>
          </div>
          <div className="pb-3 pt-2">
            <p className="text-red-600 text-lg">
              Email: <span className="font-semibold">hwersdf@gmiasld.com</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
