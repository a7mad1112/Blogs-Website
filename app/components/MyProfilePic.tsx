import Image from 'next/image';
export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-balck dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/ahmed.jpg"
        alt="Ahmed Alawneh"
        width={200}
        height={200}
        priority={true}
      />
    </section>
  );
}
