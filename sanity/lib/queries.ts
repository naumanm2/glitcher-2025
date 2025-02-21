import { defineQuery } from "next-sanity";

export const SHOWS_QUERY = defineQuery(`*[_type == "show"]{
    _id, title, subtitle, live, tickets, slug, "mainImageUrl":mainImage.asset->url, content, 
    }`);

export const SHOW_QUERY = defineQuery(`*[_type == "show" && slug.current == $slug][0]{
        _id, title, subtitle, live, tickets, slug, "mainImageUrl":mainImage.asset->url, content, 
        }`);

export const MEMBERS_QUERY = defineQuery(`*[_type == "member"]{
          _id, name, role, "image": image.asset->url, "alt":image.alt, phoneNumber, email
          }`);
