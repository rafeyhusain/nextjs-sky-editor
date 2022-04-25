import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        {children}
      </div>
    </>
  );
};

export default Layout;
