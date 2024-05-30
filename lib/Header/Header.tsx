
interface HeaderProps {
  variant?: "primary";
  companyName?: string;
  links?: { label: string; href: string }[];
}

export const Header = ({
  variant = 'primary',
  companyName = 'Company',
  links = [],
}: HeaderProps) => {
  let className = "bg-gray-700 text-white";

  switch (variant) {
    case "primary":
      className = "bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800";
      break;
  }

  return (
    <header className={className}>
      <div className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
        <div className="flex-1 flex justify-between items-center">
          <a href="#" className="text-xl">{companyName}</a>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
          <svg className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0V15zm0-6h20v2H0z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              {links.map((link, index) => (
                <li key={index}><a className="md:p-4 py-3 px-0 block" href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
