import demoGIF from "../images/mboxdomo.gif"
import commandChannel from "../../static/CommandChannel.png"
import slashCommands from "../../static/SlashCommands.png"

export const introData1 = {
  id: "intro1",
  heading: "Your Music, Your Way",
  description:
    "A open source Discord Bot that lets you control your music with buttons and windows, not commands and messages.",
  img: demoGIF,
  imgStart: false,
  imgStyle: {
    width: "100%",
    margin: "auto",
    boxSizing: "border-box",
    border: "3px solid #1f2331",
    borderRadius: "20px",
  },
}

export const introData2 = {
  id: "intro2",
  heading: "Command Channel",
  description:
    "Add a text channel to your server where you can directly control the bot.",
  details: [
    "Search Youtube by sending a message in the channel.",
    "See exactly what song is next in the Queue.",
    "Instantly see the lyrics of the song currently playing.",
    "Control your music with buttons.",
    "Auto updating embed showing where in the timeline of the song you are at.",
  ],
  img: commandChannel,
  imgStart: true,
  imgStyle: {
    width: "100%",
    margin: "auto",
    boxSizing: "border-box",
    border: "3px solid #1f2331",
    borderRadius: "20px",
  },
}

export const introData3 = {
  id: "intro3",
  heading: "Commands",
  description:
    "Used to commands? Don't want to add a new text channel to your server? No problem! Command support are supported using Slash Commands.",
  details: [
    "No more prefixes to remember. Type / to get a list of commands.",
    "/info command shows a auto updating embed, with all the same features from the command channel, including lyrics, queue, and timeline.",
  ],
  img: slashCommands,
  imgStart: false,
  imgStyle: {
    width: "100%",
    margin: "auto",
    boxSizing: "border-box",
    border: "3px solid #1f2331",
    borderRadius: "20px",
  },
}
