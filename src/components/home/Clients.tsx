import Image from "next/image";

import image1 from "../../../public/images/client-image1.png";
import image2 from "../../../public/images/client-image2.png";
import image3 from "../../../public/images/client-image3.png";
import image4 from "../../../public/images/client-image4.png";
import image5 from "../../../public/images/client-image5.png";

export function Clients() {
  return (
    <section className="py-20 bg-gray-300/30">
      <div className="max-w-screen-lg  mx-auto grid grid-cols-1 md:grid-cols-5 items-center">
        <Image
          src={image1}
          width={200}
          height={100}
          alt="client"
          className="max-w-full h-auto"
        />
        <Image
          src={image2}
          width={200}
          height={100}
          alt="client"
          className="max-w-full h-auto"
        />
        <Image
          src={image3}
          width={200}
          height={100}
          alt="client"
          className="max-w-full h-auto"
        />
        <Image
          src={image4}
          width={200}
          height={100}
          alt="client"
          className="max-w-full h-auto"
        />
        <Image
          src={image5}
          width={200}
          height={100}
          alt="client"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
}
