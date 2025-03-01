import { useState } from "react";
import axios from "axios";
export const AddContent = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [tags, setTags] = useState<string[]>([]);  // ✅ Changed to array
    
    async function addContentHandler(e: React.FormEvent) {
        e.preventDefault();
        const response = await axios.post(
            'http://localhost:8888/api/v1/content',
            { // Request body (data to be sent)
                title,
                description,
                link,
                tags
            },
            {
                headers: {
                    token: localStorage.getItem('token')
                }
            }
        );
        console.log(response);
        console.log({ title, description, link, tags });  // Check values before submitting
    }

    function handleTagInput(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            const tag = e.currentTarget.value.trim();
            if (tag && !tags.includes(tag)) {
                setTags([...tags, tag]);
            }
            e.currentTarget.value = ""; // Clear input after adding
        }
    }
    function reloader() {
        window.location.reload();
    }

    function removeTag(tagToRemove: string) {
        setTags(tags.filter(tag => tag !== tagToRemove));
    }

    return (
        <form onSubmit={addContentHandler} className="bg-white p-6 rounded-2xl font-exo shadow-md w-full max-w-lg px-10">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">Add New Content</h2>

            <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-1">Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="title" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-1">Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-1">Link</label>
                <input value={link} onChange={(e) => setLink(e.target.value)} type="text" id="link" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            {/* ✅ Tags Input */}
            <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-1">Tags</label>
                <input
                    type="text"
                    placeholder="Type and press Enter"
                    onKeyDown={handleTagInput}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {/* ✅ Display Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-blue-200 px-2 py-1 rounded-full flex items-center">
                            {tag}
                            <button type="button" onClick={() => removeTag(tag)} className="ml-2 text-red-500  font-bold">×</button>
                        </span>
                    ))}
                </div>
            </div>

            <button onClick={reloader} type="submit" className="w-full bg-[#FF735C] text-white py-2 rounded-lg font-semibold cursor-pointer hover:bg-red-500 transition duration-200">
                Submit
            </button>
        </form>
    );
};
