import * as React from "react";
import Image from 'next/image'

const NomineeImage = (props: any) => {
  const { nominee } = props;

  return (
    <div className="p-32 relative">
      <Image src={nominee.photoUrl} alt={nominee.title} layout="fill" />
    </div>
  );
};

export default NomineeImage;
