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
        <div className="grid grid-cols-2 gap-4 md:w-1/2 w-full px-4">
          {clubListData.slice(0, 4).map((club, index) => (
            <CardFragment
              className="border rounded-lg shadow-md w-72"
              key={index}
              header={
                <div className="flex gap-4 items-center">
                  <img
                    src={club.flagIcon}
                    alt={`Flag ${index}`}
                    className="w-14 object-cover rounded-md"
                  />
                  <h1 className="text-xl font-semibold">{club.title}</h1>
                </div>
              }
              content={<p className="mt-2 text-sm">{club.description}</p>}
              footer={
                <Button className="w-full mt-2 text-lg font-bold px-3 py-2 bg-secondary text-white rounded hover:bg-blue-600">
                  {club.buttonText}
                </Button>
              }
            />
          ))}
        </div>
        <div className="flex justify-center items-center md:w-1/2 w-full px-4">
          <img src={bannerUrl} alt="tes" className="max-w-full h-auto" />
        </div>
      </div>
    </SectionTemplate>
  );
};

export default LiveBahasa;
