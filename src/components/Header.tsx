const Header: React.FC = () => {
    return (
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">bloggy</h1>
          <nav>
            <ul className="flex space-x-6 text-gray-700">
              <li>
                <a href="/" className="hover:text-blue-600">Home</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-blue-600">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
export default Header;
  