import React from 'react';
import FrontLayout from "layout/FrontLayout";
import Head from "next/head";
import { Zoom } from "react-reveal";
import Link from "next/link";
import Indexsvg from "components/icon/Indexsvg";

function careers() {
    return (
        <>
            <Head>
                <title>People's Power || Careers</title>
            </Head>
            <FrontLayout>
                <main>
                    <section className="index">
                        <div className="container m-c _index d-flex py-3 flex-column-reverse flex-md-row align-items-md-center">
                            <div className="_index-txt">
                                <h1 className="  mb-3">
                                    The <span className=" fw-700 fs-48">World’s Technology</span>{" "}
                                    For <span className="fw-700 fs-48">People</span> facing{" "}
                                    <span className="fw-700 fs-48">Criminal</span> &{" "}
                                    <span className="fw-700 fs-48">Social Injustice</span>
                                </h1>
                                <p className="mb-5 fs-16">
                                    There is so much to campaign about: Social policy, Government
                                    decisions, Environment, Empowerment, Crime, Human Right etc. Come work with us!
                                </p>
                                <div
                                    className="btn-holder d-flex flex-wrap"
                                    style={{ gap: "1rem" }}
                                >
                                    <Link href="/">
                                        <a className="btn btn-warning btn-lg rounded-pill px-4 py-2 text-light font-weight-bolder fs-20 ">
                                            View Open Positions
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <Zoom>
                                <div className="_index-img">
                                    <Indexsvg />
                                </div>
                            </Zoom>
                        </div>
                    </section>
                    <section className='lg:w-2/3 my-32 mx-auto text-center'>
                        <div className='text-6xl my-4'>About Us</div>
                        <div className="text-base">
                            <strong>PEOPLE'S POWER</strong> is a web-based technology for those facing Social injustice and Human Right abuse. It is created to inspire people to cause a change in their local communities. The forum enables one or group to launch a campaign for the change they want be it Social policy, Government policies, Environment, Empowerment, Health, Criminal justice and of course Human Right.
                        </div>
                    </section>
                    <section className="my-8">
                        <div className="text-center my-8">
                            <div className="text-6xl my-4 font-bold">Join our team</div>
                            <div className="text-base">If you’re passionate and ready to dive in, we’d love to meet you.</div>
                        </div>
                        <details className="mb-3 lg:w-1/2 mx-auto">
                            <summary className="header summary bg-light rounded-top rounded-0 rounded-3 py-2 align-items-center px-1 d-flex justify-content-between">
                                <div>
                                    <p className="text-secondary fw-bold mb-1 p-0 fs-5">
                                        Content Writer
                                    </p>
                                </div>
                                <i className="fas fa-chevron-down fa-rotate-180 me-1 fa-2x text-secondary"></i>
                            </summary>
                            <div className="content-body animate__animated animate__fadeIn bg-white rounded-bottom py-2">
                                <div className="container">
                                    <div className="w-75">
                                        <h4 className="mb-3 p-0 text-muted fw-bold">
                                            Apply to work with us as content writer.
                                        </h4>
                                        <p className="mb-4">
                                            lorem
                                        </p>
                                        <button className="btn btn-warning text-white px-4 py-2 rounded-pill fw-bold">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <details className="mb-3 lg:w-1/2 mx-auto">
                            <summary className="header summary bg-light rounded-top rounded-0 rounded-3 py-2 align-items-center px-1 d-flex justify-content-between">
                                <div>
                                    <p className="text-secondary fw-bold mb-1 p-0 fs-5">
                                        Journalist
                                    </p>
                                </div>
                                <i className="fas fa-chevron-down fa-rotate-180 me-1 fa-2x text-secondary"></i>
                            </summary>
                            <div className="content-body animate__animated animate__fadeIn bg-white rounded-bottom py-2">
                                <div className="container">
                                    <div className="w-75">
                                        <h4 className="mb-3 p-0 text-muted fw-bold">
                                            Apply to work with us as content writer.
                                        </h4>
                                        <p className="mb-4">
                                            lorem
                                        </p>
                                        <button className="btn btn-warning text-white px-4 py-2 rounded-pill fw-bold">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <details className="mb-3 lg:w-1/2 mx-auto">
                            <summary className="header summary bg-light rounded-top rounded-0 rounded-3 py-2 align-items-center px-1 d-flex justify-content-between">
                                <div>
                                    <p className="text-secondary fw-bold mb-1 p-0 fs-5">
                                        Designer
                                    </p>
                                </div>
                                <i className="fas fa-chevron-down fa-rotate-180 me-1 fa-2x text-secondary"></i>
                            </summary>
                            <div className="content-body animate__animated animate__fadeIn bg-white rounded-bottom py-2">
                                <div className="container">
                                    <div className="w-75">
                                        <h4 className="mb-3 p-0 text-muted fw-bold">
                                            Apply to work with us as content writer.
                                        </h4>
                                        <p className="mb-4">
                                            lorem
                                        </p>
                                        <button className="btn btn-warning text-white px-4 py-2 rounded-pill fw-bold">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <details className="mb-3 lg:w-1/2 mx-auto">
                            <summary className="header summary bg-light rounded-top rounded-0 rounded-3 py-2 align-items-center px-1 d-flex justify-content-between">
                                <div>
                                    <p className="text-secondary fw-bold mb-1 p-0 fs-5">
                                        News Editor
                                    </p>
                                </div>
                                <i className="fas fa-chevron-down fa-rotate-180 me-1 fa-2x text-secondary"></i>
                            </summary>
                            <div className="content-body animate__animated animate__fadeIn bg-white rounded-bottom py-2">
                                <div className="container">
                                    <div className="w-75">
                                        <h4 className="mb-3 p-0 text-muted fw-bold">
                                            Apply to work with us as content writer.
                                        </h4>
                                        <p className="mb-4">
                                            lorem
                                        </p>
                                        <button className="btn btn-warning text-white px-4 py-2 rounded-pill fw-bold">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <details className="mb-3 lg:w-1/2 mx-auto">
                            <summary className="header summary bg-light rounded-top rounded-0 rounded-3 py-2 align-items-center px-1 d-flex justify-content-between">
                                <div>
                                    <p className="text-secondary fw-bold mb-1 p-0 fs-5">
                                        Rep
                                    </p>
                                </div>
                                <i className="fas fa-chevron-down fa-rotate-180 me-1 fa-2x text-secondary"></i>
                            </summary>
                            <div className="content-body animate__animated animate__fadeIn bg-white rounded-bottom py-2">
                                <div className="container">
                                    <div className="w-75">
                                        <h4 className="mb-3 p-0 text-muted fw-bold">
                                            Apply to work with us as content writer.
                                        </h4>
                                        <p className="mb-4">
                                            lorem
                                        </p>
                                        <button className="btn btn-warning text-white px-4 py-2 rounded-pill fw-bold">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <details className="mb-3 lg:w-1/2 mx-auto">
                            <summary className="header summary bg-light rounded-top rounded-0 rounded-3 py-2 align-items-center px-1 d-flex justify-content-between">
                                <div>
                                    <p className="text-secondary fw-bold mb-1 p-0 fs-5">
                                        Rights Advocate
                                    </p>
                                </div>
                                <i className="fas fa-chevron-down fa-rotate-180 me-1 fa-2x text-secondary"></i>
                            </summary>
                            <div className="content-body animate__animated animate__fadeIn bg-white rounded-bottom py-2">
                                <div className="container">
                                    <div className="w-75">
                                        <h4 className="mb-3 p-0 text-muted fw-bold">
                                            Apply to work with us as content writer.
                                        </h4>
                                        <p className="mb-4">
                                            lorem
                                        </p>
                                        <button className="btn btn-warning text-white px-4 py-2 rounded-pill fw-bold">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <details className="mb-3 lg:w-1/2 mx-auto">
                            <summary className="header summary bg-light rounded-top rounded-0 rounded-3 py-2 align-items-center px-1 d-flex justify-content-between">
                                <div>
                                    <p className="text-secondary fw-bold mb-1 p-0 fs-5">
                                        Lawyers
                                    </p>
                                </div>
                                <i className="fas fa-chevron-down fa-rotate-180 me-1 fa-2x text-secondary"></i>
                            </summary>
                            <div className="content-body animate__animated animate__fadeIn bg-white rounded-bottom py-2">
                                <div className="container">
                                    <div className="w-75">
                                        <h4 className="mb-3 p-0 text-muted fw-bold">
                                            Apply to work with us as content writer.
                                        </h4>
                                        <p className="mb-4">
                                            lorem
                                        </p>
                                        <button className="btn btn-warning text-white px-4 py-2 rounded-pill fw-bold">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <details className="mb-3 lg:w-1/2 mx-auto">
                            <summary className="header summary bg-light rounded-top rounded-0 rounded-3 py-2 align-items-center px-1 d-flex justify-content-between">
                                <div>
                                    <p className="text-secondary fw-bold mb-1 p-0 fs-5">
                                        Volunteers
                                    </p>
                                </div>
                                <i className="fas fa-chevron-down fa-rotate-180 me-1 fa-2x text-secondary"></i>
                            </summary>
                            <div className="content-body animate__animated animate__fadeIn bg-white rounded-bottom py-2">
                                <div className="container">
                                    <div className="w-75">
                                        <h4 className="mb-3 p-0 text-muted fw-bold">
                                            Apply to work with us as content writer.
                                        </h4>
                                        <p className="mb-4">
                                            lorem
                                        </p>
                                        <button className="btn btn-warning text-white px-4 py-2 rounded-pill fw-bold">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </section>
                </main>
            </FrontLayout>
        </>
    );
}

export default careers;