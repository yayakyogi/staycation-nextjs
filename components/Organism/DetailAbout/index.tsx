import { ItemIcon } from "../../Molecul";

export default function DetailAbout() {
  return (
    <div className="mb-12 w-1/2">
      <h1 className="font-poppins-medium text-xl text-primary mb-3">About</h1>
      <p className="font-poppins-light text-base text-secondary mb-2">
        Minimal techno is a minimalist subgenre of techno music. It is
        characterized by a stripped-down aesthetic that exploits the use of
        repetition and understated development. Minimal techno is thought to
        have been originally developed in the early 1990s by Detroit-based
        producers Robert Hood and Daniel Bell.
      </p>
      <p className="font-poppins-light text-base text-secondary mb-2">
        Such trends saw the demise of the soul-infused techno that typified the
        original Detroit sound. Robert Hood has noted that he and Daniel Bell
        both realized something was missing from techno in the post-rave era.
      </p>
      <p className="font-poppins-light text-base text-secondary mb-2">
        Design is a plan or specification for the construction of an object or
        system or for the implementation of an activity or process, or the
        result of that plan or specification in the form of a prototype, product
        or process. The national agency for design: enabling Singapore to use
        design for economic growth and to make lives better.
      </p>
      <div className="mt-5 flex flex-wrap">
        <ItemIcon image="/icons/ic_bedroom.png" title="bedroom" total={5} />
        <ItemIcon
          image="/icons/ic_livingroom.png"
          title="living room"
          total={1}
        />
        <ItemIcon image="/icons/ic_bathroom.png" title="bathroom" total={3} />
        <ItemIcon
          image="/icons/ic_diningroom.png"
          title="dining room"
          total={3}
        />
        <ItemIcon image="/icons/ic_wifi.png" title="mbps" total={10} />
        <ItemIcon image="/icons/ic_ac.png" title="unit ready" total={7} />
        <ItemIcon image="/icons/ic_kulkas.png" title="refigrator" total={2} />
        <ItemIcon image="/icons/ic_tv.png" title="television" total={4} />
      </div>
    </div>
  );
}
