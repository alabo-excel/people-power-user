import { UserAtom } from "atoms/UserAtom";
import React, { useState } from "react";
import cookie from "js-cookie";
import { useRecoilValue } from "recoil";
import socketIOClient from "socket.io-client";
import { TOKEN_NAME, WS_URI } from "../utils/constants";

const NoticeList = (props): JSX.Element => {
	const user = useRecoilValue(UserAtom);

	return (
			<div className="bg-white w-72  absolute top-[82px] right-[84px] rounded-xl shadow-xl p-1">
        <ul className="p-2 h-[400px] overflow-auto">
          {props.notification.slice(0, 6).map((notice, i) => (
            <li className="w-[14rem] flex border-b-2 border-zinc-800 mt-2 justify-between" key={i}>
            <img
              src={user?.image}
              alt=""
              className="image rounded-circle border border-3 h-[50px] w-[50px]"
            />
              <div className="w-40 break-words">{notice.message}</div>
              </li>
          ))}
        </ul>
    </div>
	)};

export default NoticeList;
