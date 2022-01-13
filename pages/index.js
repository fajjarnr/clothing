import Category from 'components/Category';
import CTA from 'components/CTA';
import Favorite from 'components/Favorite';
import Featured from 'components/Featured';
import Layout from 'components/Layout';

export default function Home() {
  return (
    <Layout>
      <Category />
      <Featured />
      <Favorite />
      <CTA />
    </Layout>
  );
}
