import { createDB } from '../lib/db'

async function getProductDetail(id: number) {
  const db = createDB()

  const product = await db.selectFrom('products').selectAll().where('id', '=', id).executeTakeFirstOrThrow()

  return product
}

async function getProductReviews(id: number) {
  const db = createDB()

  const reviews = await db.selectFrom('productsReviews').selectAll().where('productId', '=', id).execute()

  return reviews
}

type ProductDetailProps = {
  id: number
}

export async function ProductDetail({ id }: ProductDetailProps) {
  const product = await getProductDetail(id)
  const reviews = await getProductReviews(id)

  return (
    <div className="max-w-4xl p-4 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex">
        <div className="flex-none  flex items-center justify-center p-2 mr-2 h-64 w-96 rounded-lg">
          <img
            src="/no-photo.jpg"
            className="rounded-lg"
          />
        </div>

        <div className="p-4 flex-grow">
          <div className="text-2xl font-bold text-gray-800 mb-3">
            {product.name}
          </div>
          <div>
            <p className="font-semibold text-gray-700">Popis:</p>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      </div>

      <div className="py-2">
        <p className="font-semibold text-gray-700">Recenzie:</p>
        <div className="space-y-2 mt-2">
          {reviews.map((pr) => (
            <div
              key={pr.id}
              className="py-2 px-4 rounded-lg border-2 border-[#96C8FF] font-medium"
            >
              <span className="text-gray-600">{pr.content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
