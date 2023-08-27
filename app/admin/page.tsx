"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Admin() {
    return (
        <div className="container pt-4 text-gray-900 bg-white min-h-screen w-full">
            <div className="w-full flex flex-col md:flex-row gap-4">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>FM</AvatarFallback>
                </Avatar>
                <h1 className="text-3xl font-bold">Administrator</h1>
            </div>
            <div className="w-full mt-8">
                <Tabs defaultValue="user" className="w-full">
                    <TabsList>
                        <TabsTrigger value="user">User Management</TabsTrigger>
                        <TabsTrigger value="stock">
                            Stock Management
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="user">
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 py-4 gap-4">
                            <div className="w-full md:col-span-2 bg-white flex flex-col gap-2 items-center">
                                <Image
                                    src="/undraw_Dashboard_re_3b76.png"
                                    width={500}
                                    height={500}
                                    alt="dashboard"
                                />
                                <div className="flex flex-col gap-2 p-4 border-2 rounded-lg shadow-md w-full">
                                    <h1 className="text-xl font-bold">Users</h1>
                                    <div className=" border-2 rounded-md">
                                        <Table>
                                            <TableCaption>
                                                Users of the system
                                            </TableCaption>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-[100px]">
                                                        <Checkbox />
                                                    </TableHead>
                                                    <TableHead>
                                                        Username
                                                    </TableHead>
                                                    <TableHead>
                                                        First Name
                                                    </TableHead>
                                                    <TableHead>
                                                        Last Name
                                                    </TableHead>
                                                    <TableHead>Phone</TableHead>
                                                    <TableHead>
                                                        Username
                                                    </TableHead>
                                                    <TableHead>Email</TableHead>
                                                    <TableHead>
                                                        Last Login
                                                    </TableHead>
                                                    <TableHead></TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>
                                                        <Checkbox />
                                                    </TableCell>
                                                    <TableCell>Admin</TableCell>
                                                    <TableCell>David</TableCell>
                                                    <TableCell>Johns</TableCell>
                                                    <TableCell>
                                                        +XXXXXXXXXX
                                                    </TableCell>
                                                    <TableCell>
                                                        JhonDoe123
                                                    </TableCell>
                                                    <TableCell>
                                                        John.Doe@email.com
                                                    </TableCell>
                                                    <TableCell>
                                                        2023-08-08 11:10 AM
                                                    </TableCell>
                                                    <TableCell className="flex flex-row gap-2">
                                                        <Button>Edit</Button>
                                                        <Button variant="destructive">
                                                            Remove
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        *Selected 0 out of 1
                                    </p>
                                </div>
                            </div>
                            <div className="w-full bg-white">
                                {/* Add Users form with first name, last name, phone number, nic, email, username, password, photo  */}
                                <form className="w-full flex flex-col gap-4 p-4 border-2 rounded-lg shadow-md">
                                    <h2 className="text-xl font-bold">
                                        Add User
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        *Please make sure the details you enter
                                        are correct.
                                    </p>
                                    <h3 className="text-md text-gray-500">
                                        Personal Details
                                    </h3>
                                    <div className="flex flex-row gap-2">
                                        <Input
                                            type="text"
                                            placeholder="First Name"
                                        />
                                        <Input
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <Input
                                            type="text"
                                            placeholder="Phone Number"
                                        />
                                        <Input type="text" placeholder="NIC" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="profile"
                                            className="whitespace-nowrap text-gray-500"
                                        >
                                            Profile Photo
                                        </Label>
                                        <Input id="profile" type="file" />
                                    </div>
                                    <h3 className="text-md text-gray-500">
                                        Login Information
                                    </h3>
                                    <div className="flex flex-row gap-2">
                                        <Input
                                            type="text"
                                            placeholder="Username"
                                        />
                                        <Input
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <Input
                                            type="password"
                                            placeholder="Password"
                                        />
                                        <Input
                                            type="password"
                                            placeholder="Confirm Password"
                                        />
                                    </div>
                                    <Button type="submit" className="mt-2">
                                        Add User
                                    </Button>
                                </form>
                            </div>
                            <div className="w-full bg-white">
                                {/* Add Users form with first name, last name, phone number, nic, email, username, password, photo  */}
                                <form className="w-full flex flex-col gap-4 p-4 border-2 rounded-lg shadow-md">
                                    <h2 className="text-xl font-bold">
                                        Update User
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        *Please load the user from the users
                                        table
                                    </p>
                                    <h3 className="text-md text-gray-500">
                                        Personal Details
                                    </h3>
                                    <div className="flex flex-row gap-2">
                                        <Input
                                            type="text"
                                            placeholder="First Name"
                                        />
                                        <Input
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <Input
                                            type="text"
                                            placeholder="Phone Number"
                                        />
                                        <Input type="text" placeholder="NIC" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="profile"
                                            className="whitespace-nowrap text-gray-500"
                                        >
                                            Profile Photo
                                        </Label>
                                        <Input id="profile" type="file" />
                                    </div>
                                    <h3 className="text-md text-gray-500">
                                        Login Information
                                    </h3>
                                    <div className="flex flex-row gap-2">
                                        <Input
                                            type="text"
                                            placeholder="Username"
                                        />
                                        <Input
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <Input
                                            type="password"
                                            placeholder="Password"
                                        />
                                        <Input
                                            type="password"
                                            placeholder="Confirm Password"
                                        />
                                    </div>
                                    <Button type="submit" className="mt-2">
                                        Update User
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="stock">
                        <div className="w-full"></div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
