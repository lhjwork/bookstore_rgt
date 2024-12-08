import { cn } from "@/lib/utils";

const ProductPrice = ({ value, className }: { value: any; className?: string }) => {
  const stringValue = value.toString();

  return (
    <p className={cn("text-2xl", className)}>
      {stringValue} <span className="text-lg">원</span>
    </p>
  );
};

export default ProductPrice;
