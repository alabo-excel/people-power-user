import { gql } from "@apollo/client";

export const GET_CAMPAIGN = gql`
	query ($slug: String) {
		getCampaign(slug: $slug) {
			title
			id
			target
			status
			body
			image
			promoted
			aim
			createdAt
			likes
			slug
			category
			authorName
			authorId
			authorImg
		}
	}
`;

export const GET_CAMPAIGNS = gql`
	{
		getCampaigns {
			id
			excerpt
			title
			body
			slug
			image
			createdAt
			category
			promoted
			endorsements {
				id
			}
			authorName
			authorId
			authorImg
		}
	}
`;

export const GET_ACTIVE_CAMPAIGNS = gql`
	{
		getActiveCampaigns {
			title
			id
			excerpt
			slug
			image
			createdAt
			promoted
			category
			endorsements {
				id
			}
			authorName
			authorId
			authorImg
		}
	}
`;
export const GET_ENDORSEMENTS_BY_CAMPAIGN = gql`
	query ($campaign_id: ID) {
		getEndorsementsByCampaign(campaign_id: $campaign_id) {
			id
			createdAt
			body
			likes
			authorName
			authorId
			authorImg
		}
	}
`;

export const MY_CAMPAIGN = gql`
	{
		myCampaign {
			id
			title
			createdAt
			image
			excerpt
			status
			body
			slug
			promoted
			category
			views
			endorsements {
				__typename
			}
		}
	}
`;

export const GET_CAMPIGN_NOTICE = gql`
	{
		getCampaignNotice {
			action
			createdAt
			author {
				id
				image
				firstName
			}
			data {
				title
				slug
			}
		}
	}
`;
