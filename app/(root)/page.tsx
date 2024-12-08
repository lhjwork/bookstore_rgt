import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/lib/smaple-data";

export default function Home() {
  return (
    <div className="space-y-8">
      <ProductList title="책 리스트" data={sampleData.products} />
    </div>
  );
}
