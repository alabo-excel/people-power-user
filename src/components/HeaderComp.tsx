import { UserAtom } from "atoms/UserAtom";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import UserMenu from "./user-profile/UserMenu";

const Header = (): JSX.Element => {
	const [menu, setMenu] = useState(false);
	const [showNotification, setShowNotification] = useState(false);

	const user = useRecoilValue(UserAtom);
	const { pathname } = useRouter();
	const text = `PEOPLE'S POWER`


	return (
		<header>
			<nav className="navbar">
				<div className="container header m-c">
					<div className="navbar-brand d-flex justify-content-between align-items-center justify-content-md-start min">
						<Link href="/">
							<a className="navbar-brand">
								<img src="/images/logo.svg" alt="" loading="lazy" />
							<h6>{ text }</h6>
							</a>
						</Link>
						<menu
							className="menu btn d-flex d-md-none flex-column"
							onClick={() => setMenu(!menu)}
							id="button"
							role="button"
						>
							<div className="bars"></div>
							<div className="bars"></div>
							<div className="bars"></div>
						</menu>
					</div>
					<ul className=" nav d-none d-md-flex  ">
						{navItems(Boolean(user)).map((nav, i) => (
							<li className="nav-item" key={i}>
								<Link href={`/${nav.link}`}>
									<a
										className={
											pathname == `/${nav.link}`
												? `text-warning fw-bold nav-link`
												: ` nav-link`
										}
									>
										{nav.title}
									</a>
								</Link>
							</li>
						))}

						<li className="nav-item">
							{!user ? (
								<Link href="/auth">
									<button className="btn px-5 join rounded-pill bg-warning text-white font-weight-bold">
										Join
									</button>
								</Link>
							) : (
								<div className='flex'>
									{
									// Work to be done !!
									// When users click they should see updates
								}
									<div
										className='notify-bell pt-3 group cursor-pointer'
										onClick={() => setShowNotification(!showNotification)}
									>
										<div className="w-[7px] h-[7px] absolute right-[189px] bg-red-600 p-1 rounded-full"></div>

										<svg
											width="19"
											height="25"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 448 512"
										>
											<path d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"/></svg>

											{showNotification ? (
												<div className="bg-white w-52  ">
												<ul>
													<li>Great Endorsed your camp</li>
												</ul>
											</div>
											): (
												<div></div>
											)
												
											}
									</div>
									<div className='p-1'></div>
									<UserMenu />
								</div>
							)}
						</li>
					</ul>
				</div>
			</nav>
			{menu && (
				<menu className="animate__animated animate__fadeInDown d-flex flex-column align-items-start d-md-none">
					{navItems(Boolean(user)).map((nav, i) => (
						<div className="text-center py-2" key={i}>
							<Link href={`/${nav.link}`}>
								<a
									className={
										pathname == `/${nav.link}`
											? `text-warning fw-bold nav-link`
											: ` nav-link fw-bold`
									}
								>
									{nav.title}
								</a>
							</Link>
						</div>
					))}

					{!user ? (
						<Link href="/auth">
							<button className="btn px-5 join rounded-pill bg-warning text-white font-weight-bold">
								Join
							</button>
						</Link>
					) : (
						<UserMenu />
					)}
				</menu>
			)}
		</header>
	);
};

export default Header;

const navItems = (loggedIn: boolean) => [
	{ title: "Start Campaign", link: "startcamp" },
	{ title: "My Campaign", link: loggedIn ? "mycamp" : "auth" },
	{ title: "Explore", link: "campaigns" },
];
