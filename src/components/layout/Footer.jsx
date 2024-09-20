import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="m-5 p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between my-3">
          <div className="flex flex-col">
            <img src={Logo} alt="VideoBelajar" className="w-10/12 md:w-1/2" />
            <h3 className="text-2xl font-bold">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id
            </h3>
            <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p>+62-877-7123-1234</p>
          </div>
          <div className="md:flex hidden gap-5">
            <ul>
              <li>
                <span className="font-bold">Kategori</span>
              </li>
              <li>
                <a href="/">Digital & Teknologi</a>
              </li>
              <li>
                <a href="/">Pemasaran</a>
              </li>
              <li>
                <a href="/">Manajemen Bisnis</a>
              </li>
              <li>
                <a href="/">Pengembangan Diri</a>
              </li>
              <li>
                <a href="/">Desain</a>
              </li>
            </ul>
            <ul>
              <li>
                <span className="font-bold">Perusahaan</span>
              </li>
              <li>
                <a href="/">Tentang Kami</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Kebijakan Privasi</a>
              </li>
              <li>
                <a href="/">Ketentuan Layanan</a>
              </li>
              <li>
                <a href="/">Bantuan</a>
              </li>
            </ul>
            <ul>
              <li>
                <span className="font-bold">Komunitas</span>
              </li>
              <li>
                <a href="/">Tips Sukses</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:hidden gap-5">
            <ul>
              <li className="flex justify-between font-bold my-2">
                Kategori
                <Link to="/">&gt;</Link>
              </li>
              <li className="flex justify-between font-bold my-2">
                Perusahaan<Link to="/">&gt;</Link>
              </li>
              <li className="flex justify-between font-bold my-2">
                Komunitas<Link to="/">&gt;</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex flex-col-reverse md:flex-row justify-between mt-5">
          <p>&copy;2023 Gerobak Sayur All Rights Reserved.</p>
          <div className="flex gap-5 my-1">
            <Link to="/" className="border rounded-full px-3 py-2">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link to="/" className="border rounded-full px-3 py-2">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link to="/" className="border rounded-full px-3 py-2">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link to="/" className="border rounded-full px-3 py-2">
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
