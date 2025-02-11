import React from "react";
import ImpactChart from "./ImpactChart";
import { ImpactPlot, csv, title } from "./IntraDecileImpact";

const description = (
  <p>
    The chart above shows percentage of people in each household wealth decile
    who experience different outcomes. Households are sorted into ten
    equally-populated groups according to their equivalised household net wealth
    (including property and corporate holdings).
  </p>
);

export default function intraWealthDecileImpact(props) {
  const { impact, policyLabel, metadata, mobile, useHoverCard = false } = props;
  const deciles = impact.intra_wealth_decile.deciles;
  const all = impact.intra_wealth_decile.all;
  const decileNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const chart = (
    <ImpactChart
      title={title(policyLabel, all, metadata)}
      description={description}
    >
      <ImpactPlot
        yaxistitle={"Wealth decile"}
        deciles={deciles}
        all={all}
        decileNumbers={decileNumbers}
        policyLabel={policyLabel}
        metadata={metadata}
        mobile={mobile}
        useHoverCard={useHoverCard}
      />
    </ImpactChart>
  );
  return {
    chart: chart,
    csv: () => csv(deciles, all, decileNumbers),
  };
}
