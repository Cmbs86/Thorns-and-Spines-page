const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center  font-sans text-2xl font-bold text-tns-ebony border border-solid border-red-500">
    <footer className="flex flex-row gap-16 p-10 items-center text-center">
      <div className="">
        <p>Dreilindenstraße 25, 04177 Leipzig</p>
      </div>
      <div>
        <p className="">
          &copy; {new Date().getFullYear()} Thorns and Spines. All Rights
          Reserved.
        </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
