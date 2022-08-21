import {
  Categories,
  Hero,
  GlobalTemplate,
  MostPicked,
  Testimonial,
} from "../components";

export default function Home() {
  return (
    <GlobalTemplate>
      <Hero />
      <MostPicked />
      <Categories />
      <Categories />
      <Categories />
      <Testimonial />
    </GlobalTemplate>
  );
}
