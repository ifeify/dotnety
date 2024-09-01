// This represents the home page route of the application
'use client';

import React, { useState, useEffect } from 'react';
import config from '../config';

// This will output `<head><title>Home</title></head>
// export const metadata: Metadata = {
//     title: 'Dashboard',
// }

interface BlogPost {
    title: string;
    content: string;
}

export default function NewPostComponent() {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Prevent state updates if the component unmounts during the submission process
        let isMounted = true;

        const submitPost = async () => {
            if(!isSubmitting) return;
            
            try {
                const response = await fetch(`${config.apiUrl}/posts`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title, content }),
                });

                if (!response.ok) {
                    throw new Error('Failed to create post');
                }

                if (isMounted) {
                    setSubmitSuccess(true);
                    setTitle('');
                    setContent('');
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : "An unknown error occurred");
                }
            } finally {
                if (isMounted) {
                    setIsSubmitting(false);
                }
            }
        };

        submitPost();

        return () => {
            isMounted = false;
        };
    }, [isSubmitting]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSubmitSuccess(false);
    };

    return (
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Blog Post</h2>

            {submitSuccess && (
                <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
                    Post created successfully!
                </div>
            )}

            {error && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                    Error: {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                        Content
                    </label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting' : 'Submit Post' }
                </button>
            </form>
        </div>
    );
}