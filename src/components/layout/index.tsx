import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
