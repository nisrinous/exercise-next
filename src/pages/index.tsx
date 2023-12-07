import Headline from "@/components/Headline";
import Jumbotron from "@/components/Jumbotron";
import MainCard from "@/components/MainCard";
import RecentNews from "@/components/RecentNews";
import SecondaryCard from "@/components/SecondaryCard";
import SeriesAndFeatured from "@/components/SeriesAndFeatured";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <div className="flex flex-row justify-between gap-5 my-20">
        <MainCard
          title="Luxurious"
          boldTitle="Eyewear"
          desc="See the beauty of exotic world with the luxurious glasses"
          image="/image7.png"
        />

        <MainCard
          title="Comfortable"
          boldTitle="Watches"
          desc="Feels the balancing function and beauty in our wooden watches"
          image="/image8.png"
        />
      </div>
      <Headline title="Monthly Deals" />
      <div className="flex flex-row justify-between gap-10 my-20">
        <SecondaryCard
          image="/image1.png"
          title="Singo Maple"
          disc="20"
          fullprice="1.500.000"
          price="1.264.000"
        />
        <SecondaryCard
          image="/image1.png"
          title="Singo Maple"
          disc="20"
          fullprice="1.500.000"
          price="1.264.000"
        />
        <SecondaryCard
          image="/image2.png"
          title="Way Kambas Mini"
          disc="20"
          fullprice="1.500.000"
          price="1.264.000"
        />
        <SecondaryCard
          image="/image3.png"
          title="Rakai Ebony"
          disc="20"
          fullprice="1.500.000"
          price="1.264.000"
        />
      </div>
      <Headline title="Recent News" />
      <RecentNews />
      <SeriesAndFeatured />
    </div>
  );
}
