import { SiGithub, SiX, SiGmail } from "@icons-pack/react-simple-icons";
import { BadgeCheck } from "lucide-react";
import { useState } from "react";

function ProfileCard() {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        await navigator.clipboard.writeText("heyvishit@gmail.com");
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return (
        <section className="inter">

                <div className="bg-white w-80 rounded-xl p-3 shadow-lg">
                    <img
                        src="./ImageDataCard/profile.jpg"
                        alt="Card image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="flex items-center gap-2 mt-5">
                        <h1 className="text-2xl font-bold">
                            Vishit Bari
                        </h1>

                        <BadgeCheck
                            size={24}
                            className="text-blue-500"
                            fill="#3B82F6"
                            color="white"
                        />
                    </div>
                    <p className="mt-1 text-base text-gray-500">
                        Learning, designing, and building my way toward becoming a better developer.
                    </p>

                    <div className="mt-4 flex gap-2">
                        <a
                            href="https://github.com/heyvishit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-1.5 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                        >
                            GitHub
                            <SiGithub size={16} />
                        </a>

                        <a
                            href="https://x.com/heyvishit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-4 py-1.5 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                        >
                            <SiX size={18} />
                        </a>

                        <button
                            onClick={copyEmail}
                            className="flex items-center gap-2 px-4 py-1.5 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                        >
                            {copied ? "Copied!" : "Gmail"}
                            {!copied && <SiGmail size={16} />}
                        </button>
                    </div>

                </div>

        </section>
    );
};

export default ProfileCard;