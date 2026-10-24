import React from 'react';
export default function SectionHeading({ kicker, title, number }) {
  return <div className="section-heading reveal"><div className="section-heading__meta"><span className="mono">{kicker}</span><span className="issue-stamp">{number}</span></div><h2>{title}<span className="heading-period">.</span></h2></div>;
}
