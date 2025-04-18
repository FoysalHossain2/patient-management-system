import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image src="/logo-full.png" alt="patient" height={100} width={100} />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-500 xl:text-left">
              © 2025 CarePluse
            </p>
            <Link href={"/?admin=true"}>Admin</Link>
          </div>
        </div>
      </section>
      <Image src="/Illustration.png" alt="patient" height={500} width={500} />
    </div>
  );
}
