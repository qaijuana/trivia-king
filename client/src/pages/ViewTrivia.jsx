import { useParams, Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

const ViewTrivia = () => {
  const params = useParams();
  const triviaId = params.triviaId;

  return (
    <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
      <div className="grid grid-cols-1">
        {/* Name and start quiz button */}
        <div className="grid grid-cols-2 justity-between">
          <SectionTitle title="Quiz Name" />
          <div className="justify-self-end">
            <Link to={`/trivia/${triviaId}/play`}>
              <button className="bg-red-600 rounded-lg text-white px-3 ml-2 py-2">
                Start Quiz
              </button>
            </Link>
          </div>
        </div>
        {/* Quiz details */}
        <div className="pb-3 pt-2">
          <p className="text-red-600 text-lg">
            Category: <span className="font-semibold">Movies</span>
          </p>
          <p className="text-red-600 text-lg">
            Tags: <span className="font-semibold">Movies</span>
          </p>
        </div>
        <img
          src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..1582751026.png"
          alt=""
        />
        <div className="pb-3 pt-3">
          <p className="text-red-600 text-lg">Description:</p>
          <p className="text-red-600 text-md pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            ultrices porta justo, vitae vestibulum nisi viverra vitae. Sed quis
            velit ut risus accumsan ullamcorper. Cras hendrerit sit amet arcu at
            laoreet. Vivamus ullamcorper, turpis nec viverra vulputate, metus
            eros elementum diam, tempor accumsan massa risus quis neque.
          </p>
        </div>
        <p className="text-red-600 text-lg">
          Category: <span className="font-semibold">Movies</span>
        </p>
      </div>
    </div>
  );
};

export default ViewTrivia;
