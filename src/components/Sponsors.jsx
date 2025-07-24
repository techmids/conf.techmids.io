import { SponsorTiers } from './SponsorTiers'
import SponsorUsCTA from "@/components/SponsorUsCTA";

export function Sponsors() {
  return (
    <section className="pt-16">
      <SponsorTiers/>
      <SponsorUsCTA/>
    </section>
  )
}
