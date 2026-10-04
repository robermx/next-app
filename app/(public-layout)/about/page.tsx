import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About description",
  keywords: ["about", "next relative", "sample about"]
};

export default function AboutPage() {
  return (
    <div>
      <span>AboutPage</span>
    </div>
  );
}
