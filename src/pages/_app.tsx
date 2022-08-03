import "styles/index.scss";
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-mde/lib/styles/css/react-mde-all.css";

import "styles/style.scss";
import Head from "next/head";
import Router from "next/router";
import Nprogress from "nprogress";
import axios from "axios";
import { AppProps } from "next/app";
import { RecoilRoot, useRecoilState } from "recoil";
import React, { useEffect } from "react";
import { ApolloProvider, gql, useLazyQuery } from "@apollo/client";
import { useApollo } from "apollo";
import { Fragment } from "react";
import { UserAtom } from "atoms/UserAtom";
import { HTTP_URI, TOKEN_NAME, WS_URI } from "utils/constants";
import cookie from "js-cookie";
import { ThemeProvider } from "styled-components";
import { theme } from "utils/theme";
import socketIOClient from "socket.io-client";
import { getIP } from "utils";
import Cookies from "js-cookie";
import Script from 'next/script'

if (process.browser) {
	require("bootstrap/dist/js/bootstrap");
}
const token = cookie.get(TOKEN_NAME);

export const io = socketIOClient(WS_URI as string, {
	extraHeaders: { Authorization: token || "" },
});

axios.defaults.baseURL = HTTP_URI;
axios.defaults.withCredentials = true;
axios.defaults.headers.common["authorization"] = "Bearer " + token;

Router.events.on("routeChangeStart", () => {
	Nprogress.start();
});
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());

function MyApp({ Component, pageProps }: any): JSX.Element {
	const client = useApollo(pageProps.apollo);

	return (
		<Fragment>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				></meta>
				<meta
					name="keywords"
					content="human right, activist, campaign, Nigeria"
				/>
				<title>{`PEOPLE'S POWER`}</title>
				<meta
					name="description"
					content="Evans Dule’s Foundation (PEOPLE'S POWER), is a non-governmental organization formed in 2015 with the sole aim of addressing the causes of criminality and advancing the cause of human rights, the Foundation has between June 2017 till date defended over 500 Fundamental Right Matters of people whose fundamental right has been."
				/>
				<link rel="stylesheet" href="/nprogress.css" />
				<Script src="../scripts/wisernotify.js"></Script>
			</Head>
			<ApolloProvider client={client}>
				<ThemeProvider theme={theme}>
					<RecoilRoot>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</RecoilRoot>
				</ThemeProvider>
			</ApolloProvider>
		</Fragment>
	);
}

export default MyApp;

const Environments = gql`
	{
		getEnvs {
			name
			value
		}
	}
`;
const Layout = ({ children }: { children: React.ReactChild }) => {
	const [user, setUser] = useRecoilState(UserAtom);
	const [getEnvironments] = useLazyQuery(Environments, {
		onCompleted: (d) => {
			const data = d.getEnvs;
			data.forEach((d: { name: string; value: string }) =>
				Cookies.set(d.name, d.value),
			);
		},
		onError: (er) => console.log(er),
	});

	useEffect(() => {
		getEnvironments();
		async function getUser() {
			try {
				const { data } = await axios.get("/auth/me", { withCredentials: true });
				cookie.set("user_id", data?.id);

				setUser(data);
			} catch (error) {
				console.log(error);
				cookie.remove(TOKEN_NAME);
				cookie.remove("user_id");
			}
		}
		if (process.browser) {
			if (!user) getUser();
		}
	}, []);

	useEffect(() => {
		async function setIp() {
			const ip = await getIP();
			cookie.set("ed_LOCAL", ip as string);
		}
		setIp();
	}, []);
	return <Fragment>{children}</Fragment>;
};
