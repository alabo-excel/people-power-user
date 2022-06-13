import { apollo } from "apollo";
import { GET_ACTIVE_CAMPAIGNS } from "apollo/queries/campaignQuery";
import CampaignCard from "components/home/CampCard";
import FrontLayout from "layout/FrontLayout";
import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ICampaign } from "types/Applicant.types";
import Link from "next/link";
import { useRouter } from 'next/router'
import CampaignSlider from "../../components/camp-slider/Slider"

const CampaignPage: NextPage<{ campaigns: ICampaign[] }> = ({
	campaigns,
}: {
	campaigns: ICampaign[];
}): JSX.Element => {
	const [searchTerm, setSearchTerm] = useState("");
	const [queryCampaigns, setQueryCampaigns] = useState<ICampaign[]>([]);

	useEffect(() => {
		setQueryCampaigns(campaigns)
	}, [])

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
			cate: 'Environment'
		},
		{
			title: 'Rehabilitation',
			cate: 'Rehabilitation/ Empowerment'
		},
		{
			title: 'Health',
			cate: 'Health'
		},
		// {
		// 	title: 'Human Right P',
		// 	cate: 'Human Right Preceeding'
		// },
		{
			title: 'Politics',
			cate: 'Politics'
		},
		{
			title: 'Disability',
			cate: 'Disability'
		},
		{
			title: 'Equality',
			cate: 'Equality'
		},
		{
			title: 'Others',
			cate: 'Others'
		}
	]
	const router = useRouter()
	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault()
		router.push('/startcamp')
	}
	const changeCategory = (event: React.MouseEvent<HTMLDivElement>): void => {
		const item: HTMLDivElement = event.currentTarget
		// const category: string = item.textContent
		const text = item.lastChild.innerText

		if (text === 'All') {
			setQueryCampaigns(campaigns)
			return
		}
		const results = campaigns.filter(itemCamp => itemCamp.category === text)
		setQueryCampaigns(results)
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
											return <div onClick={changeCategory} className="p-2 m-2 rounded-lg  cursor-pointer text-sm" key={index}>{item.title} <span className="hidden">{item.cate}</span></div>
										})}
									</div>
								</div>
							</div>
							<div>
								<select name="options" id="" className="lg:ml-4 rounded-md border-gray-200">
									<option value="">All</option>
									<option value="">Images</option>
									<option value="">Videos</option>
								</select>
							</div>
						</div>
						<div className="campaign-list ">
							{queryCampaigns
								.filter((camp) =>
									camp.title
										?.toLocaleLowerCase()
										.includes(searchTerm.toLocaleLowerCase()),
								)
								.map((campaign, i) => (
									<CampaignCard key={i} camp={campaign} />
								))}
						</div>
						<CampaignSlider />
						<div
							className='w-52 text-center py-3 rounded-xl mt-5 text-light m-auto bg-[#00401c] cursor-pointer'
							onClick={handleClick}
						>
							Start your own Campaign
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
