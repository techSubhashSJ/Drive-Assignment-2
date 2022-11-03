import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
