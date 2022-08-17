import React, { Fragment } from "react";
import FrontLayout from "layout/FrontLayout";
import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import { apolloStrapi } from "apollo";
import gql from "graphql-tag";
import ReactMarkdown from "react-markdown";

// interface IProps {
// 	terms: {
// 		body: string;
// 	};
// }
const TermsAndConditionPage = () => {

	return (
		<Fragment>
			<Head>
				<title>Terms And Conditions</title>
			</Head>
			<FrontLayout>
				<div className="w-full text-center py-4">
					{/* <ReactMarkdown>{terms?.body}</ReactMarkdown> */}
					<iframe width="1500"  height="3350" src="https://docs.google.com/document/d/e/2PACX-1vQ3KxI45yrRH4BLu0C-lKNI2GpcA5eZNPs8xJgWLedeb-iG--OQjww1AiN_F2ef7A/pub?embedded=true"></iframe>
				</div>
			</FrontLayout>
		</Fragment>
	);
};

export default TermsAndConditionPage;
