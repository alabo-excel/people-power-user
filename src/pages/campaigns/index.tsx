import { apollo } from "apollo";
import { GET_ACTIVE_CAMPAIGNS } from "apollo/queries/campaignQuery";
import CampaignCard from "components/home/CampCard";
import FrontLayout from "layout/FrontLayout";
import { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import { ICampaign } from "types/Applicant.types";
import Link from "next/link";

const CampaignPage: NextPage<{ campaigns: ICampaign[] }> = ({
	campaigns,
}: {
	campaigns: ICampaign[];
}): JSX.Element => {
	const [searchTerm, setSearchTerm] = useState("");
	const categories = [
		{
			title: 'All',
			cate: 'All'
		},
		{
			title: 'Human Right',
			cate: 'Human Right awareness'
		},
		{
			title: 'Social policy',
			cate: 'Social policy'
		},
		{
			title: 'Criminal',
			cate: 'Criminal Justice'
		},
		{
			title: 'Environment',
			cate:'Environment'
		},
		{
			title: 'Rehabilitation',
			cate:'Rehabilitation/ Empowerment'
		},
		{
			title: 'Health',
			cate: 'Health'
		},
		{
			title: 'Human Right',
			cate:'Human Right Preceeding'
		},
		{ 
			title: 'Politics',
			cate: 'Politics'
		},
		{
			title: 'Disability',
			cate:'Disability'
		},
		{
			title: 'Equality',
			cate:'Equality'
		},
		{
			title: 'Others',
			cate:'Others'
		}
	]
	const changeCategory = (event: React.MouseEvent<HTMLDivElement>):void => {
		const item: HTMLDivElement = event.currentTarget
		// const category: string = item.textContent
		console.log(item)
	}
	return (
		<FrontLayout>
			<Wrapper>
				<div className="explore py-5 animate__animated animate__fadeIn">
					<div className="container">
						<h1 className="ex-title mb-3 fw-bold fs-3">Explore Campaign</h1>
						<p className="">
							Browse and join hundred others endorse a campaign you’d like to
							support.
						</p>
						<div className="ex-bar d-flex mb-4">
							<div className="ex-input d-flex mb-3">
								<div className="_ex-input">
									<input
										type="search"
										className="form-control rounded-pill"
										placeholder="Search"
										onChange={(event) => {
											setSearchTerm(event.target.value);
										}}
									/>
									<div className="flex">
										{categories.map((item, index) => {
											return <div onClick={changeCategory} className="p-2 m-2 rounded-lg shadow-lg cursor-pointer text-sm" key={index}>{ item.title }</div>
										})}
									</div>
								</div>
							</div>
						</div>
						<div className="campaign-list ">
							{campaigns
								.filter((camp) =>
									camp.title
										?.toLocaleLowerCase()
										.includes(searchTerm.toLocaleLowerCase()),
								)
								.map((campaign, i) => (
									<CampaignCard key={i} camp={campaign} />
								))}
						</div>
						<div className='w-10 m-auto' >
							<Link  href="/startcamp">
								<a className="btn btn-warning btn-lg rounded-pill px-2 py-3 text-light font-weight-bolder fs-20 text-center">
									Start Campaign
								</a>
							</Link>
						</div>
					</div>
				</div>
			</Wrapper>
		</FrontLayout>
	);
};

export default CampaignPage;

const Wrapper = styled.div`
	.campaign-list {
	}
`;

CampaignPage.getInitialProps = async (): Promise<{
	campaigns: ICampaign[];
}> => {
	try {
		const { data } = await apollo.query({
			query: GET_ACTIVE_CAMPAIGNS,
		});
		const campaigns: ICampaign[] = data?.getActiveCampaigns;

		return {
			campaigns,
		};
	} catch (error) {
		return {
			campaigns: [],
		};
	}
};
