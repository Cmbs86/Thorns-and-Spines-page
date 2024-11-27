import Footer from "../components/Footer";
import Header from "../components/Header";

type BaseLayoutProps = {
  children: React.ReactNode;
}
const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (<>
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
      </>
  );
};

export default BaseLayout;
