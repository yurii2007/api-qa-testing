const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Layout auth</div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
