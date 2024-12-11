import { fetchDetail } from "@/lib/api";
import ListDescription from "../list-description";
import TutorFragment from "./tutor-fragments";

const AboutCourse = async () => {
  const courseDetail = await fetchDetail(815, "WEB");
  const { partner, tutorName, tutorDesc, tutorPhoto, courseDescription } =
    courseDetail.data;

  const descriptions = [
    { title: "About Course", description: courseDescription.aboutCourse },
    { title: "Curriculum", description: courseDescription.curriculum },
    { title: "Schedule", description: courseDescription.schedule },
    { title: "Facilities", description: courseDescription.facilities },
    {
      title: "Terms and Conditions",
      description: courseDescription.termAndCondition,
    },
    { title: "How to Redeem", description: courseDescription.howToRedeem },
  ];

  return (
    <div className="w-8/12 border border-white py-4 pr-10 text-black">
      <div>
        <div className="flex mb-6 gap-2">
          <div>
            <img
              src={partner.partnerLogo.square}
              alt={partner.partnerName}
              width="50px"
            />
          </div>
          <div>
            <h1>Institusi</h1>
            <h2>{partner.partnerName}</h2>
          </div>
        </div>
        <div>
          <p className="text-sm">
            {partner.partnerDescription
              .replace(/<div><br><\/div>/gi, "")
              .trim()}
          </p>
        </div>
      </div>

      <TutorFragment
        tutorPhoto={tutorPhoto}
        tutorName={tutorName}
        tutorDesc={tutorDesc}
      />

      {descriptions.map((item, index) => (
        <ListDescription
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default AboutCourse;
