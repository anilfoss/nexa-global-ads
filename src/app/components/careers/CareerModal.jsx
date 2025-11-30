import {
    Button,
    Chip,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@heroui/react";
import React from "react";
import IconFlagIndia from "../utils/icons/IconFlagIndia";
import IconFlagSouthKorea from "../utils/icons/IconFlagSouthKorea";
import IconFlagSingapore from "../utils/icons/IconFlagSingapore";
import IconSuitcase from "../utils/icons/IconSuitcase";
import parse from "html-react-parser";
import CareerForm from "./CareerForm";

const CareerModal = ({ isOpen, onClose, onOpenChange, job }) => {
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            scrollBehavior="outside"
            data-lenis-prevent={""}
            className="job-modal bg-light-gray text-medium mx-6 max-w-4xl rounded-lg"
            classNames={{
                closeButton: "!bg-transparent",
            }}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalBody className="p-6 md:p-10">
                            <h3>{job.position}</h3>

                            {job?.locations.length > 0 && (
                                <div className="locations-wrapper flex flex-wrap gap-3">
                                    {job?.locations?.map((location, index) => {
                                        return (
                                            <Chip
                                                key={index}
                                                color="default"
                                                startContent={
                                                    location === "India" ? (
                                                        <IconFlagIndia className="w-[18px] h-auto" />
                                                    ) : location ===
                                                      "South Korea" ? (
                                                        <IconFlagSouthKorea className="w-[18px] h-auto" />
                                                    ) : (
                                                        <IconFlagSingapore className="w-[18px] h-auto" />
                                                    )
                                                }
                                                className="chip bg-green-dark bg-opacity-10 px-1.5 py-1.5 h-auto"
                                            >
                                                {location}
                                            </Chip>
                                        );
                                    })}
                                </div>
                            )}

                            {job?.tags.length > 0 && (
                                <div className="flex flex-wrap gap-3">
                                    {job?.tags.map((tag, index) => (
                                        <Chip
                                            key={index}
                                            variant="bordered"
                                            className="px-2 py-0.5 border-1 border-black h-auto"
                                            classNames={{
                                                content:
                                                    "flex items-center gap-2",
                                            }}
                                        >
                                            {tag.includes("Years") && (
                                                <IconSuitcase className="w-[14px] h-auto" />
                                            )}{" "}
                                            {tag}
                                        </Chip>
                                    ))}
                                </div>
                            )}

                            <div className="flex flex-col gap-3 mt-6">
                                {job?.qualifications.length > 0 && (
                                    <div className="mt-3">
                                        <h6 className="font-medium mb-2">
                                            Qualifications{" "}
                                            <span className="font-body">:</span>
                                        </h6>
                                        <ul className="list-disc pl-6 -mb-1">
                                            {job?.qualifications?.map(
                                                (qualification, index) => {
                                                    return (
                                                        <li
                                                            key={index}
                                                            className="mb-1"
                                                        >
                                                            {parse(
                                                                qualification
                                                            )}
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    </div>
                                )}

                                {job?.responsibilities.length > 0 && (
                                    <div className="mt-3">
                                        <h6 className="font-medium mb-2">
                                            Key Responsibilities{" "}
                                            <span className="font-body">:</span>
                                        </h6>
                                        <ul className="list-disc pl-6 -mb-1">
                                            {job?.responsibilities?.map(
                                                (responsibility, index) => {
                                                    return (
                                                        <li
                                                            key={index}
                                                            className="mb-1"
                                                        >
                                                            {parse(
                                                                responsibility
                                                            )}
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center my-6">
                                <div className="grow border-t-1 border-black border-opacity-20"></div>
                                <div className="font-heading text-neutral-500 shrink px-4">
                                    Apply Here
                                </div>
                                <div className="grow border-t-1 border-black border-opacity-20"></div>
                            </div>

                            <CareerForm
                                jobTitle={job?.position}
                                jobLocation={job?.locations}
                                jobTags={job.tags}
                            />
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default CareerModal;
