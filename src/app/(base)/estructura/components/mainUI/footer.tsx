const footerPagedata = {
  generalName: "Shop",
  items: [
    {
      tabName: "About",
      href: "/about",
    },
    {
      tabName: "Contact",
      href: "/contact",
    },
    {
      tabName: "Other",
      href: "/other",
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="w-full shadow bg-slate-800  sticky top-[100vh] ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-3">
        <div className="sm:flex sm:items-center sm:justify-between ">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
          <span className="self-center text-1xl font-semibold whitespace-nowrap text-white">
            RGA AMIGOS
          </span>

          {/* <ul className="flex flex-wrap items-center mb-4 text-sm font-medium text-gray-300 sm:mb-0 dark:text-gray-400 mt-4">
            {footerPagedata.items.map((item) => {
              return (
                <li key={item.tabName}>
                  <a href={item.href} className="hover:underline me-4 md:me-6">
                    {item.tabName}
                  </a>
                </li>
              );
            })}
          </ul> */}
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 Derechos Reservados.
        </span>
      </div>
    </footer>
  );
};
