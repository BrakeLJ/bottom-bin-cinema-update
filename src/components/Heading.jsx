import React from 'react';
import styled from 'styled-components';

const Heading = ({ title, tagline, headingLevel }) => {
  const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const safeHeading = headingLevel ? headingLevel.toLowerCase() : '';
  const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';
  return (
    <div>
      <Title>{title}</Title>
      <p>{tagline}</p>
    </div>
  );
};

export default Heading;
