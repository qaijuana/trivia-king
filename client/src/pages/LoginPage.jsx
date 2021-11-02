import SectionTitle from "../components/SectionTitle";

const LoginPage = () => {
  return (
    <>
      <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
        <div className="grid grid-cols-1 justify-items-center">
          <SectionTitle title="Log into your account" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
