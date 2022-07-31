import React, { useEffect } from 'react';
import FrontLayout from "layout/FrontLayout";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { MY_CAMPAIGN } from "apollo/queries/campaignQuery";
import { apollo } from "apollo";
import { useState } from "react";
import { ICampaign, IUser, IOrg } from "types/Applicant.types";
import Link from "next/link";
import axios from 'axios';
import { sassNull } from 'sass';
import { useRecoilValue } from "recoil";
import { UserAtom } from "atoms/UserAtom";
import Slider from "../components/camp-slider/Slider"
import router, { useRouter } from "next/router";

const user = () => {
    const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
    const [user, setUser] = useState<IUser>()
    const [orgs, setOrgs] = useState<IOrg[]>([])
    const { query } = useRouter();
    const author = useRecoilValue(UserAtom);
    const [product, setProduct] = useState(false)

    useEffect(() => {
        // console.log(author)
        axios.get(`/user/single/${query.page}`)
            .then(function (response) {
                // console.log(response);
                setCampaigns(response.data.campaigns)
                setUser(response.data.user)
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.post('/orgs/user/orgs')
            .then(function (response) {
                console.log(response);
                setOrgs(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const singleOrg = (id: string) => {
        axios.get(`/orgs/${id}`)
            .then(function (response) {
                console.log(response)
                setCampaigns([])
                setUser(response.data)
                router.push(`/user?page=${id}`)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    // const { loading } = useQuery(MY_CAMPAIGN, {
    //     client: apollo,
    //     onCompleted: (data) => {
    //         console.log(data.myCampaign)
    //         setCampaigns(data.myCampaign)

    //     },
    //     onError: (e) => console.log(e),
    // });

    return (
        <FrontLayout showFooter={false}>
            <>
                <Head>
                    <title>{`PEOPLE'S POWER`} || {user?.name} </title>
                </Head>
                <div className="mx-32">
                    <div className="rounded-md bg-gray-100">
                        <div className="relative ">
                            <div>
                                <img className="w-full h-44" src="/images/women_in_prison 1.png" alt="" />
                            </div>
                            <div className="absolute top-32 left-10 rounded-full w-24 bg-white p-1 h-24">
                                <img src="/images/logo.svg" alt="" />

                            </div>
                        </div>
                        <div className='mt-16 px-10'>
                            <div className="flex"><div className="text-lg font-bold ">{user?.name}</div> <div className="pt-1 ml-2"> {user?.city}, {user?.country}</div> </div>
                            <div className="text-sm font-thin">
                                {user?.description}
                            </div>
                            <div className="text-lg font-black text-gray-900 flex ">{user?.followersCount} Followers
                                <div className="text-lg font-black text-gray-900 ml-2">
                                    Following {user?.followingCount} </div> </div>
                            {author?.id === query.page ? (
                                <div className="font-black text-lg">
                                    <Link href={`mycamp/profile`}>
                                        <button className="bg-transparent p-2 text-warning"> <span>&#x270E;</span> Edit</button>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <button className="bg-transparent p-2 text-warning"> <span>&#10010;</span> Follow</button>
                                </div>
                            )}
                        </div>
                        {author?.id === query.page ? (
                            <div className="text-center font-black text-lg">
                                <Link href="/mycamp">
                                    <button className=" bg-transparent p-2 w-44 text-warning">My Activity</button>
                                </Link>
                                <button className=" bg-transparent p-2 w-44 text-warning" onClick={() => setProduct(!product)}> Products</button>
                                <Link href={'/about'}>
                                    <button className=" bg-transparent p-2 w-44 text-warning"> Careers</button>
                                </Link>
                            </div>
                        ) : (<div></div>)}
                    </div>
                    <Slider />
                    <div className="text-center text-lg p-3">
                        <Link href={`/mycamp`}>
                            <button className="bg-warning w-44 p-2 text-white rounded-full"> Start Cmapaign</button>
                        </Link>
                    </div>
                    <div className="lg:flex mt-3">
                        <div className="w-72 mt-3 h-80 lg:mr-4 rounded-md bg-gray-50">
                            {author?.id === query.page ? (
                                <div className="text-center font-black text-base p-3">
                                    <Link href={'/create'}>
                                        <button className="bg-transparent px-8 w-44 text-warning"> Create Organization</button>
                                    </Link>
                                    <div>
                                        {orgs.map((org) => (
                                            <div className="flex cursor-pointer my-2" onClick={() => singleOrg(org?._id)}>
                                                {org?.image === "Upload org Image" ? (
                                                    <img className="w-8 h-8 opacity-20" src="/images/logo.svg" alt="" />
                                                ) : (
                                                    <img className="w-8 h-8 rounded-full" src={org?.image} alt="" />
                                                )}
                                                <p className="pl-2 mt-2 capitalize">{org?.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (<div></div>)}
                        </div>
                        {product ? (<div className="bg-gray-50 flex w-full rounded-md mt-3">
                            <img src="/images/file.png" className="w-80 mx-auto" alt="" />
                            <div className="my-auto">
                                <div className="text-3xl fotn-bold">Do you think your rights have been breached and wish to seek courts redress?</div>
                                <div className="text-base">Let's help you file this application through your subscription.</div>
                                <button className="btn bg-warning p-2 px-8 my-3 mx-auto text-white w-44">Suscribe</button>
                            </div>
                        </div>) : (<div className='w-full'>
                            {campaigns.map((camp) => (
                                <div className="mt-3 bg-gray-50 w-full rounded-md flex relative">
                                    <div className='absolute right-2 top-2'>
                                        <div className="dropdown">
                                            <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            </a>

                                            <ul className="dropdown-menu">
                                                <li>
                                                    <Link href={`/promote?slug=${camp?.slug}`}>
                                                        <a className="btn pl-2">{camp?.promoted ? "Upgrade" : "Promote"}</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={`/editcamp?page=${camp?.slug}`}>
                                                        <a className="btn pl-2">Edit</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={`/updates?page=${camp?.id}/${camp?.slug}`}>
                                                        <a className="btn pl-2">Add Updates</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="w-96 mr-4">
                                        <img className="w-96 h-full" src={camp.image} alt="" />
                                    </div>

                                    <div className="w-full my-auto">
                                        <div className="uppercase text-lg font-bold">{camp.title}</div>
                                        <div className="text-sm">{camp.excerpt}</div>
                                        <div className="flex justify-between mr-10">
                                            <div>
                                                <div className="text-gray-900 text-xs"> Created At {camp.createdAt.slice(0, 10)}</div>
                                                {/* <div className="text-gray-900 text-xs">Created By { } Alabo Excel</div> */}
                                            </div>
                                            {/* <div className="flex cursor-pointer">
                                                {camp?.author.image === null ? (
                                                    <img className="w-8 h-8 opacity-20" src="/images/logo.svg" alt="" />
                                                ) : (
                                                    <img className="w-8 h-8 " src={camp?.author.image} alt="" />
                                                )}
                                                <p className="pl-2 mt-2">{user?.name} </p>
                                            </div> */}
                                            <p className="fst-italic">
                                                <i className="fa fa-users mr-3"></i>
                                                {(camp?.endorsements?.length) + 1} Supporters
                                            </p>
                                        </div>
                                        <Link href={`/campaigns/${camp?.slug}`}>
                                            <button className="btn btn-warning mt-2">Read More</button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>)}
                    </div>
                </div>
            </>
        </FrontLayout >
    );
}

export default user;