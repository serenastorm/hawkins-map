import { CinemaIcon } from "./CinemaIcon";
import { GateIcon } from "./GateIcon";
import { HospitalIcon } from "./HospitalIcon";
import { LakeIcon } from "./LakeIcon";
import { LibraryIcon } from "./LibraryIcon";
import { PoliceIcon } from "./PoliceIcon";
import { PointOfInterestIcon } from "./PointOfInterestIcon";
import { ResidenceIcon } from "./ResidenceIcon";
import { RetailIcon } from "./RetailIcon";
import { SchoolIcon } from "./SchoolIcon";

import type { LocationCategory } from "@/constants/locations";

export { StarcourtLogomark } from "./StarcourtLogomark";
export { CheckmarkIcon } from "./CheckmarkIcon";
export { QuestionIcon } from "./QuestionIcon";

export const icons: { [key in LocationCategory]: () => JSX.Element } = {
  cinema: CinemaIcon,
  gate: GateIcon,
  hospital: HospitalIcon,
  lake: LakeIcon,
  library: LibraryIcon,
  police: PoliceIcon,
  "place of interest": PointOfInterestIcon,
  "public services": PoliceIcon,
  residence: ResidenceIcon,
  retail: RetailIcon,
  school: SchoolIcon,
};
