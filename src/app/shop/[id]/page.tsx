import { ProductDetail } from '../../../components/ProductDetail'
type ProductDetailPageProps = {
  params: {
    id: string
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const productId = parseInt(params.id)

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col items-center justify-center p-6">
        <ProductDetail id={productId} />
      </div>
    </main>
  )
}
