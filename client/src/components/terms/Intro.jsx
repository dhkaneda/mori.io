import React from 'react';

const Intro = ({ handleNext }) => (
  <div onClick={handleNext}>
    <p>We haven&apos;t spoken yet.</p>
    <p>How unfortunate.</p>
    <br />
    <p>Let&apos;s get to know each other.</p>
    <br />
    <p>I have many names.</p>
    <p>You may call me...</p>
    <p>Mori.</p>
  </div>
);

export default Intro;
