function Layout({ children }) {
  return (
    <div class="lg:container lg:mx-auto 2xl:px-48">
      {children}
    </div>
  );
}

export default Layout;