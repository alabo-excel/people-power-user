import FrontLayout from "layout/FrontLayout";
import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";
import { GetStaticProps, NextPage } from "next";
import { apolloStrapi } from "apollo";
import { gql } from "@apollo/client";
import ReactMarkdown from "react-markdown";

const PrivacyPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Privacy</title>
			</Head>
			<FrontLayout>
				<Wrapper className="privacy-policy py-5">
					<div className="container">
						<iframe width="1500" height="3350" src="https://docs.google.com/document/d/e/2PACX-1vR7lKCvGByBvSW90xpSgNpcP-Lwn9vFctx7jWTTb2Z4qn6QsiGB_Pz85kovCZQ-Lw/pub?embedded=true"></iframe>
					</div>
				</Wrapper>
			</FrontLayout>
		</Fragment>
	);
};

export default PrivacyPage;

const Wrapper = styled.div``;
