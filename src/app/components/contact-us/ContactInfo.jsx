import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import IconPhone from "../utils/icons/IconPhone";
import IconEmail from "../utils/icons/IconEmail";
import IconWeb from "../utils/icons/IconWeb";

const ContactInfo = () => {
    return (
        <>
            <div className="flex flex-wrap gap-3 xl:-mr-6">
                <Button
                    as={Link}
                    href="tel:+6591299319"
                    color="default"
                    radius="full"
                    variant="flat"
                    className="bg-light-gray text-medium text-black font-medium px-4 py-[0.7rem] w-auto h-auto"
                >
                    <IconPhone className="w-4 min-w-4 h-4 min-h-4 md:w-5 md:min-w-5 md:h-5 md:min-h-5 invert" />{" "}
                    +65 9129 9319
                </Button>
                <Button
                    as={Link}
                    href="mailto:info@nexaglobalads.com"
                    color="default"
                    radius="full"
                    variant="flat"
                    className="bg-light-gray text-medium text-black font-medium px-4 py-[0.7rem] w-auto h-auto"
                >
                    <IconEmail className="w-4 min-w-4 h-4 min-h-4 md:w-5 md:min-w-5 md:h-5 md:min-h-5 invert" />{" "}
                    info@nexaglobalads.com
                </Button>
                <Button
                    as={Link}
                    href="/"
                    color="default"
                    radius="full"
                    variant="flat"
                    className="bg-light-gray text-medium text-black font-medium px-4 py-[0.7rem] w-auto h-auto"
                >
                    <IconWeb className="w-4 min-w-4 h-4 min-h-4 md:w-5 md:min-w-5 md:h-5 md:min-h-5 invert" />{" "}
                    nexaglobalads.com
                </Button>
            </div>

            <div>
                <div className="mt-8 md:mt-12">
                    <h6 className="font-semibold uppercase">
                        NEXA GLOBAL Co. Ltd.
                    </h6>
                    <p className="text-medium mt-3 2xl:mt-4">
                        26-22, 5th floor, Sanbon-ro 323beon-gil, Gunpo-si,
                        Gyeonggi-do, Republic of Korea
                    </p>
                </div>
                <div className="mt-8 md:mt-12">
                    <h6 className="font-semibold uppercase">
                        Nexa Global <span className="font-body">(</span>ADS
                        <span className="font-body">)</span> Pte. Ltd.
                    </h6>
                    <p className="text-medium mt-3 2xl:mt-4">
                        8 Eu Tong Sen Street, 13-86 The Central, Singapore
                        059818
                    </p>
                </div>
                <div className="mt-8 md:mt-12">
                    <h6 className="font-semibold uppercase">
                        NEXA GLOBAL <span className="font-body">(</span>ADS
                        <span className="font-body">)</span> Private Limited
                    </h6>
                    <p className="text-medium mt-3 2xl:mt-4">
                        45 Basant Lok, 3rd Floor, Vasant Vihar, New Delhi - 110
                        057 INDIA
                    </p>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;
