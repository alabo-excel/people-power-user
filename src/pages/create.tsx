import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { UserAtom } from "atoms/UserAtom";
import { useRecoilValue } from "recoil";
import { HTTP_URI } from "utils/constants";
import FrontLayout from "layout/FrontLayout";
import { Loader } from "rsuite";

function create() {
    const router = useRouter();
    const user = useRecoilValue(UserAtom);
    const [orgName, setOrgName] = useState('')
    const [orgEmail, setOrgEmail] = useState('')
    const [orgPhone, setOrgPhone] = useState('')
    const [orgDes, setOrgDes] = useState('')
    const[loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const { data } = await axios({
                method: 'post',
                url: HTTP_URI + '/orgs',
                data: {
                    name: orgName,
                    email: orgEmail,
                    phone: orgPhone,
                    description: orgDes
                }
            });
            console.log(data)
            setLoading(false);
            router.push(`/user?page=${user.id}`);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    return (
        <FrontLayout showFooter={false}>
            <div className="lg:w-2/3 mx-auto text-center pt-10">
                <div className='text-3xl font-black my-8'>Create a New Organization</div>
                <div>
                    <div className="my-2">
                        <input type="text" required className="p-3 w-full" placeholder="Enter Organizations Name" onChange={(e) => setOrgName(e.target.value)} />
                    </div>
                    <div className="my-2">
                        <input type="email" required className="p-3 w-full" placeholder="Enter Organizations Email" onChange={(e) => setOrgEmail(e.target.value)} />
                    </div>
                    <div className="my-2">
                        <input type="number" required className="p-3 w-full" placeholder="Enter Organizations Phone Number" onChange={(e) => setOrgPhone(e.target.value)} />
                    </div>
                    <div className="my-2">
                        <textarea required className="h-20 w-full" placeholder="Enter a Short Description" onChange={(e) => setOrgDes(e.target.value)} ></textarea>
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="p-2 btn btn-warning w-32">{loading ? <Loader content="Loading...." /> : "Create"}
                        </button>
                    </div>
                </div>
            </div>
        </FrontLayout>
    );
}

export default create;