import { createClient } from "contentful";
export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getEntriesBySlug(contentType, slug) {
  const entries = await client.getEntries({
    content_type: contentType,
    "fields.slug": slug,
    limit: 1,
  });
  return entries.items[0];
}

export const getLogoImage = async () => {
  const response = await client.getEntries({
    content_type: "logoImage",
  });

  return response.items;
};

export const getBannerImage = async () => {
  const response = await client.getEntries({
    content_type: "breadcrumbBannerImage",
  });

  return response.items;
};

export const getSliderItems = async () => {
  const response = await client.getEntries({
    content_type: "homeSliderItem",
  });

  return response.items;
};

export const homePageAboutSection = async () => {
  const response = await client.getEntries({
    content_type: "aboutSectionHalfImageHalfContent",
  });

  return response.items;
};

export const homePageProjectSection = async () => {
  const response = await client.getEntries({
    content_type: "homePageProjects",
  });

  return response.items;
};

export const homePageFounderSection = async () => {
  const response = await client.getEntries({
    content_type: "homePageFounders",
  });

  return response.items;
};

export const aboutUsAboutContent = async () => {
  const response = await client.getEntries({
    content_type: "aboutPageAboutUs",
  });

  return response.items;
};

export const aboutUsVideo = async () => {
  const response = await client.getEntries({
    content_type: "aboutUsVideoSection",
  });

  return response.items;
};

export const parentCompaniesItems = async () => {
  const response = await client.getEntries({
    content_type: "parentCompanies",
  });

  return response.items;
};

export const projectItems = async () => {
  const response = await client.getEntries({
    content_type: "projects",
  });

  return response.items;
};

export const getEnquiryPage = async () => {
  const response = await client.getEntries({
    content_type: "enquiryPage",
  });

  return response.items;
};

export const getContactPage = async () => {
  const response = await client.getEntries({
    content_type: "contactPage",
  });

  return response.items;
};

export const getProductPage = async () => {
  const response = await client.getEntries({
    content_type: "productPage",
  });

  return response.items;
};

export const getCareerPage = async () => {
  const response = await client.getEntries({
    content_type: "careerPage",
  });

  return response.items;
};

export const getCareerPosition = async () => {
  const response = await client.getEntries({
    content_type: "careerPosition",
  });

  return response.items;
};
