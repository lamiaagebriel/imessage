import PusherServer from "pusher"
import PusherClient from "pusher-js"
import dotenv from "dotenv"
dotenv.config()

if (!process.env.PUSHER_APP_ID) throw Error("PUSHER_APP_ID IS MISSING!")
if (!process.env.NEXT_PUBLIC_PUSHER_APP_KEY)
  throw Error("NEXT_PUBLIC_PUSHER_APP_KEY IS MISSING!")
if (!process.env.PUSHER_APP_SECRET) throw Error("PUSHER_APP_SECRET IS MISSING!")
if (!process.env.PUSHER_APP_CLUSTER)
  throw Error("PUSHER_APP_CLUSTER IS MISSING!")

export const pusherServer = new PusherServer({
  // appId: "1662010",
  // key: "219244c47391d12fe28c",
  // secret: "806be4329afb41a0cfe2",
  // cluster: "eu",

  appId: process.env.PUSHER_APP_ID,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true,
})

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
  {
    // cluster: "eu",
    cluster: process.env.PUSHER_APP_CLUSTER,
  }
)
