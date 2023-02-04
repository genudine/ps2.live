import { styled } from "styletron-react";

const BarRoot = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: "0.5rem",
  border: "1px solid #888",
});

const Bar = styled(
  "div",
  ({
    color,
    size,
    borders = false,
  }: {
    color: string;
    size: number;
    borders?: boolean;
  }) => ({
    backgroundColor: color,
    flex: size,
    padding: "0 0.35rem",
    textAlign: "center",
    textShadow: "0 0 0.25rem #000",
  })
);

export const FactionBar = ({
  nc,
  tr,
  vs,
  showNumbers = true,
}: {
  showNumbers?: boolean;
  nc: number;
  tr: number;
  vs: number;
}) => {
  return (
    <BarRoot>
      <Bar size={nc} color="#22f" title="New Conglomerate">
        {nc.toLocaleString()}
      </Bar>
      <Bar size={tr} color="#f11" title="Terran Republic">
        {tr.toLocaleString()}
      </Bar>
      <Bar size={vs} color="#a0d" title="Vanu Sovreignty">
        {vs.toLocaleString()}
      </Bar>
    </BarRoot>
  );
};
