import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
