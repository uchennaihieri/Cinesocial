import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
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


export default function FeaturesPage() {
  return (
    <Page title="Features" description="Elit aute do nisi Lorem id ea culpa sint duis eu tempor dolore elit.">
      <Wrapper>
        <SectionTitle>Check out this quick introduction</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
