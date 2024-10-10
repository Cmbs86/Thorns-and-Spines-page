import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (<>
    <div className="min-h-screen">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
      </>
  );
};

export default Layout;
