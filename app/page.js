"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
    return (
        <div className="container text-gray-900 p-0 flex flex-col md:flex-row w-full h-screen bg-[url('https://unsplash.com/photos/xDrxJCdedcI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fGZhcm18ZW58MHx8fHwxNjkzMDU4MjgwfDA&force=true')] bg-cover">
            <div className="w-full bg-white flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center py-8 px-4">
                    <h1 className="text-4xl font-bold text-center">
                        Farm Manager
                    </h1>
                    <h2 className="text-xl text-center">
                        Fully Equiped Farm Management System
                    </h2>
                </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center backdrop-blur-md">
                <form className=" max-w-xs p-8 bg-white rounded flex flex-col gap-2">
                    <h2 className="text-2xl font-bold mb-1 text-center">
                        Login
                    </h2>
                    <p className="mb-4 text-sm text-gray-500 text-center">
                        Use your username and password to login to the system
                    </p>
                    <Input type="text" placeholder="Username" />
                    <Input type="password" placeholder="Password" />
                    <Button type="submit">Login</Button>
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <Button type="submit" variant="secondary">
                        Create an account
                    </Button>
                    <p className="mt-4 text-xs text-gray-500 text-center">
                        *By clicking continue, you agree to our Terms of Service
                        and Privacy Policy.
                    </p>
                </form>
            </div>
        </div>
    );
}
