import { client } from "./client";

export const getSliderItems = async () => {
  const sliderItems = await client.getEntries({
    content_type: "homeSliderItem",
  });
  console.log(sliderItems);
  return sliderItems.items;
};
