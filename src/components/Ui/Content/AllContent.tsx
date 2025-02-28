import React, {  useEffect, useState } from "react";
import axios from "axios";
import { AddContent } from "./AddContent";
import { atom, RecoilRoot } from "recoil";

interface Tag {
  _id: string;
  name: string;
}

interface Content {
  _id: string;
  link?: string;
  type?: string;
  title: string;
  tags: Tag[];
  userId: string;
  createdAt: string;
}
export const showAdd = atom({
    key: 'showAdd',
    default: false
})
const ContentList: React.FC = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddContent, setShowAddContent] = useState<boolean>(false); // ✅ Popup state

  useEffect(() => {
    axios
      .get("http://localhost:8888/api/v1/content", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setContents(response.data["content"]);
        setTags(response.data["tags"]);
        console.log(response);
        console.log(response.data["tags"]);

        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch contents ");
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <RecoilRoot>
        <div id="scrollbar" className="p-4 overflow-auto">
      {/* Add Content Button */}
      <button
        onClick={() => setShowAddContent(true)}
        className="mb-4 bg-[#FC715C] cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-red-500"
      >
        Add Content
      </button>

      {/* ✅ AddContent Popup */}
      {showAddContent && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              onClick={() => setShowAddContent(false)}
              className="absolute top-2 right-2 cursor-pointer bg-red-500 text-white px-3 py-1 rounded-full"
            >
              ✕
            </button>
            <AddContent />
          </div>
        </div>
      )}

      {/* Content List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contents.map((content) => (
          <div key={content._id} className="p-4 border rounded-lg shadow">
            <h3 className="text-lg font-semibold">{content.title}</h3>
            <p className="text-sm text-gray-500">Type: {content.type || "N/A"}</p>
            {content.link && (
              <a
                href={content.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Open Link
              </a>
            )}
            <div className="mt-2">
              <span className="font-semibold">Tags:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {tags.map((tag) => (
                  <span
                    key={tag?._id}
                    className="bg-gray-200 text-sm px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Created At: {new Date(content.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
    </RecoilRoot>
    
  );
};

export default ContentList;
