const KelasCta = () => {
  return (
    <div className="cta rounded-md flex flex-col justify-center items-center text-center my-5">
      <div className="flex flex-col items-center text-2xl text-white gap-3">
        <h1 className="text-2xl font-light">NEWSLETTER</h1>
        <h1 className="font-bold text-2xl md:text-4xl">
          Mau Belajar Lebih Banyak?
        </h1>
        <p className="text-sm w-3/5">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik hariesok.id
        </p>
        <div className="mt-4 w-full relative">
          <input
            className="rounded-md px-5 py-2 w-3/4"
            type="email"
            name="emailCta"
            id="emailCta"
            placeholder="Masukkan Emailmu"
          />
          <button className="bg-warning text-white absolute top-1 end-28 rounded-md px-2 py-1">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default KelasCta;
