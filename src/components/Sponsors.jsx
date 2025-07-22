import { SponsorTiers } from './SponsorTiers'
import { AVAILABLE_INFORMATION } from 'event';
import SponsorUsCTA from "@/components/SponsorUsCTA";

export function Sponsors() {
  return (
    <section className="pt-16">
      {AVAILABLE_INFORMATION.sponsorsAvailable && <SponsorTiers/>}
      <SponsorUsCTA/>
    </section>
  )
}
