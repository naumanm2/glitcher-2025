import { defineQuery } from "next-sanity";

export const ACTIVESHOWS_QUERY = defineQuery(`*[_type == "show" && live==true]{
    _id, title, subtitle, tickets, slug, mainImage, "alt":mainImage.alt, content, 
    }`);

export const INACTIVESHOWS_QUERY = defineQuery(`*[_type == "show" && live==false]{
  _id, title, subtitle, tickets, slug, mainImage, "alt":mainImage.alt, content, 
  }`);

export const SHOW_QUERY = defineQuery(`*[_type == "show" && slug.current == $slug][0]{
    _id, title, subtitle, live, tickets, slug, mainImage, "alt":mainImage.alt, content, 
    }`);

export const MEMBERS_QUERY = defineQuery(`*[_type == "member" ]{
    _id, name, role, image, "alt":image.alt, phoneNumber, email
    }`);

export const SPONSORS_QUERY = defineQuery(`*[_type == "general"][0]{
    sponsors
    }`);

export const GENERAL_QUERY = defineQuery(`*[ _type == "general"][0]{
    title, subtitle, mainImage, mainLogo, icon, introShort, introLong, email, socials, phone
    }`);
