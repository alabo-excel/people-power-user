import React, { useEffect } from 'react';
import FrontLayout from "layout/FrontLayout";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { MY_CAMPAIGN } from "apollo/queries/campaignQuery";
import { apollo } from "apollo";
import { useState } from "react";
import { ICampaign } from "types/Applicant.types";
import Link from "next/link";
import axios from 'axios';
import { useRouter } from "next/router";
import { sassNull } from 'sass';

const user = () => {
    const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
    const [user, setUser] = useState({})
    const { query } = useRouter();

    useEffect(() => {
        axios.get(`/user/single/${query.page}`)
            .then(function (response) {
                console.log(response);
                setCampaigns(response.data.campaigns)
                setUser(response.data.user)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

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
                            <div className="text-lg font-bold ">{user?.name}</div>
                            <div className="text-sm font-thin">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ab neque dolore quae aspernatur placeat reprehenderit esse eos ipsa id. Laboriosam quae eos nobis facilis nesciunt nam temporibus ab a.
                            </div>
                            <div className="text-base text-gray-900">3000 followers</div>
                            <button className="btn bg-warning px-8 p-2 my-3 w-44 text-white">Follow</button>
                        </div>
                    </div>
                    <div className="lg:flex mt-3">
                        <div className="w-72 mt-3 h-80 lg:mr-4 rounded-md bg-gray-50"></div>
                        <div className='w-full'>
                            {campaigns.map((camp) => (
                                <div className="mt-3 bg-gray-50 w-full rounded-md flex">
                                    <div className="80 mr-4">
                                        <img className="w-96" src={camp.image} alt="" />
                                    </div>
                                    <div className="w-full">
                                        <div className="uppercase text-lg font-bold">{camp.title}</div>
                                        <div className="text-sm">{camp.excerpt}</div>
                                        <div className="flex justify-between mr-10">
                                            <div className="text-gray-900 text-xs"> Created At {camp.createdAt.substring(0, 10)}</div>
                                            <div className="text-gray-900 text-xs">Created By { } Alabo Excel</div>
                                        </div>
                                        <Link href={`/campaigns/${camp?.slug}`}>
                                            <button className="btn btn-warning my-4">Read More</button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        </FrontLayout>
    );
}

export default user;