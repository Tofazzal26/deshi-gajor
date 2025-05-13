import Image from "next/image";
import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const ourBlog = [
    {
      image: "/blog1.webp",
      title: "Gaza's Children: Caught in Conflict, Desperate for Relief",
      paragraph:
        "The war in the Gaza Strip has taken an unconscionable toll on children. At least 15,600 have been reported killed, with thousands more injured. Nearly every child in Gaza knows what it is to be displaced: Their families have been torn apart, their homes destroyed. No child will emerge from the horrors of bombardment without the imprint of trauma.UNICEF is mobilizing resources to scale up and expand our emergency response. But only with safe, unrestricted access throughout Gaza can humanitarians get relief into children’s hands. The challenges of aid delivery in Gaza are many. The reasons to persist are more.",
      author: "Tofazzal Hossain",
      readMore: "Read More",
      month: "Dec",
      date: "4",
      year: "2024",
    },
    {
      image: "/blog2.webp",
      title: "Voices for Palestine: A Global Stand for Freedom",
      paragraph:
        "In recent years, the plight of the Palestinian people has resonated across the globe, moving hearts beyond borders. From the streets of London and New York to the lanes of Dhaka and Istanbul, people of all backgrounds have united in protest — demanding justice, peace, and freedom for Palestine. These demonstrations are more than symbolic acts. They are powerful statements against oppression, apartheid, and the suffering of innocent civilians, especially children. Social media campaigns, petitions, public rallies, and art activism have amplified the voices of the voiceless, reminding the world that humanity must not remain silent.While governments may hesitate, the people have risen. Flags are waved, slogans are chanted, and candles are lit — all with one message: Palestine must be free. This global solidarity reflects a collective conscience that refuses to ignore injustice, proving once again that when the world stands together, change becomes inevitable.",
      author: "Himanul Islam",
      readMore: "Read More",
      month: "Dec",
      date: "16",
      year: "2024",
    },
    {
      image: "/blog3.jpg",
      title: "A Child in Ruins: The Silent Cry of Gaza",
      paragraph:
        "A small child stands silently in front of the shattered remains of what was once a home. No tears fall, but the pain is clear on their face. There are no schools, no playgrounds — only rubble, dust, and memories of a life that used to be. Gaza has become a city of silence, where broken walls speak louder than words. This child is just one of thousands who have lost their families, their homes, and their childhood to war. This single image says more than a thousand words. War is not just politics — it’s the destruction of dreams, of futures. The world must not look away. We must hear the silent cry and turn it into a voice for change, for peace, and for a future where no child has to stand alone in ruins.",
      author: "Tamim Islam",
      readMore: "Read More",
      month: "Oct",
      date: "24",
      year: "2024",
    },
    {
      image: "/blog4.jpg",
      title: "Holding the Flag of Hope Amidst the Ruins of Gaza",
      paragraph:
        "In the midst of the destruction, a powerful symbol of resistance stands tall – the Palestinian flag. People, undeterred by the rubble around them, hold it high as a testament to their resilience and unwavering spirit. Despite the devastation that surrounds them, their pride in their identity and their desire for freedom remains unbroken. Gaza’s streets, once filled with life, are now empty and shattered. Buildings reduced to dust, homes erased, and families torn apart. Yet, in this broken landscape, the Palestinian flag waves not only as a symbol of national pride but as a beacon of hope for a future that will rise from these ruins.This act of holding the flag is more than just a protest; it is a declaration of endurance. It represents the will to survive, to rebuild, and to ensure that even amidst the darkest times, their voices will be heard. Gaza may be broken, but its spirit is unyielding.",
      author: "Alamin Islam",
      readMore: "Read More",
      month: "May",
      date: "14",
      year: "2024",
    },
    {
      image: "/blog5.webp",
      title: "Bangladesh Stands with Palestine: A Call for Freedom",
      paragraph:
        "In Bangladesh, thousands are taking to the streets, proudly holding the Palestinian flag in a show of solidarity. These protests reflect a deep empathy for Palestine's ongoing struggles, with people demanding an end to violence and the restoration of peace.The flag is not just a symbol; it represents the shared fight for justice and freedom. Bangladesh is making it clear that the struggle for Palestine’s freedom is a global cause—one that transcends borders.Through these acts of peaceful resistance, Bangladesh stands united with Palestine, sending a powerful message that the fight for justice must be heard worldwide.",
      author: "Mirajur Islam",
      readMore: "Read More",
      month: "Feb",
      date: "21",
      year: "2024",
    },
    {
      image: "/blog6.jpg",
      title: "One Voice, One Flag: A Call for Palestine’s Freedom",
      paragraph:
        "Among the crowd, one person stands alone, holding the Palestinian flag high, a symbol of defiance and hope in the face of oppression. Their actions are not just about the flag; they are a call for the freedom and dignity of all Palestinians who are suffering in the face of ongoing violence and injustice.In a sea of voices, this solitary figure speaks volumes, carrying the hopes of an entire nation that yearns for peace and independence. The act of holding the flag represents much more than support—it is a powerful statement that the struggle for Palestine’s freedom is far from over.Even as the world watches in silence, this individual stands firm, sending a message that one voice, one flag, and one act of courage can ignite a global movement for justice. The fight for freedom may begin with one, but it will grow, echoing across the globe.",
      author: "Soleman Islam",
      readMore: "Read More",
      month: "Jul",
      date: "28",
      year: "2024",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="lg:px-0 px-2">
        <div className="grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-7 my-4 md:my-12">
          <div className="lg:col-span-5 lg:order-1 order-2">
            <div className="space-y-4 lg:space-y-8">
              {ourBlog.map((item, idx) => (
                <BlogCard item={item} key={idx} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 lg:order-2 order-1">
            <div className="howCardShadow p-4 lg:p-8">
              <fieldset className="w-full space-y-1 dark:text-gray-800">
                <label htmlFor="Search" className="hidden">
                  Search
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="button"
                      title="search"
                      className="p-1 focus:outline-none focus:ring"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 dark:text-gray-800"
                      >
                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="Search"
                    placeholder="Search..."
                    className=" w-full py-[10px] pl-10 text-sm rounded-sm focus:outline-none bg-[#f3f4f7]"
                  />
                </div>
              </fieldset>
            </div>
            <div className="howCardShadow p-4 lg:p-8 mt-4 lg:mt-8">
              <h2 className="text-lg lg:text-xl">Popular Blogs</h2>
              <div className="mt-2 lg:mt-4 space-y-2">
                <h2 className="text-gray-500 lg:text-base text-sm">
                  Review Writing Tips
                </h2>
                <h2 className="text-gray-500 lg:text-base text-sm">
                  Honest Opinions Matter
                </h2>
                <h2 className="text-gray-500 lg:text-base text-sm">
                  From Frustration to Feedback
                </h2>
                <h2 className="text-gray-500 lg:text-base text-sm">
                  Trust Through Transparency
                </h2>
                <h2 className="text-gray-500 lg:text-base text-sm">
                  Real User Talks
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
