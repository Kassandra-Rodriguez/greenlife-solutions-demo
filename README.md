# GreenLife Solutions concept site

One-page spec demo (demo #9). Built 2026-10-04. `index.html` + `styles.css` + `script.js` + `assets/`. No build step.
Footer says "Concept site, not an official page". `noindex, nofollow` is set.

## The hook
Their Google listing points to **greenlifeelp.com**, and that domain has **no DNS record** (checked 2026-10-04, as is
greenlifesolutionselp.com, their email domain). BBB lists no website. Anyone who taps "Website" on Google hits a dead link.
Sell the angle: "Your Google listing is 5.0 stars and the Website button goes nowhere."

## Verified vs placeholder
| Item on the page | Status | Source |
|---|---|---|
| Name, 7362 Remcon Cir, El Paso TX 79912 | Verified | Google Maps, BBB |
| (915) 225-7771 | Verified | Google Maps, BBB |
| Hours Mon-Fri 8-5, Sat by appt, Sun closed | Search result; Google confirms "Opens 8 AM Mon" | web search |
| BBB A+ accredited (since 4/17/2024), zero complaints | Verified | BBB profile |
| In business since 2023 (founded Oct 2, 2023) | Verified | BBB profile |
| 5.0 stars on Google | Verified, **review count not shown** (signed-out view hides it) | Google Maps |
| Six review quotes | Real, copied from Kassandra's screenshots (first name + last initial, truncated ones end with an ellipsis) | Google reviews |
| "Financing available" | A reviewer says so, sheet says so. **Confirm lenders/terms.** No APR or calculator on the page | Google review |
| Services: landscaping, roofing, AC/heating | Supported by reviews, Nextdoor, Google photo | Nextdoor, Google |
| Water softeners, door and window trim | Nextdoor listing only. **Confirm.** | Nextdoor |
| Bullet lists on the 4 cards (swamp cooler conversion, flat roof coatings, equipment pads, iron work, privacy walls, patio kitchens) | **Inferred from photos and reviews. Confirm before launch.** | |
| "Free design / free estimates" | From the sheet's ad caption. **Confirm.** | prospects.xlsx |
| Cell (915) 383-8059, office@greenlifesolutionselp.com | **Not used.** Unconfirmed | |
| 16-year turf warranty, bonded and insured | **Not used.** Sheet only, unverified | |
| Form | Demo only. Does not send anything | |

## Photos
| File | What | Real or stock |
|---|---|---|
| w-pergola, w-fence-wall | Pergola going up; wood wall with solar caps | Real (their Facebook) |
| w-roof-hvac, w-ac-install | Rooftop units (Lennox) on shingle and flat roofs | Real (their Facebook) |
| cut-turf, w-turf-closeup, cut-agave, cut-cactus, w-patio-kitchen, w-outdoor-kitchen | Turf, desert plants, patio kitchens | **Unsplash stock, noted as stock placeholders in the footer** |

Cut-outs made locally with `rembg` (u2net). `reviews-*.png` (screenshots with reviewer names) are git-ignored.
Swap stock for their real turf and patio photos when they send some.

## Palette (sampled from the logo)
green `#53AB22`, deep blue `#0F489B`, mid blue `#3981B8`, sun `#F4C023`, ink `#0B1B2E`.

## Design notes
Different from earlier demos on purpose: centered headline, a floating cut-out turf "rug" bleeding off the hero, parallax
floaters, colored service cards with circular photos, tilted photo strip. Inspired by the "Pepper" pizza-site reel.
Parallax and reveals respect `prefers-reduced-motion`. EN/ES toggle included.

## Hosting (Kassandra runs these)
```
gh repo create greenlife-solutions-demo --private --source=. --remote=origin --push
gh repo edit Kassandra-Rodriguez/greenlife-solutions-demo --visibility public --accept-visibility-change-consequences
gh api --method POST /repos/Kassandra-Rodriguez/greenlife-solutions-demo/pages -f "source[branch]=main" -f "source[path]=/"
```
Live at https://kassandra-rodriguez.github.io/greenlife-solutions-demo/

## Outreach talk track
Contact: **Sergio Vazquez** (GM; reviewers call him the owner). Call (915) 225-7771.
Lead with the compliment, then the gap: "Your Google listing has a perfect 5.0 and customers rave about the work, but the
Website button on it goes to a dead link, so people can't see the roofing, the AC and the yards in one place.
I built a concept page with your real photos and reviews. Want to see it?"
Pricing: $350 to build + $40/month hosting, support and maintenance.
Note: Old West Construction (Javier Calzada) shares the 7362 Remcon Cir address but is a different owner.
