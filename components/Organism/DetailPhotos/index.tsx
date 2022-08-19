import Image from "next/image";

export default function DetailPhotos() {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-2 mb-14">
      <div className="col-span-3 row-span-2 rounded-xl">
        <Image src="/images/img-category-1.png" width={700} height={500} />
      </div>
      <div className="col-span-2 row-span-1 rounded-xl">
        <Image src="/images/img-category-2.png" width={450} height={245} />
      </div>
      <div className="col-span-2 row-span-1 rounded-xl">
        <Image src="/images/img-category-3.png" width={450} height={245} />
      </div>
    </div>
  );
}
