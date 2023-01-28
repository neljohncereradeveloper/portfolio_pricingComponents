const Footer = () => {
  return (
    <footer className="flex bg-blue-500 border-t border-neutral-200">
      <div className="w-9/12 py-28 flex flex-col lg:flex-row items-center">
        <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          Created Using Next.js & Tailwind CSS
        </h3>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <p className="text-center pb-5 text-base">
          Website by : Neljohn R. Cerera
        </p>
        <p className="text-center pb-5 text-base">Alright Reserve 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
