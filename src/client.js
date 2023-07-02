import { SanityClient, createClient } from "@sanity/client";
// import imageUrlBuilder as a default import
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "bsy24y5i",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-22",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
