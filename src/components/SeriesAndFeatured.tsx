import BeigeCard from "./BeigeCard";
import Headline from "./Headline";

export default function SeriesAndFeatured(): JSX.Element {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <Headline title="Maple Series"></Headline>
        <div className="flex flex-col gap-8">
          <BeigeCard
            title="Way Kambas Maple"
            price="1.280.000"
            image="/image15.png"
          />
          <BeigeCard
            title="Way Kambas Maple"
            price="1.280.000"
            image="/image21.png"
          />
          <BeigeCard
            title="Way Kambas Maple"
            price="1.280.000"
            image="/image16.png"
          />
        </div>
      </div>
      <div>
        <Headline title="Ebony Series"></Headline>
        <div className="flex flex-col gap-8">
          <BeigeCard
            title="Way Kambas Maple"
            price="1.280.000"
            image="/image20.png"
          />
          <BeigeCard
            title="Way Kambas Maple"
            price="1.280.000"
            image="/image22.png"
          />
          <BeigeCard
            title="Way Kambas Maple"
            price="1.280.000"
            image="/image23.png"
          />
        </div>
      </div>
      <div>
        <Headline title="Featured"></Headline>
        <div className="flex flex-col gap-8">
          <BeigeCard
            title="Way Kambas Maple"
            price="1.280.000"
            image="/image17.png"
          />
          <BeigeCard
            title="Way Kambas Maple"
            price="1.280.000"
            image="/image18.png"
          />
          <BeigeCard
            title="Way Kambas Maple"
            price="1.280.000"
            image="/image19.png"
          />
        </div>
      </div>
    </div>
  );
}
