'use client';
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { trimContent } from "@/lib/utils";
import { MdOutlineCancel } from "react-icons/md";

interface SortableItemProps {
  id: string;
  type: string;
  content: string;
  onDelete: () => void;
  onChange: (content: string) => void;
}

const SortableItem: React.FC<SortableItemProps> = ({
  id,
  type,
  content,
  onDelete,
  onChange,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // Handle auto-resizing of the textarea
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = "auto"; // Reset height to calculate new height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set new height
    onChange(trimContent(textarea.value));
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-black border border-gray-600 rounded-md p-4 mb-2"
    >
      <div
        className="flex justify-between items-center cursor-grab"
        {...attributes}
      >
        <div
          className="flex-1"
          {...listeners} // Only apply drag listeners to this specific area
        >
          <span className="text-gray-300 font-semibold">{type}</span>
        </div>
        {/* Exclude Delete Button from Drag Area */}
        <button
          onClick={() => {onDelete()}}
          className=" text-gray-300 text-xl ml-2 hover:text-gray-500"
        >
          <MdOutlineCancel/>
        </button>
      </div>
      <textarea
        defaultValue={content}
        // onChange={(e) => onChange(e.target.value)}
        onInput={handleInput}
        placeholder={`Enter ${type} content`}
        className="bg-black border border-gray-600 rounded-md p-2 w-full mt-2 h-auto overflow-hidden resize-none focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
      ></textarea>
    </div>
  );
};

export default SortableItem;
