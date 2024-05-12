import react from "react";

function Footer() {
  return (
    <footer className="py-8 md:px-8">
      <ul className="text-center flex gap-[30px] flex-col md:flex-row ">
        <li className="text-xl">Twitter</li>
        <li className="text-xl">LinkedIn</li>
        <li className="text-xl">Email</li>
        <li className="text-xl">RSS feed</li>
        <li className="text-xl">Add to Feedly</li>
        <li className="text-xl order-last md:order-first">© 2023</li>
      </ul>
    </footer>
  );
}

export default Footer;
