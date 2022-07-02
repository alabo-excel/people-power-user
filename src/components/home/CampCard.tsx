import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { ICampaign } from "types/Applicant.types";
import { truncateWord } from "utils";

const CampaignCard = ({ camp }: { camp: ICampaign }): JSX.Element => {
	console.log(camp)
	return (
		<Wrapper>
			<div className="card  overflow-hidden">
				<Link href={`/campaigns/${camp?.slug}`}>
					<a className="text-decoration-none link-dark">
						<img src={camp?.image} className="card-image" alt={camp?.title} />
						<div className="card-body ">
							<div className="flex">
								{camp?.author.image === null ? (
									<img className="w-8 h-8 opacity-50" src="/images/logo.svg" alt="" />
								) : (
									<img className="w-8 h-8 " src={camp?.author.image} alt="" />
								)}
								<p className="pl-2 mt-2">{camp?.author.firstName} {camp?.author.lastName}</p>
							</div>
							<p className="card-title fs-5 fw-bold ">
								{camp?.title?.length > 30
									? `${camp?.title?.slice(0, 30)}...`
									: camp?.title}
							</p>
							<p className="card-text  ">{truncateWord(camp?.excerpt)}</p>

							<p className=" fst-italic">
								<i className="fa fa-users mr-3"></i>
								{Number(camp?.endorsements?.length) + 1} Supporters
							</p>
							<button className="btn btn-warning">Read More</button>
						</div>
					</a>
				</Link>
			</div>
		</Wrapper>
	);
};

export default CampaignCard;
const Wrapper = styled.div``;
