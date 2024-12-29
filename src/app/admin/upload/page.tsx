"use client";
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "@/components/SortableItem";
import Dropdown from "@/components/Dropdown";

const Upload: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    image: "",
  });

  const options = [
    { value: "Select the Author", label: "Select the Author" },
    { value: "Uday", label: "Uday" },
    { value: "Kiran", label: "Kiran" },
  ];

  const [blocks, setBlocks] = useState([
    { id: "1", type: "h1", content: "" },
  ]);


  const handleBlockChange = (id: string, newContent: string) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === id ? { ...block, content: newContent } : block
      )
    );
  };

  const addBlock = (type: string) => {
    setBlocks((prevBlocks) => [
      ...prevBlocks,
      { id: Date.now().toString(), type, content: "" },
    ]);
  };

  const deleteBlock = (id: string) => {
    setBlocks((prevBlocks) => prevBlocks.filter((block) => block.id !== id));
  };

  const handleDragEnd = ({ active, over }: any) => {
    if (active.id !== over.id) {
      setBlocks((prevBlocks) => {
        const oldIndex = prevBlocks.findIndex((block) => block.id === active.id);
        const newIndex = prevBlocks.findIndex((block) => block.id === over.id);
        return arrayMove(prevBlocks, oldIndex, newIndex);
      });
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDropdown = (value: string) => {
    setFormData({ ...formData, author: value });
  };

  return (
    <div className="bg-black min-h-screen text-[#ededed]">

      {/* Header Component */}
      <div className="w-full flex justify-start p-4">
        <h1 className="text-lg font-bold text-white">bloggy.</h1>
      </div>

      {/* Form Component*/}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold py-4 mb-2 bg-gradient-to-b from-slate-50 via-slate-200 to-slate-400 inline-block text-transparent bg-clip-text">
          Cook the blog.
        </h1>

        <div className="border border-gray-500 px-8 py-8 rounded-md shadow-lg shadow-stone-500 flex flex-col space-y-4">
          <div>
            <label htmlFor="title" className="block mb-1 text-md">
              Title
            </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleFormChange}
              className="bg-black border border-gray-600 rounded-md p-2 w-full mb-2 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
            />
            <p className="text-gray-500 text-sm">
              This serves as the main title of your blog
            </p>
          </div>
          <div>
            <label htmlFor="description" className="block mb-1 text-md">
              Description
            </label>
            <input
              type="text"
              placeholder="Description"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleFormChange}
              className="bg-black border border-gray-600 rounded-md p-2 w-full mb-2"
            />
            <p className="text-gray-500 text-sm">
              This gives readers a sneak-peek into the article
            </p>
          </div>
          <div>
            <label htmlFor="author" className="block mb-1 text-md">
              Author
            </label>
            <Dropdown
              options={options}
              defaultValue="Select the Author"
              onValueChange={handleDropdown}
            />
            <p className="text-gray-500 text-sm">
              Select the author of the article
            </p>
          </div>
          <div>
            <label htmlFor="image" className="block mb-1 text-md">
              Image URL
            </label>
            <input
              type="text"
              placeholder="Image URL"
              name="image"
              id="image"
              value={formData.image}
              onChange={handleFormChange}
              className="bg-black border border-gray-600 rounded-md p-2 w-full mb-2"
            />
            <p className="text-gray-500 text-sm">Provide the URL of the title image</p>
          </div>
          <div>
            <label htmlFor="content" className="block mb-2 text-md">Content</label>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext
                items={blocks.map((block) => block.id)}
                strategy={verticalListSortingStrategy}
              >
                {blocks.map((block) => (
                  <SortableItem
                    key={block.id}
                    id={block.id}
                    type={block.type}
                    content={block.content}
                    onDelete={() => deleteBlock(block.id)}
                    onChange={(newContent: string) => handleBlockChange(block.id, newContent)}
                  />
                ))}
              </SortableContext>
            </DndContext>
            <div className="mt-4">
              <button
                onClick={() => addBlock("h1")}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Add H1
              </button>
              <button
                onClick={() => addBlock("h1")}
                className="bg-yellow-950 text-white px-4 py-2 rounded mr-2"
              >
                Add H2
              </button>
              <button
                onClick={() => addBlock("p")}
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                Add Paragraph
              </button>
              <button
                onClick={() => addBlock("list")}
                className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
              >
                Add List
              </button>
              <button
                onClick={() => addBlock("code")}
                className="bg-orange-500 text-white px-4 py-2 rounded"
              >
                Add Code
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Outside Button Component */}
      <div className="flex justify-center pt-20 pb-32">
        <div className="relative w-auto flex-shrink-0 h-full hover:-translate-y-1">
          <button className="relative w-full z-20 text-xl border-t-2 border-l-2 border-gray-600 bg-black shadow-2xl shadow-stone-600 rounded-md px-16 py-4 font-semibold hover:text-gray-300">
            Upload
          </button>
          <div className="w-full h-full absolute inset-0 bg-gray-600 rounded-md translate-y-1 translate-x-1 z-10"></div>
        </div>
      </div>

    </div>
  );
};

export default Upload;
