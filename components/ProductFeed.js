import Product from "./Product";

export default function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0,4)
        .map(({id,...product}) => (
          <Product key={id} {...product} />
        ))}

      <img src="/product-feed-banner.jpg" alt="Products from small & medium business" className="md:col-span-full" />
          
      <div className="md:col-span-2">
        {products
          .slice(4,5)
          .map(({id,...product}) => (
            <Product key={id} {...product} />
          ))}
      </div>

      {products
        .slice(5,products.length)
        .map(({id,...product}) => (
          <Product key={id} {...product} />
        ))}
    </div>
  )
}
