import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

const stories = [
  ["https://images.unsplash.com/photo-1604608673382-cc5f2aef2549?auto=format&fit=crop&w=1000&q=85", "Durga & Mahishasura", "A reminder that courage and compassion can triumph over even the fiercest challenges."],
  ["https://images.unsplash.com/photo-1610756024202-2c3f9ea8b9f2?auto=format&fit=crop&w=1000&q=85", "The dance of Krishna", "The joyful, mischievous child Krishna teaches us to meet life with music and play."],
  ["https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=1000&q=85", "Rama's homecoming", "A story of hope, devotion, and the light that guides us home after a long journey."]
];
export default function Stories() { return <main><section className="stories-hero page-hero"><SiteHeader active="/stories" /><div className="page-title"><p className="eyebrow">ON EVERY STEP</p><h1>Stories to<br /><em>remember.</em></h1><p>Every doll in a Golu is a tiny doorway into a story passed from one generation to the next.</p></div></section><section className="stories-grid">{stories.map(([image, title, copy], index) => <article key={title}><img src={image} alt="Indian festival detail" /><div><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p><a href="#story-note">Read the story <b>→</b></a></div></article>)}</section><section className="story-note" id="story-note"><p className="eyebrow">A LIVING TRADITION</p><h2>Stories grow richer<br />when they are shared.</h2><p>Ask us about a doll that catches your eye. There is almost always a story behind it—and usually a favourite family memory, too.</p></section><SiteFooter /></main>; }
