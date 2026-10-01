import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
const photos = [
  ["https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1000&q=85", "2023", "A festive table full of colour"],
  ["https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1000&q=85", "2022", "Flowers, lamps, and a warm welcome"],
  ["https://images.unsplash.com/photo-1601132359864-c974e79890ac?auto=format&fit=crop&w=1000&q=85", "2021", "The first rangoli of the season"],
  ["https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&w=1000&q=85", "2019", "A night of light and laughter"],
  ["https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=85", "2018", "Our Golu, growing one step at a time"],
  ["https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85", "2017", "The joy of gathering together"]
];
export default function ThroughTheYears() { return <main><section className="years-hero page-hero"><SiteHeader active="/through-the-years" /><div className="page-title"><p className="eyebrow">OUR LITTLE ARCHIVE</p><h1>Through<br /><em>the years.</em></h1><p>A few favourite moments from Golu celebrations gone by.</p></div></section><section className="gallery">{photos.map(([image, year, caption]) => <figure key={year}><img src={image} alt={caption} /><figcaption><strong>{year}</strong><span>{caption}</span></figcaption></figure>)}</section><section className="gallery-close"><span>✦</span><h2>More stories<br />to come.</h2><a className="outline-link" href="https://photos.app.goo.gl/m3B7RaYJcruuyr8Y9" target="_blank" rel="noreferrer">View the family album <span>↗</span></a></section><SiteFooter /></main>; }
