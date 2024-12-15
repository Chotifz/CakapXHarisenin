import { Button } from "@/components/ui/button";
import { fetchDetail } from "@/lib/api";

const PriceCourse = async ({ params }) => {
  const { id } = await params;

  if (!id) {
    return <p>ID tidak ditemukan</p>;
  }

  try {
    const courseDetail = await fetchDetail(id, "WEB");
    const { basicPrice, label, finalPrice } = courseDetail.data;

    return (
      <div
        className="w-2/6 border border-slate-300 p-4 sticky my-4 rounded-md"
        style={{ top: "5rem", height: "fit-content" }}
      >
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <p className="text-white bg-red-500 inline-block px-1 py-1 rounded-full font-semibold text-xs">
              {label}
            </p>
            <p className="text-slate-400 line-through">
              Rp {basicPrice.toLocaleString("id-ID")}
            </p>
          </div>
          <p className="text-green-500 font-bold">
            Rp {finalPrice.toLocaleString("id-ID")}
          </p>
        </div>
        <div className="mt-4 space-y-2">
          <Button className="w-full border border-white rounded-md text-white bg-blue-500">
            BELI KURSUS
          </Button>
          <Button className="w-full border border-white rounded-md text-white bg-green-500">
            TUKAR KODE PELAJAR
          </Button>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching detail course:", error);
    return <p>Gagal memuat harga kursus.</p>;
  }
};

export default PriceCourse;
