import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import TopProperties from "@/libs/components/homepage/TopProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import PopularProperties from "@/libs/components/homepage/PopularProperties";

const Home: NextPage = () => {
  return (
    <>
      <Stack>
        <Stack className="home-page">
          <TrendProperties />
          <PopularProperties />
          <Advertisement />
          <TopProperties />
          <TopAgents />
        </Stack>
      </Stack>
    </>
  );
};

export default withLayoutMain(Home);