import { fetchDetail } from "@/lib/api";
import ListDescription from "../list-description";
import TutorFragment from "./tutor-fragments";

const AboutCourse = async ({ params }) => {
  const { id } = await params;

  if (!id) {
    return <p>ID course tidak ditemukan</p>;
  }

  try {
    const courseDetail = await fetchDetail(id, "WEB");

    const {
      partner = {},
      tutorName = "Tidak ada data tutor",
      tutorDesc = "Tidak ada deskripsi tutor",
      tutorPhoto = "",
      courseDescription = {},
    } = courseDetail.data || {};

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
    ].filter((item) => {
      return (
        item.description &&
        item.description.trim() !== "" &&
        item.description !== "<p>t</p>\n"
      );
    });

    return (
      <div className="w-8/12 border border-white py-4 pr-10 text-black">
        <div>
          <div className="flex mb-6 gap-2">
            {partner.partnerLogo?.square && (
              <img
                src={partner.partnerLogo.square}
                alt={partner.partnerName || "Partner Logo"}
                width="50px"
              />
            )}
            <div>
              <h1>Institusi</h1>
              <h2>{partner.partnerName || "Tidak ada nama partner"}</h2>
            </div>
          </div>
          {partner.partnerDescription && (
            <div>
              <p
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: partner.partnerDescription }}
              />
            </div>
          )}
        </div>

        {tutorName !== "Tidak ada data tutor" &&
        tutorDesc !== "Tidak ada deskripsi tutor" &&
        tutorPhoto ? (
          <TutorFragment
            tutorPhoto={tutorPhoto}
            tutorName={tutorName}
            tutorDesc={tutorDesc}
          />
        ) : null}

        {descriptions.length > 0 ? (
          descriptions.map((item, index) => (
            <ListDescription
              key={index}
              title={item.title}
              description={item.description}
            />
          ))
        ) : (
          <p>Tidak ada deskripsi yang tersedia untuk kursus ini.</p>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching course detail:", error);
    return <p>Gagal memuat detail kursus.</p>;
  }
};

export default AboutCourse;
