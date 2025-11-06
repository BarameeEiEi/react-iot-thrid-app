import React from "react";
import Headeriot from "../components/Headeriot";
import Footeriot from "../components/Footeriot";
import Navberiot from "../components/Navberiot";

export default function PageC() {
  return (
    <div>
      <Navberiot />
      <Headeriot wow="หน้า C" woo="🎅" />
      PageC
      <Footeriot />
    </div>
  );
}
