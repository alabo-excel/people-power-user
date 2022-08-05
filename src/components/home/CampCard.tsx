import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { ICampaign } from "types/Applicant.types";
import { truncateWord } from "utils";

const CampaignCard = ({ camp }: { camp: ICampaign }): JSX.Element => {
	return (
		<Wrapper>
			<div className="shadow-md overflow-hidden rounded-md">
				{/* <Link href={`/campaigns/${camp?.slug}`}> */}
				<a className="text-decoration-none link-dark">
					<img src={camp?.image} className="card-image" alt={camp?.title} />
					<div className="card-body p-3">
						<Link href={`/user?page=${camp?.author.id}`}>
							<div className="flex cursor-pointer">
								{camp?.author.image === null ? (
									<img className="w-8 h-8 opacity-20" src="/images/logo.svg" alt="" />
								) : (
									<img className="w-8 h-8 " src={camp?.author.image} alt="" />
								)}
								<p className="pl-2 mt-2">{camp?.author.firstName} {camp?.author.lastName}</p>
							</div>
						</Link>
						<p className="card-title fs-5 fw-bold capitalize">
							{camp?.title?.length > 30
								? `${camp?.title?.slice(0, 30)}...`
								: camp?.title}
						</p>
						<p className="card-text  ">{truncateWord(camp?.excerpt)}</p>
						<p className=" fst-italic">
							<i className="fa fa-users mr-3"></i>
							{(camp?.endorsements?.length) + 1} Supporters
						</p>
						<Link href={`/campaigns/${camp?.slug}`}>
							<button className="btn btn-warning">Read More</button>
						</Link>
					</div>
				</a>
				{/* </Link> */}
			</div>
		</Wrapper>
	);
};

export default CampaignCard;
const Wrapper = styled.div``;
