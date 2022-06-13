import { UserCampaignAtom } from "atoms/UserAtom";
import React from "react";
import SliderTwo from "react-slick";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { ICampaign } from "types/Applicant.types";
import * as timeago from "timeago.js";
import Link from "next/link";


const SwipeToSlide = () => {
	// const campaigns = useRecoilValue<ICampaign[]>(UserCampaignAtom);

	const [showModal, setShowModal] = React.useState(false);
	const [position, setPosition] = React.useState(0);

	var settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: false,
					autoplay: false,
					autoplaySpeed: 100,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					infinite: true,
					autoplay: false,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					autoplay: false,
					autoplaySpeed: 2000,
				}
			}
		]
	};

	const campaigns: any = [
		{
			title: "string",
			video: "string",
			image: "https://images.unsplash.com/photo-1608644139016-4b938587ff67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=754&q=80",
			picture: "string",
			aim: "string",
			target: "strin",
			body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi praesentium deserunt ad vel minima quibusdam non, mollitia accusantium eius eos?",
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
			promoted: false,
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
	];

	// const setting = slideSettings(campaigns.length);

	return (
		<>
			<div className="">
				<SliderTwo {...settings}>
					{campaigns.map((camp, i) => (
						<div className="mx-3">
							<img
								src={camp?.image}
								alt=""
								key={i}
								width="90%"
								className=""
							/>
							<div className="py-2 relative" >
								{!camp.promoted ? (
									<Link href={`/promote?slug=${camp.slug}`}>
										<a className="btn btn-warning btn-sm  rounded-pill px-3 fw-bold">
											Promote
										</a>
									</Link>
								) : (
									<span className="btn btn-success btn-sm m-1 absolute -top-48 rounded-pill px-3 fw-bold">
										Promoted <i className="fas fa-sm fa-check"></i>
									</span>
								)}
								<div className="text-white absolute -top-40 p-2 w-11/12">
									<strong className="d-block text-capitalize">{camp?.title}</strong>

									<small className="mt-0 pt-0 break-all">
										<span className="text-xs">{camp?.body}
											<button type="button" className="text-xs" onClick={() => {
												setShowModal(true)
												setPosition(i)
											}}> ...load more
											</button>
										</span>
										{/* <em>{timeago.format(camp?.createdAt)}</em> */}
									</small>
								</div>
							</div>

						</div>
					))}
				</SliderTwo>
			</div>

			{showModal ? (
				<>
					<div
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					>
						<div className="relative w-full mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between px-4 py-2 rounded-t">
									<h3 className="text-3xl font-semibold">
										{campaigns[position].title}
									</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="text-black h-6 w-6 text-3xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}

								<div className="relative px-6 py-2 flex-auto">
									<div>
										<img className="w-full h-52" src={campaigns[position].image} alt="" />
									</div>
									<div>
										<div></div>
										<div></div>
									</div>
									<p className="my-2 text-slate-500 text-lg leading-relaxed">
										{campaigns[position].body}
									</p>
								</div>
								{/*footer*/}
								{/* <div className="flex items-center justify-end px-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<button
										className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Save Changes
									</button>
								</div> */}
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};

export default SwipeToSlide;