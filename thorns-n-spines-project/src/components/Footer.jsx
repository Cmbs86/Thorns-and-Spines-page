const Footer = () => {
  return (
    <footer className="font-sans text-xl  text-tns-ebony border border-solid border-black z-50">
      <div className="flex border border-solid border-red-500">
        <div className=" flex flex-col w-1/2 h-full justify-center items-center border border-solid border-red-500 ">
          <div className="flex h-1/2 items-start">
            <h3 className="text-3xl font-bold border-b-2 border-tns-ebony ">
              Location
            </h3>
          </div>
          <div className="flex h-1/2 items-end">
            <p>Dreilindenstraße 25, 04177 Leipzig</p>
          </div>
        </div>
        <div className="flex flex-col w-1/2 justify-center items-center border border-solid border-red-500 ">
          <h3 className="text-3xl font-bold border-b-2 border-tns-ebony ">
            Contact
          </h3>
          <p>contact@thornsandspines.de</p>
        </div>
      </div>
      <div className="flex h-full justify-center items-end border border-solid border-red-500">
        <p className="">
          &copy; {new Date().getFullYear()} Thorns and Spines. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
