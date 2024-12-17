import Voucher from "../fragments/voucher";

function PrakerjaVoucher() {
  return (
    <div className="pb-10 max-w-7xl mx-auto px-4">
      <Voucher
        text={<p className="text-white">Tukar kode belajar Prakerja di sini</p>}
        buttonText={"Tukar Kode"}
        icon={
          <img
            className="w-18 border p-2 bg-teal-500 rounded-md"
            src="https://s3-ap-southeast-1.amazonaws.com/resources.squline.com/upskill/assets/icons/prakerja-white.svg"
            alt="icon"
          />
        }
      />
    </div>
  );
}

export default PrakerjaVoucher;
