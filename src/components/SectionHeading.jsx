import React from 'react';
export default function SectionHeading({ title }) {
  return <div className="section-heading reveal"><h2>{title}<span className="heading-period">.</span></h2></div>;
}
