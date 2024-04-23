import Image from "next/image";
import Link from "next/link";

import { ImageContainer, SuccessContainer } from "@/styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>
        <Image src="" alt="" />
      </ImageContainer>

      <p>
        Uhuul <strong>Diego Fernandes</strong>, sua{" "}
        <strong>Camiseta Beyond</strong> the Limits já está a caminho da sua
        casa.
      </p>

      <Link href="/" prefetch={false}>
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  );
}