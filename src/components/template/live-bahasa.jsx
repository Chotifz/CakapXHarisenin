import CardFragment from "../fragments/card-fragment";
import { Button } from "../ui/button";
import { fetchBannerBahasa, fetchClubList } from "@/lib/api";
import SectionTemplate from "./section-template";

const LiveBahasa = async () => {
  const { data } = await fetchBannerBahasa();
  const { bannerUrl } = data;
  const { data: clubListData } = await fetchClubList();

  return (
    <SectionTemplate
      title={"Kelas Live Bahasa Asing di Cakap Club"}
      description={
        "Belajar langsung bersama native speaker atau guru lokal profesional lengkap dengan bahasa pengantar"
      }
    >
      <div className="flex flex-col md:flex-row justify-center gap-6 my-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2 w-full px-4">
          {clubListData.slice(0, 4).map((club, index) => {
            return (
              <CardFragment
                className="border rounded-lg shadow-md w-full"
                key={index}
                header={
                  <div className="flex gap-4 items-center max-h-10">
                    <img
                      src={club.flagIcon}
                      alt={`Flag ${index}`}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <h1 className="text-lg font-semibold">{club.title}</h1>
                  </div>
                }
                content={
                  <div>
                    <p>
                      <strong>Topic:</strong>{" "}
                      {club.nextClass?.topic || "No topic available"}
                    </p>
                    <p>
                      <strong>Time:</strong>{" "}
                      {club.nextClass?.startTime
                        ? `${new Date(
                            club.nextClass.startTime
                          ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })} | ${new Date(
                            club.nextClass.startTime
                          ).toLocaleTimeString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}`
                        : "No time available"}
                    </p>
                  </div>
                }
                footer={
                  <Button className="w-full mt-2 text-sm md:text-base font-bold px-3 py-2 bg-secondary text-white rounded hover:bg-blue-600">
                    {club.buttonText}
                  </Button>
                }
              />
            );
          })}
        </div>

        <div className="flex justify-center items-center md:w-1/2 w-full px-4">
          <img
            src={bannerUrl}
            alt="Banner Bahasa"
            className="max-w-full h-auto object-contain rounded-md"
          />
        </div>
      </div>
    </SectionTemplate>
  );
};

export default LiveBahasa;
