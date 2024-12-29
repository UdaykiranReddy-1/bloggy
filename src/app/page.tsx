import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";

type Blog = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const Home: React.FC = () => {
  const blogs: Blog[] = [
    {
      title: "How to Set Up an SMTP Server",
      description:
        "Learn how to set up your own SMTP server for email delivery step-by-step.",
      image: "/blogim/smtp-server.jpg",
      link: "/blog",
    },
    {
      title: "Understanding Email Protocols",
      description:
        "A deep dive into SMTP, IMAP, and POP3 protocols for email services.",
      image: "/blogim/email-protocols.png",
      link: "/blog",
    },
    // Add more blog posts
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container flex-1 mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Latest Blog Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
