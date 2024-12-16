import PartnersListTemplate from "@/components/template/parners-list-template";
import { fetchPartnersList } from "@/lib/api";

export default async function PartnersList() {
  const courses = await fetchPartnersList({
    partnerType: "COURSE",
    showAll: true,
  });
  const payments = await fetchPartnersList({
    partnerType: "PAYMENT",
    showAll: true,
  });

  return (
    <div>
      <PartnersListTemplate
        courses={courses.data.partner}
        payments={payments.data.partner}
      />
    </div>
  );
}
