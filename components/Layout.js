function Layout({ children }) {
  return (
    <div className="lg:container lg:mx-auto 2xl:px-48">
      {children}
    </div>
  );
}

export default Layout;