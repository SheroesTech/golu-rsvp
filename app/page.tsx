"use client";

import { FormEvent, useState } from "react";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

const dates = [
  { label: "Friday", date: "18 October", detail: "6:30 PM onwards" },
  { label: "Saturday", date: "19 October", detail: "5:00 PM onwards" },
  { label: "Sunday", date: "20 October", detail: "5:00 PM onwards" }
];

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(0);
  const [guests, setGuests] = useState(2);
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }

  return <main>
    <section className="home-hero">
      <SiteHeader active="/" />
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
      <div className="hero-copy"><p className="eyebrow">NAVARATHRI · 2024</p><h1>Come celebrate<br /><em>Golu</em> with us.</h1><p>An evening of dolls, devotion, music, and the warm company of friends.</p><a className="text-link" href="#rsvp">Save your spot <span>↓</span></a></div>
      <div className="golu-stage" aria-label="Illustration of a festive Golu display"><span className="garland">❀　❀　❀</span><div className="golu-step step-1">🪔</div><div className="golu-step step-2">✿　🪷　✿</div><div className="golu-step step-3">●　♙　●　♙　●</div><p>GOLU NAVARATHRI</p></div>
    </section>
    <section className="welcome-section"><div><p className="eyebrow">THE CELEBRATION</p><h2>A little tradition,<br />a lot of joy.</h2></div><div className="welcome-copy"><p>Every autumn, our home fills with beautiful steps of bommai, the scent of sundal, and stories shared over filter coffee.</p><a className="outline-link" href="/about">Discover Navarathri <span>→</span></a></div></section>
    <section className="image-banner"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcq5TSavK9E8GYVTzloZwto0NUGepQJjn4TDldFA0itw&s=10" alt="Traditional Golu invitation card with a tiered doll display" /><div><p className="eyebrow">TEN DAYS OF CELEBRATION</p><h2>Come for the<br />colour and stories.</h2><span className="banner-flower">✿　✿　✿</span></div></section>
    <section className="rsvp-section" id="rsvp"><div className="rsvp-intro"><p className="eyebrow">RSVP</p><h2>Will we see<br />you there?</h2><p>Choose the day that works best. We&apos;ll take care of the rest.</p></div>
      {submitted ? <div className="confirmation"><span>✦</span><p className="eyebrow">YOU&apos;RE ON THE LIST</p><h3>We can&apos;t wait to celebrate with you.</h3><p>We&apos;ve saved {guests} {guests === 1 ? "guest" : "guests"} for {dates[selectedDate].label}, {dates[selectedDate].date}.</p><button onClick={() => setSubmitted(false)}>Edit RSVP</button></div> : <form onSubmit={submit}><fieldset><legend>Pick a date</legend><div className="date-options">{dates.map((item, index) => <button type="button" key={item.label} aria-pressed={selectedDate === index} className={selectedDate === index ? "date active" : "date"} onClick={() => setSelectedDate(index)}><span>{item.label}</span><strong>{item.date}</strong><small>{item.detail}</small></button>)}</div></fieldset><fieldset className="guest-field"><legend>Total guests</legend><div className="stepper"><button type="button" aria-label="Remove a guest" onClick={() => setGuests(Math.max(1, guests - 1))}>−</button><output>{guests}</output><button type="button" aria-label="Add a guest" onClick={() => setGuests(Math.min(10, guests + 1))}>+</button></div><small>Including you</small></fieldset><label className="name-label">Your name<input required name="name" placeholder="Name for the guest list" /></label><button className="button" type="submit">Confirm RSVP <span>→</span></button></form>}
    </section><SiteFooter />
  </main>;
}
