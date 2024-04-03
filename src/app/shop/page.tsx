import { ProductList } from '../../components/ProductList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto p-6">
        <ProductList />
      </div>
    </main>
  )
}
