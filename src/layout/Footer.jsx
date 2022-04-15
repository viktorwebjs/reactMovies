import React from 'react';

function Footer(props) {
  return (
    <>
      <footer className="page-footer teal">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">
              Repo
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
