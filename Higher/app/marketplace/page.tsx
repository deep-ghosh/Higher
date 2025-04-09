"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const data = [
  {
    id: 1,
    Title: "title 1",
    Description: "Part content",
    price: 10,
  },
  {
    id: 2,
    Title: "title 2",
    Description: "Part content",
    price: 10,
  },
  {
    id: 3,
    Title: "title 3",
    Description: "Part content",
    price: 10,
  },
  {
    id: 4,
    Title: "title 3",
    Description: "Part content",
    price: 10,
  },
  {
    id: 5,
    Title: "title 3",
    Description: "Part content",
    price: 10,
  },
  {
    id: 6,
    Title: "title 3",
    Description: "Part content",
    price: 10,
  },
  {
    id: 7,
    Title: "title 3",
    Description: "Part content",
    price: 10,
  },
  {
    id: 8,
    Title: "title 3",
    Description: "Part content",
    price: 10,
  },
  {
    id: 9,
    Title: "title 3",
    Description: "Part content",
    price: 10,
  },
  {
    id: 10,
    Title: "title 3",
    Description: "Part content",
    price: 10,
  },
  {
    id: 11,
    Title: "title 3",
    Description: "Part content",
    price: 10,
  },
  {
    id: 12,
    Title: "title 3",
    Description: "Part content",
    price: 0,
  },
];

/* fetch reverse data */

const Creator = [
  {
    id: 1,
    Name: "Krish Gupta",
    ImageLink: "https://oagsprvqqc.ufs.sh/f/UfD2xF6GnX2EdslccVBUZ879gYx1z3d0IabJOQcrH5BtpuTW",
    Quote: "The word shall see pain",
    TotalArticles: 30,
    Rating: 9.9,
  },
  {
    id: 2,
    Name: "Rohit Kundu",
    ImageLink: "https://oagsprvqqc.ufs.sh/f/UfD2xF6GnX2ESBUo4HUg2GnitkYa9ybdIZxgCUjQHvzoBF0e",
    Quote: "Bankai",
    TotalArticles: 10,
    Rating: 8.0,
    price: 0,
  },
  {
    id: 3,
    Name: "Pratham Jaiswal",
    ImageLink: "https://oagsprvqqc.ufs.sh/f/UfD2xF6GnX2EI9FpHcecz612d4SKJMTHQyU370YronPkNapj",
    Quote: "nah I'd win",
    TotalArticles: 20,
    Rating: 9.9,
  },
];

const Page = () => {
  const handelOnClick = () => {
    /* load more logic */
  };
  return (
    <div className="w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <div className="max-w-7xl h-full mx-auto flex flex-col justify-center p-10 text-center">
        <h1 className="text-5xl font-bold">
          <span className="text-white">Discover, Collect, and Trade</span>
          <br />
          <span className="bg-gradient-to-r from-[#bc00ff] to-[#00f3ff] bg-clip-text text-transparent">Unique Digital Content</span>
        </h1>
        <h2 className="text-gray-400 text-xl mt-4">Explore a curated marketplace of premium digital content as NFTs. Own and trade literary works, technical documentation, art, and more.</h2>
        <input type="search" className="mx-auto border-2 border-gray-300 w-2/4 p-3 pr-10 placeholder-gray-200 rounded-md focus:ring-2 focus:ring-yellow-500 mt-6" placeholder="Search Contents..." />
        <div className="flex justify-center mt-4">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 p-5 w-32">Search</Button>
        </div>
        {/* sorter.................... */}
        <div className="flex justify-end gap-2 text-black mt-12">
          <Select>
            <SelectTrigger className="w-[180px]  text-white">
              <SelectValue placeholder="price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Research">Low to high</SelectItem>
              <SelectItem value="Story">High to low</SelectItem>
              <SelectItem value="free">free</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]  text-white">
              <SelectValue placeholder="type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Research">Research</SelectItem>
              <SelectItem value="Story">Story</SelectItem>
              <SelectItem value="Articles">Article</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] text-white">
              <SelectValue placeholder="Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Research">Recently Uploaded</SelectItem>
              <SelectItem value="Story">Oldest</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] text-white">
              <SelectValue placeholder="Popularity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Research">All time popular</SelectItem>
              <SelectItem value="Story">Popular this month</SelectItem>
              <SelectItem value="Articles">Popular today</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Cards........................... */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {data.map((item) => (
            <Card key={item.id} className="bg-white/10 border border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-3xl">{item.Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{item.Description}</CardDescription>
                <div className="flex justify-evenly mt-4">
                  <Badge variant={item.price == 0 ? "secondary" : "default"}>{item.price == 0 ? "free" : "Price: " + item.price}</Badge>
                  {item.price != 0 && <Button className="w-16">Bid</Button>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Load More */}
        <div className="mt-5" onClick={handelOnClick}>
          <Button className="rounded-3xl w-32">Load More</Button>
        </div>
        {/* Creator content card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {Creator.map((creator) => (
            <Card key={creator.id} className="bg-white/10 border border-white/20 p-6 rounded-xl w-full flex flex-col items-center text-center">
              <Image src={creator.ImageLink} alt={creator.Name} height={250} width={250} className="w-50 h-50 rounded-full object-cover border-4 border-amber-300 shadow-lg" />
              <CardContent className="flex flex-col items-center">
                <CardTitle className="text-white text-2xl mt-4">{creator.Name}</CardTitle>
                <CardDescription className="text-gray-300 italic">&quot;{creator.Quote}&quot;</CardDescription>
                <p className="text-gray-400 mt-2">Articles: {creator.TotalArticles}</p>
                <p className="text-yellow-400 font-bold mt-1">Rating: {creator.Rating}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
