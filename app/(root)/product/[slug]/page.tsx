"use client";
import ProductImages from "@/components/shared/product/product-images";
import ProductPrice from "@/components/shared/product/product-price";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import sampleData from "@/lib/smaple-data";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = sampleData.products.find((p) => p.slug === "/" + slug);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <ProductImages images={product.images} />
      </div>
      <div>
        <Card>
          <CardContent className="grid gap-4">
            <div>
              <h1 className="text-2xl font-semibold">{product.name}</h1>
              <p className="text-sm">{product.brand}</p>
            </div>
            <div>
              <ProductPrice value={product.price} />
            </div>
            <div>
              <Badge>{product.stock > 0 ? "In Stock" : "Out of Stock"}</Badge>
            </div>
            <div>
              <Button variant="default" size="lg" className="w-full">
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
