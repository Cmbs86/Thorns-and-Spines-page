import Header from "../components/Header";
import Hero from "../components/Hero";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Header />
  
      <main className=" flex-1 flex-grow w-full max-w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;
