import React, { useState, useEffect } from 'react';
import FrontLayout from "layout/FrontLayout";
import Head from "next/head";
import axios from 'axios';
import router, { useRouter } from "next/router";
import { IUser } from "types/Applicant.types";

const addadmin = () => {
    const [admin, setAdmin] = useState(true)
    const [users, setUsers] = useState<IUser[]>([])
    const [searched, setsearched] = useState<IUser[]>([])
    const { query } = useRouter();
    const [role, setRole] = useState("")
    const [adminTag, setAdminTag] = useState(false)
    const [editor, setEditor] = useState(false)
    const [id, setId] = useState("")


    useEffect(() => {
        axios.get(`/user`)
            .then(function (response) {
                console.log(response);
                setUsers(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const addAdmin = () => {
        axios.post('/orgs/operator', {
            userId: id,
            role: role,
            orgId: query.page
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const setvalue = () => {
        if (editor === true) {
            setRole("editor")
            console.log(role)
        } else if (adminTag === true) {
            setRole("admin")
            console.log(role)
        } else {
            setRole("")
            console.log(role)
        }
    }

    const search = (e: any) => {
        users.map((user) => {
            if (user.firstName === e.target.value) {
                setsearched([...searched, user])
                console.log(searched)
            }
        })
    }

    return (
        <FrontLayout >
            <>
                <Head>
                    <title>{`PEOPLE'S POWER`} || Add Admin </title>
                </Head>
                <div>
                    <div className="flex justify-evenly text-center">
                        <div onClick={() => setAdmin(true)} className="cursor-pointer">
                            <div className={"text-3xl font-bold underline"}>Add an Admin</div>
                            <p>Manage your campaign</p>
                        </div>
                        <div onClick={() => setAdmin(false)} className="cursor-pointer">
                            <div className="text-3xl font-bold underline">Hire a trained professionals</div>
                            <p>To draft, edit, promote and manage your campaigns with little cost.</p>
                        </div>
                    </div>
                    {
                        admin === true ? (
                            <div className="mt-20 w-2/3 mx-auto">
                                <div className="text-center text-3xl font-bold">Add an Admin</div>
                                <div className="text-lg my-1">Add Page admin</div>
                                <input type="text" className="p-3 rounded-md border border-gray w-full" onChange={(e) => search(e)} placeholder="Type here to search for a user to assign role" />
                                <div>
                                    {searched.map((search) => (
                                        <div className="p-3 bg-gray-100 text-base mb-1" onClick={() => setId(search.id)}>{search.firstName} {search.lastName}</div>
                                    ))}
                                </div>
                                <div className="text-lg mt-4">Assign an admin role</div>
                                <div>

                                    <div className="flex my-1">
                                        <div className="my-auto mx-3">
                                            <input type="checkbox" className="p-4" value="admin" onChange={() => { setvalue(), setAdminTag(!adminTag) }} />
                                        </div>
                                        <div className="my-auto">
                                            <div className="text-lg font-bold">Admin</div>
                                            <p>Event coverage, Writing and posting of campaigns, Editing of profile and campaigns, Promote campaigns, create an organization, Make update.	</p>
                                        </div>
                                    </div>
                                    <div className="flex my-1">
                                        <div className="my-auto mx-3">
                                            <input type="checkbox" className="p-4" value="editor" onChange={() => { setvalue(), setEditor(!editor) }} />
                                        </div>
                                        <div className="my-auto">
                                            <div className="text-lg font-bold">Editor</div>
                                            <p>Edit profile, Edit campaigns and designs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center my-4">
                                    <button onClick={() => addAdmin()} className="p-2 bg-warning w-40 text-white">Assign</button>
                                </div>
                            </div>
                        ) : (
                            <div className="mt-20 w-2/3 mx-auto">
                                <div className="text-center text-3xl font-bold">Hire a trained professionals</div>
                                <div className="text-lg my-1">Leave the complexity of writing, designing and editing your campaigns and other administration to us.</div>
                                <div className="text-lg mt-4">Our team of content writers, designers, journalists and social skill workers can handle your content, designs, updates and other administrations while you focus on building a strong and physical campaigns with momentum.</div>
                                <div>
                                    <img src="/images/logo.svg" className="w-16 my-2 h-16 mx-auto" alt="" />
                                    <div className="font-bold text-lg text-center my-2">Evans G, what plan will you like to use? <br />
                                        We’ll recommend the right plan for you.</div>
                                    <div className="text-base my-2">
                                        Start your free 1-month trial today. Cancel anytime. We'll send you a reminder
                                        7 days before your trial ends.
                                    </div>
                                    <div className="flex my-1 justify-between">
                                        <div className="my-auto mx-3">
                                            <input type="checkbox" className="p-4" />
                                        </div>
                                        <div className="my-auto w-2/3">
                                            <div className="text-lg font-bold">Admin</div>
                                            <p>Event coverage, Writing and posting of campaigns, Editing of profile and campaigns,
                                                <br /> Promote campaigns, create an organization, Make update.	</p>
                                        </div>
                                        <button className="p-2 border borger-warning w-44 mx-1">N35, 000/Monthly</button>
                                    </div>
                                    <div className="flex my-3 justify-between">
                                        <div className="my-auto mx-3">
                                            <input type="checkbox" className="p-4" />
                                        </div>
                                        <div className="my-auto w-2/3">
                                            <div className="text-lg font-bold">Editor</div>
                                            <p>Edit profile, Edit campaigns and designs</p>
                                        </div>
                                        <button className="p-2 border borger-warning w-44 mx-1">N15, 000/Monthly</button>

                                    </div>
                                </div>
                                <div className="text-center my-4">
                                    <button className="p-2 bg-warning w-40 text-white">Start</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </>
        </FrontLayout>
    );
};

export default addadmin;