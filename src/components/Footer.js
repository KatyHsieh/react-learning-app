function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return <footer className="footer">&copy; {year} Katy Hsieh</footer>;
}
export default Footer;
