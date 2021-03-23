import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <a className="btn btn-success" href="index.html">Refresh Users</a>
      <p style={{fontWeight:"bold", marginTop:"2%"}}>Copyright Ryan Ahadizad ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
