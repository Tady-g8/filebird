"use client";

import React, { useState } from "react";

export default function MainCenterForm() {
    const [files, setFiles] = useState<File[]>([] as File[]);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const droppedFiles = Array.from(e.dataTransfer.files) as File[];
        setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <div className="mainFormContainer h-auto w-full"> 
            <form action="#" method="POST" encType="multipart/form-data" className="postForm h-full  border-slate-500">
                <input
                    type="text"
                    name="text"
                    id="formText"
                    placeholder="What's on your mind?"
                    className="w-10/12 mt-5 ml-12"
                />
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="w-10/12 mt-5 mx-auto border border-dashed border-gray-500 text-gray-300 flex justify-center items-center h-24"
                >
                    <p className="text-center text-gray-300">
                        Drag and drop your files here
                    </p>
                </div>
                <div className="files mt-5 ml-12 text-gray-300">
                    {files.map((file, index) => (
                        <p key={index} className="truncate">
                            {file.name}
                        </p>
                    ))}
                </div>
                <div className="buttonContainer mb-5">

                    <div className="leftPlaceholder pl-16 place-content-end">
                        <button className="px-2 rounded-full text-slate-300 hover:bg-slate-800">Timed drop</button>
                        <span id="timeDrop"></span>
                        <button className="ml-5 px-2 rounded-full text-slate-300 hover:bg-slate-800">Time Capsule</button>
                        <span id="timeCapsule"></span>
                    </div>

                    <button
                        className="bg-blue-500 text-white rounded-full gap-2 px-4 py-2 w-10/12 text-center h-10 mt-5 mr-5 transition duration-200 hover:bg-blue-400"
                    >
                        Post
                    </button>

                </div>
            </form>
        </div>
    );
}