import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.div`
  color: var(--color-secondary);
`;

const Heading = ({ title, tagline, headingLevel }) => {
  const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const safeHeading = headingLevel ? headingLevel.toLowerCase() : '';
  const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';
  return (
    <StyledHeading>
      <Title>{title}</Title>
      <p>{tagline}</p>
    </StyledHeading>
  );
};

export default Heading;
