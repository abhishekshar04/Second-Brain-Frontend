export const Footer = () => {
    return (
        <footer className="bg-[#385A64] text-white py-8">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
                
                <div>
                <h2 className="text-xl font-bold">Second Brain</h2>
                <p className="text-sm text-gray-400 mt-2">Your Personal Knowledge Vault – Save & retrieve your thoughts effortlessly.</p>
                </div>
                
                <div className="flex flex-col gap-2">
                <a href="/" className="hover:underline">Home</a>
                <a href="/about" className="hover:underline">About</a>
                <a href="/feature" className="hover:underline">Features</a>
                <a href="/blog" className="hover:underline">Blog</a>
                <a href="/contact" className="hover:underline">Contact</a>
                </div>

                <div className="flex flex-col gap-2">
                <a href="https://twitter.com/yourhandle" className="hover:underline">Twitter</a>
                <a href="https://linkedin.com/in/yourhandle" className="hover:underline">LinkedIn</a>
                <a href="https://github.com/yourhandle" className="hover:underline">GitHub</a>
                <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                <a href="/terms" className="hover:underline">Terms of Service</a>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-6">
                © 2025 Second Brain. All Rights Reserved.
            </div>
        </footer>
    )
}