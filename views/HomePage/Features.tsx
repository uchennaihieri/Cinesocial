import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [

  {
    title: 'Action',
    dime: '/blackwidow.jpeg',

  },
  {
    title: 'Comedy',
    dime: '/valet.jpg',

  },
  {
    title: 'Horror',
    dime: '/horror.jpg',
  },
  {
    title: 'Family',
    dime: '/family.jpg',
  },
  {
    title: 'Romance',
    dime: '/lov.jpg',
  },
  {
    title: 'TV Shows',
    dime: '/riches.jpg',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
