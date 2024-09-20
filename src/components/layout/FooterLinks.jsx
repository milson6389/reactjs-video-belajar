import { Link } from "react-router-dom";

const FooterLinks = ({ data }) => {
  return (
    <>
      <div className="md:flex hidden gap-5">
        {data.map((dt) => {
          return (
            <ul key={dt.uid}>
              <li className="font-bold">{dt.header}</li>
              {dt.child.map((d, id) => {
                return (
                  <li key={id}>
                    <Link to={d.target}>{d.title}</Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
      <div className="flex flex-col md:hidden gap-5">
        <ul className="relative">
          {data.map((dt) => {
            return (
              <li key={dt.uid} className="flex justify-between font-bold my-2">
                {dt.header}
                <button>
                  <i className="fa-solid fa-greater-than"></i>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;
