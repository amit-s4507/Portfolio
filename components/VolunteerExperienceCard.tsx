import React from "react";
import { VolunteerExperienceType } from '../types/sections';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Col,
} from "reactstrap";

import Fade from 'react-reveal/Fade';

const VolunteerExperienceCard = ({ role, company, companylogo, date, desc}: VolunteerExperienceType) => {
    return (
        <Col lg="6">
            <Fade left duration={2000}>
                <Card
                    style={{ flex: 1 }}
                    className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
                >
                    <CardBody style={{ minHeight: '15rem', backgroundColor: '#172b4d', color: 'white' }}>
                        <img
                            src={companylogo}
                            style={{
                                objectFit: "cover",
                                left: 0,
                                right: 0,
                                top: "7rem",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "8rem",
                                height: "8rem",
                                borderRadius: "50%",
                            }}
                            className="shadow mb-3"
                            alt={companylogo}
                        />
                        <CardTitle tag="h4" className="mb-2 text-white">
                            {company}
                        </CardTitle>
                        <CardSubtitle tag="h5" className="mb-2 text-white">
                            {role}
                        </CardSubtitle>
                        <CardSubtitle>{date}</CardSubtitle>
                        {/* <CardText
                            tag="div"
                            className="description my-3 text-left"
                        >
                            {desc}
                            <ul>
                                {descBullets
                                    ? descBullets.map((desc) => {
                                        return <li key={desc}>{desc}</li>;
                                    })
                                    : null}
                            </ul>
                        </CardText> */}
                    </CardBody>
                </Card>
            </Fade>
        </Col>
    );
};

export default VolunteerExperienceCard;