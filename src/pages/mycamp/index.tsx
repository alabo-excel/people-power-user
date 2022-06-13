import { useQuery } from "@apollo/client";
import { MY_CAMPAIGN } from "apollo/queries/campaignQuery";
import { UserAtom } from "atoms/UserAtom";
import Slider from "components/camp-slider/Slider";
import CampaignTable from "components/campaign-comp/CampaignTable";
import { Wrapper } from "components/styled/style";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import authGuard from "hooks/authGuard";
import FrontLayout from "layout/FrontLayout";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { ICampaign } from "types/Applicant.types";

dayjs.extend(relativeTime);

const MyCamp: NextPage = (): JSX.Element => {
	const user = useRecoilValue(UserAtom);
	// const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
	const [campaigns, setCampaigns] = useState([
		{
			title: "string",
			video: "string",
			image: "https://images.unsplash.com/photo-1608644139016-4b938587ff67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=754&q=80",
			picture: "string",
			aim: "string",
			target: "strin",
			body: "string",
			slug: "string",
			status: "CampaignStatusEnum",
			author: "IUser",
			createdAt: "Date",
			updatedAt: "Date",
			addedFrom: "string",
			category: "string",
			excerpt: "string",
			// likes: string[];
			likeCount: 5,
			// endorsements: IEndorsement[];
			promoted: true,
		},
		{
			title: "string",
			video: "string",
			image: "https://images.unsplash.com/photo-1608644139016-4b938587ff67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=754&q=80",
			picture: "string",
			aim: "string",
			target: "strin",
			body: "string",
			slug: "string",
			status: "CampaignStatusEnum",
			author: "IUser",
			createdAt: "Date",
			updatedAt: "Date",
			addedFrom: "string",
			category: "string",
			excerpt: "string",
			// likes: string[];
			likeCount: 5,
			// endorsements: IEndorsement[];
			promoted: true,
		}
	])
	// const loading = true;
	const { loading } = useQuery(MY_CAMPAIGN, {
		onCompleted: (data) => setCampaigns(data.myCampaign),
		onError: (e) => console.log(e),
	});
	return (
		<FrontLayout showFooter={false}>
			<>
				<Head>
					<title>{`PEOPLE'S POWER`}::My campaign</title>
				</Head>
				<Wrapper className="my-camp bg-white ">
					<div className="container">
						<h1 className="text-secondary pt-2 mb-3 fs-3 fw-bold">
							My Campaigns
						</h1>
						<p className="fs-4 fst-italic">Welcome {user?.firstName} !</p>
						<Link href="/startcamp">
							<a className="btn btn-warning rounded-pill px-4">
								<i className="fas fa-plus text-light me-2"></i> Create Campaign
							</a>
						</Link>
						<div className="mt-4 ">
							{loading ? (
								<p>Loading...</p>
							) : campaigns?.length ? (
								<div>
									<h3 className="fs-4 fw-bold">Promote Your Campaigns</h3>
									<div className="slide-sec mb-3">
										<Slider />
									</div>
								</div>
							) : (
								<p className="text-center">Start by creating a new campaign</p>
							)}
							{campaigns?.length > 0 && (
								<div className="d-flex py-3 flex-column flex-md-row">
									<div className="flex-fill overflow-auto">
										<CampaignTable />
									</div>
								</div>
							)}
						</div>
					</div>
				</Wrapper>
			</>
		</FrontLayout>
	);
};

// export default authGuard(MyCamp);
export default MyCamp;
