import CTA from 'components/CTA';
import Products from 'components/Products';
import Featured from 'components/Featured';
import Hero from 'components/Hero';
import Incentive from 'components/Incentive';
import Layout from 'components/Layout';
import Product from 'models/Product';
import db from 'utils/db';

export default function Home({ products }) {
  console.log(products);
  return (
    <Layout>
      <Hero />
      <Incentive />
      <Featured />
      <Products products={products} />
      <CTA />
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();

  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
