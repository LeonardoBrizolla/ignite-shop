import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src="" alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At,
          distinctio alias. Architecto consequatur voluptates non quam aut
          praesentium facere atque odio, quos ipsa excepturi cumque deserunt ad
          beatae est. Id.
        </p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}
