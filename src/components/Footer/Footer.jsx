import "./footer.css";
import React, { useContext } from "react";
import { userContext } from '../.././/context/userContext';

function Footer() {
  const micontext = useContext(userContext);

  return (
    <footer className="footer">
      <div className="footerText1">
        <h5>© 2022 Filotaxia{micontext.username}</h5>
      </div>
      <div className="footerRedesSociales">
        <a href="https://www.instagram.com/filotaxiasagrada/" target="_blank"><img
          className="footerRedesSocialesLogoIg" src="/assets/images/iconosRedesSociales/icono-ig-black.png" alt="imgLogoInstagram" /></a>
        <a href="https://open.spotify.com/album/0NJRPgK15C8qoLuQv1hChv?si=ljBqXmctQlWDUH55qusWLg" target="_blank"><img
          className="footerRedesSocialesLogoSp" src="/assets/images/iconosRedesSociales/icono-sp-black.png" alt="imgLogoSpotify" /></a>
        <a href="https://youtu.be/kTWcVnMPChM" target="_blank"><img
          className="footerRedesSocialesLogoYt" src="/assets/images/iconosRedesSociales/icono-yt-black.png" alt="imgLogoYouTube" /></a>
      </div>
      <div className="footerText2">
        <h5>hola@filotaxia.com</h5>
      </div>
    </footer>
  );
}
export default Footer;


