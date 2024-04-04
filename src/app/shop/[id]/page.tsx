import { ProductDetail } from '../../../components/ProductDetail'
type ProductDetailPageProps = {
  params: {
    id: string
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const productId = parseInt(params.id)

  return (
    <main className="flex min-h-[91vh] flex-col justify-center items-center">
      <div className="flex h-[100%] flex-col items-center justify-center p-10">
        <ProductDetail id={productId} />
      </div>
    </main>
  )
}
