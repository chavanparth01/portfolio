"use client";
import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";
import { Textarea } from "./ui/textarea";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useSound } from "../Context/SoundContext";
import playSound from "../utils/playSound";
import SectionHeading from "./SectionHeading";
import useSectionInView from "../lib/Hooks/Hooks";

export function Contact() {
    interface ContactType {
        name: string;
        email: string;
        message: string;
    }

    interface ErrorResponse {
        message: string;
    }

    const [formData, setFormData] = useState<ContactType>({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [returnMessage, setReturnMessage] = useState("");

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("/api/send-email", formData);
            setReturnMessage(response.data.message || "Message sent successfully!");
        } catch (error) {
            const axiosError = error as AxiosError<ErrorResponse>;
            setReturnMessage(
                axiosError.response?.data?.message || "An unknown error occurred."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const { sound } = useSound();
    const ref = useSectionInView("Contact" , 0.5)
    return (
        <>
        <SectionHeading>
            Feel Free To Contact Me Here 😇
        </SectionHeading>

        <div ref = { ref } className="relative max-w-lg min-h-[30rem] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-[#1f1f1f]">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Hope You Liked the Website 😅!
            </h2>
            {/* <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Contact Me here.
            </p> */}

            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">Name</Label>
                        <Input
                            id="firstname"
                            placeholder="chavan parth"
                            name="name"
                            type="text"
                            onChange={handleOnChange}
                        />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="parth@gmail.com"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="textarea">Message</Label>
                    <Textarea
                        rows={10}
                        cols={50}
                        placeholder="Write your message here..."
                        name="message"
                        onChange={handleOnChange}
                    />
                </LabelInputContainer>

                <button
                    className="relative bg-gradient-to-br group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] w-full flex items-center justify-center"
                    type="submit"
                    disabled={loading}
                    onClick={ ()=> sound ? playSound("/Sounds/clicksound2.wav") : null }
                >
                    {loading ? (
                        <PacmanLoader color="#fff" size={15} />
                    ) : (
                        <>
                            Submit &rarr;
                            <BottomGradient />
                        </>
                    )}
                </button>
            </form>

            {returnMessage && (
                <p
                    className={`mt-4 text-sm ${
                        returnMessage.includes("success")
                            ? "text-green-500"
                            : "text-red-500"
                    }`}
                >
                    {returnMessage}
                </p>
            )}
        </div>
        </>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-5 w-full", className)}>
            {children}
        </div>
    );
};
