import React from "react";
import { useTranslation } from "react-i18next";
import OurTeam from "../components/OurTeam";

const OurTeamPage = () => {
  const { t, i18 } = useTranslation();
  const ourTeamArr = [
    {
      image:
        "https://otaru.qodeinteractive.com/wp-content/uploads/2022/06/team-image-1.jpg",
      name: "Edmond Smith",
      job: `${t("our-team.1")}`,
    },
    {
      image:
        "https://otaru.qodeinteractive.com/wp-content/uploads/2022/06/team-image-2.jpg",
      name: "Ingrid Vulk",
      job: `${t("our-team.2")}`,
    },
    {
      image:
        "https://otaru.qodeinteractive.com/wp-content/uploads/2022/06/team-image-3.jpg",
      name: "Myles Runte",
      job: `${t("our-team.3")}`,
    },
    {
      image:
        "https://otaru.qodeinteractive.com/wp-content/uploads/2022/06/team-image-4.jpg",
      name: "Katie Laworth",
      job: `${t("our-team.4")}`,
    },
    {
      image:
        "https://otaru.qodeinteractive.com/wp-content/uploads/2022/06/team-image-5.jpg",
      name: "Mari Adams",
      job: `${t("our-team.5")}`,
    },
    {
      image:
        "https://otaru.qodeinteractive.com/wp-content/uploads/2022/06/team-image-6.jpg",
      name: "Ron Bradley",
      job: `${t("our-team.6")}`,
    },
  ];
  return (
    <div className="our-team-page">
      <h2>{t("our-team.7")}</h2>
      <div className="our-team">
        {ourTeamArr?.map((item) => {
          return <OurTeam props={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default OurTeamPage;
