import {
  Categories,
  Hero,
  Layout,
  MostPicked,
  Testimonial,
} from "../components";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <MostPicked />
      <Categories />
      <Categories />
      <Categories />
      <Testimonial />
    </Layout>
  );
}
