import Image from "next/image";

type BlogCardProps = {
    title: string;
    description: string;
    image: string;
    link: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image, link }) => {
    return (
        <div className="bg-white border border-gray-200 cursor-pointer rounded-lg shadow-sm hover:shadow-blue-300 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-full h-48"> {/* Fixed container size */}
                <Image
                    src={image}
                    alt={title}
                    layout="fill"           // Makes image fill the container
                    objectFit="cover"       // Ensures image covers container without distortion
                    quality={100}            // Adjusts image quality
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
                <a
                    href={link}
                    className="text-blue-600 hover:underline mt-4 inline-block"
                >
                    Read More →
                </a>
            </div>
        </div>
    );
};

export default BlogCard;
