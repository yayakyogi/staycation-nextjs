import { CardCategories } from "../../Molecul";

export default function Categories() {
  return (
    <div className="px-44 mb-20">
      <h1 className="font-poppins-medium text-2xl text-primary mb-5">
        Houses with beauty backyard
      </h1>
      <div className="flex justify-between items-center">
        <CardCategories
          image="/images/img-category-1.png"
          placeName="Tabby Town"
          city="Gunung Batu"
          country="Indonesia"
          isPopular
        />
        <CardCategories
          image="/images/img-category-2.png"
          placeName="Anggana"
          city="Bogor"
          country="Indonesia"
        />
        <CardCategories
          image="/images/img-category-3.png"
          placeName="Seattle Rain"
          city="Jakarta"
          country="Indonesia"
        />
        <CardCategories
          image="/images/img-category-4.png"
          placeName="Wodden Pit"
          city="Wonosobo"
          country="Indonesia"
        />
      </div>
    </div>
  );
}
