// src/components/Icon.jsx
import * as Lucide from "lucide-react";

export default function Icon({ name, ...props }) {
  const I = Lucide[name];
  if (!I) return null;
  return <I {...props} />;
}
