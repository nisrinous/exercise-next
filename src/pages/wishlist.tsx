import Headline from "@/components/Headline";

export default function Wishlist() {
  return (
    <>
      <div>
        <div className="my-16 flex gap-2 items-center justify-between">
          <Headline title="Wishlist" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="my-3 flex flex-row gap-7">
            {products.slice(index * 4, index * 4 + 4).map((product) => (
              <WatchesCard
                title={product.name}
                disc={
                  product.discount !== undefined
                    ? String(product.discount)
                    : undefined
                }
                isNew={product.isNew}
                price={String(product.price)}
                fullprice={product.fullprice}
                image={product.image}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
