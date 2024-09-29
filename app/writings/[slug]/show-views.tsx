import crypto from "crypto";
import { headers } from "next/headers";

import redis from "@/lib/redis";
import { MotionP } from "@/components/motion";

const variants = {
  initial: { filter: "blur(4px)" },
  animate: { filter: "blur(0px)" },
};

async function recordViewCount(slug: string) {
  const headersList = headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");

  const ipSource = forwardedFor || realIp || "localhost";

  const ip = ipSource.split(",")[0].trim();

  const hashedIp = crypto.createHash("sha256").update(ip).digest("hex");

  const viewKey = ["pageviews", "writings", slug].join(":");
  const ipViewKey = ["ip", hashedIp, "views", slug].join(":");

  const hasViewed = await redis.get(ipViewKey);

  let viewCount: number;

  if (!hasViewed) {
    const pipeline = redis.pipeline();
    pipeline.incr(viewKey);
    pipeline.set(ipViewKey, "1");
    await pipeline.exec();

    viewCount = (await redis.get<number>(viewKey)) ?? 0;
    return { message: "View Added", status: 202, views: viewCount };
  } else {
    viewCount = (await redis.get<number>(viewKey)) ?? 0;
    return { message: "Already viewed", status: 200, views: viewCount };
  }
}

export const ShowViews = async ({ slug }: { slug: string }) => {
  const { views } = await recordViewCount(slug);

  return (
    <MotionP variants={variants} initial="initial" animate="animate" transition={{ duration: 0.15 }}>
      {views} {views > 1 ? "views" : "view"}
    </MotionP>
  );
};

export const ShowViewsFallback = () => {
  return <p>100 views</p>;
};
