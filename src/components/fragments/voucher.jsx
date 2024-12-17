import { Button } from "../ui/button";

const Voucher = ({ text, buttonText, icon }) => {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-6 items-center w-full h-18 my-2 p-4 text-secondary font-semibold rounded-xl shadow-lg border-2 border-b-8 border-secondary">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div>{icon}</div>
        <span className="text-center">
          {text || "Default voucher text here. "}
        </span>
      </div>
      <Button variant="secondary" className="px-8">
        {buttonText || "Daftar"}
      </Button>
    </section>
  );
};

export default Voucher;
