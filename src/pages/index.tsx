import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Stripe from "stripe";
import { stripe } from "@/lib/stripe";

import { HomeContainer, Product } from "@/styles/pages/home";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageURL: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Link href={product.id} key={product.id} prefetch={false}>
            <Product  className="keen-slider__slide">
              <Image src={product.imageURL} alt="" width={520} height={480} />

              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link>
        );
      })}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageURL: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount ? price.unit_amount / 100 : 0),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
