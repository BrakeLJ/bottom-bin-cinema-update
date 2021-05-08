import React from 'react';
import styled from 'styled-components';

import Heading from './Heading';

const StyledHeader = styled.header`
  height: 100vh;
  background: var(--color-primary);
  width: 50%;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Heading
        title='Bottom Bin Cinema'
        headingLevel='h1'
        tagline='Find the best worst movies'
      />
    </StyledHeader>
  );
};

export default Header;
