import { Link } from "react-router-dom";
import Google from "../assets/img/google_icon.webp";

const Login = () => {
  return (
    <div className="flex justify-center items-center my-12 md:my-52">
      <form className="w-11/12 md:w-1/2 bg-white p-10 flex flex-col justify-center text-center">
        <h1 className="text-2xl font-bold">Masuk ke Akun</h1>
        <p className="text-sm font-light">
          Yuk, lanjutin belajarmu di videobelajar.
        </p>
        <div className="my-5">
          <div className="flex flex-col items-start mb-3">
            <label htmlFor="email">
              E-Mail <span className="text-red">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full border rounded-md h-10"
            />
          </div>
          <div className="flex flex-col items-start mb-3 relative">
            <label htmlFor="password">
              Kata Sandi <span className="text-red">*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="w-full border rounded-md h-10"
            />
            <button className="absolute top-8 end-2">
              <i class="fa-solid fa-eye-slash"></i>
            </button>
          </div>
          <div className="flex justify-end mb-3">
            <Link to="/" className="text-sm">
              Lupa Password?
            </Link>
          </div>
          <div className="mb-3">
            <Link
              to="/"
              type="submit"
              className="bg-primary block w-full rounded-md text-white py-1"
            >
              Masuk
            </Link>
          </div>
          <div className="mb-3">
            <Link
              to="/register"
              type="submit"
              className="bg-accent block  w-full rounded-md text-primary py-1"
            >
              Daftar
            </Link>
          </div>
          <div className="w-full mb-3">
            <p className="or">atau</p>
          </div>
          <div className="mb-3">
            <Link
              to="/"
              className="flex justify-center items-center border rounded-md h-10"
            >
              <img src={Google} alt="Google" className="w-[25px] h-[25px]" />
              Masuk dengan Google
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
