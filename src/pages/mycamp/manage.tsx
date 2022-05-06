import { gql, useQuery } from "@apollo/client";
import axios from "axios";
import FrontLayout from "layout/FrontLayout";
import Link from "next/link";
import React, { useState } from "react";
import { Loader } from "rsuite";
import styled from "styled-components";
import { ICampaign } from "types/Applicant.types";
import dayjs from "dayjs";

const GET_CAMPAIGNS = gql`
	{
		getCampaigns {
			title
			id
			slug
			target
			aim
			status
			views
			createdAt
			endorsements {
				id
			}
			author {
				firstName
				lastName
				id
				email
				phone
			}
		}
	}
`;

const ManageCampaignPage = (): JSX.Element => {
	const [campaigns, setCampaigns] = useState<ICampaign[]>([]);

	const { loading } = useQuery(GET_CAMPAIGNS, {
		onCompleted: (data) => {
			setCampaigns(data.getCampaigns);
		},
		onError: (error) => console.log(error),
	});

	const deleteCampaign = async (id: string) => {
		console.log(id);
		const confirmed = confirm("Do you want to delete campaign ?");
		if (!confirmed) return;

		try {
			await axios.delete(`/campaign/single/${id}`);
			setCampaigns(campaigns.filter((camp) => camp.id !== id));
			alert("Deleted");
		} catch (error) {
			console.log(error);
		}
	};

	const approveCampaign = async (id: string) => {
		try {
			const { data } = await axios.post("/campaign/approve", {
				campaign_id: id,
			});

			setCampaigns(
				campaigns.map((camp) =>
					camp.id === id ? { ...(camp as any), status: data?.status } : camp,
				),
			);

			alert("Updated");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<FrontLayout>
			<Wrapper className="container ">
				<div className="campaign-page">
					<h1 className="text-center fs-3 mb-5 mt-3">Mange campaign</h1>
					<button className="btn btn-success text-white mr-2">Send Email</button>
					<button className="btn btn-success text-white">Send SMS</button>
					{loading ? (
						<div className="text-center">
							<Loader className="text-center" content="fetching campaigns..." />
						</div>
					) : (
						<div className="campaign-table">
							<table className="table">
								<thead>
									<th></th>
									<th>Title</th>
									<th>Date Created</th>
									<th className="text-center"> Promotion <br /> Amount | target</th>
									<th> Views </th>
									<th> Endorsements </th>
									<th> Country/State </th>
									<th>Actions</th>
								</thead>
								<tbody>
									{campaigns?.map((campaign, i) => (
										<tr key={i}>
											<td>[]</td>
											<td>
												<i
													className={`fas fa-dot-circle me-2 ${
														campaign?.status === "Pending"
															? "text-warning"
															: "text-success"
													}`}
												></i>
												<Link href={`/campaigns/${campaign?.slug}`}>
													<a className="text-decoration-none">
														{campaign?.title}
														<br />
														<div className="flex">
														<svg
															width="15"
															height="15"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 448 512"
														>
															<path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
															<span className="pl-1">{campaign?.author?.firstName}{" "}
														{campaign?.author?.lastName}</span>
														</div>
														{campaign?.target}
													</a>
												</Link>
											</td>
											<td>{dayjs(campaign?.createdAt).format("DD/MM/YYYY")}</td>
											<td className="text-center"> 0   |   0 </td>
											<td>{campaign?.views?.length}</td>
											<td>{Number(campaign?.endorsements?.length) + 1}</td>
											<td>Nigeria</td>
											<td>
												<div className="dropdown">
													<button
														className="btn btn-sm p-0"
														data-bs-toggle="dropdown"
														aria-expanded="false"
													>
														<i className="fas fa-ellipsis-v"></i>
													</button>
													<ul className="dropdown-menu">
														<li onClick={() => approveCampaign(campaign?.id)}>
															<a className="dropdown-item c-hand">
																{campaign?.status === "Pending"
																	? "Approve"
																	: "Pend"}
															</a>
														</li>

														<li onClick={() => deleteCampaign(campaign?.id)}>
															<a className="dropdown-item c-hand">
																Promote
															</a>
														</li>
														<li onClick={() => deleteCampaign(campaign?.id)}>
															<a className="dropdown-item c-hand">
																Edit
															</a>
														</li>
														<li onClick={() => deleteCampaign(campaign?.id)}>
															<a className="dropdown-item c-hand text-danger">
																Delete
															</a>
														</li>
													</ul>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			</Wrapper>
		</FrontLayout>
	);
};

export default ManageCampaignPage;

const Wrapper = styled.div``;
