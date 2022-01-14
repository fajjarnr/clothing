import Image from 'next/image';

export default function Products({ products }) {
  return (
    <section aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2
            id="products-heading"
            className="text-2xl font-extrabold tracking-tight text-gray-900"
          >
            Our Products
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
          {products.map(({ _id, name, image, price, slug }) => (
            <div key={_id} className="group relative">
              <div className="w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
                <Image
                  src={image}
                  alt={name}
                  className="w-full h-full object-center object-cover"
                  layout="fill"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                <a href={`/product/${slug}`}>
                  <span className="absolute inset-0" />
                  {name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">$ {price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
