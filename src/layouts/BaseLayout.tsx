import Footer from "../components/Footer";
import Header from "../components/Header";

type BaseLayoutProps = {
  children: React.ReactNode;
}
const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (<>
    <div className="min-h-screen">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
      </>
  );
};

export default BaseLayout;
