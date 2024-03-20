const Footer = () => {
  return (
    <footer className="flex h-full items-end p-2 text-lg text-white">
      <div className="flex gap-2">
        <p>Copyright &copy; {new Date().getFullYear()} Nitan Jana</p>
        <a target="_blank" href="https://github.com/NitanJana" rel="noreferrer">
          <img src="/github-mark-white.svg" alt="Github logo" width="25px" height="25px" className="hover:scale-110" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
