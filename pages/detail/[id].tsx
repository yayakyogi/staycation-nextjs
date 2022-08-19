import { useRouter } from "next/router";
import {
  BookingCard,
  Breadcrumb,
  Categories,
  DetailAbout,
  DetailPhotos,
  Layout,
  Testimonial,
} from "../../components";

export default function Detail() {
  const route = useRouter();
  const { id } = route.query; // get parans from url

  return (
    <Layout>
      <Breadcrumb />
      <DetailPhotos />
      <div className="flex justify-between items-start mb-8">
        <DetailAbout />
        <BookingCard />
      </div>
      <Categories />
      <Testimonial />
    </Layout>
  );
}
