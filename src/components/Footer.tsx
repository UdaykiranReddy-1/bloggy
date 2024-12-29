const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-300 text-black mt-10">
        <div className="container mx-auto px-4 py-3 text-center">
          <p>&copy; {new Date().getFullYear()} bloggy. All Rights Reserved.</p>
        </div>
      </footer>
    );
};
  
export default Footer;
  