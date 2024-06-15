import { formatCurrency, getImagePath } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductButton from "./AddProductButton"

type ProductCarProps = {
    product: Product
}

export default function ProductCard({product}: ProductCarProps) {
    const imagePath = getImagePath(product.image)

    return (
        <div className="border bg-white">
            <Image src={imagePath} alt={`Imagen platillo ${product.name}`} width={400} height={500} />
            <div className="p-5 ">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-4 font-black text-3xl text-amber-500">{formatCurrency(product.price)}</p>
                <AddProductButton product={product} />
            </div>
        </div>
    )
}
