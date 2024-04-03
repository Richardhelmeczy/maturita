import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex flex-col h-[91vh] justify-center items-center text-center">
      <div className="flex mx-auto w-fit h-fit flex-col">
        <h1 className="font-bold text-3xl">Kontakt</h1>
        <p className="mt-6">Potrebujete s niečím pomôcť?</p>
        <p className="my-4">
          Kukorelliho 2314/58 <br />
          066 01 Humenné
        </p>
        <div className="flex justify-center items-center">
          <img
            className="w-[30px] aspect-square mr-[5px]"
            src="/icons/phone.svg"
            alt="Telefónne číslo"
          />
          <span>0905 156 166</span>
        </div>
        <div className="flex justify-center items-center mt-1">
          <img
            className="w-[23px] mr-[10px] aspect-square"
            src="/icons/mail.svg"
            alt="Mailová adresa"
          />
          <span>na@cas.sk</span>
        </div>
      </div>
    </main>
  );
}
