
function Footer() {
    const currentYear = new Date().getFullYear();
    
  return (
    <footer>
      <p>&copy; {currentYear} Osamahiemen Idemudia</p>
    </footer>
  );
}

export default Footer;
