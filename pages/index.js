import CTA from 'components/CTA';
import Favorite from 'components/Favorite';
import Featured from 'components/Featured';
import Hero from 'components/Hero';
import Incentive from 'components/Incentive';
import Layout from 'components/Layout';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Incentive />
      <Featured />
      <Favorite />
      <CTA />
    </Layout>
  );
}
